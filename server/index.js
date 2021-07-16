const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../public', 'index.html'))
})



app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
  console.log(`Access: http://localhost:${PORT}`);
});
