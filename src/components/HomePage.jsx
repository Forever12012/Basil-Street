import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export const HomePage = () => {
  return (
    <>
      <>
        <div className="container-xxl bg-white p-0">
          {/*  */}
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
              <div className="container my-5 py-5">
                <div className="row align-items-center g-5">
                  <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="display-3 text-white animated slideInLeft">
                      Savor Our
                      <br />
                      Exquisite Cuisine
                    </h1>
                    <p className="text-white animated slideInLeft mb-4 pb-2">
                      Experience the finest culinary delights. Our dishes are
                      crafted with passion and served with elegance. From the
                      freshest ingredients to the most flavorful combinations,
                      every bite is a celebration of taste. Join us for an
                      unforgettable dining experience.
                    </p>
                    <Link
                      to={"/booking"}
                      className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
                    >
                      Book A Table
                    </Link>
                  </div>
                  <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                    <img className="img-fluid" src="img/hero.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Navbar & Hero End */}
          {/* Service Start */}
          <div className="container-xxl py-5">
            <div className="container">
              <div className="row g-4">
                <div
                  className="col-lg-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-item rounded pt-3">
                    <div className="p-4">
                      <i className="fa fa-3x fa-user-tie text-primary mb-4" />
                      <h5>Master Chefs</h5>
                      <p>
                        Our culinary team comprises world-class chefs with a
                        passion for creating extraordinary dishes that delight
                        the senses. Each plate is a work of art, crafted to
                        perfection.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="service-item rounded pt-3">
                    <div className="p-4">
                      <i className="fa fa-3x fa-utensils text-primary mb-4" />
                      <h5>Quality Food</h5>
                      <p>
                        We use only the freshest ingredients to prepare dishes
                        that are as healthy as they are delicious. Our
                        commitment to quality ensures a dining experience you
                        can trust.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="service-item rounded pt-3">
                    <div className="p-4">
                      <i className="fa fa-3x fa-cart-plus text-primary mb-4" />
                      <h5>Online Order</h5>
                      <p>
                        Enjoy our exquisite meals from the comfort of your home.
                        With our seamless online ordering system, your favorite
                        dishes are just a click away, delivered fresh and hot.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="service-item rounded pt-3">
                    <div className="p-4">
                      <i className="fa fa-3x fa-headset text-primary mb-4" />
                      <h5>24/7 Service</h5>
                      <p>
                        We're here for you, day or night. Our 24/7 service
                        ensures that you can satisfy your cravings anytime, with
                        customer support always available to assist you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service End */}
          {/* About Start */}
          <div className="container-xxl py-5">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6">
                  <div className="row g-3">
                    <div className="col-6 text-start">
                      <img
                        className="img-fluid rounded w-100 wow zoomIn"
                        data-wow-delay="0.1s"
                        src="img/about-1.jpg"
                        alt="Chef at Work"
                      />
                    </div>
                    <div className="col-6 text-start">
                      <img
                        className="img-fluid rounded w-75 wow zoomIn"
                        data-wow-delay="0.3s"
                        src="img/about-2.jpg"
                        style={{ marginTop: "25%" }}
                        alt="Delicious Dish"
                      />
                    </div>
                    <div className="col-6 text-end">
                      <img
                        className="img-fluid rounded w-75 wow zoomIn"
                        data-wow-delay="0.5s"
                        src="img/about-3.jpg"
                        alt="Restaurant Interior"
                      />
                    </div>
                    <div className="col-6 text-end">
                      <img
                        className="img-fluid rounded w-100 wow zoomIn"
                        data-wow-delay="0.7s"
                        src="img/about-4.jpg"
                        alt="Happy Customers"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                    About Us
                  </h5>
                  <h1 className="mb-4">
                    Welcome to{" "}
                    <i className="fa fa-utensils text-primary me-2" />
                    Basil Street
                  </h1>
                  <p className="mb-4">
                    At Basil Street, we blend passion, tradition, and innovation
                    to bring you a dining experience like no other. Our journey
                    began 15 years ago with a simple mission: to create
                    unforgettable culinary moments. Today, we stand as a beacon
                    of culinary excellence, known for our exquisite dishes and
                    warm hospitality.
                  </p>
                  <p className="mb-4">
                    Whether you're here to enjoy a quiet meal or celebrate a
                    special occasion, our team is dedicated to making your
                    experience extraordinary. From the freshest ingredients to
                    the most skilled chefs, every detail is crafted with care.
                    Come and discover why we're the favorite dining destination
                    for food lovers everywhere.
                  </p>
                  <div className="row g-4 mb-4">
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                        <h1
                          className="flex-shrink-0 display-5 text-primary mb-0"
                          data-toggle="counter-up"
                        >
                          15
                        </h1>
                        <div className="ps-4">
                          <p className="mb-0">Years of</p>
                          <h6 className="text-uppercase mb-0">Experience</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                        <h1
                          className="flex-shrink-0 display-5 text-primary mb-0"
                          data-toggle="counter-up"
                        >
                          50
                        </h1>
                        <div className="ps-4">
                          <p className="mb-0">Renowned</p>
                          <h6 className="text-uppercase mb-0">Master Chefs</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="btn btn-primary py-3 px-5 mt-2" href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* About End */}
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
                            src="img/cheeseburger.png"
                            alt=""
                            style={{ width: 80, height: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Cheeseburger</span>
                              <span className="text-primary">₹500</span>
                            </h5>
                            <small className="fst-italic">
                              A juicy beef patty topped with melted cheese,
                              lettuce, tomato, pickles, and special sauce,
                              served on a toasted bun with a side of fries.
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/alfredo.jpg"
                            alt=""
                            style={{ width: 80, height: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Pasta Alfredo</span>
                              <span className="text-primary">₹650</span>
                            </h5>
                            <small className="fst-italic">
                              Creamy pasta made with a rich Alfredo sauce,
                              parmesan cheese, and a touch of garlic. Available
                              with chicken or mushrooms.
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/dosa.jpg"
                            alt=""
                            style={{ width: 80, height: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Masala Dosa</span>
                              <span className="text-primary">₹350</span>
                            </h5>
                            <small className="fst-italic">
                              A crispy, savory crepe stuffed with a spiced
                              potato filling, served with coconut chutney and
                              sambar.
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/upma.jpg"
                            alt=""
                            style={{ width: 80, height: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Vegetable Upma</span>
                              <span className="text-primary">₹300</span>
                            </h5>
                            <small className="fst-italic">
                              A savory semolina dish cooked with vegetables,
                              mustard seeds, curry leaves, and spices. Perfect
                              for a light and nutritious breakfast.
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/frenchtoast.jpg"
                            alt=""
                            style={{ width: 80, height: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>French Toast</span>
                              <span className="text-primary">₹400</span>
                            </h5>
                            <small className="fst-italic">
                              Thick slices of bread dipped in a cinnamon-vanilla
                              egg mixture and grilled, served with maple syrup
                              and fresh berries.
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/bagel.jpg"
                            alt=""
                            style={{ width: 80, height: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Bagel with Cream Cheese</span>
                              <span className="text-primary">₹350</span>
                            </h5>
                            <small className="fst-italic">
                              A toasted bagel served with a generous spread of
                              cream cheese, topped with chives and capers.
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/idli.jpg"
                            alt=""
                            style={{ width: 80, height: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Idli-Sambar</span>
                              <span className="text-primary">₹320</span>
                            </h5>
                            <small className="fst-italic">
                              Steamed rice cakes served with a spicy and tangy
                              lentil soup (sambar) and coconut chutney.
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="img/avacado.jpg"
                            alt=""
                            style={{ width: 80, height: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Avocado Toast</span>
                              <span className="text-primary">₹400</span>
                            </h5>
                            <small className="fst-italic">
                              Toasted bread topped with mashed avocado, cherry
                              tomatoes, red pepper flakes, and a drizzle of
                              olive oil.
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
                            src="img/butterchic.jpg"
                            alt=""
                            style={{ width: 80, height: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Butter Chicken</span>
                              <span className="text-primary">₹450</span>
                            </h5>
                            <small className="fst-italic">
                              Tender chicken pieces simmered in a rich and
                              creamy tomato-based sauce, flavored with aromatic
                              spices. Served with naan or rice.
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
                            style={{ width: 80, height: 80 }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Tikka Masala</span>
                              <span className="text-primary">₹500</span>
                            </h5>
                            <small className="fst-italic">
                              Succulent pieces of chicken marinated in yogurt
                              and spices, cooked in a spicy and creamy tomato
                              sauce. Served with basmati rice or naan.
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
                              <span>Palak Paneer</span>
                              <span className="text-primary">₹480</span>
                            </h5>
                            <small className="fst-italic">
                              Indian cottage cheese cubes cooked in a flavorful
                              spinach gravy with spices. Perfectly paired with
                              roti or jeera rice.
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
                              <span>Veg Biryani</span>
                              <span className="text-primary">₹550</span>
                            </h5>
                            <small className="fst-italic">
                              Fragrant rice cooked with a mix of vegetables,
                              spices, and herbs, served with raita and a side
                              salad.
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
                              <span>Chicken Caesar Salad</span>
                              <span className="text-primary">₹600</span>
                            </h5>
                            <small className="fst-italic">
                              Crisp romaine lettuce topped with grilled chicken,
                              croutons, parmesan cheese, and Caesar dressing.
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
                              <span>Fish Tacos</span>
                              <span className="text-primary">₹620</span>
                            </h5>
                            <small className="fst-italic">
                              Grilled fish fillets served in soft tortillas with
                              cabbage slaw, avocado, and a tangy lime crema.
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
                              <span>Chole Bhature</span>
                              <span className="text-primary"> ₹450</span>
                            </h5>
                            <small className="fst-italic">
                              Spicy chickpea curry served with deep-fried bread
                              (bhature) and a side of pickles and onions.
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
                              <span>Pulled Pork Sandwich</span>
                              <span className="text-primary">₹550</span>
                            </h5>
                            <small className="fst-italic">
                              Slow-cooked pulled pork in a tangy barbecue sauce,
                              served on a toasted bun with coleslaw.
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
          {/* Reservation Start */}
          <div
            className="container-xxl py-5 px-0 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="row g-0">
              <div className="col-md-6">
                <div className="video">
                  <button
                    type="button"
                    className="btn-play"
                    data-bs-toggle="modal"
                    data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                    data-bs-target="#videoModal"
                  >
                    <span />
                  </button>
                </div>
              </div>
              <div className="col-md-6 bg-dark d-flex align-items-center">
                <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                  <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                    Reservation
                  </h5>
                  <h1 className="text-white mb-4">Book A Table Online</h1>
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                          />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Your Email"
                          />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="form-floating date"
                          id="date3"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control datetimepicker-input"
                            id="datetime"
                            placeholder="Date & Time"
                            data-target="#date3"
                            data-toggle="datetimepicker"
                          />
                          <label htmlFor="datetime">Date &amp; Time</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <select className="form-select" id="select1">
                            <option value={1}>People 1</option>
                            <option value={2}>People 2</option>
                            <option value={3}>People 3</option>
                          </select>
                          <label htmlFor="select1">No Of People</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            placeholder="Special Request"
                            id="message"
                            style={{ height: 100 }}
                            defaultValue={""}
                          />
                          <label htmlFor="message">Special Request</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="videoModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content rounded-0">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Youtube Video
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  {/* 16:9 aspect ratio */}
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      src=""
                      id="video"
                      allowFullScreen=""
                      allowscriptaccess="always"
                      allow="autoplay"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Reservation Start */}
          {/* Team Start */}
          <div className="container-xxl pt-5 pb-3">
            <div className="container">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                  Team Members
                </h5>
                <h1 className="mb-5">Our Master Chefs</h1>
              </div>
              <div className="row g-4">
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="team-item text-center rounded overflow-hidden">
                    <div className="rounded-circle overflow-hidden m-4">
                      <img className="img-fluid" src="img/team-1.jpg" alt="" />
                    </div>
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                    <div className="d-flex justify-content-center mt-3">
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="team-item text-center rounded overflow-hidden">
                    <div className="rounded-circle overflow-hidden m-4">
                      <img className="img-fluid" src="img/team-2.jpg" alt="" />
                    </div>
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                    <div className="d-flex justify-content-center mt-3">
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="team-item text-center rounded overflow-hidden">
                    <div className="rounded-circle overflow-hidden m-4">
                      <img className="img-fluid" src="img/team-3.jpg" alt="" />
                    </div>
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                    <div className="d-flex justify-content-center mt-3">
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="team-item text-center rounded overflow-hidden">
                    <div className="rounded-circle overflow-hidden m-4">
                      <img className="img-fluid" src="img/team-4.jpg" alt="" />
                    </div>
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                    <div className="d-flex justify-content-center mt-3">
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Team End */}
          {/* Testimonial Start */}
          <div
            className="container-xxl py-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="container">
              <div className="text-center">
                <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                  Testimonial
                </h5>
                <h1 className="mb-5">Our Clients Say!!!</h1>
              </div>
              <div className="owl-carousel testimonial-carousel">
                <div className="testimonial-item bg-transparent border rounded p-4">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                  <p>
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid flex-shrink-0 rounded-circle"
                      src="img/testimonial-1.jpg"
                      style={{ width: 50, height: 50 }}
                    />
                    <div className="ps-3">
                      <h5 className="mb-1">Client Name</h5>
                      <small>Profession</small>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item bg-transparent border rounded p-4">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                  <p>
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid flex-shrink-0 rounded-circle"
                      src="img/testimonial-2.jpg"
                      style={{ width: 50, height: 50 }}
                    />
                    <div className="ps-3">
                      <h5 className="mb-1">Client Name</h5>
                      <small>Profession</small>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item bg-transparent border rounded p-4">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                  <p>
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid flex-shrink-0 rounded-circle"
                      src="img/testimonial-3.jpg"
                      style={{ width: 50, height: 50 }}
                    />
                    <div className="ps-3">
                      <h5 className="mb-1">Client Name</h5>
                      <small>Profession</small>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item bg-transparent border rounded p-4">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                  <p>
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid flex-shrink-0 rounded-circle"
                      src="img/testimonial-4.jpg"
                      style={{ width: 50, height: 50 }}
                    />
                    <div className="ps-3">
                      <h5 className="mb-1">Client Name</h5>
                      <small>Profession</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial End */}
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
