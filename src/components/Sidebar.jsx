import Usuarios from "./Usuarios";
import Sugestoes from "./Sugestoes";
import { useState } from "react";
import React from "react";

export default function Sidebar() {

  const [usernameWritten, setUsernameWritten] = useState("catanacomics");

  const [newImage, setNewImage] = useState("assets/img/catanacomics.svg");

  function changingUsername() {
    const usernamePrompt = prompt("Altere seu nome:");
    console.log(usernamePrompt)
    if (usernamePrompt === '' || usernamePrompt === undefined) {
      alert("Tente escrever algo da próxima vez :)");
    } else if (usernamePrompt === null) {} else {
      setUsernameWritten(usernamePrompt);
    }
  }

  function changingImage() {
    const imagePrompt = prompt("Ponha o link para sua nova imagem de perfil:");
    if (imagePrompt === '' || imagePrompt === undefined) {
      alert("Tente escrever algo da próxima vez :)");
    } else if (imagePrompt === null) {} else {
      setNewImage(imagePrompt);
    }
  }

    return (
        <div className="sidebar">
            <Usuarios
            eventUsername={changingUsername}
            username = {usernameWritten}
            eventImage={changingImage}
            image = {newImage? `${newImage}` : "assets/img/catanacomics.svg"}
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