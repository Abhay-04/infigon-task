"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import CareerAnalysis from "@/components/CareerAnalysis";

interface RouteLayoutProps {
  children: ReactNode;
}

type TestKey = "test1" | "test2" | "test3" | "test4" | "test5";

const testLinks: Record<TestKey, { label: string; href: string }[]> = {
  test1: [
    {
      label: "Understanding Personality Explorer",
      href: "/report/personality-explorer",
    },
    { label: "Personality Type", href: "/report/personality-type" },
    { label: "Your Result", href: "/report/personality-result" },
  ],
  test2: [
    {
      label: "Understanding Interest Explorer",
      href: "/report/interest-explorer",
    },
    { label: "RIASEC Model", href: "/report/riasec-model" },
    { label: "Your Result", href: "/report/interestReport" },
  ],
  test3: [
    {
      label: "Understanding Career Motivators",
      href: "/report/careerMotivator",
    },
    { label: "10 Career Motivators", href: "/report/careerOptions" },
    { label: "Your Result", href: "/report/careerResult" },
  ],
  test4: [
    {
      label: "Understanding Emotional Intelligence",
      href: "/report/emotionalIntelligence",
    },
    {
      label: "Daniel Goleman Emotional Intelligence Test",
      href: "/report/emotionalIntellegenceTest",
    },
    { label: "Your Result", href: "/report/emotionalIntelligenceReport" },
  ],
  test5: [
    { label: "Understanding Learning Styles", href: "/report/learningStyles" },
    { label: "Your Result", href: "/report/learningStylesResult" },
  ],
};

const testTitles: Record<TestKey, string> = {
  test1: "Personality Explorer",
  test2: "Interest Explorer",
  test3: "Career Motivators",
  test4: "Emotional Intelligence",
  test5: "Learning Styles",
};
const testTitlesColor: Record<TestKey, string> = {
  test1: "text-[#0047AB]",
  test2: "text-[#309759]",
  test3: "text-[#FF9706]",
  test4: "text-[#398BFF]",
  test5: "text-[#DE5AFF]",
};
const testLabel: Record<TestKey, string> = {
  test1: "Test 1",
  test2: "Test 2",
  test3: "Test 3",
  test4: "Test 4",
  test5: "Test 5",
};

export default function RouteLayout({ children }: RouteLayoutProps) {
  const [activeTest, setActiveTest] = useState<TestKey | null>("test1");
  const router = useRouter();
  const pathname = usePathname();

  const handleTestClick = (test: TestKey) => {
    const isSame = activeTest === test;
    const newTest = isSame ? null : test;
    setActiveTest(newTest);

    if (!isSame) {
      const firstLink = testLinks[test][0]?.href;
      router.push(firstLink);
    }
  };

  return (
    <div>
      <div className="mb-10 w-full">
        <CareerAnalysis />
      </div>

      <div className="flex h-screen px-20">
        {/* Left Sidebar */}
        <aside className="w-72   border-r border-[#CACACA] text-black overflow-y-auto px-6 cursor-pointer">
          <div className="space-y-6 ">
            {Object.entries(testLinks).map(([testKey, links]) => {
              const key = testKey as TestKey;

              return (
                <div key={key}>
                  {/* Header with Icon + Test Label */}
                  <button
                    className={`w-full flex items-center gap-3 text-left px-6 py-3 cursor-pointer rounded font-medium ${
                      activeTest === key
                        ? "border-2  rounded-lg border-gray-100  border-r-[#0047AB]"
                        : ""
                    }`}
                    onClick={() => handleTestClick(key)}
                  >
                    <Image
                      // src={`/assets/${key}.png`}
                      src={
                        activeTest === key
                          ? `/assets/${key}Active.png`
                          : `/assets/${key}.png`
                      }
                      alt={`${key} icon`}
                      width={24}
                      height={24}
                      className="shrink-0 "
                    />
                    <div>
                      <div className="font-semibold">
                        {testLabel[key].toUpperCase()}
                      </div>
                      <div
                        className={`text-sm ${testTitlesColor[key]} font-bold `}
                      >
                        {testTitles[key]}
                      </div>
                    </div>
                  </button>

                  {/* Expand Links */}
                  {activeTest === key && (
                    <nav className="mt-2 ml-8 space-y-1 text-sm ">
                      {links.map(({ label, href }) => {
                        const isActive = pathname === href;

                        return (
                          <Link
                            key={href}
                            href={href}
                            className={`block text-[#666B72] hover:text-black hover:font-bold ${
                              isActive ? "text-black font-bold" : ""
                            }`}
                          >
                            {label}
                          </Link>
                        );
                      })}
                    </nav>
                  )}
                </div>
              );
            })}
          </div>
          <div className="my-10">
            <button className="border border-[#0047AB] rounded-md px-6 py-3 text-[#0047AB] font-bold cursor-pointer ">
              Download Report Card
            </button>
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
