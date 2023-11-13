const topics = require("../Models/topicmodel");
// const subjects = require("../Models/subjectmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

exports.addtopic = asyncHandler(async (req, res) => {
  console.log("hi");
  const { subject,topic,description} = req.body;
  const image = req.file.filename;
//   console.log(subject,topic, description);
  console.log(req.body)
  console.log(image);
  // console.log(req.file)
  // if (
  //   req.body.subject === "" ||
  //   req.body.description === "" ||
  //   req.file.image === ""
  // ) {
  //   res.send("All values are required");
  // } else {
  //   const existingadmin = await admin.findOne({ email: req.body.email });
  //   if (existingadmin) {
  //     console.log("Email already exist");
  //     res.status(400).json({ error: "Email already exist" });
  //   } else {
      
      // const image=req.files.filename;
      // console.log(image);
      const form = await topics.create({
        subject: subject,
        topic:topic, 
        description: description,
        image: image,
      });
      console.log(form);
      if (form) {
        res.send("Success");
      } else {
        res.send("Error");
      }
      console.log("form successfully added");
    
  
});


exports.listtopic= asyncHandler(async (req, res) => {
  try {
    const element = await topics.find();
    
    const data={
      id: element._id,
      subject: element.subject,
      topic: element.topic,
      description: element.description,
      image: element.image
    }
    
    
    res.json({element,data :data});

  } catch (error) {
    res.send("failed to list");
  }
});

// exports.listsubjects = asyncHandler(async (req, res) => {
//   const {id} = req.params;
//   try {
//     const element = await subjects.findById(id);
    
//     res.json(element);
//   } catch (error) {
//     res.send("failed to list");
//   }
// });

exports.updatetopic = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { subject,topic, description } = req.body;
  console.log(subject,topic,description);
  const updateFields = {
    subject:subject,
    topic:topic,
    description: description,
  };

  if (req.file) {
    console.log(req.file);
    // An image was uploaded, update the image path
    const image = req.file.filename; // Use the filename property
    updateFields.image = image;
  }
  try {
    const element = await topics.findByIdAndUpdate(
      id,
      updateFields, // Use the updateFields object directly
      // { new: true }
    );
    console.log(element);
    res.json(element);
  } catch (error) {
    console.error("Error updating admin:", error);
    res.status(500).json({ error: "Failed to update admin" });
  }
});


exports.detailtopic = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    

    const details = await topics.findById(id);

    if (!details) {
      return res.status(404).json({ error: "Admin not found" });
    }
    // const formattedImages = details.images.map((image) => `${image}`);
    const formattedDetails = {
      id: details._id,
      subject: details.subject,
      topic: details.topic,
      images: details.image,
      description: details.description,
  
     
      // images: details.images.map((image) => `${image}`)
    };
     console.log(formattedDetails)

    res.json(formattedDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

exports.deletetopic = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    await topics.findByIdAndDelete(id);
    res.json({ message: "Entry deleted successfully" });
  } catch (error) {
    console.error(error);
    res.json({ message: "Error deleting entry" });
  }
});
exports.listtopic2= asyncHandler(async (req, res) => {
  const { subject } = req.query;

  try {
    // Use the subject parameter to filter data from your database
    const filteredData = await topics.find({ subject });

    res.json(filteredData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


