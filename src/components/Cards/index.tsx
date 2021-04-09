import React, { useState, useEffect } from "react";
import { CardContainer } from "./styles";

interface Friendsprops {}

export interface Friends {
  id: number;
  title: string;
  socialHandle: string;
  content: string;
  bannerImage: string;
  imageUrl: string;
}

const Cards: React.FC<Friendsprops> = () => {
  const [friends, setFriends] = useState<Friends[]>([]);

  const getFriends = async () => {
    let r = await fetch("friendsList.json");
    let name = await r.json();
    setFriends(name);
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <div className="container">
      {friends.map((friend) => {
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
