import Post from "./Post";

export default function Posts() {

    const objectPost = [
        {
            usernamePost: "meowed",
            imagePost: "gato-telefone",
            usernameLike: "respondeai",
            initialLikeNumber: 101523
        },
        {
            usernamePost: "barked",
            imagePost: "dog",
            usernameLike: "adorable_animals",
            initialLikeNumber: 99159
        },
        {
            usernamePost: "meowed",
            imagePost: "gato-telefone",
            usernameLike: "respondeai",
            initialLikeNumber: 101523
        }
    ];

    return (
        <div className="posts">
            {objectPost.map(item => (
            <Post usernamePost = {item.usernamePost}
            imagePost = {item.imagePost}
            usernameLike = {item.usernameLike}
            initialLikeNumber = {item.initialLikeNumber}
            />
            ))}
        </div>
    );
}