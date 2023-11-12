// setTimeout(()=>{
//     console.log("hello");
// }, 2000)

// setInterval(()=>{console.log("Hello for every seconds");}, 1000)

import fetch from "node-fetch";
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data)=> data.json())
// .then((users)=>{
//     console.log(users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data)=> data.json())
//     .then((post)=>{
//         console.log("First post",post);
        
//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//         .then((data)=> data.json())
//         .then((post)=>{
//         console.log("Second post",post);})
    
//     });
// });

//-----------------------------------------------------------------------------------------------------------

//ASYNC FUCNTION

// async function getData(){
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     console.log(users);
//     console.log(post1);
//     console.log(post2);
// }   


// getData();
    

//ANONYMOUS FUNCTION VERSION

// (async()=>{

//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     console.log(users);
//     console.log(post1);
//     console.log(post2);

// })();

//WITH AXIOS SAME CODE

// (async()=>{

//     const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");
//     const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");
//     const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");

//     console.log(users);
//     console.log(post1);
//     console.log(post2);

// })();


const getUsers = () => {
    return new Promise(async(resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users");

         resolve(data);
    });
};

const getPosts = (post_id) => {
    return new Promise(async(resolve,reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);

        resolve(data);
    });
};


//Not synchronize. Use anonymous function for put in order 

// getUsers()
// .then((data) => {console.log(data);})
// .catch((e) => {console.log(e);});

// getPosts(1)
// .then((data) => {console.log(data);})
// .catch((e) => {console.log(e);});

// (async() =>{

//     try {
//         const users = await getUsers();
//         const post = await getPosts(1);

//         console.log(users);
//         console.log(post);
//     } catch (error) {
//         console.log(error);
//     }
// })();


// Usage of Promise.all()

 Promise.all([getUsers(), getPosts(1)]).then(console.log).catch(console.log);

