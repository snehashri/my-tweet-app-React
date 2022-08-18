import React, {useState} from "react";
import { FaSistrix } from "react-icons/fa";

import '../CSS/Trends.css';

function Trends() {
    const [state, setState] = useState([
        {
          id: 1,
          country: "Trend in India",
          keyword: "Bollywood latest",
          totalKeywords: "2000k",
        },
        {
          id: 2,
          country: "Trend in India",
          keyword: "Rocketry",
          totalKeywords: "6000k",
        },
        {
          id: 3,
          country: "Trend in India",
          keyword: "47YearsOfRajinism",
          totalKeywords: "2560k",
        },
      ]);

  return (
    <div className="trends">
      {/* <div className="trends__search">
        <input
          type="text"
          className="trend__control"
          placeholder="Search Twitter"
        />
        <div className="trend__icon">
          <FaSistrix className="search" />
        </div>
      </div> */}
      <div>
      <div className="keywords">
      <div className="key">
        <div className="keyword__heading">
          <h4>Trends for you</h4>
        </div>
        {state.map((keyword) => (
          <div key={keyword.id}>
            <div className="country">{keyword.country}</div>
            <div className="keyword__name">
              <strong>{keyword.keyword}</strong>
            </div>
            <div className="keyword__tweets">{keyword.totalKeywords}</div>
          </div>
        ))}
      </div>
    </div>
      </div>
      
    </div>
  );
};

export default Trends;
