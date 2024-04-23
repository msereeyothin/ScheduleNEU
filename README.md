# ScheduleNEU

A scheduling planning alternative with the ability to one-click optimize schedules for Northeastern University students. 

[Read the documentation here!](https://scheduleneudocs.notion.site/d23d5dd30b354af5b75ce469b3c50b93?v=efddf972b3094b1b97b667cea9c6d522)

ScheduleNEU is built using the MERN stack includes the following technologies:
- MongoDB
- Express.js
- React
- Node.js
- TypeScript

## Demo

Access the website here: [https://www.scheduleneu.com/](https://www.scheduleneu.com/)

Access the Figma Wireframe here: [Figma Wireframe](https://www.figma.com/file/5ot3rDigKjxpk38FgFinha/ScheduleNEU?type=design&node-id=0%3A1&mode=design&t=gHcvl7o0YIVduRnt-1)

## Running ScheduleNEU locally

For the full ScheduleNEU experience, you can run both the frontend and backend. If you don't need the backend service to save your plan & schedule, running the frontend is fine. **This readme will guide you to running both frontend and backend. If you don't need to run either one individually, check out the readmes in those direcotries.**

### To get started:
- clone the repository
- Follow the instructions below to set up the frontend and backend

### Setting up Full Stack Development
1. Install Node.js and npm:
   Ensure Node.js and npm (node package manager) are installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

2. Install docker:
   For local database development, you can install docker desktop from [docker.com](https://www.docker.com/products/docker-desktop/).

3. Install dependencies:
   In this root directory, the frontend, and backend directory, run the command: ```npm i or npm install``` to install the necessary dependencies.

4. Set up environment variables:
   Create a file named `.env` in the backend directory and add the following environment variables:
   ```MONGO_URI="your MongoDB connection string"```
   Make sure to replace `your MongoDB connection string` with your actual MongoDB connection details. You can use `mongodb://localhost:27017` if you are using a local MongoDB database.

5. Run ```npm start``` to start the backend and frontend server:
   The application will then run on [http://localhost:8081](http://localhost:8081). If you change the port, make sure to also update the corresponding settings in the frontend application.

**Optional:** You can install MongoDBCompass to interact with the database via GUI. Install MongoDBCompass at [mongodb.com](https://www.mongodb.com/products/tools/compass)

#### Additional Information
Ensure that your MongoDB service is running on a server that can be connected to. If you are using a local database service like `mongodb://localhost:27017`, ensure the database service is started.
