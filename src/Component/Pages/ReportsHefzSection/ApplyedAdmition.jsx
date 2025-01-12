import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaBirthdayCake,
  FaMale,
  FaFemale,
  FaMapMarkerAlt,
  FaSpinner,
} from "react-icons/fa";
import { MdBloodtype, MdClass } from "react-icons/md";
import postOutput from "../../Default/functions/postOutput";
import toast, { Toaster } from "react-hot-toast";

export default function ApplyedAdmition() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNotifications, setFilteredNotifications] = useState([]);
  const [isload, setIsload] = useState(false);

  useEffect(() => {
    fetchNotifications();
  }, []);

  useEffect(() => {
    // Filter notifications based on search term
    setFilteredNotifications(
      notifications.filter((notification) =>
        notification.info.studentNameEnglish
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, notifications]);

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/notifection/cetagory/Admition Notice`
      );
      const result = response.data;

      if (result.status) {
        setNotifications(result.data);
        setFilteredNotifications(result.data);
      }
    } catch (error) {
      console.error("Error fetching notifications:", error);
    } finally {
      setLoading(false);
    }
  };

  const AcceptingStudent = async (data, id) => {
    try {
      setIsload(true);
      const submittedData = await postOutput("student/create-student", data);
      if (submittedData.status === true) {
        toast.success(submittedData.message);
        deletNotifection(id);
      } else {
        toast.error(submittedData.message);
      }
    } catch (error) {
      toast.error("Error submitting form:");
      console.error("Error submitting form:", error);
    } finally {
      setIsload(false);
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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-semibold text-blue-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
        Applied Admissions
      </h1>{" "}
      <Toaster />
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search by Student Name (English)"
          className="w-full p-2 px-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="space-y-6">
        {filteredNotifications.map((notification) => (
          <div
            key={notification._id}
            className="border rounded-lg p-4 shadow-md bg-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="flex items-center">
                  <FaEnvelope className="mr-2 text-gray-500" />
                  <span>{notification.info.email}</span>
                </p>
                <p className="flex items-center">
                  <FaBirthdayCake className="mr-2 text-gray-500" />
                  <span>{notification.info.dateOfBirth}</span>
                </p>
                <p className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-gray-500" />
                  <span>{notification.info.address}</span>
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <MdBloodtype className="mr-2 text-red-500" />
                  <span>{notification.info.bloodGroup}</span>
                </p>
                <p className="flex items-center">
                  {notification.info.gender === "male" ? (
                    <FaMale className="mr-2 text-blue-500" />
                  ) : (
                    <FaFemale className="mr-2 text-pink-500" />
                  )}
                  <span>{notification.info.gender}</span>
                </p>
                <p className="flex items-center">
                  <MdClass className="mr-2 text-green-500" />
                  <span>Class: {notification.info.class}</span>
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2">
              <p className="font-semibold">Student Name (English):</p>
              <p>{notification.info.studentNameEnglish}</p>

              <p className="font-semibold mt-2">Student Name (Bangla):</p>
              <p>{notification.info.studentNameBangla}</p>

              <p className="font-semibold mt-2">Father`s Name:</p>
              <p>{notification.info.fathersName}</p>

              <p className="font-semibold mt-2">Mother`s Name:</p>
              <p>{notification.info.mothersName}</p>
            </div>
            <div className="w-full pt-3 border-t flex justify-around items-center">
              <button
                onClick={() =>
                  AcceptingStudent(notification.info, notification._id)
                }
                className="px-5 flex gap-3 justify-center items-center p-1 rounded-md bg-gray-600 hover:bg-gray-700 text-white"
              >
                {isload ? <FaSpinner className="animate-spin" /> : null}
                Accept{" "}
              </button>
              <button
                onClick={() => deletNotifection(notification._id)}
                className="px-5 rounded-md p-1 bg-yellow-600 hover:bg-yellow-700 text-white"
              >
                {" "}
                Cancel{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
