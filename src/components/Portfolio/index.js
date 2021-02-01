import React from 'react';
import coverImage from "../../assets/images/portfolio_cover.png";
import WorkList from "../WorkList";


function Portfolio() {
  return (
    <section>
      <img src={coverImage} style={{ width: "100%" }} alt="cover" />
      <WorkList></WorkList>
    </section>
  );
}
export default Portfolio;
