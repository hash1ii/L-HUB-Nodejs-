import CoverLayout from 'layouts/authentication/components/CoverLayout';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'; 
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PlainLayout from 'layouts/authentication/components/PlainLayout';
import bgimage from 'assets/images/ft.jpg'
const AddAdmin = () => {
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

    const { state } = location;

 
  useEffect(() => {
    console.log(state);
    if (state) {
      const {
        id,
        name,
        email,
        contact,
        role,
        password,
        image
      } = state;

  console.log(state);
      setId(id); // Set the id in the state variable
      setName(name || "");
      setEmail(email || "");
      setContact(contact || "");
      setRole(role || "");
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

         if (!name || !email || !contact || !role || !password || !image) {
    alert('Please fill in all required fields.');
    return;
  }
        const formData = new FormData();
          formData.append ('name', name);
          formData.append ('email', email);
          formData.append  ('contact', contact);
          formData.append  ('role', role);
          formData.append  ('password', password);
          formData.append ('image',image);
        
        console.log(name);
        if (id) {
      
          editHandle(id, formData);
        } else {
        
          

        axios
        .post('http://localhost:8000/admin/addadmin', formData)
        .then((response) => {
          console.log(response);
          navigate('/admin');
        })
       
        .catch((error) => {
          console.error(error);
          if (error.response && error.response.status === 400) {
            setError(error.response.data.error);
          }
        });
        }
    }
    const editHandle = async (id, formData) => {
      try {
        const response = await axios.put(`http://localhost:8000/admin/updateadmin/${id}`, formData);
        console.log(response);
        console.log(response.data.profile);
    
        const updatedUserData = response.data.profile;
    
        const userProfile = {

          id,
          name: updatedUserData.name,
          email: updatedUserData.email,
          contact: updatedUserData.contact,
          role: updatedUserData.role,
          description: updatedUserData.description,
          image: updatedUserData.image,
        };
        if (userDetails.id === userProfile.id) {
          localStorage.setItem("userProfile", JSON.stringify(userProfile));
        }
        setId(null);
        navigate('/admin');
      } catch (error) {
        console.log(error);
      }
    };
    

    const handleImage=(e) => {
      const selectedImage=e.target.files[0];
      setImage(selectedImage);
    }

    
  
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
          <Form.Label>Role</Form.Label>
          <Form.Control type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} />
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
        {id ? 'Update' : 'Add Admin'}

        </Button>
</div>

      </Form>
    </div>
    </PlainLayout>
  );
};

export default AddAdmin;
