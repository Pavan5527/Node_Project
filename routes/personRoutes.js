const express = require("express");
const router = express.Router();
const Person = require("./../models/person");

//insert the record
router.post("/", async (req, res) => {
  try {
    const data = req.body; //assuming thr request body contains person data

    //create a new person document using mongoose model
    const newPerson = new Person(data);

    //save the new person to the DB
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Internal server error" });
  }
});

//fetch the record
//get method to get the person
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Internal server error" });
  }
});

//to fetch the data based on parameters
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("response feteched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Internal server error" });
  }
});

//update the record
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //extract id from the URL paramater
    const updatePersonData = req.body; //extracting updated data from person

    const response = await Person.findByIdAndUpdate(
      personId,
      updatePersonData,
      {
        new: true, //return the updated document instead of old one
        runValidators: true,
      }
    );

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

//delete the record
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //extract id from the URL paramater
    const response = await Person.findByIdAndRemove(personId);

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("data deleted");
    res.status(200).json({ message: 'person deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
