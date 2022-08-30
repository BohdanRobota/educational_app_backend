import dotenv from 'dotenv';
import app from './src/app';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT || 3000


async function start() {
  try {
    //creating a database connection  
    await createConnection();

    app.listen(port, () => {
      console.log(`The application is listening on port ${port}!`)
    })
  } catch (err) {
    console.log(err);
  }
}


start();

