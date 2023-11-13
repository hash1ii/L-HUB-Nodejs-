import CoverLayout from "layouts/authentication/components/CoverLayout";
import { Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PlainLayout from "layouts/authentication/components/PlainLayout";
import bgimage from "assets/images/subject.jpg";
import { green, grey } from "@mui/material/colors";

const AddTopic = () => {
  const [id, setId] = useState("");
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const navigate = useNavigate("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const location = useLocation();
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  const [userDetails, setUserDetails] = useState(userProfile);
  const [msg, setMsg] = useState([]);
  const { state } = location;

  useEffect(() => {
    console.log(state);
    if (state) {
      const { id, subject, topic, description, image } = state;

      console.log(state);
      setId(id);
      setSubject(subject || "");
      setTopic(topic || "");
      setDescription(description || "");
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

    if ( !subject ||!topic || !description || !image) {
      alert("Please fill in all required fields.");
      return;
    }
    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("topic", topic);
    formData.append("description", description);
    formData.append("image", image);

    console.log(subject);
    console.log(description);
    if (id) {
      editHandle(id, formData);
    } else {
      axios
        .post("http://localhost:8000/admin/addtopic", formData)
        .then((response) => {
          console.log(response);
          navigate("/topic");
        })

        .catch((error) => {
          console.error(error);
          if (error.response && error.response.status === 400) {
            setError(error.response.data.error);
          }
        });
    }
  };
  const editHandle = async (id, formData) => {
    try {
      const response = await axios.put(`http://localhost:8000/admin/updatetopic/${id}`, formData);

      setId(null);
      navigate("/topic");
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

  return (
    <PlainLayout image={bgimage}>
      <div className="text-white">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Select aria-label="Default select example"value={subject} onChange={(e) => setSubject(e.target.value)} >
              
                  <option>Subject</option>
                  {msg.map((item, index) => (
                  <option  key={index} >{item.subject}</option>
                  ))}
              
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Topic</Form.Label>
            <Form.Control
              type="text"
              placeholder="Topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4} // You can adjust the number of rows as needed
              cols={50}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Insert Image</Form.Label>
            <Form.Control
              type="file"
              placeholder="Upload Your Photo"
              accept="image/*"
              onChange={handleImage}
            />
          </Form.Group>

          <div className="d-flex justify-content-center align-items-center">
            <Button class="btn btn-primary" type="submit">
              {id ? "Update" : "Add Topic"}
            </Button>
          </div>
        </Form>
      </div>
    </PlainLayout>
  );
};

export default AddTopic;
