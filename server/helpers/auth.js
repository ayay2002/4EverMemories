// const bcrypt = require('bcrypt');

// const hashPassword = (password) => {
//     return new Promise((resolve, reject) => {
//         bcrypt.genSalt(10, (err, salt) => {
//             if(err){
//             reject(err);
//             }
//             bcrypt.hash(password, salt, (err, hash) => {
//                 if(err) {
//                     reject(err);
//                 }
//                 resolve(hash);
//             })
//         })
//     })
// }

// const comparePassword = (password, hashed) => {
//     return bcrypt.compare(password, hashed)
// }

// module.exports = {
//     hashPassword,
//     comparePassword
// }

const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};