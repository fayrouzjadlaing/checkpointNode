const fs = require("fs");
fs.rename("welcome.txt", "hello.txt", function (err) {
  if (err) throw err;
  console.log("File Renamed.");
});
fs.readFile("welcome.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
});
