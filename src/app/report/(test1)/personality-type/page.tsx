import React from "react";
import { personalityCards } from "./[jsonData]/personalityCards";
import PersonalityCard from "./PersonalityCard";

const personalityType = () => {
  return (
    <div>
      <div>
        <p className="text-lg font-bold text-[#0047AB]">Personality Types</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
    </div>
  );
};

export default personalityType;
