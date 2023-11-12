// export default (name) => {
//     console.log(`Hello ${name}`);
// }

import axios from "axios";

export {add, subs, text, arr, obj};

const add = (a,b) => a+b;
const subs = (a,b) => a-b;

const text = "Some text";

const arr = ["apple", "grape"];

const obj = {
    firstName : "David",
    lastName: "Finch"
}


export default  async(user_id) => {

    try {
        const {data : user} = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
        const {data : post} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);

        console.log(user);
        console.log(post);

    } catch (error) {
        console.log(error);
    }
};

