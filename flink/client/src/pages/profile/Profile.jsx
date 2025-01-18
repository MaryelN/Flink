import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
import './profile.css';

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
              <div className='profileCover'>
                <img
                className='profileCoverImg'
                src="assets/person/3.jpeg"
                alt=''
                />
                <img
                className='profileUserImg'
                src="assets/person/7.jpeg"
                alt=''
                />
              <div className='profileInfo'>
                <h4 className='profileInfoName'>Safak Kocaoglu</h4>
                <span className='profileInfoDesc'>Hello friends</span>
              </div>              
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed />
              <Rightbar profile/>
            </div>
          </div>
          </div>
        </>

  )
}

