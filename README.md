# ScheduleNEU

A scheduling planning alternative with the ability to one-click optimize schedules for Northeastern University students.

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

Running the application locally entails running both a frontend and the backend service, if you don't need the backend service to
save your plan & schedule, running just frontend is entirely fine.

### To get started:
- clone the repository
- Follow the instructions below to set up the frontend and backend

### Setting up the frontend
1. Install npm:
   Ensure npm (node package manager) is installed on your machine.

2. Install dependencies:
   Run the command ```npm i or npm install``` in the backend directory to install the necessary dependencies.

3. Run ```npm start``` to start the front end development server.

### Setting up the backend
1. Install Node.js and npm:
   Ensure Node.js and npm (node package manager) are installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

2. Install dependencies:
   Run the command ```npm i or npm install``` in the backend directory to install the necessary dependencies.

3. Set up environment variables:
   Create a file named `.env` in the backend root directory and add the following environment variables:
   ```MONGO_URI="your MongoDB connection string"```
   Make sure to replace `your MongoDB connection string` with your actual MongoDB connection details. 

4. Run ```npm start``` to start the backend server:
   The application will then run on [http://localhost:8081](http://localhost:8081). If you change the port, make sure to also update the corresponding settings in the frontend application.

#### Additional Information
Ensure that your MongoDB service is running on a server that can be connected to. If you are using a local database service like `mongodb://localhost:27017/mydb`, ensure the database service is started.
