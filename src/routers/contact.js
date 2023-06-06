const express = require("express");
const router = new express.Router();
const Contact = require("../models/contacts");


router.get("/home", (req, res) =>{
    res.send("Welcome to home page");
});

module.exports = router;

router.get("/contacts", async(req, res) =>{
  try{
    const contactsData = await Contact.find();
    res.send(contactsData);
  }catch(error){
    res.status(400).send(error);
  }
})

// to send data to a server to create/update a resource.

router.post("/contact", async (req, res) => {
    try {
        const user = new Contact(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);

    } catch (error) {
        res.status(400).send(error);
    }

})
// To send data to a server to create/update a resource.
router.put("/contact/:id", async (req, res) => {
    const { id } = req.params;
    
    try {
      const updatedContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
      
      if (!updatedContact) {
        return res.status(404).send({ error: "Contact not found" });
      }
      
      res.send(updatedContact);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  // for partial modification
router.patch("/contacts/:id",async(req,res) => {
  try{
      const _id = req.params.id;
      const updateContact = await Contact.findByIdAndUpdate(_id, req.body, {
       new:true   
      });
      res.send(updateContact);
  }catch(error){
      res.status(404).send(error);
  }
})
// for deleting the collection
  router.delete("/contacts/:id", async(req,res) =>{
    try{
        const id = req.params.id;
        const deleteContact = await Contact.findByIdAndDelete(id);
        if(!id){
            return res.status(400).send();
        }
        res.send(deleteContact);
    }catch(error){
        res.status(500).send(error);
    }
})