const connectDB = require('./mongodb/connect');
const User = require("./mongodb/models/user");

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const MONGODB_URL = "mongodb+srv://izx12:faithlehane@cluster0.yc42gjo.mongodb.net/?retryWrites=true&w=majority"

const startServer = () => {

    try {
        connectDB(MONGODB_URL);

        app.post('/signup', async (req, res) => {
            try {
                const { email, firstName, lastName, userName, password, confirmPassword } = req.body;

                if(password != confirmPassword){
                    res.status(400).send("password_error");
                }
                else{

                
                    const newUser = new User({ email, firstName, lastName, userName, password, confirmPassword });

                    await newUser.save();

                    res.status(200).send("user_saved");
                }

            } catch (error) {
                res.status(500).send(error.message);
            }
        });

        app.post('/signin', async (req, res) => {
           
            try {

              const { email, password } = req.body;

              const user = await User.findOne({ email });
          
              if (!user) {

                return res.status(400).send('user_does_not_exist');
              }
          
              var passwordMatch = true;

              if(password.trim() != user.password.trim())
                passwordMatch = false;
          
              if (passwordMatch) {

                res.cookie('authenticated', 'true', { httpOnly: true });

                return res.status(200).send('correct_credentials');
              } else {

                return res.status(400).send('password_incorrect');
              }
          
            } catch (error) {
              res.status(500).send(error.message);
            }
          });

        app.listen(8080, () => console.log("Server running at http://localhost:8080"));

    } catch (error) {
        console.log(error);
    }
}

startServer();
