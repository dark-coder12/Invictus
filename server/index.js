const connectDB = require('./mongodb/connect');
const User = require("./mongodb/models/user");
const CertificationTile = require('./mongodb/models/certificationTile')
const CertificationDetail = require('./mongodb/models/certificationDetail')
const mcqList = require('./mongodb/models/mcqList')
const UserCertification = require('./mongodb/models/userCertification');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const TopicOfTheDay = require('./mongodb/models/topicOfTheDay');


const app = express();

const stripe = require("stripe")('sk_test_51MwWGPJ5XPx7sfMfIVeSjhWOlDlkaV7TeaeKSGP3jsR7ERAShkyrxnYqIbyXyFPzkl1zksq6BpYzHUK0607H2fgH007F1A1vSc');

app.use(express.static("public"));
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());

const http = require('http')

const MONGODB_URL = "mongodb+srv://izx12:faithlehane@cluster0.yc42gjo.mongodb.net/?retryWrites=true&w=majority"

const calculateOrderAmount = (items) => {
 
  return 1400;
};

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

                
                    const userID = await User.countDocuments() + 1;

                    const newUser = new User({ email, firstName, lastName, userName, password, confirmPassword, userID});

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

                return res.status(200).send({userID: user.userID});
              } else {

                return res.status(400).send('password_incorrect');
              }
          
            } catch (error) {
              res.status(500).send(error.message);
            }
          });


          app.post('/home', async (req, res) => {

            try {
  
              const user = await User.findOne({ userID: req.body.userID });
          
  
              if (!user) {
                return res.status(400).send('user_does_not_exist');
              }
          
              const firstName = user.firstName;
              const lastName = user.lastName;
          
              return res.status(200).json({ firstName, lastName });
            } catch (error) {
              res.status(500).send(error.message);
            }
          });

          
          app.get('/get-certifications', async (req, res) => { 

            try {
              var mysort = { id: 1 };
              const certifications = await CertificationTile.find().sort(mysort);
              res.send(certifications);
            
            } catch (err) {
              console.error(err);
            } finally {
             
            }});

            app.get(`/get-certification/:id`, async (req, res) => {
            
              try {
                
                const certification = await CertificationDetail.findOne({ id: req.params.id });
               
                res.json(certification);
              } catch (err) {
                
                res.status(500).json({ message: 'Server Error' });
              }
            });

            app.get('/get-mcq-list/:id', async (req, res) => {

              try {
                const mcqs = await mcqList.findOne({ id: req.params.id });

                res.json(mcqs);
              } catch (err) {
                res.status(500).json({ message: 'Server Error' });
              }
            });

            app.put('/add-certification', async (req, res) => {
              const { userID, certificationName, percentage } = req.body;
            
              try {
                const newCertification = new UserCertification({
                  userID: parseInt(userID),
                  certificationName: certificationName,
                  percentage: parseInt(percentage)
                });
            
                await newCertification.save();
                res.status(200).send('User certification added successfully!');
              } catch (error) {
                res.status(500).send('Error adding user certification');
              }
            });

            app.get('/get-certifications/:userID', async (req, res) => {
              const { userID } = req.params;
            
              try {

                const intID = parseInt(userID);

                const certifications = await UserCertification.find({ userID: intID });

                const result = certifications.map(({ certificationName, percentage }) => ({ certificationName, percentage }));

    
                res.status(200).json(result);

              } catch (error) {
                console.error(error);
                res.status(500).send('Error retrieving certifications');
              }
            });


            app.get('/topic-of-the-day', async(req, res) => {

              const size = await TopicOfTheDay.countDocuments();

              var randomID = Math.floor(Math.random() * size);

              if(randomID == 0)
                randomID = 1;

              const topic = await TopicOfTheDay.findOne({id: randomID});
          
              res.status(200).json(topic);

            });



            app.post("/create-payment-intent", async (req, res) => {
              const { items } = req.body;
            
              const paymentIntent = await stripe.paymentIntents.create({
                amount: calculateOrderAmount(items),
                currency: "usd",
                automatic_payment_methods: {
                  enabled: true,
                },
              });
            
              res.send({
                clientSecret: paymentIntent.client_secret,
              });
            });
            
        app.listen(8080, () => console.log("Server running at http://localhost:8080"));

    } catch (error) {
        console.log(error);
    }
}



startServer();

