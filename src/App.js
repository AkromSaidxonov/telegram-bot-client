import React, { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./components/hooks/useTelegram";

function App() {
const {tg, onToggleButton} = useTelegram()
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
<button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
