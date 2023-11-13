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
import Form from 'react-bootstrap/Form';



function data ({subject}) {
  const [msg, setMsg] = useState([]);
  const navigate = useNavigate("");

const Subject=({ image,subject}) =>(
 
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={subject} size="sm" variant="rounded" />
      </SoftBox>

      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {subject}
        </SoftTypography>
        {/* <SoftTypography variant="caption" color="secondary">
          {role}
        </SoftTypography> */}
      </SoftBox>
    </SoftBox>

)

// const Email = ({ email }) =>(
//     <SoftBox display="flex" flexDirection="column">
//       <SoftTypography variant="caption" color="secondary">
//           {email}
//         </SoftTypography>
//     </SoftBox>
// )

const Topic = ({ topic }) =>(
  <SoftBox display="flex" flexDirection="column">
    <SoftTypography variant="caption" fontWeight="medium" color="text">
      {topic}
    </SoftTypography>
  </SoftBox>
)

const Description = ({ description }) =>(
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {description}
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
      const response = await axios.get('http://localhost:8000/admin/listtopic');
    console.log("1",response.data.element);
    setMsg(response.data.element);
    }else{
      const response = await axios.get(`http://localhost:8000/admin/listtopic2?subject=${subject}`);
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
    const response = await axios.get(`http://localhost:8000/admin/detailtopic/${id}`);
    const selectedDetails = response.data;
    const state = {
      id,
      subject: selectedDetails.subject,
      topic: selectedDetails.topic,
      description: selectedDetails.description,
      image: selectedDetails.image
      
    };
    console.log(state);
    navigate(`/edittopic/${id}`, { state });
  } catch (error) {
    console.error(error);
  }
};
const handleView=async (id, subject) => {

  navigate(`/viewtopic/${id}`,subject);
}





const deleteEntry = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/admin/deletetopic/${id}`);
    setMsg((prevList)=>prevList.filter((item)=>item._id !== id));
  } catch (error) {
    console.log(error);
  }
};


return {

  columns: [
    { name: "subject", align: "left" },
    { name: "topic", align: "center" },
    { name: "description", align: "center" },
    { name: "view", align: "center" },
    { name: "edit", align: "center" },
    { name: "delete", align: "center" },
  ],

 



  rows:msg.map((item)=>({
  
    subject: (() => {
      return <Subject image={`http://localhost:8000/uploads/${item.image}`} subject={item.subject}/>;
    })(),
      topic: < Topic topic={item.topic} />,
      description: <Description description={item.description} />,
     

      view: (
        <SoftButton variant="gradient" color="dark"  onClick={() => handleView(item._id, item.subject)}>
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
