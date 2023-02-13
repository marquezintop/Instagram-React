import { useState } from "react";

function Post(props) {
    
    const {usernamePost, imagePost, usernameLike, initialLikeNumber} = props

    const [favorite, setFavorite] = useState(false)
    const [like, setLike] = useState(false)
    const [likeNumber, setlikeNumber] = useState(initialLikeNumber)

    function likePost() {
        if (like === false) {
            setlikeNumber(likeNumber + 1)
        } else {
            setlikeNumber(likeNumber - 1)
        }
        setLike(!like)
    }
    
    function likeImage() {
        if (like === false) {
            setLike(true)
            setlikeNumber(likeNumber + 1)
        }
    }
    function favoritePost() {
        setFavorite(!favorite)
    }

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={`assets/img/${usernamePost}.svg`} />
                    {usernamePost}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img onClick={likeImage} src={`assets/img/${imagePost}.svg`} alt={imagePost}/>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon
                            onClick={likePost}
                            name={like ? "heart" : "heart-outline"}
                            class={like ? "like" : ""}
                            style={{color: `${like ? "red" : "black"}`}}
                        ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon
                            onClick={favoritePost}
                            name={favorite ? "bookmark" : "bookmark-outline"}
                        >
                        </ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={`assets/img/${usernameLike}.svg`} />
                    <div className="texto">
                        Curtido por <strong>{usernameLike}</strong> e <strong>outras {likeNumber} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;