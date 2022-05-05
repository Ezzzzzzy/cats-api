import express from 'express'
import { show } from './controllers/catsController.js'
import { db } from './utils/db.js'
import dotenv from 'dotenv';

dotenv.config();

let port = process.env.NODE_PORT || "3000";

try {
    await db.sync();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

let app = express()


app.get('/', show)



app.listen(port, () => {
    console.log(` Cats app listening on port ${port}`)
})

export default app
