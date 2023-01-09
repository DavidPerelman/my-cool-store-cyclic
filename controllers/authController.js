const { auth, initializeApp } = require('firebase-admin');

const createNewUser = async (req, res) => {
  console.log('createNewUser');
  console.log(auth());
};

module.exports = { createNewUser };
