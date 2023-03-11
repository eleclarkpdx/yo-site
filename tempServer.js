const express = require("express")
const app = express()
const port = 5173

app.listen(port, () => console.log("server has started on port " + port))

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.status(200).send("hi")
})