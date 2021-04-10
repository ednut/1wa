import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CardsContainer } from "./styles";
import { getIntialState, persistState } from "../../util";

export interface Friendsprops {}

export interface Friend {
  id: number | null;
  title: string | null;
  socialHandle: string | null;
  content: string | null;
  bannerImage: string | null;
  imageUrl: string | null;
  favorite: boolean | null;
}

const Cards: React.FC<Friendsprops> = () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [favorite, setFavorite] = useState<number[]>(
    getIntialState("friends") || []
  );

  const getFavourite = (friend: number) => {
    setFavorite((prev) => [...prev, friend]);
  };

  useEffect(() => {
    const getFriends = async () => {
      let r = await fetch("/friendsList.json");
      let name = await r.json();
      setFriends(name);
    };
    getFriends();
  }, []);

  useEffect(() => {
    persistState("friends", favorite);
  }, [favorite]);

  const { t } = useTranslation();

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
                <Link to={`/${friend.id}/details`}>
                  {" "}
                  <span
                    style={{ backgroundImage: `url( ${friend.imageUrl} )` }}
                  ></span>
                </Link>
              </div>
              <div className="content">
                <div className="title">
                  <span className={`link ${friend.favorite ? "active" : ""}`}>
                    <Link to={`/${friend.id}/details`}>{friend.title}</Link>
                  </span>
                  <span
                    className={`icon ${
                      friend.id && favorite.includes(friend.id) ? "active" : ""
                    }`}
                    onClick={() => friend.id && getFavourite(friend.id)}
                  >
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </span>
                  <button>{t("Following")}</button>
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
