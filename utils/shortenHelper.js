const crypto = require('crypto');
const base62x = require('base62x');
exports.shortenUrl = (url) => {
    // convert the url to md5 hash
    const hashedUrl = crypto.createHash('md5').update(url).digest('hex');
    // now convert it to base62
    const shortnedUrl = base62x.encode(hashedUrl);

    return { hashedUrl, shortnedUrl };
}