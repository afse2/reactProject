// setTimeout(()=>{
//     console.log("hello");
// }, 2000)

// setInterval(()=>{console.log("Hello for every seconds");}, 1000)

import fetch from "node-fetch";

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

(async()=>{

    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

    console.log(users);
    console.log(post1);
    console.log(post2);

})();