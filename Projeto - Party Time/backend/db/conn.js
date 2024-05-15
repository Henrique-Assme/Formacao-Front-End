const mongoose = require("mongoose");

const password = "DbnvajEeGcVnVKl7";

async function main() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      `mongodb+srv://heniassme:${password}@cluster0.v7fo71o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Conectado ao banco");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
