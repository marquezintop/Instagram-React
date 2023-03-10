import { useState } from "react";

export default function Post(props) {

    const {usernamePost, imagePost, usernameLike, initialLikeNumber} = props;

    const [favorite, setFavorite] = useState(false);
    const [like, setLike] = useState(false);
    const [likeNumber, setlikeNumber] = useState(initialLikeNumber);
    const [likeAnimation, setLikeAnimation] = useState(false);

    function likePost() {
        if (like === false) {
            setlikeNumber(likeNumber + 1);
        } else {
            setlikeNumber(likeNumber - 1);
        }
        setLike(!like);
    }

    function likeImage() {
        if (like === false) {
            setLike(true);
            setlikeNumber(likeNumber + 1);
        }
        setLikeAnimation(true);
        setTimeout(() => {
            setLikeAnimation(false);
        }, 500);
    }

    function favoritePost() {
        setFavorite(!favorite);
    }

    return (
        <div className="post" data-test="post">
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
                <img data-test="post-image" onDoubleClick={likeImage}
                src={`assets/img/${imagePost}.svg`} alt={imagePost}/>
                <ion-icon class={`heart ${likeAnimation? 'like-heart' : ''}`} name="heart"></ion-icon>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon
                            onClick={likePost}
                            data-test="like-post"
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
                            data-test="save-post"
                            name={favorite ? "bookmark" : "bookmark-outline"}
                        >
                        </ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={`assets/img/${usernameLike}.svg`} />
                    <div className="texto">
                        Curtido por <strong>{usernameLike}</strong> e <strong>outras
                        <span data-test="likes-number">{likeNumber}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}