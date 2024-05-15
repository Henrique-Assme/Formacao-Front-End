const PartyModel = require("../models/Party");

const checkPartyBudget = (budget, services) => {
  const priceSum = services.reduce((sum, service) => sum + service.price, 0);
  if (priceSum > budget) {
    return false;
  }
  return true;
};

const getFromId = async (req, res) => {
  const id = req.params.id;
  if (id.length != 24) {
    res.status(400).json({ msg: "Formato do ID errado" });
    return;
  }
  const party = await PartyModel.findById(id);
  if (!party) {
    res.status(404).json({ msg: "Serviço não encontrado" });
    return;
  }
  return party;
};

const partyController = {
  create: async (req, res) => {
    try {
      const party = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
        image: req.body.image,
        services: req.body.services,
      };

      if (party.services && !checkPartyBudget(party.budget, party.services)) {
        res.status(406).json({ msg: "Orçamento insuficiente" });
        return;
      }

      const response = await PartyModel.create(party);
      res.status(201).json({ response, msg: "Festa criada com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const parties = await PartyModel.find();
      console.log("Get all parties done");
      res.json(parties);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const party = await getFromId(req, res);
      res.json(party);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const party = await getFromId(req, res);
      const deletedParty = await PartyModel.findByIdAndDelete(party._id);
      res.status(200).json({ msg: "Festa excluída com sucesso" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      if (id.length != 24) {
        res.status(400).json({ msg: "Formato do ID errado" });
      }

      const party = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
        image: req.body.image,
        services: req.body.services,
      };

      if (party.services && !checkPartyBudget(party.budget, party.services)) {
        res.status(406).json({ msg: "Orçamento insuficiente" });
      }

      const updatedParty = await PartyModel.findByIdAndUpdate(id, party);
      if (!updatedParty) {
        res.status(404).json({ msg: "Festa não encontrada " });
      }
      res.status(200).json({ party, msg: "Festa atualizada " });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = partyController;
