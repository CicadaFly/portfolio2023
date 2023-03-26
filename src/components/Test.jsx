import { useState, useEffect } from "react";
import "./styles.css";

const Hexagon = () => {
  const [finished, setFinished] = useState(false);
  const [size, setSize] = useState("3rem");

  useEffect(() => {
    const hex = document.querySelector(".hexagon");
    const finishAnimation = () => setFinished(true);

    hex.addEventListener("animationend", finishAnimation);

    return () => {
      hex.removeEventListener("animationend", finishAnimation);
      setFinished(false);
      setSize("3rem");
    };
  }, []);

  const startAnimation = () => {
    setSize("7rem");
  };

  const hexClass = finished ? "hexagon finished" : "hexagon";
  const hexStyle = { "--size": size };

  return (
    <div className="container">
      <div className={hexClass} style={hexStyle} onClick={startAnimation}>
        <div className="hexagon__inner"></div>
      </div>
      {finished && <div className="text">Hello world!</div>}
    </div>
  );
};

export default Hexagon;
