const { auth, initializeApp } = require('firebase-admin');

const createNewUser = async (req, res) => {
  auth()
    .signinwithemail.createUser({
      email: req.body.email,
      emailVerified: false,
      // phoneNumber: '+11234567890',
      password: req.body.password,
      displayName: req.body.userName,
      // photoURL: 'http://www.example.com/12345678/photo.png',
      disabled: false,
    })
    .then(async (userRecord) => {
      const token = await auth().createCustomToken(userRecord.uid);
      res.json({ user: userRecord, token: token });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message }).send();
    });
};

const loginUser = async (req, res) => {
  console.log(req.body);
  return;
  auth()
    .createSessionCookie()
    .createUser({
      email: req.body.email,
      emailVerified: false,
      // phoneNumber: '+11234567890',
      password: req.body.password,
      displayName: req.body.userName,
      // photoURL: 'http://www.example.com/12345678/photo.png',
      disabled: false,
    })
    .then(async (userRecord) => {
      const token = await auth().createCustomToken(userRecord.uid);
      res.json({ user: userRecord, token: token });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message }).send();
    });
};

module.exports = { createNewUser, loginUser };
