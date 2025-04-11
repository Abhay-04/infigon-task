// components/CareerAnalysisReport.tsx
export default function CareerAnalysis() {
  return (
    <section className="max-w-full border-b bg-white ">
      {/* Header + Card CTA */}
      <div className="grid grid-cols-12  border-b px-20 py-6">
        <div className="col-span-8">
          <h2 className="text-2xl font-semibold">
            Your Career Analysis Report
          </h2>
          <p className="text-gray-600">
            Your Report ensures a complete understanding of your strengths,
            areas for growth, and ideal career fit.
          </p>
        </div>

        <div className="col-span-4 grid grid-cols-12  border rounded-lg shadow-sm w-full md:w-auto py-2 px-2">
          <div className="col-span-10">
            <p className="font-semibold text-sm">
              Want To Speak To An Expert Career Counsellor?
            </p>
            <p className="text-sm text-gray-500">
              Explore a list of 1000+ Expert Career Counsellors near you!
            </p>
          </div>
          <div className="col-span-2 content-center">
            {" "}
            <button className="bg-gray-100 text-sm font-medium px-4 py-1 rounded hover:bg-gray-200 cursor-pointer">
              See All
            </button>
          </div>
        </div>
      </div>

      {/* Career Options */}
      <div className="flex flex-wrap items-center justify-center gap-4 py-6 px-20 ">
        <p className="text-xl text-gray-500">
          Your <span className="text-[#0047AB] font-bold">TOP 3</span> Career
          Options
        </p>

        <div className="flex items-center gap-2 flex-wrap">
          {["Engineer", "Doctor", "Teacher"].map((career, index) => (
            <span
              key={career}
              className="border px-3 py-1 rounded-full text-gray-500 text-sm flex items-center gap-2"
            >
              <span className="bg-[#CACACA] text-xs rounded-full w-5 h-5  flex items-center justify-center p-3 text-white">
                {index + 1}
              </span>{" "}
              <div  className="blur-[1.3px]  font-semibold">{career}</div>
            </span>
          ))}
        </div>

        <div className="border-l h-6 mx-4" />

        <div className="flex items-center gap-2">
          <p className="text-lg text-black font-bold">
            Choose them right here!
          </p>
          <button className="bg-[#0047AB] hover:bg-blue-600 cursor-pointer text-white text-sm font-medium px-6 py-3 rounded text-md">
            Your Career Options
          </button>
        </div>
      </div>
    </section>
  );
}
