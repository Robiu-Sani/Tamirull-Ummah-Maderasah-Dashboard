import { useParams } from "react-router-dom";
import FirstTutiral from "./FirstTutiral/FirstTutiral";
import SecondTutiral from "./SecondTutiral/SecondTutiral";
import HalfYearlyExam from "./HalfYearlyExam/HalfYearlyExam";
import FinalExam from "./FinalExam/FinalExam";
import TestExam from "./TestExam/TestExam";
import ModelTestExam from "./ModelTestExam/ModelTestExam";
import AdmitionExam from "./AdmitionExam/AdmitionExam";

export default function AddExamResult() {
  const { type } = useParams();
  return (
    <div>
      {type === "first-tutorial" && <FirstTutiral />}
      {type === "second-tutorial" && <SecondTutiral />}
      {type === "helf-yaerly-exam" && <HalfYearlyExam />}
      {type === "final-exam" && <FinalExam />}
      {type === "test-exam" && <TestExam />}
      {type === "model-text-exam" && <ModelTestExam />}
      {type === "admission-exam" && <AdmitionExam />}
    </div>
  );
}
