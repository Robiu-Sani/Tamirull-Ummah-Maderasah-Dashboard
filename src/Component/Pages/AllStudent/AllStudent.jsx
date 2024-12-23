import { useEffect, useState } from "react";
import fetchOutput from "../../Default/functions/fatchingData";
import StudentBanner from "./StudentBanner";
import StudentTable from "./StudentTable";

export default function AllStudent() {
  const [tableStudent, setTableStudent] = useState([]);
  useEffect(() => {
    fetchOutput(`student/table`)
      .then((response) => {
        setTableStudent(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);
  console.log(tableStudent);
  return (
    <div>
      <StudentBanner tableStudent={tableStudent} />
      <StudentTable />
    </div>
  );
}
