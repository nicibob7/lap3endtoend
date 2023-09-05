
const Film = require("../models/Film");

async function index(req, res) {
    try {
        const films = await Film.getAll();
        res.status(200).json(films);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
}

async function create(req, res) {
    console.log("create request: ",req);
    try {
        const { topic, content } = req.body;
        const user_id = decoded.id;
        const username = decoded.username;
        const data = { topic, content, username, user_id };
        const film = await Film.create(data);
        res.status(200).json({ film: film });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function show (req, res) {
    try {
        const id = parseInt(req.params.id);
        const film = await Film.getOneById(id);
        res.status(200).json(film);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

async function getTop (req, res) {
    try {
        const book = await Film.getTop();
        res.status(200).json(film);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

async function update(req, res) {
 
    try {
        const id = parseInt(req.params.id);
        const film = await Film.getOneById(id);
        const data = req.body;
        const result = await film.update(data);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({"error": err.message}) // bad request status code
    }
}

async function destroy (req, res) {
    
    try {
        const id = parseInt(req.params.id);
        const film = await Film.getOneById(id);
        const result = await film.destroy();
        res.json(result);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

module.exports = {
    index,
    create,
    show,
    getTop,
    destroy,
    update
}