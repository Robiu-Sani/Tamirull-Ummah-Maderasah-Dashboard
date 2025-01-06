import axios from "axios";
import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export default function SearchBox({ handleCallSearchBox }) {
  const [searchData, setSearchData] = useState();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const navigate = useNavigate();

  const fetchStudents = async () => {
    setLoading(true);
    setErrorAlert(false);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/student/search?search=${searchData}`
      );
      setStudents(response.data.data);
    } catch (error) {
      console.error("Error fetching data", error);
      setErrorAlert(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchData) {
      fetchStudents();
    } else {
      setStudents([]); // Clear students list when search is empty
    }
  }, [searchData]);

  const goToStudentDetails = (id) => {
    navigate(`/students/student-details/${id}`);
    handleCallSearchBox();
  };

  return (
    <div className="w-full fixed top-0 left-0 z-[1000000000] min-h-screen flex justify-center items-center bg-[#0000007e]">
      <div
        onClick={() => handleCallSearchBox()}
        className="absolute top-0 left-0 w-full h-full cursor-pointer"
      ></div>
      <div className="max-w-[550px] relative z-[1000000001] flex flex-col justify-start overflow-hidden sm:w-[600px] h-full sm:max-h-[550px] sm:min-h-[500px]  max-h-screen bg-white rounded-md shadow-md">
        {/* Search Input */}
        <div className="relative w-full p-4 pr-8 border-b">
          <input
            type="search"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            placeholder="Search here"
            className="w-full  outline-0 "
          />
          <RxCrossCircled
            onClick={() => handleCallSearchBox()}
            className="absolute top-3 cursor-pointer right-3 text-xl font-bold text-red-500"
          />
        </div>

        {/* Content Section */}
        <div className="w-full h-full overflow-y-auto ">
          {loading && (
            <div className="w-full h-[400px] flex justify-center items-center ">
              <ImSpinner9 className="animate-spin" size={50} />
            </div>
          )}

          {errorAlert && (
            <p className="text-center text-red-500">
              Failed to fetch data. Please try again.
            </p>
          )}

          {!loading && !errorAlert && students.length === 0 && (
            <p className="text-center text-gray-500 p-5 py-10">
              No students found.
            </p>
          )}

          {!loading && !errorAlert && students.length > 0 && (
            <ul className="">
              {students.map((student) => (
                <li
                  key={student._id}
                  onClick={() => goToStudentDetails(student._id)}
                  className="flex items-center cursor-pointer p-1 px-4 border-b "
                >
                  <img
                    src={student.image || "https://via.placeholder.com/50"}
                    alt={student.studentNameEnglish}
                    className="w-16 h-auto rounded-md object-cover mr-4"
                  />
                  <div className="grid grid-cols-2 w-full">
                    <h3 className="text-lg font-semibold">
                      {student.studentNameEnglish}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Class: {student.class}
                    </p>
                    <p className="text-sm text-gray-500">
                      Gender: {student.gender}
                    </p>
                    <p className="text-sm text-gray-500">
                      Roll: {student.classRoll}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
