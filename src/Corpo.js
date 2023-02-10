import Stories from "./components/Stories";
import Posts from "./components/Posts";
function Corpo() {
    return (
        <>
        <div className="corpo">  
            <div className="esquerda">
            <Stories />
            <Posts />
            </div>
        </div>
        </>
    )
}
export default Corpo;