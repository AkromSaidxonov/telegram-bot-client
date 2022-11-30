import React from "react";
import { useTelegram } from "../hooks/useTelegram";
function Header() {
const {tg,onClose,user} = useTelegram()
  return (
    <div className={"header"}>
      <button onClick={close}>Yopish</button>
      <span className={"userName"}>{user}</span>
    </div>
  );
}

export default Header;
