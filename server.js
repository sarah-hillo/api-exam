const express = require('express') // require the express package
const app = express() // initialize your express app instance
 require('dotenv').config();
const express = require('express') // require the express package
const cors = require('cors');
const axios = require('axios');
const app = express() 
app.use(cors()) 





// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})
app.get('./Flowers',getFlowers);
app.get('/getFav',getFav);
app.post('/createFav',createFav);
app.put('/updateFav',updateFav);
app.delete('/deleteFav',deleteFav);


app.listen(3000) // kick start the express server to work