import { useEffect, useState } from "react";
import AboutTextBanner from "./AboutTextBanner";
import fetchOutput from "../../../Default/functions/fatchingData";
import AboutTextCard from "./AboutTextCard";

export default function AboutText() {
  const [text, setText] = useState();

  useEffect(() => {
    fetchOutput(`about`)
      .then((response) => {
        setText(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div>
      <AboutTextBanner />
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {text?.map((item, idx) => (
          <AboutTextCard key={idx} data={item} />
        ))}
      </div>
    </div>
  );
}
