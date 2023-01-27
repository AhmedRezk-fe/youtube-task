import IconSearch from "assets/img/search.png";
import "../style.scss";

const Button = ({ classN, name, type }) => {
  return (
    <button type={type} className={`btn ${classN ? classN : ""}`}>
      {name === "searchbtn" ? <img src={IconSearch} alt="" /> : name}
    </button>
  );
};

export default Button;
