  const { MongoClient } = require('mongodb');

  const uri ="mongodb+srv://izx12:faithlehane@cluster0.yc42gjo.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  

  async function run() {

    try {
      await client.connect();
      const database = client.db('test');
      const collection = database.collection('topicOfTheDay');
  
      const topics = [
        {
          id: 1,
          topicName: "Aggregation Framework in MongoDB",
          topicDescription: "The MongoDB Aggregation Framework is a powerful tool for performing advanced data analysis tasks on large datasets. With this framework, you can perform complex queries, join data from multiple collections, and aggregate data using a wide range of operators and functions."
        },
        {
          id: 2,
          topicName: "React Hooks",
          topicDescription: "React Hooks are a new feature in React that allow you to use state and other React features in functional components. With Hooks, you can build more efficient and maintainable React components by eliminating the need for class components and simplifying the code."
        },
        {
          id: 3,
          topicName: "Python Data Analysis",
          topicDescription: "Python is a popular programming language for data analysis due to its simple syntax and powerful data analysis libraries. With NumPy and Pandas, you can easily perform data manipulation, cleaning, and analysis tasks. Additionally, Python's visualization libraries like Matplotlib and Seaborn allow you to create compelling visualizations to communicate your findings."
        },
        { 
          id: 4,
          topicName: "Figma Design System",
          topicDescription: "A design system in Figma is a set of reusable components, styles, and guidelines that ensure consistency and efficiency in your design process. With a design system, you can speed up your design workflow, maintain brand consistency, and easily collaborate with other designers."
        },
        {
          id: 5,
          topicName: "Node.js Web Development",
          topicDescription: "Node.js is a popular runtime environment for building scalable and efficient web applications. With frameworks like Express.js and Socket.io, you can easily create web servers, APIs, and real-time applications. Additionally, Node.js has a vibrant ecosystem of packages and libraries that make development faster and easier."
        },
        {
          id: 6,
          topicName: "Java Collections",
          topicDescription: "Java Collections are a set of classes and interfaces that provide a way to manage groups of related objects. With collections, you can easily perform common operations like adding, removing, and sorting objects. Additionally, Java provides a wide range of collection implementations like ArrayList, LinkedList, and HashSet, each with its own advantages and use cases."
        },
        
      ];
    
        
      const result = await collection.insertMany(topics);
      console.log(`${result.insertedCount} documents were inserted.`);


    } finally {
      await client.close();
    }
  }
  
  run().catch(console.dir);
  