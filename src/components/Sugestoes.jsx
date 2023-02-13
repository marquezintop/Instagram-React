function Sugestoes() {
    const objectSugestao = ["bad.vibes.memes", "chibirdart", "razoesparaacreditar", "adorable_animals", "smallcutecats"]
    return (
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
        {objectSugestao.map(item => (
        <>
          <div class="sugestao">
            <div class="usuario">
              <img src={`assets/img/${item}.svg`} alt={`${item}.svg`}/>
              <div class="texto">
                <div class="nome">{item}</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
        </>
        ))}
        </div>
    )
}
export default Sugestoes;