const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5deeqba.mongodb.net/?retryWrites=true&w=majority`)

    console.log("Banco conectado com sucesso!")
}

main().catch((err) => console.log(err))

module.exports = main