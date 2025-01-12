import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoReorderFourSharp } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import SearchBox from "../../Shaire/SearchBox";
import NoticfectionBox from "../../Shaire/NoticfectionBox";
import axios from "axios";

export default function DashboardHeader({ handleCallNav }) {
  const [callNotification, setCallNotification] = useState(false);
  const [callSearchBox, setSearchBox] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  const handleCallSearchBox = () => {
    setSearchBox(!callSearchBox);
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/notifection/alert`
      );
      const result = response.data;

      if (result.status) {
        // Set the notification count based on `data` value from the API
        setNotificationCount(result.data);
      }
    } catch (error) {
      console.error("Error fetching notifications:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-[60px] relative p-3 px-5 flex shadow-md justify-between items-center border-b bg-white">
      <div className="flex justify-start items-center">
        {loading && (
          <div className="flex justify-center items-center h-20">
            <span>Loading...</span>
          </div>
        )}
        <span
          onClick={() => handleCallNav(true)}
          className="p-1 block md:hidden cursor-pointer rounded-md border"
        >
          <IoReorderFourSharp />
        </span>
        <span className=" font-semibold text-gray-600 hidden md:block">
          Dashboard
        </span>
      </div>
      {/* search  */}
      <div className="flex justify-end items-center gap-3">
        <div className="flex justify-center items-center">
          <input
            type="button"
            onClick={() => setSearchBox(!callSearchBox)}
            value="Search here"
            className="w-[250px] text-gray-500 hidden md:block cursor-pointer p-1 px-3 text-left border rounded-md"
          />
          <span className="text-xl block md:hidden cursor-pointer p-1">
            <FiSearch onClick={() => setSearchBox(!callSearchBox)} />
          </span>
          {/* notifection  */}
          <span
            onClick={() => setCallNotification(!callNotification)}
            className={`p-2 my-auto relative cursor-pointer rounded-md ml-2 border`}
          >
            {notificationCount > 0 ? (
              <small className="absolute text-[10px] p-1 flex justify-center items-center h-[13px] text-white rounded-full bg-gray-700 -top-1 -right-1">
                {notificationCount}
              </small>
            ) : null}

            <MdOutlineNotificationsActive />
          </span>
        </div>
      </div>
      {callNotification ? <NoticfectionBox /> : null}

      {callSearchBox && <SearchBox handleCallSearchBox={handleCallSearchBox} />}
    </div>
  );
}
