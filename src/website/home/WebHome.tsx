import WebAboutHome from "../about/WebAboutHome"
import WebContactHome from "../contact/WebContactHome"
import WebPlan from "../plan/WebPlan"
import WebBanner from "./WebBanner"
import WebJoin from "./WebJoin"
import WebTestiMobile from "./WebTestiMobile"
import WebTesti from "./WebTestimonal"
import WebTestiTab from "./WebTestiTab"

const WebHome = () =>{
    return(
        <>
            <WebBanner />
            <WebAboutHome />
            <WebPlan />
            <WebTesti />
            <WebTestiTab />
            <WebTestiMobile />
            <WebJoin />
            <WebContactHome />
        </>
    )
}
export default WebHome