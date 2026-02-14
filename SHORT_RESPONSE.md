# Short Response Questions

Answer each of these questions completely but concisely. Use the proper technical terminology. You may refer to the [Marcy Lab School Docs](https://marcylabschool.gitbook.io/marcy-lab-school-docs) or Google but do NOT copy and paste definitions or explanations verbatim. 

You can earn up to 6 points for each response (3 points for writing quality, 3 points for technical content). 

Before submitting your responses, use a spell checker / AI to ensure that you have no grammar or spelling mistakes.

## Question 1: Asynchronous Code

Functions like `fetch()` are "asynchronous". Explain what that means and why it is so important to be able to execute code asynchronously?

**Your Answer:**
Functions like `fetch()` are asynchronous because they return a ***Promise*** rather than blocking the main thread until a response is received. It is important to be able to execute code asynchronously because it allows a program to start a task and continue executing other code without waiting for that task to finish. 

### Example
```js
const getUsers = async () => { 
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
    
    const users = data.map((user) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email
    }));

    return users;
  }
  catch (error) {
    console.log("Error caught!", error);
    return null;
  }

//Reference: https://marcylabschool.gitbook.io/marcy-lab-school-docs/mod-4-interactive-data-driven-ui/6-best-practices-async-await
};
```
Since JavaScript runs on a single-threaded event loop, if a program was only synchronous, they would block the call stack and freeze the user interface.

## Question 2: GET vs. POST

What is the difference between a `GET` request and a `POST` request? Provide examples in real world applications where each might be used under the hood?

**Your Answer:**
A `GET` request is used to retrieve data from a server. For example, when you search for a website or load a webpage, the application sends a `GET` request to fetch data.
On the other hand, a `POST` request is used to send data to the server to create or modify a resource. For example, submitting a form for creating a new account, or posting a comment on social media uses a `POST` request.

## Question 3: What is Vite and Why Use It?

What is Vite? What problem does it solve? And are there alternatives?

**Your Answer:**
Vite is a tool and development server which is used to improve developer experience. According to the vite documentation,  It leverages native ES modules in the browser during development, which allows for fast startup times and near-instant hot module replacement (HMR).
Vite helps to improve development and deployment experience by bundling files and efficiently delivering projects to users. There are alternatives to Vite, such as, Webpack, Parcel and esbuild.
