"use client";

import { useState, ReactNode } from "react";
import clsx from "clsx";

interface TabItem {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex border-b space-x-6 px-4">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveIndex(index)}
            className={clsx(
              "py-3 text-sm font-medium",
              activeIndex === index
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-blue-600"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">{tabs[activeIndex].content}</div>
    </div>
  );
}

