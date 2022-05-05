import express from 'express'
let port = process.env.NODE_PORT || "3000";

let app = express()


app.get('/', (req, res) => {
    res.send({
        "body": "Hello World!"
    })
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

export default app
