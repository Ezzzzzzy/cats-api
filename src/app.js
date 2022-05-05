import express from 'express'
import { show, getCat } from './controllers/catsController.js'
import { db } from './utils/db.js'
import { CatSeeder } from './seeder/catSeeder.js';
import dotenv from 'dotenv';

dotenv.config();

let port = process.env.NODE_PORT || "3000";

try {
    //migration
    await db.sync();
    console.log('Connection has been established successfully.');

    //seeders
    await CatSeeder();
    console.log('Seeders done');

} catch (error) {
    console.error('Unable to connect to the database:', error);
}

let app = express()


app.get('/v1/cats', show)
app.get('/v1/cats/:catId', getCat)



app.listen(port, () => {
    console.log(`Cats app listening on port ${port}`)
})

export default app
