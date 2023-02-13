export default function Sugestao(props) {

    const {usernameSugestao} = props

    return (
        <>
        <div class="sugestao">
          <div class="usuario">
            <img src={`assets/img/${usernameSugestao}.svg`} alt={`${usernameSugestao}.svg`}/>
            <div class="texto">
              <div class="nome">{usernameSugestao}</div>
              <div class="razao">Segue você</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>
      </>
    )
}