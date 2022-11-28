### Conceptual Exercise

Answer the following questions below:

**- What are some ways of managing asynchronous code in JavaScript?**

A couple of ways are by using await and static

**- What is a Promise?**

A promise is the completion or failiure of an asyncronous operation and returning its value

**- What are the differences between an async function and a regular function?**

An async function depends on an await and instead of jumping through every line of code in JS it waits until a certain operation is completed, whereas a regular function will run wherever it is called

**- What is the difference between Node.js and Express.js?**

Node is a js environment that runs server side and express is a framework for node that is similar to flask

**- What is the error-first callback pattern?**

It is a function that returns an error object whenever any successful data is returned by the function

**- What is middleware?**

It is code that runs in the middle of the request/response cycle

**- What does the `next` function do?**

It moves the error handler to the next error function

**- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)**

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

The code can be revised to where you could make a single request to the api for every name, replace the api url to a variable that way you wouldn't have to type or copy the base url to make the code look more clean, and return that single request with all the names in an object-array