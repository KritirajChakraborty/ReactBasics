import webDevImg from "../../assets/icon.svg";
import "./Header.css";

const webDevDescription = ["Essential", "Foundational", "Key"];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
const descriptions = webDevDescription[genRandomInt(2)];

export default function Header() {
  return (
    <header>
      <img src={webDevImg} alt="Stylized atom" />
      <h1>Web Development Essentials</h1>
      <p>
        {descriptions} web development concepts you will need for building
        modern websites and applications!
      </p>
    </header>
  );
}
