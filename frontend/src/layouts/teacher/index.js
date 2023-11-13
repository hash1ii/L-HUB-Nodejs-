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
import TeacherTableData from "layouts/teacher/data/teachertabledata";
import SoftButton from "components/SoftButton";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";

function Tables() {
  const [subject, setSubject] = useState("");
  const { columns, rows } = TeacherTableData({ subject });
  const [msg, setMsg] = useState([]);
  

  useEffect(() => {
    getData();
  }, []);

  const handleFilterChange = (e) => {
    const selectedSubject = e.target.value;
    setSubject(selectedSubject);
  };

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

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="center" alignItems="center" p={3}>
              <Link to={"/addteacher"}>
                <SoftButton variant="gradient" color="info" style={{ width: "1135px" }}>
                  ADD TEACHER
                </SoftButton>
                {/* <SoftTypography variant="h6">Authors table</SoftTypography> */}
              </Link>
            </SoftBox>
            <SoftBox>
              <Form.Group className="mb-3">
                <Form.Label style={{ fontSize: "14px", marginLeft: "23px" }}>Filter by Subject:</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={subject}
                  onChange={handleFilterChange}
                  style={{ fontSize: "12px", width: "1123px", marginLeft: "20px" }}
                >
                  <option value={""}>Subject</option>
                  {msg.map((item, index) => (
                    <option key={index}>{item.subject}</option>
                  ))}
                </Form.Select>
              </Form.Group>
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
              <Table columns={columns} rows={rows} />
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Tables;
