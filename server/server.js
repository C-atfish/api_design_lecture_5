import express from "express";
import * as path from "path";



const app = express();


app.get("/api/name", (req, res) => {

    res.json({
        name: "lil j",
        age: 25
    })

})


app.use(express.static("../client/dist"))

app.use((req, res) => {

    res.sendFile(path.resolve("../client/dist/index.html"))
})




app.listen(process.env.PORT || 3001, () => {
    console.log("Server started at port 3001")

})
