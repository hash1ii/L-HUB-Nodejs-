/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";


// Images
import team2 from "assets/images/team-2.jpg";
import SoftButton from "components/SoftButton";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';



function data () {
  const [msg, setMsg] = useState([]);
  const navigate = useNavigate("");
  const {id}=useParams();

const Title=({ image,title}) =>(
 
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={title} size="sm" variant="rounded" />
      </SoftBox>

      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {title}
        </SoftTypography>
      </SoftBox>
    </SoftBox>

)

// const Content = ({ content }) =>(
//     <SoftBox display="flex" flexDirection="column">
//       <SoftTypography variant="caption" fontWeight="medium" color="text">
//         {content}
//       </SoftTypography>
//     </SoftBox>
// )



const getData = useCallback(async () => {
  try {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = token;

    const response = await axios.get(`http://localhost:8000/admin/listviewtopic/${id}`);
    console.log("1111",response.data.element);
    setMsg(response.data.element);
  } catch (error) {
    console.log(error);
    if(error.response.status === 401) {
      window.location.href = "/authentication/sign-in"
    }
  }
},[id]);

useEffect(() => {
  getData();
}, [getData]);


const handleEdit = async (eid) => {
  console.log(eid);
    console.log("Navigating to edit:", eid);
  try {
    const response = await axios.get(`http://localhost:8000/admin/detailviewtopic/${eid}`);
    const selectedDetails = response.data;
    const state = {
      id,
      eid,
      title: selectedDetails.title,
      content: selectedDetails.content,
      image: selectedDetails.image
      
    };
    console.log(state);
    navigate(`/editcontent/${id}/${eid}`, { state });
  } catch (error) {
    console.error(error);
  }
};
const handleView=async (id, subject) => {
  console.log("Navigating to view:", id);
  navigate(`/viewcontent/${id}/${id}`,subject);
}




const deleteEntry = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/admin/deleteviewtopic/${id}`);
    setMsg((prevList)=>prevList.filter((item)=>item._id !== id));
  } catch (error) {
    console.log(error);
  }
};


return {

  columns: [
   
    { name: "title", align: "left" },
    { name: "content", align: "center" },
    { name: "edit", align: "center" },
    { name: "delete", align: "center" },
  ],


  rows:msg.map((item)=>({
  
    title: (() => {
      return <Title image={`http://localhost:8000/uploads/${item.image}`} title={item.title}/>;
    })(),
      // content: <Content content={item.content} />,
     content:(
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
