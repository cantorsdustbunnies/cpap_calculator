const express = require('express');
const app = express();

require('dotenv').config();
require('./server_startup/db')();
require('./server_startup/routes')(app);
require('./server_startup/client')(app, __dirname);

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`server now taking requests on port ${port}\nReact app should be visible on first request`);
});
