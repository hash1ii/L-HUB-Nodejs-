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

function data ({subject}) {
  const [msg, setMsg] = useState([]);
  const navigate = useNavigate("");

const Name=({ image, name,subject}) =>(
 
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>

      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {subject}
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
const Age = ({ age }) =>(
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {age}
      </SoftTypography>
    </SoftBox>
)
const Qualification = ({ qualification}) =>(
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {qualification}
      </SoftTypography>
    </SoftBox>
)

useEffect(() => {
  
  getFilter();
  console.log(subject);
}, [subject]);


const getFilter = async () => {
  try {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = token;
    if(!subject){
      const response = await axios.get('http://localhost:8000/admin/listteacher');
    console.log("1",response.data.element);
    setMsg(response.data.element);
    }else{
      const response = await axios.get(`http://localhost:8000/admin/listteacher2?subject=${subject}`);
    console.log(response);
    setMsg(response.data);
    }

  } catch (error) {
    console.log(error);
    if(error.response.status === 401) {
      window.location.href = "/authentication/sign-in"
    }
  }
};

const handleEdit = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/admin/detailsteacher/${id}`);
    const selectedDetails = response.data;
    const state = {
      id,
      name: selectedDetails.name,
      email: selectedDetails.email,
      contact: selectedDetails.contact,
      age: selectedDetails.age,
      qualification: selectedDetails.qualification,
      subject: selectedDetails.subject,
      password: selectedDetails.password,
      image: selectedDetails.image
      
    };
    console.log(state);
    navigate(`/editteacher/${id}`, { state });
  } catch (error) {
    console.error(error);
  }
};
const deleteEntry = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/admin/deleteteacher/${id}`);
    setMsg((prevList)=>prevList.filter((item)=>item._id !== id));
  } catch (error) {
    console.log(error);
  }
};


const handleView=async(id)=>{

  navigate(`/viewteacher/${id}`);
}


return {
  columns: [
    { name: "name", align: "left" },
    { name: "email", align: "center" },
    { name: "contact", align: "center" },
    { name: "age", align: "center" },
    { name: "qualification", align: "center" },
    { name: "view", align: "center" },
    { name: "edit", align: "center" },
    { name: "delete", align: "center" },
  ],

  rows:msg.map((item)=>({
  
      name: <Name image={`http://localhost:8000/uploads/${item.image}`} name={item.name} subject={item.subject} />,
      email: <Email email={item.email} />,
      contact: <Contact contact={item.contact} />,
      age: <Age age={item.age} />,
      qualification: <Qualification qualification={item.qualification} />,
     

      view: (
        <SoftButton variant="gradient" color="primary"  onClick={() => handleView(item._id)}>
        View
      </SoftButton>
      ),

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
