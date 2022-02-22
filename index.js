const express = require("express")
const port = process.env.PORT || 3000
const app = express()
const cors = require("cors");

app.use(cors())
// setup cors
app.get("/", (req, res) =>{
    res.send("Hello World 2")
})

// listen to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    }
)