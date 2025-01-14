import { useEffect, useState } from "react";
import NoticeBanner from "./NoticeBanner";
import fetchOutput from "../../../Default/functions/fatchingData";
import NoticeCard from "./NoticeCard";

export default function AllNotice() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetchOutput(`notice`)
      .then((response) => {
        setNotices(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div>
      <NoticeBanner />
      <div className=" w-full grid grid-cols-1 mt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {notices?.map((item, idx) => (
          <NoticeCard key={idx} notice={item} />
        ))}
      </div>
    </div>
  );
}
