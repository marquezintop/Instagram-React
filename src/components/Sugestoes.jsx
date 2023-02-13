import Sugestao from "./Sugestao";

export default function Sugestoes() {
    const usernameSugestoes = ["bad.vibes.memes", "chibirdart", "razoesparaacreditar",
    "adorable_animals", "smallcutecats"];

    return (
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
        {usernameSugestoes.map(item => (
          <Sugestao usernameSugestao = {item} />
        ))}
        </div>
    );
}