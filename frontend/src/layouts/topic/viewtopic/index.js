/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import ViewTopicTable from "layouts/topic/viewtopic/viewtopictable";
import SoftButton from "components/SoftButton";
import { Link, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Icon } from "@mui/material";
//images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import rocketWhite from "assets/images/illustrations/rocket-white.png";

function Tables() {
  const {id} =useParams()
  const [subject, setSubject] = useState("");
  const { columns, rows } = ViewTopicTable();
  const [msg, setMsg] = useState([]);
  

  useEffect(() => {
    getData();
    handleView(id);
    // getTopic()
  }, [id]);

  const getData = async () => {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = token;

      const response = await axios.get("http://localhost:8000/admin/listsubject");
      console.log(response);
      setMsg(response.data);
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        window.location.href = "/authentication/sign-in";
      }
    }
  };

// const getTopic = async()=>{
//   try {
//     const response =  axios.get(`http://localhost:8000/admin/detailtopic/${id}`);
//     const data = response.data;
//     setTopic({
//       topic: data.topic,
//       subject: data.subject,
//       description:data.description
//     })
   
//     console.log(state);
    
//   } catch (error) {
//     console.error(error);
//   }
// }
const handleView=async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/admin/detailtopic/${id}`);
    const selectedDetails = response.data;
   
    console.log(selectedDetails);
  
    setMsg(response.data);
  } catch (error) {
    console.error(error);
  }

}
  
 


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
      <SoftBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            {/* {msg && ( */}
            <SoftBox display="flex" flexDirection="column" height="100%">
              <SoftBox pt={1} mb={0.5}  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              
              </SoftBox>
              <SoftTypography variant="h1" fontWeight="bold" gutterBottom style={{ letterSpacing: '7px' , justifyContent: 'center', alignItems: 'center' , display: 'flex',textAlign:'center'}}>
               {msg.subject}
              </SoftTypography>
              <SoftBox mb={6}>
                <SoftTypography variant="h3" fontWeight="bold" color="text" style={{  letterSpacing: '7px' , justifyContent: 'center', alignItems: 'center' , display: 'flex',textAlign:'center'}}>
                {msg.topic}
                </SoftTypography>
                <SoftTypography variant="body2" color="text"  pt={1.5} style={{letterSpacing: '3px' , justifyContent: 'center', alignItems: 'center' , display: 'flex',textAlign:'center'}}>
                {msg.description}
                </SoftTypography>
              </SoftBox>
              <SoftTypography
                component="a"
                href="#"
                variant="button"
                color="text"
                fontWeight="medium"
                sx={{
                  mt: "auto",
                  mr: "auto",
                 
                  display: "inline-flex",
                  alignItems: "center",
                  cursor: "pointer",

                  "& .material-icons-round": {
                    fontSize: "1.125rem",
                    transform: `translate(2px, -0.5px)`,
                    transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
                  },

                  "&:hover .material-icons-round, &:focus  .material-icons-round": {
                    transform: `translate(6px, -0.5px)`,
                  },
                }}
              >
    
              </SoftTypography>
            </SoftBox>
           
          </Grid>
          <Grid item xs={12} lg={5} sx={{ position: "relative", ml: "auto" }}>
            {/* <SoftBox
              height="100%"
              width="100%"
              display="grid"
              justifyContent="center"
              alignItems="center"
              bgColor="info"
              borderRadius="lg"
              variant="gradient"
            > */}
              <SoftBox
                component="img"
                src={`http://localhost:8000/uploads/${msg.images}`}
                alt="subject"
                // display="block"
                // position="absolute"
                // left={0}
                width="100%"
                height="100%"
                style={{ borderRadius: '10px',objectFit:'cover' }} 
              />
              {/* <SoftBox component="img" src={rocketWhite} alt="rocket" width="200px" pt={3} /> */}
             {/* </SoftBox>  */}
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
             <SoftBox display="flex" justifyContent="center" alignItems="center" p={3}>
              <Link to={`/addcontent/${id}`}>
                 <SoftButton variant="gradient" color="info" style={{ width: "1135px" }}>
                   ADD CONTENT
                 </SoftButton>
               </Link>
            </SoftBox> 
              <Table columns={columns} rows={rows} />
            </SoftBox>
    </Card>
     
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Tables;
