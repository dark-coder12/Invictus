

  const { MongoClient } = require('mongodb');

  const uri ="mongodb+srv://izx12:faithlehane@cluster0.yc42gjo.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  
  async function run() {
    try {
      await client.connect();
      const database = client.db('test');
      const collection = database.collection('certificationTile');
  
      const certifications = [
        {
          id: 1,
          title: "React",
          mcq: 15,
          description: "A complete assessment of Hooks, State, and Props.",
          bg: "https://images.hdqwalls.com/wallpapers/react-js-logo-no.jpg",
        },
        {
          id: 2,
          title: "Java",
          mcq: 10,
          description: "Basic-Advanced Java concepts from OOP to Graphics3D.",
          bg: "https://img1.wallspic.com/crops/8/8/2/3/6/163288/163288-logo_java_full_stack-java-programming_language-javascript-standing-3840x2160.png",
        },
        {
          id: 3,
          title: "Node.js",
          mcq: 10,
          description:
            "Learn to build server-side applications with Node.js.",
          bg: "https://c4.wallpaperflare.com/wallpaper/361/665/85/node-js-hexagon-wallpaper-thumb.jpg",
        },
        {
          id: 4,
          title: "MongoDB",
          mcq: 10,
          description: "A comprehensive test on NoSQL database and MongoDB queries.",
          bg: "https://wallpapercave.com/wp/wp8724850.jpg",
        },
        {
          id: 5,
          title: "Python",
          mcq: 10,
          description:
            "An assessment of fundamental to advanced concepts of Python.",
          bg: "https://c4.wallpaperflare.com/wallpaper/873/975/781/python-programming-minimalism-grey-technology-hd-wallpaper-preview.jpg",
        },
        {
          id: 6,
          title: "Figma",
          mcq: 5,
          description: "Test your skills on UI/UX design and Figma design tool.",
          bg: "https://i.pinimg.com/736x/ac/8b/85/ac8b85d7975f92ca36d48ce1463b6320.jpg",
        },
      ];
  
      const result = await collection.insertMany(certifications);
      console.log(`${result.insertedCount} documents were inserted.`);


    } finally {
      await client.close();
    }
  }
  
  run().catch(console.dir);
  