const Blogs=require('./models/Blogs')
const mongoose=require('mongoose')
const blogs=[
    {
        title:"Understanding React.js- The JavaScript Library for Building User Interfaces",
        img:"https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D",
        content:"React.js is a JavaScript library that has taken the world of web development by storm. Created and maintained by Facebook, React is designed for building user interfaces (UIs) for web applications. In this comprehensive guide, we'll delve into the core concepts, features, and best practices associated with React. React is an open-source JavaScript library used for building interactive and dynamic user interfaces. It was created by Jordan Walke, a software engineer at Facebook, and was first released in 2013. React is widely adopted for its efficiency, flexibility, and robust ecosystem. React.js has transformed web development by providing a powerful and efficient way to build user interfaces. Its component-based architecture, virtual DOM, and declarative syntax have made it a go-to choice for developers and organizations worldwide. With a vibrant community and an ever-evolving ecosystem, React continues to lead the way in creating captivating web and mobile applications. So, whether you're just starting your development journey or you're an experienced developer, React.js offers a solid foundation for crafting engaging and interactive user experiences.",
        author:"John Doe"
    },
    {
        title:"Node.js: A Comprehensive Guide",
        img:"https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm9kZSUyMGpzfGVufDB8fDB8fHww",
        content:"Node.js is a runtime environment that has gained immense popularity in the world of web development. It allows developers to build fast, scalable, and efficient server-side applications using JavaScript. In this comprehensive guide, we'll explore what Node.js is, how it works, and its practical applications. Node.js is an open-source runtime environment that executes JavaScript code outside the web browser. It was created by Ryan Dahl in 2009 and has since become a fundamental technology for server-side development. Node.js uses the V8 JavaScript engine, developed by Google, to run JavaScript code on the server. To start using Node.js, you'll need to install it on your system. You can then create JavaScript files and run them with the node command. NPM comes bundled with Node.js, making it easy to manage packages and dependencies. Node.js has transformed the world of server-side development. Its non-blocking, event-driven architecture, speed, and scalability have made it a go-to choice for web servers, APIs, real-time applications, and more. As you dive deeper into Node.js, you'll discover its versatility and extensive community support.Whether you're building web servers, real-time applications, microservices, or diving into IoT, Node.js empowers you to create efficient and responsive solutions. It's a versatile tool that deserves its place at the forefront of modern web development.This comprehensive guide offers an extensive overview of Node.js, its core concepts, practical applications, advantages, and how to get started. Node.js is a dynamic and versatile technology with numerous use cases, making it an essential tool in the developer's toolkit. For in-depth learning, explore official documentation, tutorials, and additional resources available online.",
        author:"Abc123"
    }
]
const seedDB=async ()=>{
    await Blogs.insertMany(blogs)  
    console.log("DATABSE SEEDED")
}
module.exports=seedDB;