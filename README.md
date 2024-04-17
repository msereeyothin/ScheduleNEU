# ScheduleNEU

A scheduling planning alternative with the abilitiy to one-click optimize schedules for Northeastern University students.

ScheduleNEU is built using the MERN stack includes the following technologies:
- MongoDB
- Express.js
- Node.js
- React
- TypeScript

# Demo

Access the website here: https://www.scheduleneu.com/
[Figma Wireframe](https://www.figma.com/file/5ot3rDigKjxpk38FgFinha/ScheduleNEU?type=design&node-id=0%3A1&mode=design&t=gHcvl7o0YIVduRnt-1)

## Running ScheduleNEU locally

Running the application locally entails running both a frontend and the backend service, if you don't need the backend service to
save your plan & schedule, running just frontend is entirely fine.

to get started:
- clone the repository
- Follow the instruction below to set up the frontend and backend

### Setting up the frontend
1. Install npm:
   Ensure npm (node package manager) are installed on your machine.

2. Install dependencies:
   Run the command ```npm i or npm install``` in the backend directory to install the necessary dependencies.

After that, in the frontend directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.



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
