import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="warpper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="search_icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="search_icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="search_icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="search_icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="search_icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="search_icon" />
            <div className="counter">5</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="search_icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
