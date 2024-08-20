const { fetchUrl } = require('../cache/cacheHelper');
exports.checkCache = (req, res, next) => {
    fetchUrl(req.params.id).then((data)=>{
        if(data === null){
            next();
        }
        data = JSON.parse(data);
        return res.render('home', { data1: { url: data.url }, data2: data })
    });
}