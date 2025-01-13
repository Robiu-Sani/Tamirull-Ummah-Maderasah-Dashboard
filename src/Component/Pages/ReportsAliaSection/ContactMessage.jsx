import { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch, FaTrash, FaPhone, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

export default function ContactMessage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/consult/cetagory/contact`
      );
      const result = response.data;

      if (result.status) {
        setContacts(result.data);
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(
            `${import.meta.env.VITE_SERVER}/consult/delete/${id}`
          );
          const data = response.data;

          if (data.status === true) {
            toast.success(data.message);
            fetchContacts();
          } else {
            toast.error("Failed to delete the contact.");
          }
        } catch (error) {
          console.error("Error deleting the contact:", error);
          toast.error("Something went wrong. Please try again.");
        }
      }
    });
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      <Toaster />
      <div className="w-full text-gray-500 mb-4 p-4 rounded-md bg-white text-center border shadow-md text-xl">
        Contact Page
      </div>
      {/* <ReportBanner /> */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-blue-600">Contact Messages</h1>
        <p className="text-gray-600">
          View and manage your contact messages below
        </p>
      </div>

      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full px-4 py-2 text-gray-700 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute top-3 right-3 text-gray-400" />
        </div>
      </div>

      {loading ? (
        <div className="text-center text-blue-500">Loading...</div>
      ) : filteredContacts.length > 0 ? (
        <div className="w-full" style={{ columns: "350px" }}>
          {filteredContacts.map((contact) => (
            <div
              key={contact._id}
              className="p-6 bg-white border mb-4 overflow-hidden rounded-lg shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-blue-600">
                  <FaUser className="inline mr-2 text-blue-500" />
                  {contact.name}
                </h2>
                <button
                  onClick={() => handleDelete(contact._id)}
                  className="p-2 text-red-500 bg-red-100 rounded-full hover:bg-red-200"
                >
                  <FaTrash />
                </button>
              </div>
              <p className="mb-4 text-gray-600">
                <span className="font-semibold">Contact Number:</span>{" "}
                <FaPhone className="inline text-green-500" />{" "}
                {contact.contactNumber}
              </p>
              <p className="mb-4 text-gray-600">
                <span className="font-semibold">Description:</span>{" "}
                {contact.description}
              </p>
              {/* <p className="text-sm text-gray-500">
                <span className="font-semibold">Type:</span> {contact.type}
              </p> */}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No contacts found.</div>
      )}
    </div>
  );
}
