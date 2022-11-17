import logoImage from "../assets/logo.png";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logoImage} alt="expenser app logo" />
      <h1>Expenser</h1>
    </header>
  );
};

export default Header;
