import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SiFeedly } from "react-icons/si";
import { ImSpinner2 } from "react-icons/im";
import fetchOutput from "../../Default/functions/fatchingData";
import PatchData from "../../Default/functions/patchData";

export default function FeeForm() {
  const [callItem, setCallItem] = useState(false); // Toggle form visibility
  const [isload, setIsload] = useState(false); // Loading state
  const [fees, setFees] = useState({}); // Fees structure data

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Fetch fees structure on component mount
  useEffect(() => {
    fetchOutput("feesStructure")
      .then((response) => {
        setFees(response.data[0] || {});
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  // Handle form submission
  const onSubmit = async (data) => {
    const updatedData = Object.keys(fees).reduce((acc, key) => {
      if (!["_id", "createdAt", "updatedAt", "__v"].includes(key)) {
        acc[key] = data[key] ? data[key] : fees[key];
      }
      return acc;
    }, {});

    try {
      setIsload(true);
      const submittedData = await PatchData(
        `feesStructure/update-single-feesStructure-by-patch/${fees._id}`,
        updatedData
      );
      if (submittedData.status === true) {
        toast.success(submittedData.message);
        reset();
      } else {
        toast.error(submittedData.message);
      }
    } catch (error) {
      toast.error("Error submitting form");
      console.error("Error submitting form:", error);
    } finally {
      setIsload(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-md shadow-md">
      <Toaster position="top-center" />

      {/* Toggle Button */}
      <div
        onClick={() => setCallItem(!callItem)}
        className={`w-full flex justify-between cursor-pointer p-5 ${
          callItem ? "border-b" : "border-0"
        } items-center`}
      >
        <span className="flex justify-center items-center gap-3">
          <SiFeedly />
          <span>Every Kind of Fee</span>
        </span>
        <MdKeyboardArrowDown
          className={`text-3xl transition-transform ${
            callItem ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {/* Fees Form */}
      {callItem && (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-6">Fees Form</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Render each field dynamically */}
              {Object.keys(fees)
                .filter(
                  (key) =>
                    !["_id", "createdAt", "updatedAt", "__v"].includes(key)
                ) // Exclude unwanted fields
                .map((key) => (
                  <div key={key}>
                    <label className="block text-gray-700 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </label>
                    <input
                      type="number"
                      {...register(key, { required: true })}
                      placeholder={fees[key]}
                      className="mt-1 px-3 p-1 w-full border rounded-md"
                    />
                    {errors[key] && (
                      <p className="text-red-500 text-sm">
                        This field is required.
                      </p>
                    )}
                  </div>
                ))}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full bg-gray-600 mt-3 flex justify-center items-center gap-3 text-white p-2 rounded-md transition ${
                isload ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
              }`}
              disabled={isload}
            >
              {isload && <ImSpinner2 className="animate-spin" />}
              {isload ? "Updating..." : "Submit Update Fees"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
