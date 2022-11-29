import React, { useEffect } from "react";
import "./App.css";
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);
  const close = () => {
    tg.close();
  };
  return (
    <div>
      salom
      <button onClick={close}>Close</button>
    </div>
  );
}

export default App;
