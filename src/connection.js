const express = require("express");
require("dotenv").config(); 
const routerApi = require('../routes/stores.router.js');
const cors = require('cors');

const mongoose = require("mongoose");
const app = express();

app.use(express.json());


app.listen(process.env.BACKEND_PORT, () => console.log("Server is running"))

const whiteList = [process.env.BACKEND_DOMAIN, process.env.FRONTEND_DOMAIN ]
const options = {
  origin: (origin,callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null,true)
    } else {
      callback(new Error('No permitido'))
    }
  }
}
app.use(cors(options));

mongoose.connect(
    process.env.MONGODB_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use('/stores', routerApi)


// const stud = new Student({
//     roll_no: 1001,
//     name: 'Madison Hyde',
//     year: 3,
//     subjects: ['DBMS', 'OS', 'Graph Theory', 'Internet Programming']
// });
// stud.save().then(() => console.log("One entry added"));


