require('dotenv').config();

const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors')
    fileUpload = require('express-fileupload'),
    app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(fileUpload());

require('./routes/users')(app);
require('./routes/workshops')(app);

const PORT = process.env.PORT || 6610;
app.listen(PORT);
