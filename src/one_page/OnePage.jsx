import "./OnePage.scss";
import "./OnePageMobile.scss";
import "./Fonts.scss";
import big_flower from "../assets/one_page/flor_grande.png";
import small_flower from "../assets/one_page/flor_piqui.png";

import ph_tortas from "../assets/one_page/ph_tortas.png";
import Map from "../Components/Map";
import { Drawer } from "antd";
import { useState } from "react";

export default function OnePage() {
  const [isOpen, setOpen] = useState(false);

  function openExternalSite(url) {
    window.open(url, "_blank");
  }

  return (
    <div>
      <div className="header">
        <div className="header-texts">
          <h1 className="title">Catarina & Alexandre</h1>
          <div className="welcoming">
            Vamos celebrar o inicio da nossa família!
          </div>
          <div className="date">
            <div className="day">07.09.2024</div>
            <div className="hour">pelas 17h00</div>
          </div>
          <button className="btn-presence" onClick={() => setOpen(true)}>
            Confirmar presença
          </button>
        </div>
        <img src={big_flower} alt="" />
      </div>

      <div className="content">
        <div className="mini-header arsen-font">
          <p>SOBRE NÓS</p>
          <img src={small_flower} alt="" />
        </div>

        <div className="mini-body">
          <p className="assistant-font-bold">
            Temos vindo a escrever a nossa história desde 2014.
          </p>
          <p className="assistant-font">
            Queremos continuar esta viagem, e por isso, após 10 anos de namoro e
            2 anos de noivado, chegou o momento de ‘dar o nó’!
          </p>
        </div>

        <img className="mosaic" src={ph_tortas} alt="" />

        <div
          className="mini-header arsen-font"
          style={{
            flexDirection: "row-reverse",
          }}
        >
          <p>SOBRE O DIA</p>
          <img src={small_flower} alt="" />
        </div>

        <div className="mini-body">
          <p className="assistant-font-bold">
            Esperamos pela vossa chegada pelas 17 horas.
          </p>
          <p className="assistant-font">
            A cerimónia terá lugar pelas 17h30, seguida de cocktail, jantar e
            muita festa!
          </p>
          <br />
          <p className="assistant-font">
            Existem lugares de estacionamento na rua do casamento e nas
            proximidades (ver no mapa)
          </p>
          <p className="assistant-font">
            Para quem mora perto, recomendamos um clássico Uber/Bolt.
          </p>

          <div className="map-content">
            <Map></Map>
          </div>
        </div>

        <div className="mini-body">
          <div className="mini-header arsen-font">
            <p>LISTA DE PRESENTES</p>
            <img src={small_flower} alt="" />
          </div>
          <p className="assistant-font">
            Mantendo a tradição, reunimos uma lista de sugestões de presentes,
            especialmente centrada na nossa viagem de Lua de Mel ao Japão. Podem
            consultar aqui a lista de presentes e contribuir para o que mais
            gostarem:
          </p>

          <button
            className="btn-hitchd vogue-font"
            onClick={() =>
              openExternalSite("http://www.hitchd.com/catarinalexandre2024")
            }
          >
            Catarina & Alexandre
          </button>
        </div>

        <div className="final-rsvp">
          <h3 className="vogue-font">CONTAMOS CONVOSCO?</h3>
          <button className="btn-presence" onClick={() => setOpen(true)}>
            Confirmar presença
          </button>
        </div>

        <hr
          style={{
            width: "5%",
          }}
        />

        <div className="contacts assistant-font">
          <p>Catarina: 919 669 972</p>
          <p>Alexandre: 919 550 091</p>
          <br />
          <p>casamento.ca24@gmail.com</p>
        </div>
      </div>

      <div className="footer">לחיים!</div>

      <Drawer
        placement="bottom"
        onClose={() => setOpen(false)}
        open={isOpen}
        size="large"
      >
        <iframe
          title="Survey"
          src="https://docs.google.com/forms/d/e/1FAIpQLScoHvNik1RcgfgaKTbwbYYfdQVm9brZjrB4ErX2REgZ3eqc1Q/viewform"
          style={{
            width: "100%",
            height: "calc(100% - 3px)",
            overflow: "hidden",
          }}
        >
          Loading…
        </iframe>
      </Drawer>
    </div>
  );
}
