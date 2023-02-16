const express = require('express');
const app = express();
/* my tests
app.get("/",(req,res) => {
    let reqUrl = req.url;
    res.send(reqUrl + "")
})
*/
app.get("/api", (req, res) => {
    res.json({"users": [
        {name: "Mr. Garfield", img: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"},
        {name: "Mr. Fiverss", img: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"},
        {name: "Garry", img: "https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_1280.jpg"}
    ]
    }
    )
})

app.listen(8080, () => {
    console.log("server started listening on port 8080");
})