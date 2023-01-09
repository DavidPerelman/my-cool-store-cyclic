const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

const connectDB = require('./config/connectDB');

dotenv.config();

connectDB();
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

// import service account file (helps to know the firebase project details)
const serviceAccount = require('./serviceAccountKey.json');

// Intialize the firebase-admin project/account
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://react-auth-40b24-default-rtdb.firebaseio.com',
});

// Routers
const authRouter = require('./routers/authRouter');
app.use('/api/auth', authRouter);

const categoriesRouter = require('./routers/categoriesRouter');
app.use('/api/categories', categoriesRouter);

const productsRouter = require('./routers/productsRouter');
app.use('/api/products', productsRouter);

app.get('/api', (req, res) => {
  const responseData = {
    message: 'Hello, GFG Learner',
    articleData: {
      articleName: 'How to send JSON response from NodeJS',
      category: 'NodeJS',
      status: 'published',
    },
    endingMessage: 'Visit Geeksforgeeks.org for more',
  };

  const jsonContent = JSON.stringify(responseData);
  res.send(jsonContent);
});

app.use(express.static(path.join(__dirname, './clinet/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './clinet/build/index.html'));
});

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
