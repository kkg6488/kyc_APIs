const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/KYC", {
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection is sucessful");
}).catch(error => {
    console.log("connection error");
})