import React from 'react';
import { CardContainer } from './styles';
import Friends from '../../friendsList.json';

const Cards: React.FC = () => {
  return (
    <div className="container">
      {Friends.map((friend) => {
        return (
          <CardContainer key={friend.id}>
            <div
              className="banner"
              style={{ backgroundImage: `url( ${friend.bannerImage} )` }}
            ></div>
            <div className="cont-wrap">
              <div className="avata">
                <span
                  style={{ backgroundImage: `url( ${friend.imageUrl} )` }}
                ></span>
              </div>
              <div className="content">
                <div className="title">
                  <span>{friend.title}</span>
                  <button>Following</button>
                </div>
                <div className="handle"> {friend.socialHandle} </div>
                <div className="details"> {friend.content} </div>
              </div>
            </div>
          </CardContainer>
        );
      })}
    </div>
  );
};

export default Cards;
