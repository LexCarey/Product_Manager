const express = require('express');
const app = express();
const cors = require('cors');
require('./config/mongoose.config');
app.use(cors(), express.json(), express.urlencoded({ extended: true }))
const port = 8000;


//Routes
require('./routes/product.routes')(app);


//Port
app.listen(port, () => console.log(`Listening on port: ${port}`) );