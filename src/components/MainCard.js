import React from "react"; 
import { format } from 'date-fns';

const MainCard = (props) => {
  const item = props.item;

  return (
    <div className='card-body'>
      <h2 id='title'>{item.title}</h2>
      <p id='author'>By {item.author}</p>
      <img src={item.urlToImage} id='image'></img> 
      <div>
        <a href={item.url} target='_blank' rel='noreferrer'>
          Read Full Article
        </a>
      </div>
      <p>Published {format(new Date(item.publishedAt), 'MM/dd/yyyy')}</p>
    </div>
  );
};

export default MainCard;