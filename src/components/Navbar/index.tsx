import "./style.scss";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <Logo />
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
