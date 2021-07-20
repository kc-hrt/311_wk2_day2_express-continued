const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

// routes
app.use(require('./routes/comments'));
app.use(require('./routes/contacts'));
app.use(require('./routes/products'));
app.use(require('./routes/vehicles'));

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
