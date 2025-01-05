import { GiMartyrMemorial } from "react-icons/gi";
import { SiStartrek } from "react-icons/si";
import { useParams } from "react-router-dom";
import AddStudentFather from "./AddStudentFather";
import AddStudentMother from "./AddStudentMother";
import AddStudentGairdean from "./AddStudentGairdean";
import { useState } from "react";

export default function AddAditionalInfo() {
  const [callComponent, setCallComponent] = useState("");
  const { id } = useParams();
  console.log(id);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <div className="w-full bg-white rounded-md p-5 flex justify-start items-center gap-4 border shadow-md">
        <GiMartyrMemorial /> <span>Add Student Additional Information</span>
      </div>

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
    </div>
  );
}
