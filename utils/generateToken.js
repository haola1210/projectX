const jwt = require('jsonwebtoken');
const generateToken = (payload, secret, options) => new Promise((resolve, reject) => {
    jwt.sign(payload, secret, options, function(err, token) {
        if(err) return reject(err);
        if(token) return resolve(token);
    });
})

module.exports = generateToken;