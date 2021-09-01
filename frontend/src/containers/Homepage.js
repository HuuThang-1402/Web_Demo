
import React from "react";
import doctor from '../doctor.jpg'
function Homepage() {

  return (
    <div>
      <img src={doctor} alt="Doctor" style={{display: "block", marginLeft: "auto", marginRight: "auto"}}></img>
      <div className="text" style={{fontSize: "30px", textAlign: "center"}}>
        Website trả lời thắc mắc, tư vấn sử dụng và bán thuốc của phòng khám HTLA
      </div>
    </div>
    
    
    
  );
}

export default Homepage;