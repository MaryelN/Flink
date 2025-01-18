import "./rightbar.css";
import {Users} from "../../dummyData"
import Online from "../online/Online";

export default function Rightbar({profile}) {
  
  const HomeRightbar = () => {
    return (
      <div className="rightbar">
        <div className="rightbarWrapper">
            <div className="birthdayContainer">
              <img className="birthdayImg" src="assets/gift.png" alt="" />
              <span className="birthdayText">
                  <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
              </span>
            </div>
            <img className="rightbarAd" src="assets/ad.png" alt="" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
                {Users.map((u) => (
                  <Online key={u.id} user={u}/>
                ))}
            </ul>
        </div>
    </div>
  )
}

  const ProfileRightbar = () => {
    return (
      <>
      <h4 className="rightbarTitle">UserInformation</h4>
      <div className="rightbarInfo">
        <div className="rightBarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightBarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightBarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollogin">
          <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">John Cartes</span>
        </div>
        <div className="rightbarFollogin">
          <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">John Cartes</span>
        </div>
        <div className="rightbarFollogin">
          <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">John Cartes</span>
        </div>
        <div className="rightbarFollogin">
          <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">John Cartes</span>
        </div>
        <div className="rightbarFollogin">
          <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">John Cartes</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar/>
      </div>
    </div>
  )
}
