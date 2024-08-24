const redis = require("redis");
// redis port from env
const redisPort = process.env.REDIS_PORT;

// redis client
const redisClient = redis.createClient(redisPort
    
);

(async () => {
    await redisClient.connect();
})();


redisClient.on("error", (err) => {
    console.error("Redis error:", err);
});


exports.setCache = (key, value) => {
    return redisClient.set(key, value, {EX:86400}, function (err, reply) {
        if (err) {
            console.error('Error setting key:', err);
        } else {
            console.log('Key set with TTL:', reply);
        }
    });
}

exports.fetchUrl = (url) => {
    return redisClient.get(url);
}
