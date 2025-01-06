import { GiMartyrMemorial } from "react-icons/gi";
import { SiStartrek } from "react-icons/si";
import { Link, useParams } from "react-router-dom";
import AddStudentFather from "./AddStudentFather";
import AddStudentMother from "./AddStudentMother";
import AddStudentGairdean from "./AddStudentGairdean";
import { useEffect, useState } from "react";
import fetchOutput from "../../../Default/functions/fatchingData";

export default function AddAditionalInfo() {
  const [callComponent, setCallComponent] = useState("");
  const [studentData, setStudentData] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchOutput(`student/single-student/${id}`)
      .then((response) => {
        setStudentData(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [id]);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <div className="w-full bg-white rounded-md p-3 flex justify-center items-center gap-4 border shadow-md">
        <GiMartyrMemorial /> <span>Add Student Additional Information</span>
      </div>

      {studentData?.father ? (
        <div className="w-full bg-white rounded-md p-5 flex justify-between items-center gap-4 border shadow-md">
          <span className="flex justify-start items-center gap-4">
            <GiMartyrMemorial /> <span>Father Information is alrady have</span>
          </span>
          <Link
            to={`/all-student-informetion/stunents-father/edit/${id}`}
            className="px-6 p-1 rounded-md bg-gray-600 text-white"
          >
            Edit
          </Link>
        </div>
      ) : (
        <div className="w-full bg-white rounded-md  overflow-hidden gap-4 border shadow-md">
          <div
            onClick={() =>
              setCallComponent(callComponent == "father" ? "" : "father")
            }
            className="p-5 flex justify-start gap-3  cursor-pointer items-center"
          >
            <SiStartrek /> <span>Add Student Father Information</span>
          </div>
          {callComponent == "father" ? (
            <>
              <hr />
              <AddStudentFather />
            </>
          ) : null}
        </div>
      )}

      {studentData?.mother ? (
        <div className="w-full bg-white rounded-md p-5 flex justify-between items-center gap-4 border shadow-md">
          <span className="flex justify-start items-center gap-4">
            <GiMartyrMemorial /> <span>Mother Information is alrady have</span>
          </span>
          <Link
            to={`/all-student-informetion/stunents-mother/edit/${id}`}
            className="px-6 p-1 rounded-md bg-gray-600 text-white"
          >
            Edit
          </Link>
        </div>
      ) : (
        <div className="w-full bg-white rounded-md  overflow-hidden gap-4 border shadow-md">
          <div
            onClick={() =>
              setCallComponent(callComponent == "mother" ? "" : "mother")
            }
            className="p-5 flex justify-start cursor-pointer gap-3 items-center"
          >
            <SiStartrek /> <span>Add Student Mother Information</span>
          </div>
          {callComponent == "mother" ? (
            <>
              <hr />
              <AddStudentMother />
            </>
          ) : null}
        </div>
      )}

      {studentData?.gairdean ? (
        <div className="w-full bg-white rounded-md p-5 flex justify-between items-center gap-4 border shadow-md">
          <span className="flex justify-start items-center gap-4">
            <GiMartyrMemorial />{" "}
            <span>Gairdean Information is alrady have</span>
          </span>
          <Link
            to={`/all-student-informetion/stunents-gairdean/edit/${id}`}
            className="px-6 p-1 rounded-md bg-gray-600 text-white"
          >
            Edit
          </Link>
        </div>
      ) : (
        <div className="w-full bg-white rounded-md  overflow-hidden gap-4 border shadow-md">
          <div
            onClick={() =>
              setCallComponent(callComponent == "gairdean" ? "" : "gairdean")
            }
            className="p-5  flex justify-start cursor-pointer gap-3 items-center"
          >
            <SiStartrek /> <span>Add Student Gairdean Information</span>
          </div>
          {callComponent == "gairdean" ? (
            <>
              <hr />
              <AddStudentGairdean />
            </>
          ) : null}
        </div>
      )}
    </div>
  );
}
