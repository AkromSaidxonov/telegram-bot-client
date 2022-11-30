import React from "react";

function Header() {
  const tg = window.Telegram.WebApp;
  const close = () => {
    tg.close();
  };
  return (
    <div className={"header"}>
      <button onClick={close}>Yopish</button>
      <span className={"userName"}>{tg?.initDataUnsafe?.user?.username}</span>
    </div>
  );
}

export default Header;
