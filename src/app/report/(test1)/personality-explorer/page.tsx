import React from "react";

export default function PersonalityExplorer() {
  return (
    <div className="p-6 max-w-full mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-[#0047AB]">
        Understanding Personality Explorer
      </h1>

      <section className="">
        <h2 className="text-xl font-semibold">Introduction</h2>
        <p className="text-gray-700 whitespace-pre-line mt-2">
          Congratulations on taking the first step for personalized Career Planning & Assessment! 
We understand the significance of making informed decisions as you navigate your academic journey and future career. 
We are committed to empowering individuals with the tools and insights needed to confidently navigate the world of careers and education.

To understand your personality Myers-Brig Type Indicator (MBTI) test was used. 
It is a personality explorer psychometric assessment tool that helps individuals understand their preferences, strengths, and areas for growth. 
The goal is to gain deeper self-awareness, enhance personal development, and improve interpersonal relationships.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0047AB]">
          The Four Dichotomies
        </h2>
        <div className="grid gap-6 mt-4">
          {[
            {
              left: "Extraversion (E)",
              leftDesc:
                "Energized by social interactions and external activities",
              right: "Introversion (I)",
              rightDesc:
                "Energized by solitary activities and internal reflection",
            },
            {
              left: "Sensing (S)",
              leftDesc:
                "Focuses on concrete, tangible information and present realities",
              right: "Intuition (N)",
              rightDesc:
                "Focuses on abstract, conceptual information and future possibilities",
            },
            {
              left: "Thinking (T)",
              leftDesc: "Decisions based on logic and objective analysis",
              right: "Feeling (F)",
              rightDesc: "Decisions based on logic and objective analysis",
            },
            {
              left: "Judging (J)",
              leftDesc: "Prefers structured, organized approaches and planning",
              right: "Perceiving (P)",
              rightDesc:
                "Prefers flexible, spontaneous approaches and adaptability",
            },
          ].map((pair, idx) => (
            <div
              key={idx}
              className="grid grid-cols-3 gap-4 items-center border p-4 rounded-xl shadow-sm"
            >
              <div>
                <p className="font-semibold">{pair.left}</p>
                <p className="text-gray-600 text-sm">{pair.leftDesc}</p>
              </div>
              <div className="text-center text-2xl text-green-600">⇄</div>
              <div>
                <p className="font-semibold">{pair.right}</p>
                <p className="text-gray-600 text-sm">{pair.rightDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0047AB]">
          Purpose, Applications, and Benefits of MBTI in Career Development
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {[
            "Self Awareness",
            "Leadership Development",
            "Career Alignment",
            "Career Planning",
            "Team Building",
            "Conflict Resolution",
            "Improved Communication",
            "Strength Identification",
            "Personal Growth",
          ].map((title, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-xl shadow">
              <h3 className="font-medium">{title}</h3>
              <p className="text-gray-600 text-sm">
                Focuses on concrete, tangible information and present realities
                tangible information and present realities
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
