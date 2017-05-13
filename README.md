### About Project
  A basic web server application using Node.js. Node.js provides an http module which can be used to create an HTTP client of a server. The application is made to listen on a particular port (i.e 3000) and send a response to the client whenever a request is made to the application.

  The Node.js framework is widely used for creating server based applications as it provides a platform to create web servers for serving content to users.

### Installation Instruction
#### Dependencies:
  * request 2.81.0: This module has the necessary functions which can be used to make GET requests to website and receive information from web sites.The information would contain the entire content of the web page requested from the relevant web site.
#### Requirements:
  This application is made using node and npm. Version are mentioned where applicable.
  * node 6.10.3 - a server side JavaScript platform built on chrome v8 Javascript engine. It allows to write javascript based application that can be run outside of the browser.
  * npm 3.10.10 - a package manager for javascript. It is used to install, share and distribute code and manage dependencies in projects.
  * nodemon (for convenience in running the server): a utility that will monitor for any changes in your source and automatically restart your server.

#### Usage Instruction
  Clone the repository.
  ```
  $ cd repoName
  $ npm install  //to install the dependencies in the local _modules folder
  $ node server.js or nodemon server.js  //to run the server
  ```
  Verify the Output.
  ```
  Server running at http://localhost:3000/
  ```
  Make a request to node.js server using your browser and address http://localhost:3000/index.html. The body of index.html will be rendered in your browser.

  Verify the output at server end.
  ```
  Server running at http://localhost:3000/
  Request for /index.html received.
  ```
  Now run the client.js from a different command terminal other than server.js to see the result
  ```
  $ node client.js or nodemon client.js
  ```
  Verify the output.
  ```
  <html>
   <head>
      <title>Sample Page</title>
   </head>

   <body>
      Hello World!
   </body>
  </html>
  ```
