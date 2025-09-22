const Firebase = require('firebase-admin');

const serviceAccount = require('../drive-8ef11-firebase-adminsdk-fbsvc-dffb249edc.json');

const firebase = Firebase.initializeApp({
  credential: Firebase.credential.cert(serviceAccount),
  storageBucket: "drive-8ef11.firebasestorage.app"
});

module.exports = Firebase;