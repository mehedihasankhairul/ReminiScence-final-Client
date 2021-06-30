import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import toast from "react-hot-toast";
import swal from "sweetalert";
import ContentLoader from "../../ContentLoader/ContentLoader";


const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://fierce-brushlands-33291.herokuapp.com/blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((error) => toast.error(error.message));
  }, []);

  const handleDeleteBlog = (id) => {
    swal({
      title: "Do you want to Delete it?",
      text: "Permanently Delete this blog.",
      icon: "warning",
      buttons: [true, "Yes"],
      dangerMode: true,
    }).then((wantDelete) => {
      if (wantDelete) {
        const loading = toast.loading("Deleting...Please wait!");
        const removedBlog = blogs.filter((item) => item._id !== id);
        axios
          .delete(`https://fierce-brushlands-33291.herokuapp.com/delete/${id}`)
          .then((res) => {
            toast.dismiss(loading);
            if (res.data) {
              setBlogs(removedBlog);
              return swal(
                "Successfully Deleted!",
                "Your blog has been successfully deleted.",
                "success"
              );
            }
            swal(
              "Failed!",
              "Something went wrong! Please try again.",
              "error",
              { dangerMode: true }
            );
          })
          .catch((err) => {
            toast.dismiss(loading);
            swal(
              "Failed!",
              ` Please try again to Delete this...${err.massage}`,
              "error",
              { dangerMode: true }
            );
          });
      }
    });
  };

  return (
    <Container>
      <div className="shadow p-5 mt-24 pt-5 bg-white" style={{ borderRadius: "15px" }}>
        {blogs.length > 0 ? (
          <Table className="table-style" hover responsive>
            <thead className="bg-light">
              <tr>
                <th>Blog No</th>
                <th>Blog Title</th>
                <th>Action</th>
              </tr>
            </thead>
            {blogs.map((blog, index) => {
              return (
                <tbody key={blog._id} style={{ fontWeight: "500" }}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{blog.name}</td>
                    <td>
                      <Button
                        variant="outline-danger"
                        className="p-1 ml-3 mb-0"
                        onClick={() => handleDeleteBlog(blog._id)}
                      >
                        <FontAwesomeIcon icon={faTrash} className="mx-1" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        ) : (
          <ContentLoader />
        )}
      </div>
    </Container>
  );
};

export default BlogManagement;