import { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";

const sampleData = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  username: `User${i + 1}`,
  date: new Date().toLocaleDateString(),
  title: `Sample Post Title ${i + 1}`,
  content: `This is a sample post content for row ${i + 1}`,
}));

export default function PostsTable() {
  const [data] = useState(sampleData);
  const [activeRow, setActiveRow] = useState(null);

  const toggleBox = (rowId) => {
    setActiveRow((prev) => (prev === rowId ? null : rowId));
  };

  return (
    <div className="w-full">
      <h1 className="text-xl font-bold mb-4">Posts Table</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Username</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Content</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="odd:bg-white even:bg-gray-50">
                <td className="border px-4 py-2 text-center">{row.id}</td>
                <td className="border px-4 py-2">{row.username}</td>
                <td className="border px-4 py-2">{row.date}</td>
                <td className="border px-4 py-2">
                  {row.title.split(" ").slice(0, 3).join(" ")}...
                </td>
                <td className="border px-4 py-2">
                  {row.content.split(" ").slice(0, 4).join(" ")}...
                </td>
                <td className="border px-4 py-2 text-center relative">
                  <div className="inline-block relative">
                    <FaEllipsisV
                      className="text-gray-600 cursor-pointer"
                      size={20}
                      onClick={() => toggleBox(row.id)}
                    />
                    {activeRow === row.id && (
                      <div className="absolute z-10 -right-20 -translate-x-1/2 mt-2 bg-gray-100 shadow-lg border rounded-md p-2 w-40">
                        <button className="block w-full text-left px-2 py-1 hover:bg-gray-200 rounded-md">
                          Details
                        </button>
                        <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-200 rounded-md">
                          <span>Select</span>
                          <label className="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
