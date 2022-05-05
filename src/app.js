import express from 'express'
import { show } from './controllers/cats.js'
let port = process.env.NODE_PORT || "3000";

let app = express()


app.get('/', show)



app.listen(port, () => {
    console.log(` Cats app listening on port ${port}`)
})

export default app
