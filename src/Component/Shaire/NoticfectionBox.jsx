import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function NoticfectionBox({ getCount }) {
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/notifection/box`
      );
      const result = response.data;

      if (result.status) {
        // Set the notification count based on `data` value from the API
        setNotifications(result.data);
      }
    } catch (error) {
      console.error("Error fetching notifications:", error);
    } finally {
      setLoading(false);
    }
  };

  const deletNotifection = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVER}/notifection/delete-notifection/${id}`
      );
      const result = response.data;
      if (result.status == true) {
        toast.success(result.message);
        fetchNotifications();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateNotifection = async (data) => {
    navigations(data.path);
    try {
      const response = await axios.patch(
        `${
          import.meta.env.VITE_SERVER
        }/notifection/update-single-notifection-by-patch/${data._id}`,
        { isClick: false }
      );
      const result = response.data;
      getCount(result.data.count);
      if (result.status == true) {
        fetchNotifications();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const navigations = (path) => {
    navigate(path);
  };

  return (
    <div
      className={`w-[calc(100%-40px)] overflow-hidden sm:w-[350px] rounded-md shadow-md max-h-[500px] z-50  bg-white absolute border top-[50px] right-5`}
    >
      <Toaster />
      {loading && (
        <div className="flex justify-center items-center h-20">
          <span>Loading...</span>
        </div>
      )}
      <div className="p-2 border-b">
        <h3>Notifections</h3>
      </div>
      <div className="p-3 max-h-[470px] overflow-y-auto">
        {notifications.map((notification, idx) => (
          <div
            key={idx}
            className={`w-full p-4 mb-1 cursor-pointer border flex flex-col items-start gap-1 border-b shadow-sm rounded-lg ${
              notification.isClick ? "bg-gray-200" : "bg-white"
            } hover:shadow-md transition-all duration-200`}
          >
            <div
              onClick={() => updateNotifection(notification)}
              className="w-full"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="flex items-center justify-center p-1 bg-blue-100 text-blue-600 rounded-full">
                  <MdOutlineNotificationsActive />
                </div>
                <h4 className="font-semibold text-gray-800 text-lg mb-1">
                  {notification.name}
                </h4>
              </div>

              <p className="text-sm text-gray-600">{notification.messages}</p>
            </div>

            {/* Action Section */}
            <div className="flex justify-end w-full gap-2">
              <button
                className="text-sm   text-red-600 rounded-lg  transition-all"
                onClick={() => deletNotifection(notification._id)}
              >
                <FaRegTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
