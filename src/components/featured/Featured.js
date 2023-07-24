import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title"> Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featured_chart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={3} />
        </div>
        <div className="title">Total sales made today</div>
        <p className="amount">$420</p>
        <p className="desc">
          Et dolore dolor id labore nisi laboris pariatur tempor est mollit.
        </p>
        <div className="summary">
          <div className="item">
            <div className="item_title">Target</div>
            <div className="item_result negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="result_amount">$1241.5k</div>
            </div>
          </div>
          <div className="item">
            <div className="item_title">Last Week</div>
            <div className="item_result positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="result_amount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="item_title">Last Month</div>
            <div className="item_result positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="result_amount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
