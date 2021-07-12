const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + "/../client/public"));

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
  console.log(`Access: http://localhost:${PORT}`);
});
