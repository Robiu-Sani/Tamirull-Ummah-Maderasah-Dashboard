import { useForm } from "react-hook-form";
import { FaSave, FaSpinner, FaUndo } from "react-icons/fa";
import ImageUpload from "../../../../Default/ImageUpload";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";
import fetchOutput from "../../../../Default/functions/fatchingData";
import PatchData from "../../../../Default/functions/patchData";
import toast, { Toaster } from "react-hot-toast";

const EditFather = () => {
  const [image, setImage] = useState(null);
  const [isload, setIsload] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fatherData, setFatherData] = useState();
  const { id } = useParams();
  // console.log(id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchOutput(`father/single-father/${id}`)
      .then((response) => {
        setFatherData(response.data);
        setLoading(false); // Data has been fetched, set loading to false
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false); // If an error occurs, set loading to false as well
      });
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
        <span className="ml-4 text-lg text-gray-700">Loading...</span>
      </div>
    ); // Show spinner while loading
  }

  const onSubmit = async (data) => {
    const newData = {
      studentId: fatherData.studentId._id,
      whatsapp: data.whatsapp ? data.whatsapp : fatherData.whatsapp,
      bloodGroup: data.bloodGroup ? data.bloodGroup : fatherData.bloodGroup,
      deathYear: data.deathYear ? data.deathYear : fatherData.deathYear,
      email: data.email ? data.email : fatherData.email,
      facebook: data.facebook ? data.facebook : fatherData.facebook,
      fatherNameBn: data.fatherNameBn
        ? data.fatherNameBn
        : fatherData.fatherNameBn,
      fatherNameEn: data.fatherNameEn
        ? data.fatherNameEn
        : fatherData.fatherNameEn,
      mobilenumber: data.mobilenumber
        ? data.mobilenumber
        : fatherData.mobilenumber,
      monthlyIncome: data.monthlyIncome
        ? data.monthlyIncome
        : fatherData.monthlyIncome,
      nidNumber: data.nidNumber ? data.nidNumber : fatherData.nidNumber,
      occupation: data.occupation ? data.occupation : fatherData.occupation,
      workLocation: data.workLocation
        ? data.workLocation
        : fatherData.workLocation,
      fatherImage: image ? image : fatherData.fatherImage,
    };

    console.log(newData);
    console.log(fatherData);

    try {
      setIsload(true);
      const submittedData = await PatchData(
        `father/update-single-father-by-patch/${fatherData._id}`,
        newData
      );
      if (submittedData.status === true) {
        toast.success(submittedData.message);
        reset();
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

  const handleImageUpload = (url) => {
    setImage(url);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md">
      <Toaster />
      <h2 className="text-2xl font-semibold text-center mb-6">
        Edit Father Information
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Father's Name in English */}
        <div>
          <label htmlFor="fatherNameEn" className="block font-medium mb-1">
            Father`s Name (English)
          </label>
          <input
            type="text"
            id="fatherNameEn"
            {...register("fatherNameEn", {
              required: false,
            })}
            className="w-full border rounded-lg p-2"
            placeholder="Enter father's name in English"
          />
          {errors.fatherNameEn && (
            <p className="text-red-500 text-sm">
              {errors.fatherNameEn.message}
            </p>
          )}
        </div>

        {/* Father's Name in Bangla */}
        <div>
          <label htmlFor="fatherNameBn" className="block font-medium mb-1">
            পিতার নাম (বাংলা)
          </label>
          <input
            type="text"
            id="fatherNameBn"
            {...register("fatherNameBn", {
              required: false,
            })}
            className="w-full border rounded-lg p-2"
            placeholder="পিতার নাম বাংলায় লিখুন"
          />
          {errors.fatherNameBn && (
            <p className="text-red-500 text-sm">
              {errors.fatherNameBn.message}
            </p>
          )}
        </div>

        {/* Father's Occupation */}
        <div>
          <label htmlFor="occupation" className="block font-medium mb-1">
            Occupation
          </label>
          <input
            type="text"
            id="occupation"
            {...register("occupation", { required: false })}
            className="w-full border rounded-lg p-2"
            placeholder="Enter father's occupation"
          />
          {errors.occupation && (
            <p className="text-red-500 text-sm">{errors.occupation.message}</p>
          )}
        </div>

        {/* Blood Group */}
        <div className="w-full">
          <label className="block font-medium text-gray-700 mb-2">
            Blood Group
          </label>
          <select
            {...register("bloodGroup", { required: false })}
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="">Select blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          {errors.bloodGroup && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Monthly Income */}
        <div>
          <label htmlFor="deathYear" className="block font-medium mb-1">
            Death Year
          </label>
          <input
            type="number"
            id="deathYear"
            {...register("deathYear", {
              required: false,
            })}
            className="w-full border rounded-lg p-2"
            placeholder="Enter monthly income"
          />
          {errors.deathYear && (
            <p className="text-red-500 text-sm">{errors.deathYear.message}</p>
          )}
        </div>

        {/* Monthly Income */}
        <div>
          <label htmlFor="monthlyIncome" className="block font-medium mb-1">
            Monthly Income
          </label>
          <input
            type="number"
            id="monthlyIncome"
            {...register("monthlyIncome", {
              required: false,
            })}
            className="w-full border rounded-lg p-2"
            placeholder="Enter monthly income"
          />
          {errors.monthlyIncome && (
            <p className="text-red-500 text-sm">
              {errors.monthlyIncome.message}
            </p>
          )}
        </div>

        {/* NID Number */}
        <div>
          <label htmlFor="nidNumber" className="block font-medium mb-1">
            NID Number
          </label>
          <input
            type="text"
            id="nidNumber"
            {...register("nidNumber", { required: false })}
            className="w-full border rounded-lg p-2"
            placeholder="Enter NID number"
          />
          {errors.nidNumber && (
            <p className="text-red-500 text-sm">{errors.nidNumber.message}</p>
          )}
        </div>

        {/* Work Location */}
        <div>
          <label htmlFor="facebook" className="block font-medium mb-1">
            Facebook
          </label>
          <input
            type="text"
            id="facebook"
            {...register("facebook", {
              required: false,
            })}
            className="w-full border rounded-lg p-2"
            placeholder="Enter work location"
          />
          {errors.facebook && (
            <p className="text-red-500 text-sm">{errors.facebook.message}</p>
          )}
        </div>

        {/* Work Location */}
        <div>
          <label htmlFor="workLocation" className="block font-medium mb-1">
            Work Location
          </label>
          <input
            type="text"
            id="workLocation"
            {...register("workLocation", {
              required: false,
            })}
            className="w-full border rounded-lg p-2"
            placeholder="Enter work location"
          />
          {errors.workLocation && (
            <p className="text-red-500 text-sm">
              {errors.workLocation.message}
            </p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="mobilenumber" className="block font-medium mb-1">
            WhatsApp Number
          </label>
          <input
            type="text"
            id="whatsapp"
            {...register("whatsapp", {
              required: false,
            })}
            className="w-full border rounded-lg p-2"
            placeholder="Enter mobile number"
          />
          {errors.whatsapp && (
            <p className="text-red-500 text-sm">{errors.whatsapp.message}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="mobilenumber" className="block font-medium mb-1">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobilenumber"
            {...register("mobilenumber", {
              required: false,
            })}
            className="w-full border rounded-lg p-2"
            placeholder="Enter mobile number"
          />
          {errors.mobilenumber && (
            <p className="text-red-500 text-sm">
              {errors.mobilenumber.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: false })}
            className="w-full border rounded-lg p-2"
            placeholder="Enter email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* profile  */}
        <div className="mb-4 max-w-sm">
          <div className="w-full flex flex-col gap-3">
            <label className="block text-sm text-gray-600 mb-2">
              Upload Profile
            </label>
            <div className="w-full relative flex-col cursor-pointer h-auto min-h-[150px] rounded-md overflow-hidden border flex justify-center items-center">
              {image ? (
                <img
                  src={image}
                  alt="Uploaded Preview"
                  className="w-full h-auto min-h-[150px] rounded-md border"
                />
              ) : (
                <div className="w-full max-h-[100px] min-h-[150px] flex flex-col justify-center items-center h-full">
                  <IoCloudUploadOutline className="text-2xl" />
                  <small>Upload Student Image</small>
                </div>
              )}
              <ImageUpload onUpload={handleImageUpload} />
            </div>
          </div>
        </div>

        {/* Submit and Reset Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="bg-gray-600 mt-3 flex justify-center items-center gap-3 text-white p-2 rounded-md hover:bg-gray-700 transition px-5"
          >
            <FaUndo className="mr-2" />
            Reset
          </button>
          <button
            type="submit"
            className=" bg-gray-600 mt-3 flex justify-center items-center gap-3 text-white p-2 px-5 rounded-md hover:bg-gray-700 transition"
          >
            {isload ? <ImSpinner2 className="animate-spin" /> : null}
            <FaSave className="mr-2" />
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditFather;
