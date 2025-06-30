import React from 'react';

export type TimelineEvent = {
  title: string | React.JSX.Element;
  description: string | React.JSX.Element;
  completionTime: string;
};

type TimelineProps = {
  events: TimelineEvent[];
};

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative flex flex-col items-center py-12 bg-black text-white">
      {/* Center Line */}
      <div className="absolute w-1 bg-gray-600 h-full left-1/2 transform -translate-x-1/2"></div>

      {events.map((event, index) => {
        const isLeft = index % 2 === 0;

        return (
          <div
            key={index}
            className={`relative w-full max-w-3xl mx-auto flex mb-12 ${
              isLeft ? 'justify-end' : 'justify-start'
            }`}
          >
            {/* Dot */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow"></div>

            {/* Card */}
            <div
              className={`relative bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-4 w-[calc(45%-1rem)] ${
                isLeft ? 'text-right mr-4' : 'text-left ml-4'
              }`}
            >
              <h3 className="text-lg font-semibold text-white">{event.title}</h3>
              <div className="text-sm text-gray-300 mt-1">{event.description}</div>
              <p className="text-xs text-gray-500 mt-2">{event.completionTime}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
