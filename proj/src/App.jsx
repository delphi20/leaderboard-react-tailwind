import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const records = [
    {
      User: "Finn the human",
      Contributions: "50",
      Posts: "12",
      Followers: "3",
    },
    {
      User: "Flame Princess",
      Contributions: "34",
      Posts: "3",
      Followers: "4",
    },
    {
      User: "Jake the dog",
      Contributions: "26",
      Posts: "13",
      Followers: "1",
    },
  ];

 

  return (
    <div className="bg-purple-400 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 border-4 border-black h-auto my-24 w-screen mx-32 rounded-md relative">
        <h1 className="text-4xl font-bold top-0 left-0 absolute m-16">
          Top Gainers
        </h1>
        <div className="flex flex-row gap-4  mt-24 mb-12 pt-8 pl-8 pr-8">
        {records.slice(0,3).map((record, index) => (
          <div className="bg-gray-100 shadow-lg rounded-lg aspect-square relative h-72 w-1/3" key={index}>
            <div className="bg-gray-200 absolute inset-0 h-1/3 rounded-lg text-center">{record.Contributions}</div>
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
                  <td className="pr-24">{record.User}</td>
                  <td className="pr-36">{record.Contributions}</td>
                  <td className="pr-20 ">{record.Posts}</td>
                  <td className="pr-80 p-6">{record.Followers}</td>
                  <div className="bg-green-600 mt-4 w-24 rounded-sm">
                    <td className="pr-12 p-2 text-white">Congratulate</td>
                  </div>
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
