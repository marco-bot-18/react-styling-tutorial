import logo from "../../assets/logo.png";
import classes from "./Header.module.css";

export default function Header() {
  let a: number = 2;
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p
        className={
          a === 1 ? `${classes.paragraph}` : `${classes.paragraphRed}`
        }>
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
