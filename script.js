// GET Request

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log("GET Response:", data))
  .catch(error => console.error("Error:", error));


//   POST Request
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "My New Post",
      body: "This is the content of my post",
      userId: 1
    })
  })
    .then(response => response.json())
    .then(data => console.log("POST Response:", data))
    .catch(error => console.error("Error:", error));
  
