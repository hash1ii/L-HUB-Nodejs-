import CoverLayout from 'layouts/authentication/components/CoverLayout';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'; 
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PlainLayout from "layouts/authentication/components/PlainLayout"
import bgimage from 'assets/images/subject.jpg'
const AddTeacher = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const navigate= useNavigate('');
    const [password , setPassword] = useState("");
    const [image, setImage] = useState(null);
    const [role , setRole] = useState("");
    const [error, setError] = useState("");
    const [editingId, setEditingId] = useState(null);
    const location = useLocation();
    const userProfile= JSON.parse(localStorage.getItem("userProfile"));
    const [userDetails, setUserDetails]= useState(userProfile);
    const[age,setAge]=useState("")
    const[qualification,setQualification]=useState("")
    const[subject,setSubject]=useState("")
    const [msg, setMsg] = useState([]);
    const { state } = location;

 
  useEffect(() => {

    console.log(state);
    getData();
    if (state) {
      const {
        id,
        name,
        email,
        contact,
        age,
        qualification,
        subject,
        image
      } = state;

  console.log(state);
      setId(id); // Set the id in the state variable
      setName(name || "");
      setEmail(email || "");
      setContact(contact || "");
      setAge(age || "");
      setQualification(qualification || "");
      setSubject(subject || "");
      setPassword(password || "");
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

         if (!name || !email || !contact || !age || !qualification||  !subject||  !image) {
    alert('Please fill in all required fields.');
    return;
  }
        const formData = new FormData();
          formData.append ('name', name);
          formData.append ('email', email);
          formData.append  ('contact', contact);
          formData.append  ('age', age);
          formData.append  ('qualification',qualification);
          formData.append  ('subject',subject);
          formData.append  ('password', password);
          formData.append ('image',image);
        
        console.log(name);
        if (id) {
      
          editHandle(id, formData);
        } else {
        
          

        axios
        .post('http://localhost:8000/admin/addteacher', formData)
        .then((response) => {
          console.log(response);
          navigate('/teacher');
        })
       
        .catch((error) => {
          console.error(error);
          if (error.response && error.response.status === 400) {
            setError(error.response.data.error);
          } else if(error.response.status === 405) {
            setError("Please fill in all required fields");
          }
        });
        }
    }
    const editHandle = async (id, formData) => {
      try {
        const response = await axios.put(`http://localhost:8000/admin/updateteacher/${id}`, formData);
        console.log(response);
        console.log(response.data);
        
        setId(null);
        navigate('/teacher');
      } catch (error) {
        console.log(error);
      }
    };
    

    const handleImage=(e) => {
      const selectedImage=e.target.files[0];
      setImage(selectedImage);
    }


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
    <div  className='text-white'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name"  value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {error && <p style={{color: "red" ,fontSize:"10px"}}>{error}</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="PhoneNumber" value={contact} onChange={(e) => setContact(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Qualification</Form.Label>
          <Form.Control type="text" placeholder="Qualification" value={qualification} onChange={(e) => setQualification(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Subject</Form.Label>
        <Form.Select aria-label="Default select example"value={subject} onChange={(e) => setSubject(e.target.value)} >
              
              <option>Subject</option>
              {msg.map((item, index) => (
              <option  key={index} >{item.subject}</option>
              ))}
          
        </Form.Select>
        </Form.Group>
        {id?"":
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        }
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Insert Image</Form.Label>
          <Form.Control type="file" placeholder="Upload Your Photo" accept='image/*'  onChange={handleImage}   />
        </Form.Group>
    
        <div className="d-flex justify-content-center align-items-center" >
        <Button class="btn btn-primary" type="submit">
        {id ? 'Update' : 'Add Teacher'}

        </Button>
</div>

      </Form>
    </div>
    </PlainLayout>
  );
};

export default AddTeacher;
