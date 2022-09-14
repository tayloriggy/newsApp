import React from "react";

const MainNewsFeed = (props) => {
  const sloths = props.sloths.map((sloth) => {
    return (
    <div key={sloth.id}>
      {sloth.title}
      <img src={sloth.urlToImage} />
    </div>
    );
  });

  return <div>{sloths}</div>
};

export default MainNewsFeed;