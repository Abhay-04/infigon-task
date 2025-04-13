// components/CareerAnalysisReport.tsx
export default function CareerAnalysis() {
  return (
    <section className="max-w-full border-b bg-white">
      {/* Header + Card CTA */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b px-4 md:px-20 py-6 gap-6">
        <div className="md:col-span-8 space-y-2">
          <h2 className="text-xl md:text-2xl font-semibold">
            Your Career Analysis Report
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Your Report ensures a complete understanding of your strengths,
            areas for growth, and ideal career fit.
          </p>
        </div>

        <div className="md:col-span-4 border rounded-lg shadow-sm p-4 flex flex-col gap-2">
          <p className="font-semibold text-sm">
            Want To Speak To An Expert Career Counsellor?
          </p>
          <p className="text-sm text-gray-500">
            Explore a list of 1000+ Expert Career Counsellors near you!
          </p>
          <div className="mt-2">
            <button className="bg-gray-100 text-sm font-medium px-4 py-2 rounded hover:bg-gray-200 cursor-pointer w-full md:w-auto">
              See All
            </button>
          </div>
        </div>
      </div>

      {/* Career Options */}
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-6 py-6 px-4 md:px-20">
        <div className="flex flex-wrap items-center gap-4">
          <p className="text-lg md:text-xl text-gray-500">
            Your <span className="text-[#0047AB] font-bold">TOP 3</span> Career
            Options
          </p>

          <div className="flex items-center gap-2 flex-wrap">
            {["Engineer", "Doctor", "Teacher"].map((career, index) => (
              <span
                key={career}
                className="border px-3 py-1 rounded-full text-gray-500 text-sm flex items-center gap-2"
              >
                <span className="bg-[#CACACA] text-xs rounded-full w-5 h-5 flex items-center justify-center text-white">
                  {index + 1}
                </span>
                <div className="blur-[1.3px] font-semibold">{career}</div>
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <p className="text-base md:text-lg text-black font-bold">
            Choose them right here!
          </p>
          <button className="bg-[#0047AB] hover:bg-blue-600 cursor-pointer text-white text-sm font-medium px-6 py-3 rounded text-md w-full md:w-auto">
            Your Career Options
          </button>
        </div>
      </div>
    </section>
  );
}
