const subjects = require("../Models/subjectmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

exports.addsubject = asyncHandler(async (req, res) => {
  console.log("hi");
  const { subject,description} = req.body;
  const image = req.file.filename;
  console.log(subject, description);
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
      const form = await subjects.create({
        subject: subject,
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


exports.listsubject = asyncHandler(async (req, res) => {
  try {
    const element = await subjects.find();
    res.json(element);
  } catch (error) {
    res.send("failed to list");
  }
});

exports.updatesubject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { subject, description } = req.body;
  console.log(subject,description);
  const updateFields = {
    subject:subject,
    description: description,
  };

  if (req.file) {
    console.log(req.file);
    // An image was uploaded, update the image path
    const image = req.file.filename; // Use the filename property
    updateFields.image = image;
  }
  try {
    const element = await subjects.findByIdAndUpdate(
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


exports.detailsubject = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const details = await subjects.findById(id);

    if (!details) {
      return res.status(404).json({ error: "Admin not found" });
    }
    // const formattedImages = details.images.map((image) => `${image}`);
    const formattedDetails = {
      id: details._id,
      subject: details.subject,
      // images: formattedImages,
      description: details.description,
  
     
      // images: details.images.map((image) => `${image}`)
    };
    //  console.log(formattedProduct)

    res.json(formattedDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

exports.deletesubject = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    await subjects.findByIdAndDelete(id);
    res.json({ message: "Entry deleted successfully" });
  } catch (error) {
    console.error(error);
    res.json({ message: "Error deleting entry" });
  }
});
