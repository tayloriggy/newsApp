import React from "react";

const MainNewsFeed = (props) => {
  const sloths = props.sloths.map((sloth) => {
    return <div>{sloth.articles.url}</div>
  });

  return <div>{sloths}</div>; 
};

export default MainNewsFeed;