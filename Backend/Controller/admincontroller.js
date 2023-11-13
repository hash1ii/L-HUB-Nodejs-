const admin = require("../Models/adminmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

exports.addadmin = asyncHandler(async (req, res) => {
  console.log("hi");
  const { name, email, contact, role , password ,description} = req.body;
  const image = req.file.filename;
  console.log(image);
  // console.log(req.file)
  if (
    req.body.name === "" ||
    req.body.email === "" ||
    req.body.contact === "" ||
    req.body.role === "" ||
    req.body.description === "" ||
    req.body.password === "" ||
    req.file.image === ""
  ) {
    res.send("All values are required");
  } else {
    const existingadmin = await admin.findOne({ email: req.body.email });
    if (existingadmin) {
      console.log("Email already exist");
      res.status(400).json({ error: "Email already exist" });
    } else {
      
      // const image=req.files.filename;
      // console.log(image);
      const form = await admin.create({
        name: name,
        email: email,
        contact: contact,
        role: role,
        password: password,
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
    }
  }
});
exports.logadmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const form = await admin.findOne({ email: email });

  const passwordmatch = await bcrypt.compare(password, form.password);

  if (form && passwordmatch) {
    const token = jwt.sign({ email: form.email }, "myjwtsecretkey");
  const userProfile={
  id: form._id,
  name: form.name,
  email: form.email,
  contact: form.contact,
  role: form.role,
  description: form.description,
  image: form.image
};


    res.status(200).json({
       token: token,
       admin: userProfile
       });
  } else {
    res.status(401).send("invalid user");
  }
  // console.log("login attempt");
});

exports.listadmin = asyncHandler(async (req, res) => {
  try {
    const element = await admin.find({});
    res.json(element);
  } catch (error) {
    res.send("failed to list");
  }
});

exports.updateadmin = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, contact, role, password } = req.body;
  console.log(name, email, contact, role, password);
  const updateFields = {
    name: name,
    email: email,
    contact: contact,
    role: role,
  };

  if (req.file) {
    console.log(req.file);
    // An image was uploaded, update the image path
    const image = req.file.filename; // Use the filename property
    updateFields.image = image;
  }
  try {
    const element = await admin.findByIdAndUpdate(
      id,
      updateFields, // Use the updateFields object directly
      // { new: true }
    );
    console.log(element);
    res.json({element, profile: updateFields});
  } catch (error) {
    console.error("Error updating admin:", error);
    res.status(500).json({ error: "Failed to update admin" });
  }
});
exports.updateadmin2 = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, contact, role, password ,description} = req.body;
  console.log(name, email, contact, role, password,description);
  const updateFields = {
    name: name,
    email: email,
    contact: contact,
    role: role,
    description : description
  };

  if (req.file) {
    console.log(req.file);
    // An image was uploaded, update the image path
    const image = req.file.filename; // Use the filename property
    updateFields.image = image;
  }
  try {
    const element = await admin.findByIdAndUpdate(
      id,
      updateFields, // Use the updateFields object directly
      // { new: true }
    );
    console.log(element);
    res.json({element, profile: updateFields});
  } catch (error) {
    console.error("Error updating admin:", error);
    res.status(500).json({ error: "Failed to update admin" });
  }
});


exports.detailsadmin = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const details = await admin.findById(id);

    if (!details) {
      return res.status(404).json({ error: "Admin not found" });
    }
    // const formattedImages = details.images.map((image) => `${image}`);
    const formattedDetails = {
      id: details._id,
      name: details.name,
      // images: formattedImages,
      description: details.description,
      email: details.email,
      contact: details.contact,
      role: details.role,
      password: details.password,
     
      // images: details.images.map((image) => `${image}`)
    };
    //  console.log(formattedProduct)

    res.json(formattedDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

exports.deleteadmin = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    await admin.findByIdAndDelete(id);
    res.json({ message: "Entry deleted successfully" });
  } catch (error) {
    console.error(error);
    res.json({ message: "Error deleting entry" });
  }
});
