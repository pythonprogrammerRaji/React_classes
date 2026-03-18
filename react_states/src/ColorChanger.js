import React, { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("white");

  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <h3>Color Changer</h3>

      <button onClick={() => setColor("lightblue")}>Blue</button>
      <button onClick={() => setColor("lightgreen")}>Green</button>
      <button onClick={() => setColor("pink")}>Pink</button>
    </div>
  );
}

export default ColorChanger;