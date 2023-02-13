import Story from "./Story";

export default function Stories() {
    const usernameStories = ['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet', 
    'wawawicomics', 'respondeai', 'filomoderna', 'memeriagourmet'];
    return (
        <div className="stories">
            {usernameStories.map(item => (
                <Story usernameStory = {item}/>
            ))}
        </div>
    )
}