const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://izx12:faithlehane@cluster0.yc42gjo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("test");
    const collection = database.collection("mcqList");

    const mcqList = [
      {
        id: 1,
        category: "React",
        questions: [
          {
            question: "What is React?",
            options: [
              "A front-end JavaScript library",
              "A back-end programming language",
              "A database management system",
            ],
            answer: "A front-end JavaScript library",
          },
          {
            question: "What is JSX in React?",
            options: [
              "A syntax extension for JavaScript",
              "A back-end programming language",
              "A database management system",
            ],
            answer: "A syntax extension for JavaScript",
          },
          {
            question: "What is a component in React?",
            options: [
              "A building block for UI elements",
              "A method for executing code",
              "A variable that stores data",
            ],
            answer: "A building block for UI elements",
          },
          {
            question: "What is state in React?",
            options: [
              "An object that stores data in a component",
              "A way to declare a constant",
              "A way to declare a variable",
            ],
            answer: "An object that stores data in a component",
          },
          {
            question: "What is props in React?",
            options: [
              "Short for properties, a way to pass data between components",
              "A way to declare multiple variables of the same type",
              "A way to declare multiple variables of different types",
            ],
            answer:
              "Short for properties, a way to pass data between components",
          },
          {
            question: "What is the virtual DOM in React?",
            options: [
              "A lightweight representation of the actual DOM",
              "A back-end programming language",
              "A database management system",
            ],
            answer: "A lightweight representation of the actual DOM",
          },
          {
            question:
              "What is the difference between a class component and a functional component in React?",
            options: [
              "A class component has state and lifecycle methods, while a functional component doesn't",
              "A functional component has state and lifecycle methods, while a class component doesn't",
              "There is no difference between a class component and a functional component",
            ],
            answer:
              "A class component has state and lifecycle methods, while a functional component doesn't",
          },
          {
            question: "What is the component lifecycle in React?",
            options: [
              "The different stages a component goes through from creation to removal",
              "A way to declare a constant",
              "A way to declare a variable",
            ],
            answer:
              "The different stages a component goes through from creation to removal",
          },
          {
            question:
              "What is the purpose of the componentDidMount() lifecycle method in React?",
            options: [
              "To execute code after a component has mounted",
              "To execute code before a component has mounted",
              "To execute code when a component is updated",
            ],
            answer: "To execute code after a component has mounted",
          },
          {
            question:
              "What is the purpose of the shouldComponentUpdate() lifecycle method in React?",
            options: [
              "To determine whether a component should update or not",
              "To determine whether a component should be created or not",
              "To determine whether a component should be removed or not",
            ],
            answer: "To determine whether a component should update or not",
          },
          {
            question:
              "What is the difference between state and props in React?",
            options: [
              "State is managed within a component while props are passed from parent to child component",
              "State is passed from parent to child component while props are managed within a component",
              "There is no difference between state and props",
            ],
            answer:
              "State is managed within a component while props are passed from parent to child component",
          },
          {
            question: "What is React Router?",
            options: [
              "A library that enables client-side routing in React apps",
              "A tool for debugging React applications",
              "A component for managing state in React apps",
            ],
            answer: "A library that enables client-side routing in React apps",
          },
          {
            question: "What is the significance of keys in React?",
            options: [
              "Keys help React identify which items have changed, are added, or are removed from a list",
              "Keys are used to define the structure of a component",
              "Keys are used to style a component",
            ],
            answer:
              "Keys help React identify which items have changed, are added, or are removed from a list",
          },
          {
            question: "What is the purpose of setState() in React?",
            options: [
              "To update the state of a component",
              "To define the state of a component",
              "To remove the state of a component",
            ],
            answer: "To update the state of a component",
          },
          {
            question: "What is Redux in React?",
            options: [
              "A predictable state container for JavaScript apps",
              "A front-end JavaScript library",
              "A back-end programming language",
            ],
            answer: "A predictable state container for JavaScript apps",
          },
        ],
      },
      {
        id: 2,
        category: "Java",
        questions: [
          {
            question: "What is Java?",
            options: [
              "A programming language",
              "A database management system",
              "An operating system",
            ],
            answer: "A programming language",
          },
          {
            question: "What is a class in Java?",
            options: [
              "A blueprint for creating objects",
              "A method for executing code",
              "A variable that stores data",
            ],
            answer: "A blueprint for creating objects",
          },
          {
            question: "What is an interface in Java?",
            options: [
              "A collection of abstract methods",
              "A way to declare a constant",
              "A way to declare a variable",
            ],
            answer: "A collection of abstract methods",
          },
          {
            question:
              "What is the difference between an abstract class and an interface?",
            options: [
              "An abstract class can have non-abstract methods, while an interface can only have abstract methods",
              "An interface can have non-abstract methods, while an abstract class can only have abstract methods",
              "There is no difference between an abstract class and an interface",
            ],
            answer:
              "An abstract class can have non-abstract methods, while an interface can only have abstract methods",
          },
          {
            question: "What is a constructor in Java?",
            options: [
              "A method that is called when an object is created",
              "A method for executing code",
              "A variable that stores data",
            ],
            answer: "A method that is called when an object is created",
          },
          {
            question: "What is inheritance in Java?",
            options: [
              "A way for one class to inherit properties and methods from another class",
              "A way to declare a variable",
              "A way to declare a constant",
            ],
            answer:
              "A way for one class to inherit properties and methods from another class",
          },
          {
            question: "What is polymorphism in Java?",
            options: [
              "The ability of an object to take on many forms",
              "The ability to declare multiple variables of the same type",
              "The ability to declare multiple variables of different types",
            ],
            answer: "The ability of an object to take on many forms",
          },
          {
            question: "What is encapsulation in Java?",
            options: [
              "The practice of hiding data within a class",
              "The practice of making data publicly accessible",
              "The practice of deleting data",
            ],
            answer: "The practice of hiding data within a class",
          },
          {
            question: "What is a package in Java?",
            options: [
              "A group of related classes and interfaces",
              "A way to declare a variable",
              "A way to declare a constant",
            ],
            answer: "A group of related classes and interfaces",
          },
          {
            question: "What is the Java Development Kit (JDK)?",
            options: [
              "A software development kit for developing Java applications",
              "A database management system",
              "An operating system",
            ],
            answer:
              "A software development kit for developing Java applications",
          },
        ],
      },
      {
        id: 3,
        category: "Node.js",
        questions: [
          {
            question: "What is Node.js?",
            options: [
              "A server-side JavaScript runtime",
              "A front-end JavaScript framework",
              "A database management system",
            ],
            answer: "A server-side JavaScript runtime",
          },
          {
            question: "Which of the following is NOT a core module in Node.js?",
            options: ["fs", "http", "crypto", "mongoose"],
            answer: "mongoose",
          },
          {
            question: "What is the package manager used in Node.js?",
            options: ["npm", "pip", "yarn", "apt-get"],
            answer: "npm",
          },
          {
            question:
              "Which of the following modules is used for handling file input/output operations in Node.js?",
            options: ["fs", "http", "crypto", "path"],
            answer: "fs",
          },
          {
            question: "What is the event loop in Node.js?",
            options: [
              "A mechanism for handling asynchronous callbacks",
              "A module for handling server requests",
              "A tool for debugging JavaScript code",
              "A data structure for storing key-value pairs",
            ],
            answer: "A mechanism for handling asynchronous callbacks",
          },
          {
            question:
              "What is the purpose of the 'require' function in Node.js?",
            options: [
              "To include external modules in a Node.js application",
              "To create a new instance of a class",
              "To define a new function in a Node.js application",
              "To handle HTTP requests in a Node.js application",
            ],
            answer: "To include external modules in a Node.js application",
          },
          {
            question:
              "Which of the following modules is used for creating a web server in Node.js?",
            options: ["http", "fs", "crypto", "path"],
            answer: "http",
          },
          {
            question:
              "What is the difference between 'setImmediate' and 'setTimeout' in Node.js?",
            options: [
              "'setImmediate' triggers the callback immediately after the current phase of the event loop, while 'setTimeout' triggers the callback after a specified delay",
              "'setTimeout' triggers the callback immediately after the current phase of the event loop, while 'setImmediate' triggers the callback after a specified delay",
              "'setImmediate' and 'setTimeout' are identical in their behavior",
              "None of the above",
            ],
            answer:
              "'setImmediate' triggers the callback immediately after the current phase of the event loop, while 'setTimeout' triggers the callback after a specified delay",
          },
          {
            question:
              "What is the purpose of the 'module.exports' object in Node.js?",
            options: [
              "To export a module for use in other Node.js applications",
              "To define a new function in a Node.js application",
              "To handle HTTP requests in a Node.js application",
              "To include external modules in a Node.js application",
            ],
            answer: "To export a module for use in other Node.js applications",
          },
          {
            question:
              "Which of the following is a popular Node.js web application framework?",
            options: ["Express.js", "AngularJS", "React", "Vue.js"],
            answer: "Express.js",
          },
        ],
      },
      {
        id: 4,
        category: "MongoDB",
        questions: [
          {
            question: "What is MongoDB?",
            options: [
              "A relational database management system",
              "A NoSQL document-oriented database management system",
              "A graph database management system",
            ],
            answer: "A NoSQL document-oriented database management system",
          },
          {
            question: "What is a document in MongoDB?",
            options: [
              "A row in a table",
              "A record in a file",
              "A JSON-like data structure",
            ],
            answer: "A JSON-like data structure",
          },
          {
            question: "What is a collection in MongoDB?",
            options: [
              "A group of related documents",
              "A group of related tables",
              "A group of related records",
            ],
            answer: "A group of related documents",
          },
          {
            question: "What is a database in MongoDB?",
            options: [
              "A container for collections",
              "A container for documents",
              "A container for records",
            ],
            answer: "A container for collections",
          },
          {
            question: "What is the default port for MongoDB?",
            options: ["27017", "3306", "5432"],
            answer: "27017",
          },
          {
            question: "What is the MongoDB query language called?",
            options: ["SQL", "NoSQL", "MongoDB Query Language (MQL)"],
            answer: "MongoDB Query Language (MQL)",
          },
          {
            question: "What is an index in MongoDB?",
            options: [
              "A data structure that improves the speed of data retrieval operations",
              "A data structure that is used to store documents",
              "A data structure that is used to store collections",
            ],
            answer:
              "A data structure that improves the speed of data retrieval operations",
          },
          {
            question: "What is sharding in MongoDB?",
            options: [
              "A technique for splitting large databases into smaller, more manageable parts",
              "A technique for combining small databases into larger, more powerful ones",
              "A technique for optimizing the performance of databases",
            ],
            answer:
              "A technique for splitting large databases into smaller, more manageable parts",
          },
          {
            question: "What is aggregation in MongoDB?",
            options: [
              "A framework for performing complex queries on multiple collections",
              "A framework for performing simple queries on a single collection",
              "A framework for performing complex queries on a single collection",
            ],
            answer:
              "A framework for performing complex queries on multiple collections",
          },
          {
            question: "What is replication in MongoDB?",
            options: [
              "A technique for storing multiple copies of data on multiple servers",
              "A technique for storing multiple copies of data on a single server",
              "A technique for storing single copies of data on multiple servers",
            ],
            answer:
              "A technique for storing multiple copies of data on multiple servers",
          },
        ],
      },
      {
        id: 5,
        category: "Python",
        questions: [
          {
            question: "What is Python?",
            options: [
              "A programming language",
              "A database management system",
              "An operating system",
            ],
            answer: "A programming language",
          },
          {
            question: "Which of the following is an advantage of using Python?",
            options: [
              "Easy to learn and read",
              "Fast execution speed",
              "Limited third-party libraries",
            ],
            answer: "Easy to learn and read",
          },
          {
            question: "What is a variable in Python?",
            options: [
              "A container for storing data values",
              "A method for executing code",
              "A way to declare a constant",
            ],
            answer: "A container for storing data values",
          },
          {
            question: "What is a function in Python?",
            options: [
              "A block of code that performs a specific task",
              "A way to declare a variable",
              "A way to declare a constant",
            ],
            answer: "A block of code that performs a specific task",
          },
          {
            question: "Which of the following is NOT a data type in Python?",
            options: ["Float", "Boolean", "Char"],
            answer: "Char",
          },
          {
            question: "What is a module in Python?",
            options: [
              "A file containing Python code",
              "A type of function",
              "A way to declare a variable",
            ],
            answer: "A file containing Python code",
          },
          {
            question: "What is a class in Python?",
            options: [
              "A blueprint for creating objects",
              "A way to declare a variable",
              "A way to declare a constant",
            ],
            answer: "A blueprint for creating objects",
          },
          {
            question:
              "What is the difference between a list and a tuple in Python?",
            options: [
              "A list is mutable, while a tuple is immutable",
              "A tuple is mutable, while a list is immutable",
              "There is no difference between a list and a tuple",
            ],
            answer: "A list is mutable, while a tuple is immutable",
          },
          {
            question:
              "What is the output of the following code?\n\nx = 5\nprint(x > 3 and x < 10)",
            options: ["True", "False", "Error"],
            answer: "True",
          },
          {
            question:
              "What is the output of the following code?\n\nx = ['apple', 'banana', 'cherry']\nprint(len(x))",
            options: ["3", "5", "Error"],
            answer: "3",
          },
        ],
      },
      {
        id: 6,
        category: "Figma",
        questions: [
          {
            question: "What is Figma?",
            options: [
              "A photo editing software",
              "A prototyping and design tool",
              "A video editing software",
            ],
            answer: "A prototyping and design tool",
          },
          {
            question: "What is the main advantage of using Figma?",
            options: [
              "It's free",
              "It's easy to learn",
              "It's a cloud-based tool that allows for easy collaboration",
            ],
            answer:
              "It's a cloud-based tool that allows for easy collaboration",
          },
          {
            question: "What is a frame in Figma?",
            options: [
              "A container for layers",
              "A container for images",
              "A container for shapes",
            ],
            answer: "A container for layers",
          },
          {
            question: "What is the purpose of Figma's auto-layout feature?",
            options: [
              "To automatically arrange layers in a grid",
              "To automatically adjust the size and position of layers in response to changes",
              "To automatically generate CSS code",
            ],
            answer:
              "To automatically adjust the size and position of layers in response to changes",
          },
          {
            question: "What is a component in Figma?",
            options: [
              "A reusable element that can be easily duplicated and edited",
              "A file format used to store designs",
              "A tool used to create vector graphics",
            ],
            answer:
              "A reusable element that can be easily duplicated and edited",
          },
        ],
      },
    ];

    const result = await collection.insertMany(mcqList);
    console.log(`${result.insertedCount} documents were inserted.`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
