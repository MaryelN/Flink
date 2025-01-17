import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <span className="sidebarListItemText">Chat</span>
                </li>
                <li className="sidebarListItem">
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <span className="sidebarListItemText">Jobs</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr" />

            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                    <span className="sidebarFriendName">John Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/3.jpeg" alt="" />
                    <span className="sidebarFriendName">John Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/4.jpeg" alt="" />
                    <span className="sidebarFriendName">John Doe</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
