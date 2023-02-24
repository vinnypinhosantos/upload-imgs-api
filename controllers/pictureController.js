const Picture = require("../models/Picture.js")

const fs = require("fs")

exports.create = async (req, res) => {
    try {
        // No body da requisição é recuperado o nome e o arquivo passado
        const {name} = req.body
        const file = req.file

        // Objeto picture com as informações que serão salvas no banco. 
        const picture = new Picture({
            name,
            src: file.path,
        })

        // O método save é próprio do mongoose para salvar no banco de dados
        await picture.save()

        res.json({ picture, msg: "Imagem salva com sucesso!"})
    } catch {
        res.status(500).json({message: "Erro ao salvar imagem."})
    }
}

exports.findAll = async (req, res) => {
    try {
        // O método find é próprio do mongoose e retorna todos os itens salvos no banco. Usa o Picture definido no modelo.
        const pictures = await Picture.find()
        res.json(pictures)

    } catch (error) {
        res.status(500).json({message: "Erro ao buscar imagens."})
    }
}

exports.remove = async (req, res) => {
    try {
        // O método findById é próprio do mongoose e retorna um item do banco a partir de seu ID
        const picture = await Picture.findById(req.params.id)
        
        // Verifica se a imagem está realmente salva e foi encontrada antes de remover
        if (!picture) {
            return res.status(404).json({message: "Imagem não encontrada"})
        }

        // Remove do servidor
        fs.unlinkSync(picture.src)

        // Remove do banco
        await picture.remove()

        res.json({ message: "Imagem removida com sucesso"})
    } catch (error) {
        res.status(500).json({message: "Erro ao excluir imagem."})
    }
}