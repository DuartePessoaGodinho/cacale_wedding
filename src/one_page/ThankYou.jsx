import "./Thankyou.scss"
import big_flower from "../assets/one_page/flor_grande.png";

import { useState } from "react";

export default function OnePage() {
  const [isOpen, setOpen] = useState(false);

  function openExternalSite(url) {
    window.open(url, "_blank");
  }

  return (
    <div className="container">
        <img src={big_flower} alt="" />
        <h2>Obrigado a todos pela presença. Foi um prazer.</h2>
    </div>
  )
}