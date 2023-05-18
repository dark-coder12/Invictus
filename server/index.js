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
const Meetup = require('./mongodb/models/meetup');
const MeetupInfo = require('./mongodb/models/meetupinfo');
const CommunityTile = require('./mongodb/models/communityTile')
const UserCommunities = require('./mongodb/models/userCommunities')
const CommunityDetails = require('./mongodb/models/communityDetails')
const Posts = require('./mongodb/models/communityPosts');
const Like = require('./mongodb/models/like')

const app = express();

const stripe = require("stripe")('sk_test_51MwWGPJ5XPx7sfMfIVeSjhWOlDlkaV7TeaeKSGP3jsR7ERAShkyrxnYqIbyXyFPzkl1zksq6BpYzHUK0607H2fgH007F1A1vSc');

app.use(express.static("public"));
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());

const http = require('http');
const UserConnections = require('./mongodb/models/userConnections');

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

                    res.status(200).send(newUser);
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

                return res.status(200).send(user);
              } else {

                return res.status(400).send('password_incorrect');
              }
          
            } catch (error) {
              res.status(500).send(error.message);
            }
          });

        app.get('/get-user/:userID',async (req,res)=>{
          try {
            const {userID} = req.params;
            console.log(userID);
            const user = User.findOne({userID:userID});;
            if (user){
              console.log(user)
              res.status(200).send(user);
            }
            else {
              res.status(404).send('User not found');
            }
          }
          catch(error){
            res.status(500).send(error.message);
          }
        })
        app.get('/get-myblogs/:userID', async (req, res) => {
            try {
              const { userID } = req.params;
              const intID = parseInt(userID);
              const myBlogs = await BlogPosts.find({ userID: intID });
              
              res.status(200).json(myBlogs);
            } catch (error) {
              res.status(500).send(error.message);
            }
          });

        
        app.post('/addBlog', async (req, res) => {
          
            try {
              const { userID, blogName, imgUrl, date, description } = req.body;
              const intID = parseInt(userID);
              
              const blog = await BlogPosts.findOne({ userID: intID });

              if (blog) {
                
                blog.userBlogs.push({ blogName: blogName, imgUrl: imgUrl, date: date, description: description });
                const success = await blog.save();
                if (success) {
                  res.status(200).send("blog_added");
                }
                else {
                  res.status(400).send("blog_not_added");
                }
              }
              else {
                const newBlog = new BlogPosts();
                newBlog.userID = intID;
                newBlog.userBlogs.push({ blogName: blogName, imgUrl: imgUrl, date: date, description: description });
                const success = await newBlog.save();
                if (success) {
                  res.status(200).send("blog_added");
                }
                else {
                  res.status(400).send("blog_not_added");
                }

              }
            }
            catch (error) {
              res.status(500).send(error.message);
            }
        });

        app.post('/deleteBlog', async (req, res) => {
          try {
            const userID  = req.body.userID;
            const blogName = req.body.blogName;
            
            const blog = await BlogPosts.findOne({ userID: userID });
            if (blog) {
              const index = await blog.userBlogs.findIndex((blog) => blog.blogName === blogName);
              if (index !== -1) {
                blog.userBlogs.splice(index, 1);
                const success = await blog.save();
                if (success) {
                  res.status(200).send("blog_deleted");
                }
                else {
                  res.status(400).send("blog_not_deleted");
                }
              }
              else {
                res.status(400).send("blog_not_found");
              }
            }
            else {
              res.status(400).send("blog_not_found");
            }
          }
          catch (error) {
            res.status(500).send(error.message);
          }
        });
        
      app.get('/get-user-blogs/:userID',async(req,res)=>{
        try {
          const {userID} = req.params;
          const blogs = BlogPosts.findOne({userID: userID});
          if (blogs){
            res.status(200).send(blogs);
          }
          else{
            res.status(500).send('Blogs not found');
          }
        }
        catch (error){
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
            const userID = req.body.userID;
            
            
           
            const skills = await Skills.findOne({ userID:userID });

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

        app.delete('/delete-user',async (req,res)=>{
          try{
            const userID = req.body.userID;
            const success = await User.deleteOne({userID:userID});
            const success2  = await Skills.deleteOne({userID:userID});
            if(success && success2){
              
              res.status(200).send("user_deleted");
            }
            else{
              res.status(400).send("user_not_deleted");
            }
          }
          catch(error){
            res.status(500).send(error.message);
          }
        });


        app.put('/edit-profile',async (req,res)=>{ 
          try{

              const {userName,email,phdDegree,phdInstitute,mastersDegree,mastersInstitute,bachelorsDegree,bachelorsInstitute,userID,skills} = req.body;
              const intUserID = parseInt(userID);
              
              const options = {overwrite:true, new: true};
              const filter = {userID:intUserID};
              const updateDoc = {userName:userName,email:email};
              const user = await User.findOneAndUpdate(filter,updateDoc,options);

              if (!user) {
                 return res.status(400).send('user_does_not_exist');
              }            
              

              const userSkills = await Skills.findOne({ userID:intUserID });
              if (!userSkills) {
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
                  res.status(200).send("user_updated");
                }
                else{   
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
                const skillSuccess = await userSkills.save();
                
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

        app.post('/setMeetup',async (req,res)=>{  
          try{
    
            const {name,description,date,time,location,image,attending,conductedBy} = req.body;
            const newMeetup = new Meetup();
            newMeetup.name = name;
            newMeetup.description = description;
            newMeetup.date = date;
            newMeetup.time = time;
            newMeetup.location = location;
            newMeetup.image = image;
            newMeetup.attending = attending;
            newMeetup.conductedBy = conductedBy;
            const meetupSuccess = await newMeetup.save();
            if (meetupSuccess){
              res.status(200).send("meetup_created");
            }
            else{
              res.status(400).send("meetup_not_created");
            }
          }
          catch(error){
            res.status(500).send(error.message);
          }
        });

        app.get('/getMeetups',async (req,res)=>{
          try{
            const meetups = await Meetup.find();
            res.status(200).json(meetups);
          }
          catch(error){
            res.status(500).send(error.message);
          }
        });


        app.post('/setMeetUpInfo',async (req,res)=>{
          try{
           
            const {name,details,imgUrl,whoisitfor,prequisites,speakers,tags,attending} = req.body;
            const newMeetupInfo = new MeetupInfo();
            newMeetupInfo.name = name;
            newMeetupInfo.details = details;
            newMeetupInfo.imgUrl = imgUrl;
            newMeetupInfo.whoisitfor = whoisitfor;
            newMeetupInfo.prequisites = prequisites;
            newMeetupInfo.speakers = speakers;
            newMeetupInfo.tags = tags;
            newMeetupInfo.attending = attending;
            const meetupInfoSuccess = await newMeetupInfo.save();
            if (meetupInfoSuccess){
              res.status(200).send("meetupInfo_created");
            }
            else{
              res.status(400).send("meetupInfo_not_created");
            }

          }
          catch(error){
            res.status(500).send(error.message);
          }
        });

        app.get('/getMeetUp/:meetupName',async (req,res)=>{
          try{
            const name  = req.params.meetupName;
            const meetup = await Meetup.find({name:name});
            res.status(200).json(meetup);
          }
          catch(error){
            res.status(500).send(error.message);
          }
        });



        app.get('/getMeetUpInfo/:meetupName',async (req,res)=>{
          try{
            const name  = req.params.meetupName;
            const meetupInfo = await MeetupInfo.find({name:name});
            res.status(200).json(meetupInfo);
          }
          catch(error){
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

            //communities page
            app.get('/get-communities', async (req, res) => { 

              try {
                var mysort = { id: 1 };
                const communities = await CommunityTile.find().sort(mysort);
                res.send(communities);
               
              
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

          
              
              } catch (err) {
                console.error(err);
              } finally {
               
            }});

            //for search
            app.get('/get-communityname/:title', async (req, res) => { 

              const {title} = req.params;  
              try {
                const t = parseInt(title);
                const searchCommunity = await CommunityTile.find({ title: t });
                res.send(searchCommunity);
                console.log(searchCommunity)
                
                res.status(200).json(searchCommunity);
              
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
              
              
              } catch (err) {
                console.error(err);
              } finally {
               
            }});


            app.post('/add-user-community/:cID/:uID', async (req, res) => { 

              const { cID, uID } = req.params;   
              const {title, bg} = req.body;

              console.log(cID, uID, title)
              try {
                  const userCommunity = new UserCommunities({
                  communityID: parseInt(cID),
                  userID: parseInt(uID),
                  title: title,
                  bg: bg
                });
            
                await userCommunity.save();
                res.status(200).send('User community added successfully!');
              } catch (error) {
                res.status(500).send('Error adding user community');
            
            }});

            app.delete('/delete-user-community/:cID/:uID', async (req, res) => {

              const { cID, uID } = req.params;
            
              try {
                await UserCommunities.findOneAndRemove({
                  communityID: parseInt(cID),
                  userID: parseInt(uID),
                });
            
                res.status(200).send('User community deleted');

              } catch (error) {

                res.status(500).send('Error deleting');
              }
            });
      
            app.get(`/get-community/:cID`, async (req, res) => {
            
              const {cID} = req.params;  
              try {            
                const community = await CommunityDetails.findOne({id : cID});
    
                
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

    app.get('/get-all-users/:uID', async (req, res) => {
      const { uID } = req.params;
    
      const allUsers = await User.find({ userID: { $ne: uID } });
    
      res.status(200).json(allUsers);
    });

    app.get('/get-clicked-user/:uID', async(req, res) => {

      const {uID} = req.params;  
      try {
       
        const intID = parseInt(uID);
        const result = await User.find({userID: intID});
      
        res.status(200).json(result);
      

      }catch(err){
        console.log(err);
      }
    });

    app.get('/connect-user/:loggedID/:uID', async(req, res) => {

      const {loggedID, uID} = req.params;  
      try {
  
        const result = new UserConnections({followerID: loggedID, followedID: uID});
   
        result.save();

        res.status(200).json(result);
      
      }catch(err){
        console.log(err);
      }
    });

    app.get('/disconnect-user/:loggedID/:uID', async(req, res) => {

      const {loggedID, uID} = req.params;  
      try {
  
        const result =await UserConnections.deleteOne({followerID: loggedID, followedID: uID});
   
        res.status(200).json(result);
      
      }catch(err){
        console.log(err);
      }
    });

    app.get('/get-user-connections/:uID', async (req, res) => {
      const { uID } = req.params;
      
      try {

        const userConnections = await UserConnections.find({ followerID: uID }, 'followedID');
    
        const followedIDs = userConnections.map(connection => connection.followedID);
    

        const conUsers = await User.find({ userID: { $in: followedIDs } }, 'imgUrl firstName lastName userID');
    
        res.status(200).json(conUsers);

      } catch (error) {
        console.error(error);
      }
    });

    app.get('/get-connections/:userID',async(req,res)=>{
      
      const {userID} = req.params;
      console.log(userID);
      try {
        const connections = await UserConnections.find({followerID:userID});
      
        if (connections){
          res.status(200).send(connections);
        }
        else {
          res.status(404).send('No connections');
        }
      }
      catch(error){
        res.status(500).send(error.message);
      }
    })

    app.get('/is-user-connected/:loggedID/:uID', async(req, res) => {

      const {loggedID, uID} = req.params;  
    
      try {
    
        var followed = false;

        const result = await UserConnections.findOne({followerID: loggedID, followedID: uID});

        if(result != null)
          followed = true;

        res.status(200).json(followed);
      

      }catch(err){
        console.log(err);
      }
    });

   app.get('/community-posts/:cID', async (req, res) => {
  try {
    const { cID } = req.params;

    const posts = await Posts.find({ communityID: cID }).sort({ date: -1 });

    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching posts' });
  }
});
      
        app.post('/post-in-community', (req, res) => {
          const { userID, communityID, content } = req.body;
        
          User.findOne({ userID })
            .then((user) => {
              if (!user) {
                throw new Error('User not found');
              }
        
              const { firstName, lastName, imgUrl } = user;
        
              const newPost = new Posts({
                userID,
                communityID,
                name: `${firstName} ${lastName}`,
                icon: imgUrl,
                description: content,
                date: new Date().toISOString(),
              });
        
              return newPost.save();
            })
            .then((post) => {
              res.json(post);
            })
            .catch((error) => {
              console.error('Error creating post', error);
              res.status(500).json({ error: 'Error creating post' });
            });
        });
        

        app.get('/post-likes', async (req, res) => {
          const { name, icon, description, date } = req.query;
        
          try {
   
            const numLikes = await Like.countDocuments({ name, icon, description, date });
        
            res.json({ likes: numLikes });
          } catch (error) {
            console.error('Error fetching post likes:', error);
            res.status(500).json({ error: 'Failed to fetch post likes' });
          }
        });

        app.post('/like-post', (req, res) => {
          const { userID, name, icon, description, date } = req.body;
        
          const newLike = new Like({ userID, name, icon, description, date });
        
          newLike
            .save()
            .then((like) => {
              res.json(like);
            })
            
            .catch((error) => {
              console.error('Error adding like', error);
              res.status(500).json({ error: 'Error adding like' });
            });
        });
        
        app.delete('/unlike-post', (req, res) => {
          const { userID, name, icon, description, date } = req.body;
        
          Like.findOneAndDelete({ userID, name, icon, description, date })

            .then(() => {
              res.json({ message: 'Post unliked successfully' });
            })

            .catch((error) => {
              console.error('Error removing like', error);
              res.status(500).json({ error: 'Error removing like' });
            });
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

