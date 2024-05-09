import React from "react";
import Logo from "./assets/googlelogo.png";
import mic from "./assets/mic.svg";
import cam from "./assets/cam.svg";
import search from "./assets/search.svg";
import bar from "./assets/bar.svg";
import leaf from "./assets/leaf.png"
import "./index.css";
let logoStyle = {
  display: "block",
  margin: "auto",
  marginTop: "75px",
  width: "240px",
};

const App = () => {
  return (
    <div>
      <div className="nav">
        <div className="nav-text">
          <a href="">Gmail</a>
          <a href="">Images</a>
        </div>
        <a href="">
          <img src={bar} alt="" />
        </a>
        <a
          href=""
          style={{
            backgroundColor: "rgb(60, 64, 67)",
            color: "white",
            padding: "8px",
            borderRadius: "100%",
          }}
        >
          O
        </a>
      </div>
      <img src={Logo} className="" alt="" style={logoStyle} />

      <div className="search">
        <input type="text" className="searchInput" autoFocus />
        <div className="box">
          <img
            src={search}
            alt=""
            style={{ width: "20px", marginLeft: "5px" }}
          />
          <div>
            <img src={mic} alt="" style={{ width: "20px" }} className="box2" />
            <img src={cam} alt="" style={{ width: "20px" }} />
          </div>
        </div>
      </div>
      <div className="butt">
        <button className="gs">Google Search</button>
        <button className="fl">I'm Feeling lucky</button>
      </div>
      <div className="text">
        Google offered in:
        <a href="">Hausa</a>
        <a href="">Igbo</a>
        <a href="">Ede Yoruba</a>
        <a href="">Nigerian Pidgin</a>
      </div>
      <div className="footer">
      <p>
        Nigeria
      </p>
      <div className="footer-flex">
      <div >
        <a href="">About</a>
        <a href="">Advertising</a>
        <a href="">Business</a>
        <a href="">How Search Works</a>
      </div>
      <div style={{ marginRight:'100px'}}><img src={leaf} alt=""style={{width:"10px"}} /><a href="">Our third decade of climate action: join us</a></div>
      <div>
        <a href="">Privacy</a>
        <a href="">Terms</a>
        <a href="">Settings</a>
      </div>
      </div>
      </div>




    </div>
  );
};

export default App;
