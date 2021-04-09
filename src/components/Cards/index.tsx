import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardsContainer } from "./styles";

export interface Friendsprops {}

export interface Friend {
  id: number | null;
  title: string | null;
  socialHandle: string | null;
  content: string | null;
  bannerImage: string | null;
  imageUrl: string | null;
}

const Cards: React.FC<Friendsprops> = () => {
  const [friends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {
    const getFriends = async () => {
      let r = await fetch("/friendsList.json");
      let name = await r.json();
      setFriends(name);
    };
    getFriends();
  }, []);

  return (
    <div className="container">
      {friends.map((friend) => {
        return (
          <CardsContainer key={friend.id}>
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
                  <span className="link">
                    <Link to={`/${friend.id}/details`}>{friend.title}</Link>
                  </span>
                  <span className="icon">
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </span>
                  <button>Following</button>
                </div>
                <div className="handle"> {friend.socialHandle} </div>
                <div className="details"> {friend.content} </div>
              </div>
            </div>
          </CardsContainer>
        );
      })}
    </div>
  );
};
export default Cards;
