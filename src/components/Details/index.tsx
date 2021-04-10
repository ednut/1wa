import React, { useState, useEffect } from "react";
import { Friend } from "../Cards";
import { RouteComponentProps } from "react-router";
import { DetailsContainer } from "./styles";

export interface DetailsProps extends RouteComponentProps<{ id: string }> {}

const Details: React.FunctionComponent<DetailsProps> = ({
  match: {
    params: { id },
  },
}) => {
  const [friend, setFriend] = useState<Friend>({
    id: null,
    title: null,
    socialHandle: null,
    content: null,
    bannerImage: null,
    imageUrl: null,
    favorite: null,
  });

  useEffect(() => {
    const getFriend = async () => {
      let r = await fetch("/friendsList.json");
      let obj = await r.json();
      let result = obj.find((x: Friend) => x.id === Number(id));
      setFriend(result);
    };
    getFriend();
  }, [id]);

  return (
    <DetailsContainer>
      <div className="content">
        <div
          className="img for-mobile"
          style={{ backgroundImage: `url( ${friend.imageUrl} )` }}
        ></div>
        <div className="name">{friend.title}</div>
        <div className="handle">{friend.socialHandle}</div>
        <div className="discription">{friend.content}</div>
        <img
          src="https://ednut.github.io/globalintern/images/dot3.png"
          alt="decorative"
        />
      </div>
      <div className="image">
        <div
          className="img"
          style={{ backgroundImage: `url( ${friend.imageUrl} )` }}
        ></div>
      </div>
    </DetailsContainer>
  );
};

export default Details;
