export default function Usuarios(props) {

    return (
        <div class="usuario">
          <img data-test="profile-img" src={props.image} 
          alt="imagem de perfil" onClick={props.eventImage}/>
          <div class="texto">
            <span>
              <strong data-test="username">{props.username}</strong>
                <ion-icon name="pencil" onClick={props.eventUsername} data-test="edit-name"></ion-icon>
            </span>
          </div>
        </div>
    )
  }