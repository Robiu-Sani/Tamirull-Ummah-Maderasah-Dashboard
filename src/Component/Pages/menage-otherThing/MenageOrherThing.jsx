import { useParams } from "react-router-dom";
import CreateSubject from "./CreateSubject";
import CreateClass from "./CreateClass";
import CreateExamSubject from "./CreateExamSubject";

export default function MenageOrherThing() {
  const { type } = useParams();
  console.log("Type:", type);
  return (
    <div>
      {type === "create-subject" && <CreateSubject />}
      {type === "create-class" && <CreateClass />}
      {type === "create-exam-subject" && <CreateExamSubject />}
    </div>
  );
}
