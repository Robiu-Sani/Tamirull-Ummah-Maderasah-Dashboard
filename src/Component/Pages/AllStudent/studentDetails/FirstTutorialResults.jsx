import React from "react";

const FirstTutorialResults = ({ tutorial }) => {
  // Filtering out subjects where the main number is not available
  const subjects = [
    tutorial.quran && { name: "Quran", mainNumber: tutorial.quran },
    tutorial.hifz && { name: "Hifz", mainNumber: tutorial.hifz },
    tutorial.arabicFirst && {
      name: "Arabic First",
      mainNumber: tutorial.arabicFirst,
    },
    tutorial.arabicSecend && {
      name: "Arabic Second",
      mainNumber: tutorial.arabicSecend,
    },
    tutorial.banglaFirst && {
      name: "Bangla First",
      mainNumber: tutorial.banglaFirst,
    },
    tutorial.banglaSecend && {
      name: "Bangla Second",
      mainNumber: tutorial.banglaSecend,
    },
    tutorial.englishFirst && {
      name: "English First",
      mainNumber: tutorial.englishFirst,
    },
    tutorial.englishSecend && {
      name: "English Second",
      mainNumber: tutorial.englishSecend,
    },
    tutorial.fiquah && { name: "Fiquah", mainNumber: tutorial.fiquah },
    tutorial.fiquahFirst && {
      name: "Fiquah First",
      mainNumber: tutorial.fiquahFirst,
    },
    tutorial.fiquahSecend && {
      name: "Fiquah Second",
      mainNumber: tutorial.fiquahSecend,
    },
    tutorial.math && { name: "Math", mainNumber: tutorial.math },
    tutorial.science && { name: "Science", mainNumber: tutorial.science },
    tutorial.physics && { name: "Physics", mainNumber: tutorial.physics },
    tutorial.camestry && { name: "Chemistry", mainNumber: tutorial.camestry },
    tutorial.biology && { name: "Biology", mainNumber: tutorial.biology },
    tutorial.balagatAndManthiq && {
      name: "Balagat & Manthiq",
      mainNumber: tutorial.balagatAndManthiq,
    },
    tutorial.history && { name: "History", mainNumber: tutorial.history },
    tutorial.heigherMath && {
      name: "Higher Math",
      mainNumber: tutorial.heigherMath,
    },
    tutorial.agreculture && {
      name: "Agriculture",
      mainNumber: tutorial.agreculture,
    },
    tutorial.socialogy && { name: "Sociology", mainNumber: tutorial.socialogy },
    tutorial.pouroNithyFirst && {
      name: "Pouro Nithy First",
      mainNumber: tutorial.pouroNithyFirst,
    },
    tutorial.pouroNithySecend && {
      name: "Pouro Nithy Second",
      mainNumber: tutorial.pouroNithySecend,
    },
    tutorial.commomKnowladge && {
      name: "Common Knowledge",
      mainNumber: tutorial.commomKnowladge,
    },
    tutorial.carrierStudy && {
      name: "Career Study",
      mainNumber: tutorial.carrierStudy,
    },
    tutorial.drowing && { name: "Drawing", mainNumber: tutorial.drowing },
    tutorial.ict && { name: "ICT", mainNumber: tutorial.ict },
    tutorial.physicalEducation && {
      name: "Physical Education",
      mainNumber: tutorial.physicalEducation,
    },
    tutorial.piyerAndCarecter && {
      name: "Piety and Character",
      mainNumber: tutorial.piyerAndCarecter,
    },
  ].filter(Boolean); // Remove any undefined values

  return (
    <div className="w-full my-3 mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Header Section */}
      <div className="bg-gray-700 text-white p-6 text-center">
        <p>{tutorial?.examName}</p>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto ">
        <table className="min-w-full table-auto border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">
                Subject Name
              </th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">
                Main Number
              </th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">
                50% of Main Number
              </th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="py-2 px-4 text-sm">{subject.name}</td>
                <td className="py-2 px-4 text-sm text-center">
                  {subject.mainNumber}
                </td>
                <td className="py-2 px-4 text-sm text-center">
                  {Math.round(subject.mainNumber * 0.5)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FirstTutorialResults;
