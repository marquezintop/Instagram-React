function Usuarios(props) {

    return (
        <div class="usuario">
          <button onClick={props.eventImage}><img src={props.image} alt="imagem de perfil"/></button>
          <div class="texto">
            <span>
              <strong>{props.username}</strong>
              <button onClick={props.eventUsername}>
                <ion-icon name="pencil"></ion-icon>
                </button>
            </span>
          </div>
        </div>
    )
  }

export default Usuarios;