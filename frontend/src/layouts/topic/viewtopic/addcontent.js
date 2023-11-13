import CoverLayout from "layouts/authentication/components/CoverLayout";
import { Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PlainLayout from "layouts/authentication/components/PlainLayout2";
import bgimage from "assets/images/subject.jpg";
import { green, grey } from "@mui/material/colors";
import 'react-quill/dist/quill.snow.css'; // Import the styles
import ReactQuill from 'react-quill'; // Im

const AddContent = () => {
  // const [uid, setId] = useState("");
  const [eid, setEid] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const location = useLocation();
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  const [userDetails, setUserDetails] = useState(userProfile);
  const [msg, setMsg] = useState([]);
  const { state } = location;
  const {id} =useParams();

  useEffect(() => {
    console.log(state);
    if (state) {
      const { id, eid, title, content, image } = state;

      console.log(state);
      // setId(id),
      setEid(eid);
      setTitle(title || "");
   setContent(content || "");
      setImage(image || "");

      // if (image) {
      //   setImage([image]);

      //   const previewImages = [];
      //   for (let i = 0; i < image.length; i++) {
      //     const imageURL = `http://localhost:8000/uploads/${image[i]}`;
      //     previewImages.push(imageURL);
      //   }
      //   setImagePreview(previewImages);
      //   // setImage([image]);
      //   // setImagePreview([`http://localhost:8000/uploads/${image}`]);
      // } else {
      //   setImage([]);
      //   setImagePreview([]);
      // }
    }
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content || !image) {
      alert("Please fill in all required fields.");
      return;
    }
    const formData = new FormData();

    formData.append("subjectId", id);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);

    console.log(id);
    console.log(content);
    if (eid) {
      editHandle(eid, formData);
    } else {
      axios
        .post("http://localhost:8000/admin/addcontent", formData)
        .then((response) => {
          console.log(response);
          navigate(`/viewtopic/${id}`);
        })

        .catch((error) => {
          console.error(error);
          if (error.response && error.response.status === 400) {
            setError(error.response.data.error);
          }
        });
    }
  };
  const editHandle = async (eid, formData) => {
    try {
      const response = await axios.put(`http://localhost:8000/admin/updateviewtopic/${eid}`, formData);

      setEid(null);
      navigate(`/viewtopic/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImage = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = token;

      const response = await axios.get("http://localhost:8000/admin/listsubject");
      console.log("1", response.data);
      setMsg(response.data);
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        window.location.href = "/authentication/sign-in";
      }
    }
  };

  
  const editorStyle = {
    backgroundColor: '#ffffff',
    // border: '1px solid #ced4da',
    borderRadius: '0.25rem',
    marginTop: '0.375rem',
    marginBottom: '10px', 
    minHeight: '500px', 
    padding: '10px', 
    color: '#000000',
    width: '100%', 
  };
  const responsiveStyles = {
    formContainer: {
      width: '100%',
      maxWidth: '1425px',
      margin: 'auto',
     
    },
  };
  const responsiveFormStyle = {
    width: '100%',
  };

  const modules = {
    toolbar: {
      container: [
        // [{ size: ["small", false, "large", "huge"] }], // Use 'size' to create a dropdown menu
        [{ header: [1, 2, 3, false] }], // Use 'size' to create a dropdown menu
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "video"],
      ],
    },
  };
  
 

  return (
    <PlainLayout image={bgimage}>
      <div className="text-white form-fullwidth"style={responsiveStyles.formContainer}>
        <Form onSubmit={handleSubmit}style={responsiveFormStyle} >

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: '100%' }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Content</Form.Label>
            <ReactQuill
              theme="snow"
              modules={modules}
              value={content}
              onChange={setContent}
              style={editorStyle}
              // formats={formats}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Insert Image</Form.Label>
            <Form.Control
              type="file"
              placeholder="Upload Your Photo"
              accept="image/*"
              onChange={handleImage}
              style={{ width: '100%' }} 
            />
          </Form.Group>

          <div className="d-flex justify-content-center align-items-center">
            <Button class="btn btn-primary" type="submit">
              {eid ? "Update" : "Add Content"}
            </Button>
          </div>
        </Form>
      </div>
    </PlainLayout>
  );
};

export default AddContent;
