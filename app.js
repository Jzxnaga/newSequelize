const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000
// const errorHandler = require('./middlewares/errorHandler')
var cors = require('cors')

app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json());

const apiRoutes = require('./routes/index.js')

app.get('/', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        data: {
            name: 'all local',
            version: '0.1.0'
        }
    });
});

app.use("/gsign",apiRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`);
});
