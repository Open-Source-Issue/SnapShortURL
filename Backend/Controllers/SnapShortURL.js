const shortid = require('shortid');
const URL = require('../Models/SnapShortURL.models.js');

async function handleShortURLGenrated(req, res) {

    const shortID = shortid();

    const body = req.body;
    
    if (!body.URL) return res.status(400).json({ error: 'Url is required..' })
    
    await URL.create({
        shortID: shortID,
        redirectURL: body.URL,
        VisitedHistory: []
    })

    return res.json({ id: shortID })
}

module.exports = { handleShortURLGenrated };