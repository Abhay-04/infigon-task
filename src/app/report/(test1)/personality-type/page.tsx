import React from "react";
import { personalityCards } from "./[jsonData]/personalityCards";
import PersonalityCard from "./PersonalityCard";

const personalityType = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {personalityCards.map((card) => (
        <PersonalityCard
          key={card.code}
          title={card.title}
          code={card.code}
          image={card.image}
          bgColor={card.bgColor}
        />
      ))}
    </div>
  );
};

export default personalityType;
