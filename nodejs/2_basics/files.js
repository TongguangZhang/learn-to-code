const fs = require("fs");

// // reading files

fs.readFile("./test_files/test1.txt", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

// writing files

fs.writeFile("./test_files/test2.txt", "hello", () => {
    console.log("file made");
});

// directories

if (!fs.existsSync("./test_files/assets")) {
    fs.mkdir("./test_files/assets", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("dir made");
    });
} else {
    fs.rmdir("./test_files/assets", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("dir removed");
    });
}

// removing files

if (fs.existsSync("./test_files/test2.txt")) {
    fs.unlink("./test_files/test2.txt", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("file deleted");
    });
}
