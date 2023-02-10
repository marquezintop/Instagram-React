function Posts() {
    const array = [
        {usernamePost: "meowed", imagePost: "gato-telefone", usernameLike: "respondeai", likeNumber: 101.523},
        {usernamePost: "barked", imagePost: "dog", usernameLike: "adorable_animals", likeNumber: 99.159},
        {usernamePost: "meowed", imagePost: "gato-telefone", usernameLike: "respondeai", likeNumber: 101.523}
    ]
    return (
        <div className="posts">
            {array.map(item => (
            <div className="post">
                <div className="topo">
                  <div className="usuario">
                    <img src={`assets/img/${item.usernamePost}.svg`} alt={`${item.usernamePost}`}/>
                    {item.usernamePost}
                  </div>
                  <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                  </div>
                </div>
    
                <div className="conteudo">
                  <img src={`assets/img/${item.imagePost}.svg`} alt={`${item.imagePost}`}/>
                </div>
    
                <div className="fundo">
                  <div className="acoes">
                    <div>
                      <ion-icon name="heart-outline"></ion-icon>
                      <ion-icon name="chatbubble-outline"></ion-icon>
                      <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                      <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                  </div>
    
                  <div className="curtidas">
                    <img src={`assets/img/${item.usernameLike}.svg`} alt={`${item.usernameLike}`}/>
                    <div className="texto">
                      Curtido por <strong>{item.usernameLike}</strong> e <strong>outras {item.likeNumber} pessoas</strong>
                    </div>
                  </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Posts;