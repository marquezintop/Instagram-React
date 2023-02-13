import Usuarios from "./Usuarios";
import Sugestoes from "./Sugestoes";
import { useState } from "react";
import React from "react";

export default function Sidebar() {

  function changingUsername() {
    const usernamePrompt = prompt("Altere seu nome:");
    if (usernamePrompt !== '') {
      setUsernameWritten(usernamePrompt);
    } else {
      alert("Tente escrever algo da próxima vez :)");
    }
  }

  function changingImage() {
    const imagePrompt = prompt("Ponha o link para sua nova imagem de perfil:");
    if (imagePrompt !== '') {
      setNewImage(imagePrompt);
    } else {
      alert("Tente escrever algo da próxima vez :)");
    }
  }

  const [usernameWritten, setUsernameWritten] = useState("catanacomics");

  const [newImage, setNewImage] = useState("assets/img/catanacomics.svg");

    return (
        <div className="sidebar">
            <Usuarios
            eventUsername={changingUsername}
            username = {usernameWritten}
            eventImage={changingImage}
            image = {newImage}
            />
            <Sugestoes/>
            <div className="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div className="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
        </div>
    );
}