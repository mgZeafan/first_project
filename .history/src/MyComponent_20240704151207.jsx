import React from "react";

export default function MyComponent() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is my first React component</p>
      <div style={{ flexDirection: "row" }}>
        <input type="text" placeholder="Enter your name" />
      </div>
      <div>
      <input type="password" placeholder="Enter your User Password" />
      </div>
      <button style={{background:'red' ,text}}>Login</button>
    </div>
  );
}
