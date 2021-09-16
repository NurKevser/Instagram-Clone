import "../styles/menu.scss"
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as Explore } from "../images/explore.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";

function Menu() {
    return (
        <div className="menu">
            <Home className="icon" />
            <Inbox className="icon" />
            <Explore className="icon" />
            <Notifications className="icon" />
            {/* profileIconComponent */}
        </div>
    )

}

export default Menu;