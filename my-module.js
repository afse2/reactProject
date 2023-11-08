export default (name) => {
    console.log(`Hello ${name}`);
}

export {add, subs, text, arr, obj};

const add = (a,b) => a+b;
const subs = (a,b) => a-b;

const text = "Some text";

const arr = ["apple", "grape"];

const obj = {
    firstName : "David",
    lastName: "Finch"
}