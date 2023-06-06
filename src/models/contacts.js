const mongoose = require("mongoose");
const validator = require("validator");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3
    },

    email: {
        type: String,
        require: true,
        unique: [true, "Email id already present"],
        // validate(value) {
        //     if (!validator.isEmail('value')) {
        //         throw new Error("Invalid Email")
        //     }
        // }

    },
    phone:{
        type:Number,
        min:10,
        require:true,
        unique:true
    },
    physical_address:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    business_name:{
        type:String,
        require:true
    },
    tax_id:{
        type:String,
        require:true
    
    },
    Business_address:{
        type:String,
        require:true
    },
    Business_category:{
        type:String,
        require:true
    },
    company_size:{
        type:Number,
        require:true
    },
    type_company:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true
    },
    created_date:{
        type:Number,
        require:true
    },
    created_by:{
        type:String,
        require:true
    },
    updated_date:{
        type:Date,
        require:true
    },
    updated_by:{
        type:String,
        require:true
    }
    
})

// creating a new collection
const Contact = new mongoose.model('Contact', contactSchema);

module.exports = Contact;