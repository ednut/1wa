import React from "react";
import Cards from "../Cards";
import Filter from "../../components/Filter";
import { FriendsContainer } from "./styles";

const Friends: React.FC = () => {
  return (
    <FriendsContainer>
      <Filter />
      <Cards />
    </FriendsContainer>
  );
};

export default Friends;
