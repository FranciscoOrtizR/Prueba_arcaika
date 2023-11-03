const { response, request} = require ('express');

const reelsGet = (req = request, res = response) => {

    const {q, nombre, apikey} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    });
}

const reelsPost = (req, res = response) => {
    const {nombre, edad} = req.body;

    res.json({
        msg: 'Post API - controlador',
        nombre,
        edad,
    });
}

const reelsPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
}

const reelsPatch = (req, res = response) => {
    res.json({
        msg: 'Patch API - controlador',
    });
}

const reelsDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API - controlador',
    });
}

module.exports = {
    reelsGet,
    reelsPatch,
    reelsPost,
    reelsPut,
    reelsDelete
}