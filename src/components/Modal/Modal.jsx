import "./modal.css";
import { FaTimes } from "react-icons/fa";
import googleP from "../../img/icons/google.svg";
import appstore from "../../img/icons/appstore.svg";
export default function Modal({ setModal }) {
  return (
    <section className="modal">
      <div className="container">
        <span className="exit" onClick={() => setModal(false)}>
          <FaTimes />{" "}
        </span>
        <div className="modal-text">
          <h1>Download Our App</h1>
          <p>
            When you sign with us, you must receive a discount and a promotional
            offer from us.
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
      </div>
    </section>
  );
}
