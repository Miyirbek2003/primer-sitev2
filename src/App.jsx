// import About from "./components/About/About";
// import Footer from "./components/Footer/Footer";
// import Home from "./components/Home/Home";
// import Menu from "./components/Menu/Menu";
// import OurApp from "./components/OurApp/OurApp";
import logo from "./img/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import React from "react";
import googleP from "./img/icons/google.svg";
import appstore from "./img/icons/appstore.svg";
import abt1 from "./img/aboutimg.png";
import { FaTimes } from "react-icons/fa";
import app from "./img/app.png";
import { GiHamburgerMenu } from "react-icons/gi";
import scrollId from ".";
import Modal from "./components/Modal/Modal";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./store/productsSlice";
export default function App() {
  const [lang, setLang] = React.useState(localStorage.getItem("i18nextLng"));
  const [open, setOpen] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const { t, i18n } = useTranslation();
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (header) {
      if (window.pageYOffset > 100) {
        header.style.backgroundColor = "black";
      } else {
        header.style.backgroundColor = "transparent";
      }
    }
  });
  const [showAll, setShowAll] = React.useState(6);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsSlice);
  React.useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      {modal ? (
        <Modal setModal={setModal} />
      ) : (
        <>
          <section className="home" id="home">
            <div className="container">
              <header className="header">
                <div className="container">
                  <div className="logo" onClick={() => scrollId("home")}>
                    <img src={logo} alt="Logo Primier Lunch" />
                  </div>
                  <nav className="navbar">
                    <ul>
                      <li onClick={() => scrollId("home")}>{t("home")}</li>
                      <li onClick={() => scrollId("about")}>{t("about")}</li>
                      <li onClick={() => scrollId("menu")}>{t("menu")}</li>
                      <li onClick={() => scrollId("contact")}>
                        {t("contact")}
                      </li>
                    </ul>
                  </nav>
                  <nav className="mobnav">
                    <header>
                      <div className="logo">
                        <img src={logo} alt="Logo Primier Lunch" />
                      </div>

                      <div
                        style={{
                          display: "flex",
                          gap: "7px",
                          alignItems: "center",
                        }}
                      >
                        <div
                          className="burger"
                          onClick={() => {
                            setOpen(!open);
                            const navbar = document.querySelector(".mobnav");
                            if (!open) {
                              navbar.classList.add("active");
                            } else {
                              navbar.classList.remove("active");
                            }
                          }}
                        >
                          {open ? (
                            <FaTimes size={25} />
                          ) : (
                            <GiHamburgerMenu size={25} />
                          )}
                        </div>
                      </div>
                    </header>
                    <ul>
                      <li
                        onClick={() => {
                          scrollId("home");
                          setOpen(!open);
                          const navbar = document.querySelector(".mobnav");
                          if (!open) {
                            navbar.classList.add("active");
                          } else {
                            navbar.classList.remove("active");
                          }
                        }}
                      >
                        {t("home")}
                      </li>
                      <li
                        onClick={() => {
                          scrollId("about");
                          setOpen(!open);
                          const navbar = document.querySelector(".mobnav");
                          if (!open) {
                            navbar.classList.add("active");
                          } else {
                            navbar.classList.remove("active");
                          }
                        }}
                      >
                        {t("about")}
                      </li>
                      <li
                        onClick={() => {
                          scrollId("menu");
                          setOpen(!open);
                          const navbar = document.querySelector(".mobnav");
                          if (!open) {
                            navbar.classList.add("active");
                          } else {
                            navbar.classList.remove("active");
                          }
                        }}
                      >
                        {t("menu")}
                      </li>
                      <li
                        onClick={() => {
                          scrollId("contact");
                          setOpen(!open);
                          const navbar = document.querySelector(".mobnav");
                          if (!open) {
                            navbar.classList.add("active");
                          } else {
                            navbar.classList.remove("active");
                          }
                        }}
                      >
                        {t("contact")}
                      </li>
                    </ul>
                  </nav>
                  <div
                    style={{
                      display: "flex",
                      gap: "7px",
                      alignItems: "center",
                    }}
                  >
                    <button className="lang">
                      <span className="svg-globe">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2 12H22"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16 12C15.9228 8.29203 14.5013 4.73835 12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22C14.5013 19.2616 15.9228 15.708 16 12Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span
                        className="current"
                        style={{ textTransform: "capitalize" }}
                      >
                        {lang}
                      </span>
                      <IoIosArrowDown className="arr" />
                      <ul className="drop">
                        {lang.toLocaleLowerCase() !== "qr" && (
                          <li
                            onClick={() => {
                              i18n.changeLanguage("qr");
                              setLang("Qr");
                            }}
                          >
                            Qr
                          </li>
                        )}
                        {lang.toLocaleLowerCase() !== "uz" && (
                          <li
                            onClick={() => {
                              i18n.changeLanguage("uz");
                              setLang("Uz");
                            }}
                          >
                            Uz
                          </li>
                        )}
                        {lang.toLocaleLowerCase() !== "ру" && (
                          <li
                            onClick={() => {
                              i18n.changeLanguage("ru");
                              setLang("Ру");
                            }}
                          >
                            Ру
                          </li>
                        )}
                        {lang.toLocaleLowerCase() !== "en" && (
                          <li
                            onClick={() => {
                              i18n.changeLanguage("en");
                              setLang("En");
                            }}
                          >
                            En
                          </li>
                        )}
                      </ul>
                    </button>
                    <div
                      className="burger"
                      onClick={() => {
                        setOpen(!open);
                        const navbar = document.querySelector(".mobnav");
                        if (!open) {
                          navbar.classList.add("active");
                        } else {
                          navbar.classList.remove("active");
                        }
                      }}
                    >
                      {open ? (
                        <FaTimes size={25} />
                      ) : (
                        <GiHamburgerMenu size={25} />
                      )}
                    </div>
                  </div>
                </div>
              </header>

              <main>
                <div className="main-title">
                  <h1>{t("maintitle")}</h1>
                  <p>{t("mainp")}</p>
                </div>
                <button className="order" onClick={() => setModal(true)}>
                  {t("order")}
                </button>
                <div className="apps">
                  <a href="#">
                    <img src={googleP} alt="Google Play Link" />
                  </a>
                  <a href="#">
                    <img src={appstore} alt="App Store Link" />
                  </a>
                </div>
              </main>
            </div>
          </section>
          <section className="about" id="about">
            <div className="container">
              <div className="section-title">
                <h1>{t("about")}</h1>
              </div>
              <div className="inner">
                <div>
                  <div className="img">
                    <img src={abt1} alt="" />
                  </div>
                  <div className="about-text">
                    <h4>
                      The best comfort food will always be greens, cornbread,
                      and fried chicken.
                    </h4>
                    <p>
                      "Let food be thy medicine and medicine be thy food." "We
                      all eat, and it would be a sad waste of opportunity to eat
                      badly." "You don't need a silver fork to eat good food."
                      "After a good dinner one can forgive anybody, even one's
                      own relatives."
                    </p>
                  </div>
                </div>
                <div className="second">
                  <div className="img">
                    <img src={abt1} alt="" />
                  </div>
                  <div className="about-text">
                    <h4>
                      The best comfort food will always be greens, cornbread,
                      and fried chicken.
                    </h4>
                    <p>
                      "Let food be thy medicine and medicine be thy food." "We
                      all eat, and it would be a sad waste of opportunity to eat
                      badly." "You don't need a silver fork to eat good food."
                      "After a good dinner one can forgive anybody, even one's
                      own relatives."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="menu" id="menu">
            <div className="container">
              <div className="section-title">
                <h1>Menu</h1>
              </div>
              <div className="cards">
                {products &&
                  products?.map(
                    (item, index) =>
                      index < showAll && (
                        <div className="card" key={index}>
                          <div className="card-img">
                            <img
                              src={item?.img_url}
                              alt="Foto suwretler"
                              loading="lazy"
                            />
                          </div>
                          <div className="card-body">
                            <div className="card-text">
                              <div className="card-title">
                                <h4>
                                  {
                                    item?.translations.filter(
                                      (lg) =>
                                        lg.locale ===
                                        localStorage.getItem("i18nextLng")
                                    )[0]?.name
                                  }
                                </h4>
                                <span>{item.price.toLocaleString()} swm</span>
                              </div>
                              <p>
                                {
                                  item?.translations.filter(
                                    (lg) =>
                                      lg?.locale ===
                                      localStorage.getItem("i18nextLng")
                                  )[0]?.description
                                }
                              </p>
                            </div>

                            <button
                              className="order"
                              onClick={() => setModal(true)}
                            >
                              Order Now
                            </button>
                          </div>
                        </div>
                      )
                  )}
              </div>
            </div>
            <button
              className="order"
              onClick={() => {
                showAll === 6 ? setShowAll(products?.length) : setShowAll(6);
              }}
            >
              {showAll === 6 ? "Show More" : "Hide "}
            </button>
          </section>
          <section className="app">
            <div className="container">
              <div className="app-inner">
                <div className="app-text">
                  <h1>Download Our App</h1>
                  <p>
                    When you sign with us, you must receive a discount and a
                    promotional offer from us.
                  </p>
                  <div className="apps">
                    <a href="#">
                      <img src={googleP} alt="Google Play Link" />
                    </a>
                    <a href="#">
                      <img src={appstore} alt="App Store Link" />
                    </a>
                  </div>
                </div>
                <div className="app-img">
                  <img src={app} alt="" />
                </div>
              </div>
            </div>
          </section>
          <footer id="contact">
            <div className="container">
              <div className="footer-inner">
                <div className="form">
                  <h4>Reservation</h4>
                  <p>We are always looking for a next great project.</p>
                  <form>
                    <input
                      type="text"
                      name="number"
                      id="number"
                      placeholder="Phone number"
                    />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your name"
                    />
                    <button className="order">Send</button>
                  </form>
                  <div className="apps">
                    <a href="#">
                      <img src={googleP} alt="Google Play Link" />
                    </a>
                    <a href="#">
                      <img src={appstore} alt="App Store Link" />
                    </a>
                  </div>
                </div>
                <div className="contact">
                  <h4>Our social networks</h4>
                  <ul>
                    <li>+998 90 010-85-10</li>
                    <li>eatfood@gmail.com</li>
                  </ul>
                  <div className="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d714.8012114595562!2d59.61651671567829!3d42.47058808619526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9b11a2fa4979%3A0xd5f8162a2a98c850!2sPremier%20Lounge!5e0!3m2!1suz!2s!4v1686385186253!5m2!1suz!2s"
                      style={{
                        height: "200px",
                        width: "100%",
                        borderRadius: "15px",
                        border: "0",
                        objectFit: "cover",
                      }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
}
