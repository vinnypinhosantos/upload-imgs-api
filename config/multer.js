const multer = require("multer")

const path = require("path")

const storage = multer.diskStorage({
    // definindo o destino como a pasta "uploads/", ela será nosso "servidor"
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    // definindo o nome do arquivo que será salva com o milissegundo exato 
    // e sua extensão obtida a partir do pacote path
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage })

module.exports = upload