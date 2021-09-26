const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const authHeader = req.headers['auth_token'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' });
    
  jwt.verify(token, process.env.TOKEN_SECRET, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
    next();
  });
}

module.exports = verifyToken;