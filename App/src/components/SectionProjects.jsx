import React from "react";

const SectionProjects = () => {
  return (
    <div>
      <div className="overflow-x-auto rounded-lg bg-base-100 bg-opacity-70 border-2 border-base-100 m-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Project Name</th>
              <th>GitHub Link</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Simple Coffee Listing</td>
              <td><a href="https://github.com/SamuSada/SimpleCoffeeListing-React" target="_blank">https://github.com/SimpleCoffeeListing-React</a></td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Timer By Samuel Lamas</td>
              <td><a href="https://github.com/SamuSada/timer-bySamuelLamas" target="_blank">https://github.com/timer-bySamuelLamas</a></td>
            </tr>
            {/* row 3 */}
            {/*<tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Red</td>
            </tr>*/}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SectionProjects;
