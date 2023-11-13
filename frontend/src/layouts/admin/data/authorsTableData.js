/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";


// Images
import team2 from "assets/images/team-2.jpg";
import SoftButton from "components/SoftButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function data () {
  const [msg, setMsg] = useState([]);
  const navigate = useNavigate("");

const Name=({ image, name,role}) =>(
 
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>

      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {role}
        </SoftTypography>
      </SoftBox>
    </SoftBox>

)

const Email = ({ email }) =>(
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
    </SoftBox>
)
const Contact = ({ contact }) =>(
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {contact}
      </SoftTypography>
    </SoftBox>
)

useEffect(() => {
  getData();
}, []);

const getData = async () => {
  try {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = token;

    const response = await axios.get('http://localhost:8000/admin/listadmin');
    console.log(response);
    setMsg(response.data);
  } catch (error) {
    console.log(error);
    if(error.response.status === 401) {
      window.location.href = "/authentication/sign-in"
    }
  }
};

const handleEdit = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/admin/detailsadmin/${id}`);
    const selectedDetails = response.data;
    const state = {
      id,
      name: selectedDetails.name,
      email: selectedDetails.email,
      contact: selectedDetails.contact,
      role: selectedDetails.role,
      password: selectedDetails.password,
      image: selectedDetails.image
      
    };
    console.log(state);
    navigate(`/editadmin/${id}`, { state });
  } catch (error) {
    console.error(error);
  }
};
const deleteEntry = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/admin/deleteadmin/${id}`);
    setMsg((prevList)=>prevList.filter((item)=>item._id !== id));
  } catch (error) {
    console.log(error);
  }
};


return {
  columns: [
    { name: "name", align: "left" },
    { name: "email", align: "center" },
    { name: "contact", align: "center" },
    { name: "edit", align: "center" },
    { name: "delete", align: "center" },
  ],

  rows:msg.map((item)=>({
  
      name: <Name image={`http://localhost:8000/uploads/${item.image}`} name={item.name} role={item.role} />,
      email: <Email email={item.email} />,
      contact: <Contact contact={item.contact} />,
     

      edit: (
        <SoftButton variant="gradient" color="success"  onClick={() => handleEdit(item._id)}>
        Edit
      </SoftButton>
      ),
      delete: (
        <SoftButton variant="gradient" color="warning" onClick={() => deleteEntry(item._id)}>
          Delete
        </SoftButton>
      ),
     
}))
};
};

export default data;
