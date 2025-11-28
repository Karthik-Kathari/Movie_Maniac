import "../styles/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        Made with{" "}
        <i
          className="fas fa-heart"
          style={{ color: "red", margin: "0 0.3rem" }}
        ></i>{" "}
        by Karthik Kathari
      </div>
      <div className="footer-icons">
        <a
          href="https://github.com/Karthik-Kathari"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <i
            className="fab fa-github"
            style={{ color: "#fff", fontSize: "1.8rem" }}
          ></i>
        </a>
        <span className="icon-separator">|</span>
        <a
          href="https://www.linkedin.com/in/karthikkathari/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <i
            className="fab fa-linkedin"
            style={{ color: "#0077B5", fontSize: "1.8rem" }}
          ></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
