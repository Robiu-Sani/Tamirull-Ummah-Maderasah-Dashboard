import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SiFeedly } from "react-icons/si";

export default function FeeForm() {
  const [callItem, setCallItem] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="w-full bg-white rounded-md shadow-md">
      <Toaster position="top-center" />
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

      {callItem && (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-6">Fees Form</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* General Fields */}
              <div>
                <label className="block text-gray-700">
                  Nasari to Second Grade Fee
                </label>
                <input
                  type="number"
                  {...register("nasaariToSecondGrade")}
                  className="mt-1 px-3 p-1  w-full border rounded-md "
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Third to Fifth Grade Fee
                </label>
                <input
                  type="number"
                  {...register("thirdToFifthGrade")}
                  className="mt-1 px-3 p-1  w-full border rounded-md "
                />
                {errors.thirdToFifthGrade && (
                  <p className="text-red-500 text-sm">
                    This field is required.
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700">
                  Sixth to Alim Grade Fee
                </label>
                <input
                  type="number"
                  {...register("sixthToAlimGrade")}
                  className="mt-1 px-3 p-1  w-full border rounded-md "
                />
              </div>

              {/* Admission and Establishment Fees */}
              <div>
                <label className="block text-gray-700">Admission Fee</label>
                <input
                  type="number"
                  {...register("admissionFee")}
                  className="mt-1 px-3 p-1  w-full border rounded-md "
                />
              </div>
              <div>
                <label className="block text-gray-700">Establishment Fee</label>
                <input
                  type="number"
                  {...register("establishmentFee")}
                  className="mt-1 px-3 p-1  w-full border rounded-md "
                />
              </div>

              {/* Alia Section */}
              <div>
                <label className="block text-gray-700">Alia Tuition Fee</label>
                <input
                  type="number"
                  {...register("aliaTuitionFee")}
                  className="mt-1 px-3 p-1  w-full border rounded-md "
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Alia Accommodation Fee
                </label>
                <input
                  type="number"
                  {...register("aliaAccommodationFee")}
                  className="mt-1 px-3 p-1  w-full border rounded-md "
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Alia Monthly Food Fee
                </label>
                <input
                  type="number"
                  {...register("aliaMonthlyFoodFee")}
                  className="mt-1 px-3 p-1  w-full border rounded-md "
                />
              </div>
              <div>
                <label className="block text-gray-700">Alia Other Fees</label>
                <input
                  type="number"
                  {...register("aliaOtherFees")}
                  className="mt-1 px-3 p-1  w-full border rounded-md "
                />
              </div>

              {/* Hifz Section */}
              <div>
                <label className="block text-gray-700">
                  Hifz Admission Form Fee
                </label>
                <input
                  type="number"
                  {...register("hifzAdmissionFormFee")}
                  className="mt-1 px-3 p-1  w-full border rounded-md "
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Hifz New Admission Fee
                </label>
                <input
                  type="number"
                  {...register("hifzNewAdmissionFee")}
                  className="mt-1 px-3 p-1  w-full border rounded-md "
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Hifz Renewal Admission Fee
                </label>
                <input
                  type="number"
                  {...register("hifzRenewalAdmissionFee")}
                  className="mt-1 px-3 p-1  w-full border rounded-md "
                />
              </div>
              <div>
                <label className="block text-gray-700">Hifz Tuition Fee</label>
                <input
                  type="number"
                  {...register("hifzTuitionFee")}
                  className="mt-1 px-3 p-1  w-full border rounded-md "
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Hifz Monthly Food Fee
                </label>
                <input
                  type="number"
                  {...register("hifzMonthlyFoodFee")}
                  className="mt-1 px-3 p-1  w-full border rounded-md "
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Hifz Accommodation and Preservation Fee
                </label>
                <input
                  type="number"
                  {...register("hifzAccommodationAndPreservationFee")}
                  className="mt-1 px-3 p-1  w-full border rounded-md "
                />
              </div>

              {/* Hifz Child Section */}
              <div>
                <label className="block text-gray-700">Hifz Child Fee</label>
                <input
                  type="number"
                  {...register("hifzChild")}
                  className="mt-1 px-3 p-1  w-full border rounded-md "
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Hifz First to Second Grade Fee
                </label>
                <input
                  type="number"
                  {...register("hifzFirstToSecondGrade")}
                  className="mt-1 px-3 p-1  w-full border rounded-md "
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Hifz Third to Sixth Grade Fee
                </label>
                <input
                  type="number"
                  {...register("hifzThirdToSixthGrade")}
                  className="mt-1 px-3 p-1  w-full border rounded-md "
                />
              </div>

              {/* Exam Fees */}
              <div>
                <label className="block text-gray-700">
                  Hifz Semester Exam Fee
                </label>
                <input
                  type="number"
                  {...register("hifzSemesterExamFee")}
                  className="mt-1 px-3 p-1  w-full border rounded-md "
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Hifz Digital Exam Fee
                </label>
                <input
                  type="number"
                  {...register("hifzDigitalExamFee")}
                  className="mt-1 px-3 p-1  w-full border rounded-md "
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
