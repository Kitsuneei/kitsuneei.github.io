import "./Navbar.scss";
import { socialLinks, navLinks } from "../../data";

const Navbar = (props) => {
  const { title = "My React App", subtitle } = props;
  return (
    <section className="header">
      <div className="screen-lock">
        <div className="header-align">
          <h1 className="heading">
            {title} <span>{subtitle}</span>
          </h1>

          <nav className="nav-bar">
            <ul className="nav-links">
              {navLinks.map((link) => {
                const { id, href, text } = link;
                return (
                  <li>
                    <a className="nav-link" key={id} href={href}>
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <nav className="social-bar">
            <ul className="social-links">
              {socialLinks.map((link) => {
                const { id, href, icon } = link;
                return (
                  <li>
                    <a
                      key={id}
                      href={href}
                      targets="_blank"
                      rel="noreferrer"
                      className="social-link"
                    >
                      <i className={icon} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default Navbar;
