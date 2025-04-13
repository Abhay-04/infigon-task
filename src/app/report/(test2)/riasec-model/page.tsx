// components/RIASECSection.tsx
import { riasecThemes, riasecPurposes, riasecBenefits } from "./riasecData";

export default function RIASECSection() {
  return (
    <section className="px-6 py-8">
      <h3 className="text-lg font-bold text-[#0047AB]">Themes of RIASEC</h3>

      <div className="flex flex-col items-center my-6">
      <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full flex items-center justify-center">
      {/* Donut Arcs */}
      {riasecThemes.map((theme, index) => (
        <div
          key={theme.code}
          className="absolute w-full h-full"
          style={{
            clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
            transform: `rotate(${index * 60}deg)`,
          }}
        >
          <div
            className="w-full h-full rounded-full flex items-center justify-center "
            style={{
              backgroundColor: theme.color,
              transform: "rotate(60deg)",
            }}
          >
            {/* Center letter inside arc */}
            <span
              className="text-white text-xs font-bold"
              style={{
                transform: `rotate(-60deg) translate(135px) rotate(60deg)`,
              }}
            >
              {theme.code}
            </span>
          </div>
        </div>
      ))}

      {/* Central White Donut */}
      <div className="absolute w-[230px] h-[230px] sm:w-[300px] sm:h-[300px] rounded-full bg-white flex flex-col items-center justify-center text-center px-3">
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Click</span> on the coloured arcs to
          know about the RIASEC personalities.
        </p>
      </div>

      {/* Outer Labels */}
      {riasecThemes.map((theme, index) => (
        <div
          key={theme.code}
          className="absolute text-md font-bold text-white "
          style={{
            transform: `rotate(${index * 60}deg) translate(170px) rotate(-${index * 60}deg)`,
          }}
        >
          {theme.code}
        </div>
      ))}
    </div>
      </div>

      <h4 className="text-[#0047AB] font-bold mt-8">
        Purpose and Applications of RIASEC in Career Development
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
        {riasecPurposes.map((title) => (
          <div key={title} className="bg-gray-100 rounded-lg p-4 shadow-sm">
            <h5 className="font-semibold mb-1">{title}</h5>
            <p className="text-sm text-gray-600">
              Focuses on concrete, tangible information and present realities
            </p>
          </div>
        ))}
      </div>

      <h4 className="text-[#0047AB] font-bold mt-8">
        Benefits of Understanding Interest Using RIASEC for Career Planning
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
        {riasecBenefits.map((title) => (
          <div key={title} className="bg-gray-100 rounded-lg p-4 shadow-sm">
            <h5 className="font-semibold mb-1">{title}</h5>
            <p className="text-sm text-gray-600">
              Focuses on concrete, tangible information and present realities
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
