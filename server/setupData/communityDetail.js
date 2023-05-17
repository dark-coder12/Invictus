const { MongoClient } = require('mongodb');

  const uri ="mongodb+srv://izx12:faithlehane@cluster0.yc42gjo.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  async function run() {
    try {

        await client.connect();
        const database = client.db('test');
        const collection = database.collection('communityDetails');
    
        const communityDets = [
            {
                id: 1,
                title: 'Software Engineering',
                description: 'Discuss, ask and learn Stable Diffusion, DreamBooth, Programming, Software Engineering, C#, ASP.NET, MSSQL and more',
                bg: 'https://cdn.discordapp.com/discovery-splashes/772774097734074388/ffc973f2fe872898f3bb9af132b17c3b.jpg?size=2048'
            },
            {
                id: 2,
                title: 'Artificialis Scout',
                description: 'This server is all about finding a community full of data science, machine learning and technology enthusiasts',
                bg: 'https://cdn.discordapp.com/discovery-splashes/853221870244331521/50c1d1f745512a8b733fb9bd32485aa4.jpg?size=2048'
              },
              {
                id: 3,
                title: 'Java Club',
                description: 'Our JAVA community is a space for enthusiasts, professionals, and learners to learn, collaborate, and grow together.',
                bg: 'https://cdn.discordapp.com/icons/665951159567253529/a_588e065359115eaf286c20252fbfb692.jpg?size=256'
              },
              {
                id: 4,
                title: 'JavaScript Mastery',
                description: 'Join the official JavaScript Mastery Community, meet fellow developers and start coding today!',
                bg: 'https://cdn.discordapp.com/discovery-splashes/710138849350647871/3ed48c45f96a90d884a4b44196de31ba.jpg?size=2048'
              }
        ];
      
      const result = await collection.insertMany(communityDets);
      console.log(`${result.insertedCount} documents were inserted.`);

    } 
    finally {
        await client.close();
    }
  }

  run().catch(console.dir);