export default function CareerMotivators() {
  const motivators = [
    { id: 1, title: "Achievement and Results", color: "#1999A1" },
    { id: 2, title: "Helping Others", color: "#A15A19" },
    { id: 3, title: "Financial Rewards", color: "#55DCDC" },
    { id: 4, title: "Creativity and Innovation", color: "#F6C61A" },
    { id: 5, title: "Security and Stability", color: "#9140F8" },
    { id: 6, title: "Leadership and Influence", color: "#00A3FF" },
    { id: 7, title: "Continuous Learning", color: "#194CA1" },
    { id: 8, title: "Independence", color: "#EE82FF" },
    { id: 9, title: "Teamwork and Collaboration", color: "#B97979" },
    { id: 10, title: "Flexibility and Work-Life Balance", color: "#FA9B56" },
  ];

  const sections = [
    {
      title:
        "Purpose and Applications of Career Motivators in career development include",
      items: [
        "Enhanced Job Satisfaction",
        "Improved Performance and Engagement",
        "Career Planning and Development",
      ],
    },
    {
      title:
        "Benefits of understanding interest using career motivators for career planning include",
      items: [
        "Alignment with Personal Values",
        "Improved Decision-Making",
        "Enhanced Self-Awareness",
      ],
    },
  ];

  return (
    <div className="sm:p-6 p-2  space-y-6">
      <h2 className="text-xl font-bold text-blue-900">
        TOP 10 Career Motivators
      </h2>

      {/* Motivators Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
        {/* Left side: 1 to 5 */}
        <div className="space-y-3">
          {motivators.slice(0, 5).map((m) => (
            <div
              key={m.id}
              className="flex items-center  gap-4 border px-4 py-2 rounded-full shadow-sm "
              style={{ borderColor: m.color }}
            >
              <div
                className="w-10 h-10 rounded-full text-white text-xs font-bold flex items-center justify-center"
                style={{ backgroundColor: m.color }}
              >
                {m.id}
              </div>
              <span className="text-base font-bold  text-[#1E2327] w-[80%] text-center">
                {m.title}
              </span>
            </div>
          ))}
        </div>

        {/* Right side: 6 to 10 */}
        <div className="space-y-3">
        {motivators.slice(5).map((m) => (
            <div
              key={m.id}
              className="flex items-center  gap-4 border px-4 py-2 rounded-full shadow-sm "
              style={{ borderColor: m.color }}
            >
              <div
                className="w-10 h-10 rounded-full text-white text-xs font-bold flex items-center justify-center"
                style={{ backgroundColor: m.color }}
              >
                {m.id}
              </div>
              <span className="text-base font-bold  text-[#1E2327] w-[80%] text-center">
                {m.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Sections */}
      {sections.map((section, i) => (
        <div className="mb-14" key={i}>
          <h3 className="text-[#0047AB] text-lg font-bold mt-6 mb-2">
            {section.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {section.items.map((item, index) => (
              <div
                key={index}
                className="bg-[#CACACA33] p-3 rounded-md text-sm text-gray-700"
              >
                <p className="font-bold text-[#1E2327]">{item}</p>
                <p className="text-xs mt-1 text-gray-500">
                  Focuses on concrete, tangible information and present
                  realities
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
