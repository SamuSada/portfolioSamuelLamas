import React from "react";

const SectionProjects = () => {
  return (
    <div className="p-4 w-full max-w-full flex justify-center">
      <div className="w-full max-w-4xl overflow-x-auto rounded-lg bg-zinc-800 bg-opacity-70 border-2 border-zinc-800">
        <table className="min-w-full divide-y divide-zinc-800">
          {/* head */}
          <thead className="bg-zinc-800 text-zinc-400">
            <tr className="border-b border-zinc-800">
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2 text-left">Project Name</th>
              <th className="px-4 py-2 text-left">GitHub Link</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 text-zinc-300">
            {/* row 1 */}
            <tr>
              <th className="px-4 py-2">1</th>
              <td className="px-4 py-2">Simple Coffee Listing</td>
              <td className="px-4 py-2">
                <a
                  href="https://github.com/SamuSada/SimpleCoffeeListing-React"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline break-words"
                >
                  https://github.com/SamuSada/SimpleCoffeeListing-React
                </a>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th className="px-4 py-2">2</th>
              <td className="px-4 py-2">Timer By Samuel Lamas</td>
              <td className="px-4 py-2">
                <a
                  href="https://github.com/SamuSada/timer-bySamuelLamas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline break-words"
                >
                  https://github.com/SamuSada/timer-bySamuelLamas
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SectionProjects;
