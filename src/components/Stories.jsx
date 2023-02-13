function Stories() {
    const username = ['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet', 'wawawicomics', 'respondeai',
'filomoderna', 'memeriagourmet']
    return (
    <div className="stories">
        {username.map(username => (
            <div className="story">
            <div className="imagem">
              <img src={`assets/img/${username}.svg`} alt={`${username}`}/>
            </div>
            <div className="usuario">
              {username}
            </div>
        </div>
        ))}
        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
    )
}
export default Stories;