import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Sidebar from '../../../components/Dashboard/Sidebar/Sidebar';
import AddBlog from '../../../components/Dashboard/AddBlog/AddBlog';
import BlogManagement from '../../../components/Dashboard/BlogManagement/BlogManagement';
import UserProfile from '../../../components/Dashboard/UserProfile/UserProfile';


const Dashboard = () => {
  const { panel } = useParams();
  return (
    <>
      <Row>
        <Col md={2}>
          <Sidebar panel={panel} />
        </Col>
        <Col md={9}>
          <Container>
            {
              // Sidebar items
              panel === "profile" ? (
                <UserProfile />
              ) : panel === "addBlog" ? (
                <AddBlog />
              ) : panel === "blog-management" ? (
                <BlogManagement/>
              ) : null
            }
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;