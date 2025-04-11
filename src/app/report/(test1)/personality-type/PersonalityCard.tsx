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
    <div className={`rounded-lg p-4 ${bgColor}`}>
      <Image src={image} alt={title} width={60} height={60} className="mx-auto mb-2" />
      <h3 className="font-semibold text-center">{title}</h3>
      <p className="text-sm text-gray-600 text-center">{code}</p>
      <p className="text-xs text-gray-500 mt-1 text-center">
        Focuses on concrete, tangible information and present realities
      </p>
    </div>
  );
}
