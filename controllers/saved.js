const { request, response } = require("express");
const SavedAllDTO = require("../DTO/saved");
const Saved = require("../models/Saved");

const newSaved = async ( req = request, res = response ) => {

    const { savedId, type, urlImage } = req.body;

    const saved = new Saved({
        user_id: req.id,
        savedId,
        type,
        urlImage
    })

    await saved.save();

    return res.status(201).json( saved );
}

const getSavedForUser = async ( req = request, res = response ) => {
    let saved = await Saved.findAll({
        where: {
            user_id: req.id
        }
    })

    saved = saved.map( data => new SavedAllDTO( data ) )

    return res.status(200).json(saved);
}

const deleteSavedForUser = async ( req = request, res = response ) => {
    
    const { idMedia } = req.params;

    await Saved.destroy({
        where: {
            savedId: idMedia,
            user_id: req.id
        }
    })

    return res.status(200).json({
        msg: "ELIMINADO"
    })
}

module.exports = {
    newSaved,
    getSavedForUser,
    deleteSavedForUser
}