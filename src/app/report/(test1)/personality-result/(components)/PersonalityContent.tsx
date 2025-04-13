// components/PersonalityCard.tsx

import Image from "next/image";


// personalityData.ts

const personalityData = {
  title: "Architect",
  type: "INTJ Personality",
  traits: ["Strategic", "Analytical", "Independent"],
  description:
    "Congratulations on taking the first step for personalized Career Planning & Assessment! We understand the significance of making informed decisions as you navigate your academic journey and future career. We are committed to empowering individuals with the tools and insights needed to confidently navigate the world of careers and education.",
  color: "#E7DFEA",
  textColor: "#9361A6",
  image: "/assets/intj.png", // replace with your image path
};


export default function PersonalityCard() {
  return (
    <div className="flex flex-col lg:flex-row sm:items-center lg:items-start gap-6 bg-white rounded-xl  w-full">
      {/* Image */}
      <div className="bg-[#F2EDF7] p-6 py-12 rounded-xl w-full max-w-[240px] flex justify-center">
        <Image
          src={personalityData.image}
          alt={personalityData.title}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1">
        {/* Title + Type */}
        <div className="flex flex-row sm:items-center gap-2 mb-2">
          <h2 className="text-xl font-bold text-[#252A31] border-r-2 pr-3 border-[#CACACA] ">{personalityData.title}</h2>
          <span
            className="text-lg font-bold"
            style={{ color: personalityData.textColor }}
          >
            {personalityData.type}
          </span>
        </div>

        {/* Traits */}
        <div className="flex flex-wrap gap-2 mb-3">
          {personalityData.traits.map((trait) => (
            <span
              key={trait}
              className="text-sm px-3 py-1 rounded-full font-medium"
              style={{
                backgroundColor: `${personalityData.color}`,
                color: personalityData.textColor,
              }}
            >
              {trait.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-[#5B6871]">{personalityData.description}</p>
      </div>
    </div>
  );
}
