
const urls = require('../model/urls');
const { shortenUrl } = require('../utils/shortenHelper');
const { setCache } = require('../cache/cacheHelper');
exports.showPage = (req, res) => {
    let data1 = { url: "undefined" }
    let data2 = { data: "Here comes the response from the server" }
    return res.render('home', { data1, data2 });
}

exports.handleShortenRequest = (req, res) => {
    const { url } = req.body;

    const shortenedUrl = shortenUrl(url);

    urls.findOne({url}).then(data => {
        if(data === null){
            urls.create({ ...shortenedUrl, ...req.body }).then((details) => {
                // return res.json(details);
                setCache(details.shortnedUrl, JSON.stringify(details)).then(() => { 
                    console.log("Cached The Data");
                }).catch(error => {
                    console.log(error);
                });
                return res.render('home', { data1: { url }, data2: details });
                
            }).catch(error => {
                console.log(error);
                return res.send("Some error has occured " + error);
            });
        }
        
        else{
            // after long time we need to set it as cache 
            setCache(data.shortnedUrl, JSON.stringify(data)).then(() => { 
                console.log("Cached The Data");
            }).catch(error => {
                console.log(error);
            });
            return res.render('home', { data1: { url }, data2: data });
        }
    })

    
}

exports.handleRedirect = (req, res) => {
    const { id } = req.params;

    urls.findOne({shortnedUrl: id}).then(data => {
        // after long time we need to set it as cache 
        setCache(data.shortnedUrl, JSON.stringify(data)).then(() => { 
            console.log("Cached The Data");
        }).catch(error => {
            console.log(error);
        });
        return res.redirect(data.url);
    })
    .catch(error => {
        return res.send("Some error has occured " + error);
    })
}


