import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchOutput from "../../../Default/functions/fatchingData";
import StudentInfo from "./StudentInfo";
import FatherInfo from "./FatherInfo";
import { FaSpinner } from "react-icons/fa"; // Importing a loading spinner icon
import MotherInfo from "./MotherInfo";
import GairdeanInfo from "./GairdeanInfo";
import FirstTutorialResults from "./FirstTutorialResults";
import FirstSamisterResults from "./FirstSamisterResults";
import StudentPostCard from "./StudentPostCard";

export default function StudentDetails() {
  const [singleStudent, getSingleStudent] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state to manage the loader visibility
  const { id } = useParams();

  useEffect(() => {
    fetchOutput(`student/single-student/${id}`)
      .then((response) => {
        getSingleStudent(response.data);
        setLoading(false); // Data has been fetched, set loading to false
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false); // If an error occurs, set loading to false as well
      });
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
        <span className="ml-4 text-lg text-gray-700">Loading...</span>
      </div>
    ); // Show spinner while loading
  }

  return (
    <div>
      <StudentInfo student={singleStudent.student} />
      {singleStudent.father ? (
        <FatherInfo father={singleStudent.father} />
      ) : (
        <div className="flex justify-center items-center p-5">
          <h3 className=" text-red-400">this data not save yet!</h3>
        </div>
      )}
      {singleStudent.mother ? (
        <MotherInfo mother={singleStudent.mother} />
      ) : (
        <div className="flex justify-center items-center p-5">
          <h3 className=" text-red-400">this data not save yet!</h3>
        </div>
      )}
      {singleStudent.gairdean ? (
        <GairdeanInfo gairdean={singleStudent.gairdean} />
      ) : (
        <div className="flex justify-center items-center p-5">
          <h3 className=" text-red-400">this data not save yet!</h3>
        </div>
      )}
      {singleStudent.result?.first_tutiral ? (
        <FirstTutorialResults tutorial={singleStudent.result.first_tutiral} />
      ) : null}
      {singleStudent.result?.first_tutiral &&
      singleStudent.result?.first_samistar ? (
        <FirstSamisterResults
          samesterResult={singleStudent.result.first_samistar}
          tutorialResult={singleStudent.result.first_tutiral}
        />
      ) : null}
      {singleStudent.result?.secend_tutiral ? (
        <FirstTutorialResults tutorial={singleStudent.result.secend_tutiral} />
      ) : null}
      {singleStudent.result?.secend_tutiral &&
      singleStudent.result?.secend_samistar ? (
        <FirstSamisterResults
          samesterResult={singleStudent.result.secend_samistar}
          tutorialResult={singleStudent.result.secend_tutiral}
        />
      ) : null}
      <div className="w-full mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {singleStudent.posts?.map((item, idx) => (
          <StudentPostCard post={item} key={idx} />
        ))}
      </div>
    </div>
  );
}
