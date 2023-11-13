const viewtopics = require("../Models/viewtopicmodel");
const viewcontents = require("../Models/viewcontentmodel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

exports.addcontent = asyncHandler(async (req, res) => {
  console.log("hi");
  const {subjectId, title,content} = req.body;
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
      const form = await viewtopics.create({
        subjectId: subjectId,
        title: title, 
        content: content,
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


exports.listviewtopic= asyncHandler(async (req, res) => {
  const {id}= req.params
  try {
    const element = await viewtopics.find({subjectId:id});
    
    const data={
      id: element._id,
      title: element.title,
      content: element.content,
      image: element.image
    }
    
    
    res.json({element,data :data});

  } catch (error) {
    res.send("failed to list");
  }
});
exports.viewcontent= asyncHandler(async (req, res) => {
  const {id} = req.params;
  try {
    const element = await viewtopics.findById(id);
    
    const data={
      id: element._id,
      title: element.title,
      content: element.content,
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

exports.updateviewtopic = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title,content } = req.body;
  console.log(title,content);
  const updateFields = {
    title:title,
    content:content,
  };

  if (req.file) {
    console.log(req.file);
    // An image was uploaded, update the image path
    const image = req.file.filename; // Use the filename property
    updateFields.image = image;
  }
  try {
    const element = await viewtopics.findByIdAndUpdate(
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


exports.detailviewtopic = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    

    const details = await viewtopics.findById(id);

    if (!details) {
      return res.status(404).json({ error: "Admin not found" });
    }
    // const formattedImages = details.images.map((image) => `${image}`);
    const formattedDetails = {
      id: details._id,
      title: details.title,
      images: details.image,
      content: details.content,
  
     
      // images: details.images.map((image) => `${image}`)
    };
     console.log(formattedDetails)

    res.json(formattedDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

exports.
deleteviewtopic = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    await viewtopics.findByIdAndDelete(id);
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


