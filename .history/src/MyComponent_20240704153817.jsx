import React from "react";
import from '.'
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
      <button style={{ 
        background: "red",
         color: "white",
          padding: 10,
          width:"150px",
          fontStyle: "bold",
          fontSize: "20px"
          }}>
        Login
      </button>
    </div>
  );
}
