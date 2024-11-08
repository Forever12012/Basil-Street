import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/newsletter", {
        email,
      });
      toast.success(response.data.message);

      setEmail(""); // Clear the input field
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      toast.error("Failed to subscribe to the newsletter.");
    }
  };

  return (
    <>
      <div className="container-xxl bg-white p-0">
        <div
          className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                  Company
                </h4>
                <Link className="btn btn-link" to={"/about"}>
                  About Us
                </Link>
                <Link to={"/booking"} className="btn btn-link">
                  Contact Us
                </Link>
                <Link to={"/booking"} className="btn btn-link">
                  Reservation
                </Link>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                  Contact
                </h4>
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt me-3" />
                  123 Street, Pune, India
                </p>
                <p className="mb-2">
                  <i className="fa fa-phone-alt me-3" />
                  +91 9242141241
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope me-3" />
                  info@example.com
                </p>
                <div className="d-flex pt-2">
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-youtube" />
                  </a>
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                  Opening
                </h4>
                <h5 className="text-light fw-normal">Monday - Saturday</h5>
                <p>09AM - 09PM</p>
                <h5 className="text-light fw-normal">Sunday</h5>
                <p>10AM - 08PM</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                  Newsletter
                </h4>
                <p>Subscribe to our newsletter for latest updates.</p>
                <form onSubmit={handleSubmit}>
                  <div
                    className="position-relative mx-auto"
                    style={{ maxWidth: 600 }}
                  >
                    <input
                      className="form-control border-primary w-100 py-3 ps-4 pe-5"
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={handleInputChange}
                      required
                      style={{ maxWidth: "100%" }}
                    />
                    <button
                      type="submit"
                      className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                    >
                      SignUp
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  © <a href="#">Basil Street</a>, All Right Reserved.
                  <br />
                  Designed By Tushar Harinkhede
                  <br />
                  <br />
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <div className="footer-menu">
                    <Link to={"/"}>Home</Link>
                    <a href="">Cookies</a>
                    <Link to={"/contact"}>Help</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Back to Top */}
        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
        >
          <i className="bi bi-arrow-up" />
        </a>
      </div>
      <ToastContainer />
    </>
  );
};
