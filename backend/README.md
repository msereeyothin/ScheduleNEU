# ScheduleNEU Backend

This is the backend service for ScheduleNEU built with Express.js, Node.js, and MongoDb.

## Setting up the backend

1. Install Node.js and npm:
   Ensure Node.js and npm (node package manager) are installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

2. Install docker:
   For local database development, you can install docker desktop from [docker.com](https://www.docker.com/products/docker-desktop/).

3. Install dependencies:
   Run the command ```npm i or npm install``` in the backend directory to install the necessary dependencies.

4. Set up environment variables:
   Create a file named `.env` in the backend root directory and add the following environment variables:
   **MONGO_URI="your MongoDB connection string"**
   Make sure to replace `your MongoDB connection string` with your actual MongoDB connection details. 

5. Run **npm start** to start the backend server:
   The application will then run on [http://localhost:8081](http://localhost:8081). If you change the port, make sure to also update the corresponding settings in the frontend application.
   
**WARNING:** running ```npm start``` will cause an error if you already have an instance of your local database running (because it tries to start the db again). If you are already running the db, you only need to start the node server by running ```npm run start:app```. You can stop the database by running ```npm run stop:db```. Checkout `package.json` for the full list of commands.

### Additional Information
Ensure that your MongoDB service is running on a server that can be connected to. If you are using a local database service like `mongodb://localhost:27017/mydb`, ensure the database service is started.



