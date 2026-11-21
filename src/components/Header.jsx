import trollFace from "../assets/images/troll-face.png";

function Header() {
  return (
    <header className="header">
      <img src={trollFace} alt="Famous troll face" />
      <h1>Meme Generator</h1>
    </header>
  );
}

export default Header;
