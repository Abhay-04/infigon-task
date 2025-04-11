// components/RIASECSection.tsx
import { riasecThemes, riasecPurposes, riasecBenefits } from "./riasecData";

export default function RIASECSection() {
  return (
    <section className="px-6 py-8">
      <h3 className="text-lg font-bold text-[#0047AB]">Themes of RIASEC</h3>

      <div className="flex flex-col items-center my-6">
        <div className="relative w-[300px] h-[300px] rounded-full flex items-center justify-center">
          {riasecThemes.map((theme, index) => (
            <div
              key={theme.code}
              className="absolute text-sm font-medium"
              style={{
                transform: `rotate(${index * 60}deg) translate(120px) rotate(-${index * 60}deg)`,
                color: theme.color
              }}
            >
              {theme.label}
            </div>
          ))}
          <p className="absolute w-40 text-center text-sm text-gray-600">
            Click on the coloured arcs to know about the RIASEC personalities.
          </p>
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
