import { useEffect, useState } from "react";
import ChieldNavTopBox from "../../Shaire/ChieldNavTopBox";
import StudentsTable from "../../Shaire/StudentsTable";
import fetchOutput from "../../Default/functions/fatchingData";

export default function AliaStudent() {
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

  return (
    <div>
      <ChieldNavTopBox />
      <StudentsTable tableStudent={tableStudent} />
    </div>
  );
}
