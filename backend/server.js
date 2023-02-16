const express = require('express')
require('dotenv').config()
const path = require('path')

const app = express()

if (process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(path.join(__dirname, "../"), 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}


app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port", process.env.PORT)
})