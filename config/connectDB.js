const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MDB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Connected to MongoDB');
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
