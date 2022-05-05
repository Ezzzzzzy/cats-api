import express from 'express'
import { show, getCat, createCat } from './controllers/catsController.js'
import { db } from './utils/db.js'
import { CatSeeder } from './seeder/catSeeder.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser'

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
app.use(express.urlencoded({ extended: false }))

app.get('/v1/cats', show)
app.get('/v1/cats/:catId', getCat)
app.post('/v1/cats', createCat)

app.listen(port, () => {
    console.log(`Cats app listening on port ${port}`)
})

export default app
