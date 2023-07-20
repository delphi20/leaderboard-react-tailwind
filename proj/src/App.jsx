import { useState } from "react";
import reactLogo from "./assets/react.svg";
import finn from "./assets/finn.jpg";
import flame from "./assets/flame.png";
import jake from "./assets/jake.jpg"
import "./App.css";

function App() {
  const records = [
    {
      User: "Finn the human",
      Contributions: "50",
      Posts: "12",
      Followers: "3",
      Pic: finn,
      location: "treehouse"
    },
    {
      User: "Flame Princess",
      Contributions: "34",
      Posts: "3",
      Followers: "4",
      Pic: flame,
      location: "flame kingdom"
    },
    {
      User: "Jake the dog",
      Contributions: "26",
      Posts: "13",
      Followers: "1",
      Pic: jake,
      location: "treehouse"
    },
  ];

  const maxContrib = Math.max(...records.map((r) => parseInt(r.Contributions)));

  const sortedRecords = [...records].sort((a, b) => {
    return parseInt(b.Contributions) - parseInt(a.Contributions);
  });

  const [isDisplayed, setIsDisplayed] = useState(false);

  const getContrib = (record, index) => {
    const contributions = records.map((r) => parseInt(r.Contributions));
    const uniqueContribs = [...new Set(contributions)];
    const maxContrib = Math.max(...uniqueContribs);
  
    let objWithMaxContrib = record;
    if (index === 1) {
      objWithMaxContrib = records.find((r) => parseInt(r.Contributions) === maxContrib);
    } else {
      const remainingContribs = uniqueContribs.filter((c) => c !== maxContrib);
      const displayedContribs = records
        .slice(0, index)
        .map((r) => parseInt(r.Contributions));
      const availableContribs = remainingContribs.filter(
        (c) => !displayedContribs.includes(c)
      );
      const contribValue = availableContribs[index % availableContribs.length];
      objWithMaxContrib = records.find((r) => parseInt(r.Contributions) === contribValue);
    }
  
    return objWithMaxContrib;
  };
  

  return (
    <div className="bg-purple-400 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 border-4 border-black h-auto my-24 w-screen mx-32 rounded-md relative">
        <h1 className="text-4xl font-bold top-0 left-0 absolute m-16">
          Top Gainers
        </h1>
        <div className="flex flex-row gap-4  mt-24 mb-12 pt-8 pl-8 pr-8">
          {sortedRecords.slice(0, 3).map((record, index) => (
            
            <div
              className="shadow-lg rounded-lg aspect-square relative h-72 w-1/3"
              key={index}
            >
              
              <div
                className={`${
                  index === 1
                    ? "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500"
                    : "bg-gray-200"
                }  bg-gray-200 absolute inset-0 h-1/3 rounded-lg text-center top-0 text-2xl pt-4 `}
              >
                {getContrib(record, index).Contributions}
                <img
                  src={getContrib(record, index).Pic}
                  className="rounded-full w-16 h-16 mx-auto mt-3 border-4 border-white"
                />
                <div className="text-lg font-normal mt-1">{getContrib(record, index).User}</div>
                <div className="absolute top-60 mt-1 left-5 text-sm font-normal">{getContrib(record,index).location}</div>
                <button className="absolute top-60 text-sm text-green-500 border-2 border-green-500 p-1 rounded-sm ml-20">Congratulate</button>
              </div>
              
            </div>
          ))}
        </div>
        <div className="font-bold text-xl absolute left-20">All Users</div>
        <table className="ml-14 mt-24 text-sm">
          <thead>
            <tr>
              <th className="pr-64">User</th>
              <th className="pr-36">Contributions</th>
              <th className="pr-20">Posts</th>
              <th className="pr-72">Followers</th>
              <th className="pr-12">Congratulate</th>
            </tr>
            <tr className="empty-row"></tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <>
                <tr key={index} className="shadow-lg rounded-lg bg-gray-100">
                  
                  <td className="relative pr-14 pb-4"><img
                  src={record.Pic}
                  className="rounded-full w-10 h-10 mt-3 absolute top-0 left-3"
                />{record.User}</td>
                  <td className="pr-36">{record.Contributions}</td>
                  <td className="pr-20 ">{record.Posts}</td>
                  <td className="pr-72">{record.Followers}</td>
                  <td>
                    <div className="bg-green-600 mt-4 mb-4 w-24 rounded-sm">
                      <button className=" p-2 text-white">
                        Congratulate
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="empty-row"></tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
