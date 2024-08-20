
const urls = require('../model/urls');
const {shortenUrl} = require('../utils/shortenHelper');
exports.showPage = (req, res)=>{
    return res.render('home');
}

exports.handleShortenRequest = (req,res) => {
    const { url } = req.body;
    
    const shortenedUrl = shortenUrl(url); 
    
    urls.create({...shortenedUrl, ...req.body}).then(()=>{
        console.log(data);
        return res.json(data);
    }).catch(error => {
        console.log(error);
        return res.send("Some error has occured " + error);
    });    
}