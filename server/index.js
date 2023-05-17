const connectDB = require('./mongodb/connect');
const User = require("./mongodb/models/user");
const CertificationTile = require('./mongodb/models/certificationTile')
const CertificationDetail = require('./mongodb/models/certificationDetail')
const mcqList = require('./mongodb/models/mcqList')
const UserCertification = require('./mongodb/models/userCertification');
const BlogPosts = require('./mongodb/models/blogPosts');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const TopicOfTheDay = require('./mongodb/models/topicOfTheDay');
const Skills = require('./mongodb/models/skills');
const CommunityTile = require('./mongodb/models/communityTile')
const UserCommunities = require('./mongodb/models/userCommunities')
const CommunityDetails = require('./mongodb/models/communityDetails')

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
                const { email, firstName, lastName, userName, password, confirmPassword,imgUrl } = req.body;

                if(password != confirmPassword){
                    res.status(400).send("password_error");
                }
                else{

                
                    const userID = await User.countDocuments() + 1;

                    const newUser = new User({ email, firstName, lastName, userName, password, confirmPassword, userID,imgUrl});

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

        app.get('/get-myblogs/:userID', async (req, res) => {
            try {
              const { userID } = req.params;
              const intID = parseInt(userID);
              const myBlogs = await BlogPosts.find({ userID: intID });
              console.log(myBlogs);
              res.status(200).json(myBlogs);
            } catch (error) {
              res.status(500).send(error.message);
            }
          });

        app.post('/create-blog', async (req, res) => {  
          try{
            const {userID,userDescription,blogName,imgUrl,date,description} = req.body;
            
            const intUserID = parseInt(userID);
          
            const newBlog = new BlogPosts();
            newBlog.userID = intUserID;
            newBlog.userDescription = userDescription;
            newBlog.userBlogs.push({blogName:blogName,imgUrl:imgUrl,date:date,description:description});

            const sucess = await newBlog.save();
            if (sucess){
              res.status(200).send("blog_created");
            }
            else{
              res.status(400).send("blog_not_saved");
            }
          }
          catch(error){ 
            res.status(500).send(error.message);
          }
        })

        app.post('/userexists',async (req,res)=>{
          try { 
            const {email} = req.body;
            const user = await User.findOne({ email:email });
            if (!user) {
              return res.status(200).send('user_does_not_exist');
            }
            else {
              return res.status(200).send({userID: user.userID});
            }
          }
          catch (error){
            res.status(500).send("Error aya hai");
          }
        });

        app.post('/get-skills',async (req,res)=>{
          try{
            const {userID} = req.body.userID;
            console.log(userID);

            const intUserID = parseInt(userID);
            const skills = await Skills.findOne({ userID:intUserID });
            if (!skills) {
              return res.status(200).send('skills_does_not_exist');
            }
            else {
              return res.status(200).send(skills);
            }
          }
          catch (error){
            res.status(500).send(error.message);
          }
        });

        app.post('/edit-profile',async (req,res)=>{ 
          try{
            console.log(req.body)
              const {userName,email,phdDegree,phdInstitute,mastersDegree,mastersInstitute,bachelorsDegree,bachelorsInstitute,userID,skills} = req.body;
              const intUserID = parseInt(userID);
              const user = await User.findOne({ userID:intUserID });
              if (!user) {
                return res.status(400).send('user_does_not_exist');
              }
              else {
                user.userName = userName;
                user.email = email;
              }
              const sucess = await user.save();
              if (sucess){
                console.log("User saved");
              }
              else{
                console.log("User not saved");
              }

              const userSkills = await Skills.findOne({ userID:intUserID });
              if (!skills) {
                const newSkills = new Skills();
                newSkills.userID = intUserID;
                newSkills.phdDegree = phdDegree;
                newSkills.phdInstitute = phdInstitute;
                newSkills.mastersDegree = mastersDegree;
                newSkills.mastersInstitute = mastersInstitute;
                newSkills.bachelorsDegree = bachelorsDegree;
                newSkills.bachelorsInstitute = bachelorsInstitute;
                newSkills.skills = skills;
                const skillSuccess = await newSkills.save();

                if (skillSuccess){
                  console.log("Skills saved");
                  res.status(200).send("user_updated");
                }
                else{
                  console.log("Skills not saved");    
                  res.status(400).send("user_not_updated");
                }
                
              }
              else {
                userSkills.phdDegree = phdDegree;
                userSkills.phdInstitute = phdInstitute;
                userSkills.mastersDegree = mastersDegree;
                userSkills.mastersInstitute = mastersInstitute;
                userSkills.bachelorsDegree = bachelorsDegree;
                userSkills.bachelorsInstitute = bachelorsInstitute;
                userSkills.skills = skills;
                const sucess = await userSkills.save();
                
                if (skillSuccess){
                  res.status(200).send("user_updated");
                }
                else{
                  res.status(400).send("user_not_updated");
                }
              }

             
        }
        catch(error){
          res.status(500).send(error.message);
        }
        });
        
        app.get('/get-user/:userID', async (req, res)=>{
          const {userID} = req.params;
          
          try {
            const intID = parseInt(userID);
            const result = await User.findOne({userID:intID});
            res.status(200).json(result);
          }
          catch(error){
            console.error(error);
            res.status(500).send('Error retrieving user');
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

            //communities page
            app.get('/get-communities', async (req, res) => { 

              try {
                var mysort = { id: 1 };
                const communities = await CommunityTile.find().sort(mysort);
                res.send(communities);
                console.log(communities)
              
              } catch (err) {
                console.error(err);
              } finally {
               
            }});

            app.get('/get-user-communities/:userID', async (req, res) => { 

              const { userID } = req.params;  
              

              try {
                const intID = parseInt(userID);
                const userCommunities = await UserCommunities.find({ userID: intID });
                const result = userCommunities.map(({ title, bg}) => ({title, bg}));
                
                res.status(200).json(result);

                console.log("user ki hain ab////////")
                console.log(userCommunities)
              
              } catch (err) {
                console.error(err);
              } finally {
               
            }});

            //for one connection - 1
            app.get('/get-user-profile/:userID', async (req, res) => { 

              const {userID} = req.params;  
              try {
                const intID = parseInt(userID);
                const userDets = await User.find({userID: intID});
                const result = userDets.map(({email, firstName , lastName , imgUrl}) => ({email, firstName , lastName , imgUrl}));
                
                res.status(200).json(result);
                console.log(userDets)
              
              } catch (err) {
                console.error(err);
              } finally {
               
            }});

             //for one connection - 2
             app.get('/get-user-skills/:userID', async (req, res) => { 

              const {userID} = req.params;  
              try {
                const intID = parseInt(userID);
                const userSkills = await Skills.find({userID: intID});
                const result = userSkills.map(({phdDegree , phdInstitute , mastersDegree , mastersInstitute , bachelorsDegree , bachelorsInstitute , skills}) => 
                                              ({phdDegree , phdInstitute , mastersDegree , mastersInstitute , bachelorsDegree , bachelorsInstitute , skills}));
                
                res.status(200).json(result);
                console.log(userDets)
              
              } catch (err) {
                console.error(err);
              } finally {
               
            }});


            app.post('/add-user-community/:cID/:uID', async (req, res) => { 

              const { cID, uID } = req.params;   
              const {name, picture} = req.body;

              try {
                  const userCommunity = new UserCommunities({
                  communityID: parseInt(cID),
                  userID: parseInt(uID),
                  title: name,
                  bg: picture
                });
            
                await userCommunity.save();
                res.status(200).send('User community added successfully!');
              } catch (error) {
                res.status(500).send('Error adding user community');
            
            }});

      
            app.get(`/get-community/:cID`, async (req, res) => {
            
              const {cID} = req.params;  
              try {            
                const community = await CommunityDetails.findOne({id : cID});
                console.log("Data : " + community)
                
                res.json(community);
              } catch (err) {
                
                res.status(500).json({ message: 'Server Error' });
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

            

            app.get('/is-user-joined/:cID/:uID', async(req, res) => {

              const { cID, uID } = req.params;  
              

              try {
                const intID = parseInt(uID);
                const c_ID = parseInt(cID);

                var joined = false;

                const userCommunities = await UserCommunities.findOne({ communityID: c_ID, userID: intID });

                if(userCommunities != null){
                  joined = true;
                
                }else joined = false;
                res.status(200).json(joined);
              }catch(err){
                console.log(err);
                
              res.status(404).json(err);
              }
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

