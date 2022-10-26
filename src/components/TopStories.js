import axios from "axios";
import React, { useEffect, useState } from "react";
import { format } from 'date-fns';

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
          {items.slice(0, 5).map(({ author, urlToImage, publishedAt, title, url}) => (
            <div>
              <h2 id='title'>{title}</h2>
              <ul>
                <li key={'auth'}>By {author}</li>
                <img id="image" key={'im'} src={urlToImage}></img>
                <li key={'link'}>
                  <a href={url} target='_blank' rel='noreferrer'>
                  Read Full Article
                  </a>
                </li>
              </ul>
              <p>Published {format(new Date(publishedAt), 'MM/dd/yyyy')}</p>
            </div>
          ))}
        </article>
  );

}


export default TopStories;