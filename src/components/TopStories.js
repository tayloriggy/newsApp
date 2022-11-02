import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const TopStories = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getTopHeadlines = async () => {
      const res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=382a8c7028af4e9c80194d4000d35aed');
      setItems(res.data.articles);
    }
    const timer = setTimeout(() => {
      getTopHeadlines();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
        <article key={'article'}>   
          {items.slice(0, 5).map((item, index) => 
          <Card key={index} item={item} />
          )}
        </article>
  );

}


export default TopStories;