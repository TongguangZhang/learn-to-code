const express = require("express");

// create app
const app = express();

// listen for requests
app.listen(3000);

// get requests
app.get("/", (req, res) => {
    // res.send("<p>home page</p>");
    res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
    // res.send("<p>about</p>");
    res.sendFile("./views/about.html", { root: __dirname });
});

// redirect
app.get("/about-us", (req, res) => {
    res.redirect("/about");
});

// 404 (default) must be at bottom - triggers for every request
app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", { root: __dirname });
});
