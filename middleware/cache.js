const { fetchUrl } = require('../cache/cacheHelper');
exports.checkCache = (req, res, next) => {
    fetchUrl(req.params.id).then((data) => {
        console.log(data, typeof(data));
        
        if (data === null) {
            next();
        }
        else {
            data = JSON.parse(data);
            console.log("fetched from cache");
            return res.redirect(data.url);
        }
        //return res.render('home', { data1: { url: data.url }, data2: data })
    });
}
