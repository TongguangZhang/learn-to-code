const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
    const num = _.random(0, 20);
    console.log(num);

    const hello = _.once(() => {
        console.log("hello");
    });
});

server.listen(3000, "localhost", () => {
    console.log("listening on 3000");
});
