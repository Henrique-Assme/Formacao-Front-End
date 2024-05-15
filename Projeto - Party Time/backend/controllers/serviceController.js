const { Service: ServiceModel } = require("../models/Service");

const getFromId = async (req, res) => {
  const id = req.params.id;
  if (id.length != 24) {
    res.status(400).json({ msg: "Formato do ID errado" });
    return;
  }
  const service = await ServiceModel.findById(id);
  if (!service) {
    res.status(404).json({ msg: "Serviço não encontrado" });
    return;
  }
  return service;
};

const serviceController = {
  create: async (req, res) => {
    try {
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };

      const response = await ServiceModel.create(service);

      res.status(201).json({ response, msg: "Serviço criado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const service = await ServiceModel.find();
      console.log("Get all services done")
      res.json(service);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const service = await getFromId(req, res);
      res.json(service);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const service = await getFromId(req, res);
      const deletedService = await ServiceModel.findByIdAndDelete(service._id);
      res.status(200).json({ msg: "Serviço excluído com sucesso" });
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

      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };
      const updatedService = await ServiceModel.findByIdAndUpdate(id, service);
      if (!updatedService) {
        res.status(404).json({ msg: "Serviço não encontrado" });
      }

      res.status(200).json({
        service,
        msg: "Serviço atualizado com sucesso",
      });
    } catch (error) {}
  },
};

module.exports = serviceController;
