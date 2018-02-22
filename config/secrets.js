module.exports = {

  cryptos: {
    algorithm: 'aes256',
    key: process.env.CRYPTO_KEY || 'Your crypto key goes here'
  },

  sessionSecret: process.env.SESSION_SECRET || 'Your session secret goes here',
    
  idcshost: "https://idcs-0c85cc563ce74338a8a0f6a6a2ed5bbd.identity.oraclecloud.com",
    
  idcsport: "443",

  idcs: {
    discoveryURL: 'https://idcs-0c85cc563ce74338a8a0f6a6a2ed5bbd.identity.oraclecloud.com',
    clientID: 'de3895e97c6a40769f83b14410f84e5a',
    clientSecret: '5d56693b-8324-459b-b392-93f3578083f1',
    callbackURL: 'http://oracle.demo.com:9088/api/login/callback',
   	profileURL: 'https://idcs-0c85cc563ce74338a8a0f6a6a2ed5bbd.identity.oraclecloud.com/admin/v1/Me',
    passReqToCallback: true
  },
    
  idcsanon: {
    tokenURL: 'https://idcs-0c85cc563ce74338a8a0f6a6a2ed5bbd.identity.oraclecloud.com/oauth2/v1/token',
    clientID: 'de3895e97c6a40769f83b14410f84e5a',
    clientSecret: '5d56693b-8324-459b-b392-93f3578083f1',
    scope: 'urn:opc:idm:__myscopes__',
    grant_type: 'client_credentials'
  }
};
