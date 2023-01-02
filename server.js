const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

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

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
