import React from "react";

export default function PathFinder() {
  const runScript = () => {
    console.log("run");
  };

  return (
    <header className="App-header">
      <p>PathFinder</p>
      <button onClick={() => runScript()} class="button is-light">
        Run Script
      </button>
    </header>
  );
}
