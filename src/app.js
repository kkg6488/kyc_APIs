const express = require("express");
require("./db/conn");
const Contact = require("./models/contacts");
const contactRouter = require("./routers/contact");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(contactRouter);




app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})
