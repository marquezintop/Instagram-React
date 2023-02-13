export default function Story(props) {
    
    const {usernameStory} = props;

    return (
    <>
        <div className="story">
            <div className="imagem">
              <img src={`assets/img/${usernameStory}.svg`} alt={`${usernameStory}`}/>
            </div>
            <div className="usuario">
              {usernameStory}
            </div>
        </div>
        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </>
    )
}