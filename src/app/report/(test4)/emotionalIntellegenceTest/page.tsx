import React from "react";

const EmotionalIntellegenceTest = () => {
  const emotionalElements = [
    { id: 1, title: "Self-Awareness", color: "#fbbf24" },
    { id: 2, title: "Self-Regulation", color: "#3b82f6" },
    { id: 3, title: "Empathy", color: "#ec4899" },
    { id: 4, title: "Social Skills", color: "#a16207" },
    { id: 5, title: "Motivation", color: "#10b981" },
  ];
  const applications = [
    {
      title: "Enhanced Leadership and Communication Skills",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Improved Decision Making and Problem Solving",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Career Planning and Development",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    },
    {
      title: "Emotional Intelligence in the Workplace",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    },
    {
      title: "Leadership Development",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    },
  ];

  const benefits = [
    {
      title: "Improved Interpersonal Relationships",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Enhanced Job Performance",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
  ];

  return (
    <div className="flex  flex-col gap-y-8">
      <div>
        <h2 className="text-[#0047AB] font-bold text-lg mb-2">
          5 Emotional Elements
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 my-6">
        {emotionalElements.map((e) => (
          <div
            key={e.id}
            className="flex flex-col items-center text-center space-y-2"
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md"
              style={{ background: e.color }}
            >
              {e.id}
            </div>
            <p className="text-sm font-medium text-gray-800">{e.title}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-[#0047AB] font-bold text-lg mb-2">
          Applications of the Emotional Intelligence Test in career development
          include
        </h2>
        <p className="text-[#5B6871] mt-2">
          Congratulations on taking the first step for personalized Career
          Planning & Assessment! We understand the significance of making
          informed decisions as you navigate your academic journey and future
          career. We are committed to empowering individuals with the tools and
          insights needed to confidently navigate the world of careers and
          education.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 my-4">
          {applications.map((app, idx) => (
            <div
              key={idx}
              className={`bg-[#CACACA33] p-4 rounded-lg shadow-sm ${
                idx < 2 ? "sm:col-span-6" : "sm:col-span-4"
              }`}
            >
              <p className="font-bold text-[#1E2327] text-sm">{app.title}</p>
              <p className="text-sm text-gray-600 mt-1">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-[#0047AB] font-bold text-lg mb-2">
          Understanding emotional intelligence for career planning offers
          several benefits, including
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((app, idx) => (
            <div key={idx} className="bg-[#CACACA33] p-4 rounded-xl shadow-sm">
              <p className="font-bold text-[#1E2327] text-sm">{app.title}</p>
              <p className="text-sm text-gray-600 mt-1">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmotionalIntellegenceTest;
