import React, { useState } from "react";
import './TopHead.css'
const TopHead = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="topHead">
      <div class="summer-sale-for-all-swim-suits-parent">
        <div class="summer-sale-for">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </div>
        <div class="shopnow">ShopNow</div>

        <div className="dropdown-container">


          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="English">English</option>
            <option value="French">French</option>
        
          </select>
          
        </div>
      </div>
    </div>
  );
};

export default TopHead;
