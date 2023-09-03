const fs = require("fs");

const readStream = fs.createReadStream("./test_files/test3.txt");
const writeStream = fs.createWriteStream("./test_files/test4.txt");

readStream.on("data", (chunk) => {
    console.log("NEW CHUNK");
    console.log(chunk.toString());
    writeStream.write("\n\n------------NEW CHUNK------------\n\n");
    writeStream.write(chunk);
});

// // piping
// readStream.pipe(writeStream);
