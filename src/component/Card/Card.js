import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ img, title, subTitle, desc, match }) => (
  <Link class="container-card" to={`/project/${match}`}>
    <div class="image-area">
      <img src={img} alt={title} />
    </div>
    <div class="title">
      {title}
      <span class="sub-title">/ {subTitle} </span>
    </div>
    <div class="desc">{desc}</div>
  </Link>
);

export default Card;
