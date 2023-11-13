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
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import ivancik from "assets/images/content.jpg";
import { Grid, useMediaQuery,useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ViewContents() {
  const { id } = useParams("");
  const [msg, setMsg] = useState([]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    handleView(id);
  }, [id]);

  const handleView = async (id) => {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = token;
      const response = await axios.get(`http://localhost:8000/admin/detailviewcontent/${id}`);
      const selectedDetails = response.data.data;

      console.log(selectedDetails);
      setMsg(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

 

  const quillContentStyle = {
    color: "white",
    // Set the text color to white
  };


  const cardMinHeight = "700px"; 


  return (
    <Grid container  sx={{ width: isSmallScreen ? "100%" : "auto" }}>
      <Grid item xs={12}  sx={{ marginLeft: isSmallScreen ? "0" : "250px" , width: "100%" }}>
        <Card
          sx={{
            // left: isSmallScreen ? "100%": "250px",
            height: "auto",
            width: "100%",
            // width: isSmallScreen ? "100%" : "calc(100% -250px)",
            minHeight: cardMinHeight,
          }}
        >
          <SoftBox position="relative" height="100%" p={2}>
            <SoftBox
              display="flex"
              flexDirection="column"
              height="100%"
              py={2}
              px={2}
              borderRadius="lg"
              sx={{
                backgroundImage: ({
                  functions: { linearGradient, rgba },
                  palette: { gradients },
                }) =>
                  `${linearGradient(
                    rgba(gradients.dark.main, 0.8),
                    rgba(gradients.dark.state, 0.8)
                  )}, url(${ivancik})`,
                backgroundSize: "cover",
                minHeight: cardMinHeight,
              }}
            >
              <SoftBox p={2}>
                <SoftTypography
                  variant="h1"
                  color="white"
                  sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}
                >
                  {msg.title}
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={2}>
                <SoftTypography
                  variant="body1"
                  color="white"
                  sx={{
                    textAlign: "center",
                    "& .quill-content": quillContentStyle,
                    "& img, & video": {
                      maxWidth: "100%", // Ensure the media doesn't exceed its container
                      height: "auto",   // Maintain the aspect ratio of the media
                      borderRadius: "8px",
                      width:"50%" // Add border-radius if desired
                      // Add any other styles you want for images and videos
                    },
                  }} 
                  dangerouslySetInnerHTML={{ __html: msg.content }}
                
                >
                
                </SoftTypography>
              </SoftBox>
              {/* <SoftTypography
            component="a"
            href="#"
            variant="button"
            color="white"
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
            Read More
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </SoftTypography> */}
            </SoftBox>
          </SoftBox>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ViewContents;
