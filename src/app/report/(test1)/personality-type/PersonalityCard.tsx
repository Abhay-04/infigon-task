// components/PersonalityCard.tsx
import Image from "next/image";

type CardProps = {
  title: string;
  code: string;
  image: string;
  bgColor: string;
};

export default function PersonalityCard({ title, code, image, bgColor }: CardProps) {
  return (
    <div className="rounded-xl py-4 bg-white ">
    <div className={`${bgColor} rounded-lg px-4 py-6 flex items-center justify-center mb-3`}>
      <Image src={image} alt={title} width={60} height={60} />
    </div>
  
    <div className="flex items-center justify-between mb-1">
      <h3 className="font-bold text-sm text-[#1E2327]">{title}</h3>
      <span className={`${bgColor} text-xs font-semibold px-2 py-1 rounded-full text-gray-700 `}>{code}</span>
    </div>
  
    <p className="text-sm text-[#5B6871] leading-snug pr-6">
      Focuses on concrete, tangible information and present realities tangible information and present realities
    </p>
  </div>
  
  );
}
