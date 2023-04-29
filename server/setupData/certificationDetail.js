 const { MongoClient } = require('mongodb');

  const uri ="mongodb+srv://izx12:faithlehane@cluster0.yc42gjo.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  
  async function run() {
    try {
      await client.connect();
      const database = client.db('test');
      const collection = database.collection('certificationDetail');
  
      const certifications = [
        {
          name: "React MCQ Certification",
          description: " This certification demonstrates proficiency in React, a popular JavaScript library for building user interfaces. It showcases the ability to create efficient and effective UI components, making developers stand out in the competitive front-end development field.",
          currentlyAttempted: 1296,
          certificationBenefits: [
            "Boost your React skills",
            "Advance your career",
            "Improve your resume",
            "Enhance your credibility",
            "Stand out from the competition"
          ]
        },
        {
          name: "Java Certification",
          description: "This certification showcases proficiency in the Java programming language and the ability to develop scalable and maintainable applications. It enhances the problem-solving skills of developers and boosts their career prospects in the enterprise software development industry.",
          currentlyAttempted: 2437,
          certificationBenefits: [
            "Advance your career in enterprise software development",
            "Improve your problem-solving skills",
            "Enhance your credibility as a Java developer",
            "Gain recognition in the industry",
            "Stand out from the competition"
          ]
        },
        {
          name: "Node.js Certification",
          description: "This certification demonstrates proficiency in the Node.js runtime environment and the ability to build server-side applications. It helps developers advance their career in back-end development and showcases their expertise in the Node.js ecosystem.",
          currentlyAttempted: 1748,
          certificationBenefits: [
            "Advance your career in back-end development",
            "Improve your understanding of Node.js ecosystem",
            "Enhance your credibility as a Node.js developer",
            "Gain recognition in the industry",
            "Stand out from the competition"
          ]
        },
        {
          name: "Python Certification",
          description: "This certification showcases proficiency in the Python programming language and the ability to develop data analysis and scientific computing applications. It enhances the problem-solving skills of developers and boosts their career prospects in the data science and analytics industry.",
          currentlyAttempted: 3165,
          certificationBenefits: [
            "Advance your career in data science and analytics",
            "Improve your problem-solving skills",
            "Enhance your credibility as a Python developer",
            "Gain recognition in the industry",
            "Stand out from the competition"
          ]
        },
        {
          name: "Figma Certification",
          description: "This certification showcases proficiency in Figma, a popular design software for creating visually appealing and user-friendly interfaces. It helps developers advance their career in UI/UX design and enhances their credibility as a Figma designer.",
          currentlyAttempted: 958,
          certificationBenefits: [
            "Advance your career in UI/UX design",
            "Improve your design skills and creativity",
            "Enhance your credibility as a Figma designer",
            "Gain recognition in the industry",
            "Stand out from the competition"
          ]
        },
      {
        name: "MongoDB Certification",
        description: "Demonstrates proficiency in MongoDB, a popular NoSQL database used for building scalable and flexible applications. It showcases the ability to design, implement, and manage MongoDB databases, making developers stand out in the competitive back-end development field.",
        currentlyAttempted: 1187,
        certificationBenefits: [
          "Advance your career in back-end development",
          "Enhance your proficiency in MongoDB database management",
          "Gain recognition in the industry",
          "Enhance your credibility as a MongoDB developer",
          "Stand out from the competition"
        ]
      }
      ];
    
  
      const result = await collection.insertMany(certifications);
      console.log(`${result.insertedCount} documents were inserted.`);


    } finally {
      await client.close();
    }
  }
  
  run().catch(console.dir);
  