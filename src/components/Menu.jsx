import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export const Menu = () => {
  return (
    <>
      <>
        <div className="container-xxl bg-white p-0">
          {/* Navbar & Hero Start */}
          <div className="container-xxl position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
              <a href="" className="navbar-brand p-0">
                <h1 className="text-primary m-0">
                  <i className="fa fa-utensils me-3" />
                  Basil Street
                </h1>
                {/* <img src="img/logo.png" alt="Logo"> */}
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="fa fa-bars" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0 pe-4">
                  <Link to={"/"} className="nav-item nav-link">
                    Home
                  </Link>
                  <Link to={"/about"} className="nav-item nav-link">
                    About
                  </Link>
                  <Link to={"/service"} className="nav-item nav-link">
                    Service
                  </Link>
                  <Link to={"/menu"} className="nav-item nav-link">
                    Menu
                  </Link>
                  <div className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <div className="dropdown-menu m-0">
                      <Link to={"/booking"} className="dropdown-item">
                        Booking
                      </Link>
                      <Link to={"/team"} className="dropdown-item">
                        Our Team
                      </Link>
                    </div>
                  </div>
                  <Link to={"/contact"} className="nav-item nav-link">
                    Contact
                  </Link>
                </div>
                <Link to={"/booking"} className="btn btn-primary py-2 px-4">
                  Book A Table
                </Link>
              </div>
            </nav>
            <div className="container-xxl py-5 bg-dark hero-header mb-5">
              <div className="container text-center my-5 pt-5 pb-4">
                <h1 className="display-3 text-white mb-3 animated slideInDown">
                  Food Menu
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center text-uppercase">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Pages</a>
                    </li>
                    <li
                      className="breadcrumb-item text-white active"
                      aria-current="page"
                    >
                      Menu
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          {/* Navbar & Hero End */}
          {/* Menu Start */}
          <div className="container-xxl py-5">
            <div className="container">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                  Food Menu
                </h5>
                <h1 className="mb-5">Most Popular Items</h1>
              </div>
              <div
                className="tab-class text-center wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                  <li className="nav-item">
                    <a
                      className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                      data-bs-toggle="pill"
                      href="#tab-1"
                    >
                      <i className="fa fa-coffee fa-2x text-primary" />
                      <div className="ps-3">
                        <small className="text-body">Popular</small>
                        <h6 className="mt-n1 mb-0">Breakfast</h6>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex align-items-center text-start mx-3 pb-3"
                      data-bs-toggle="pill"
                      href="#tab-2"
                    >
                      <i className="fa fa-hamburger fa-2x text-primary" />
                      <div className="ps-3">
                        <small className="text-body">Special</small>
                        <h6 className="mt-n1 mb-0">Launch</h6>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                      data-bs-toggle="pill"
                      href="#tab-3"
                    >
                      <i className="fa fa-utensils fa-2x text-primary" />
                      <div className="ps-3">
                        <small className="text-body">Lovely</small>
                        <h6 className="mt-n1 mb-0">Dinner</h6>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-1.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-2.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-3.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-4.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-5.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-6.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-7.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-8.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab-2" className="tab-pane fade show p-0">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-1.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-2.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-3.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-4.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-5.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-6.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-7.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-8.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab-3" className="tab-pane fade show p-0">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-1.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-2.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-3.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-4.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-5.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-6.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-7.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/menu-8.jpg"
                            alt=""
                            style={{ width: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Menu End */}
          <Footer />
          {/* Back to Top */}
          <a
            href="#"
            className="btn btn-lg btn-primary btn-lg-square back-to-top"
          >
            <i className="bi bi-arrow-up" />
          </a>
        </div>
      </>
    </>
  );
};
