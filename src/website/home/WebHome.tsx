import WebAboutHome from "../about/WebAboutHome"
import WebPlan from "../plan/WebPlan"
import WebBanner from "./WebBanner"
import WebJoin from "./WebJoin"
import WebTesti from "./WebTestimonal"

const WebHome = () =>{
    return(
        <>
            <WebBanner />
            <WebAboutHome />
            <WebPlan />
            <WebTesti />
            <WebJoin />
        </>
    )
}
export default WebHome