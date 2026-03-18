import React, { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div>
      <h3>Character Counter</h3>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Characters: {text.length}</p>
    </div>
  );
}

export default CharacterCounter;