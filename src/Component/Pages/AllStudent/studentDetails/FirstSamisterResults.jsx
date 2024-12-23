import React from "react";

const FirstSamisterResults = ({ tutorialResult, samesterResult }) => {
  const subjects = [
    samesterResult?.quran &&
      tutorialResult?.quran && {
        name: "Quran",
        tutorial: tutorialResult?.quran,
        samester: samesterResult?.quran,
      },
    samesterResult?.hifz &&
      tutorialResult?.hifz && {
        name: "Hifz",
        tutorial: tutorialResult?.hifz,
        samester: samesterResult?.hifz,
      },
    samesterResult?.arabicFirst &&
      tutorialResult?.arabicFirst && {
        name: "Arabic First",
        tutorial: tutorialResult?.arabicFirst,
        samester: samesterResult?.arabicFirst,
      },
    samesterResult?.arabicSecend &&
      tutorialResult?.arabicSecend && {
        name: "Arabic Second",
        tutorial: tutorialResult?.arabicSecend,
        samester: samesterResult?.arabicSecend,
      },
    samesterResult?.banglaFirst &&
      tutorialResult?.banglaFirst && {
        name: "Bangla First",
        tutorial: tutorialResult?.banglaFirst,
        samester: samesterResult?.banglaFirst,
      },
    samesterResult?.banglaSecend &&
      tutorialResult?.banglaSecend && {
        name: "Bangla Second",
        tutorial: tutorialResult?.banglaSecend,
        samester: samesterResult?.banglaSecend,
      },
    samesterResult?.englishFirst &&
      tutorialResult?.englishFirst && {
        name: "English First",
        tutorial: tutorialResult?.englishFirst,
        samester: samesterResult?.englishFirst,
      },
    samesterResult?.englishSecend &&
      tutorialResult?.englishSecend && {
        name: "English Second",
        tutorial: tutorialResult?.englishSecend,
        samester: samesterResult?.englishSecend,
      },
    samesterResult?.fiquah &&
      tutorialResult?.fiquah && {
        name: "Fiquah",
        tutorial: tutorialResult?.fiquah,
        samester: samesterResult?.fiquah,
      },
    samesterResult?.fiquahFirst &&
      tutorialResult?.fiquahFirst && {
        name: "Fiquah First",
        tutorial: tutorialResult?.fiquahFirst,
        samester: samesterResult?.fiquahFirst,
      },
    samesterResult?.fiquahSecend &&
      tutorialResult?.fiquahSecend && {
        name: "Fiquah Second",
        tutorial: tutorialResult?.fiquahSecend,
        samester: samesterResult?.fiquahSecend,
      },
    samesterResult?.math &&
      tutorialResult?.math && {
        name: "Math",
        tutorial: tutorialResult?.math,
        samester: samesterResult?.math,
      },
    samesterResult?.science &&
      tutorialResult?.science && {
        name: "Science",
        tutorial: tutorialResult?.science,
        samester: samesterResult?.science,
      },
    samesterResult?.physics &&
      tutorialResult?.physics && {
        name: "Physics",
        tutorial: tutorialResult?.physics,
        samester: samesterResult?.physics,
      },
    samesterResult?.camestry &&
      tutorialResult?.camestry && {
        name: "Chemistry",
        tutorial: tutorialResult?.camestry,
        samester: samesterResult?.camestry,
      },
    samesterResult?.biology &&
      tutorialResult?.biology && {
        name: "Biology",
        tutorial: tutorialResult?.biology,
        samester: samesterResult?.biology,
      },
    samesterResult?.balagatAndManthiq &&
      tutorialResult?.balagatAndManthiq && {
        name: "Balagat & Manthiq",
        tutorial: tutorialResult?.balagatAndManthiq,
        samester: samesterResult?.balagatAndManthiq,
      },
    samesterResult?.history &&
      tutorialResult?.history && {
        name: "History",
        tutorial: tutorialResult?.history,
        samester: samesterResult?.history,
      },
    samesterResult?.heigherMath &&
      tutorialResult?.heigherMath && {
        name: "Higher Math",
        tutorial: tutorialResult?.heigherMath,
        samester: samesterResult?.heigherMath,
      },
    samesterResult?.agreculture &&
      tutorialResult?.agreculture && {
        name: "Agriculture",
        tutorial: tutorialResult?.agreculture,
        samester: samesterResult?.agreculture,
      },
    samesterResult?.socialogy &&
      tutorialResult?.socialogy && {
        name: "Sociology",
        tutorial: tutorialResult?.socialogy,
        samester: samesterResult?.socialogy,
      },
    samesterResult?.pouroNithyFirst &&
      tutorialResult?.pouroNithyFirst && {
        name: "Pouro Nithy First",
        tutorial: tutorialResult?.pouroNithyFirst,
        samester: samesterResult?.pouroNithyFirst,
      },
    samesterResult?.pouroNithySecend &&
      tutorialResult?.pouroNithySecend && {
        name: "Pouro Nithy Second",
        tutorial: tutorialResult?.pouroNithySecend,
        samester: samesterResult?.pouroNithySecend,
      },
    samesterResult?.commomKnowladge &&
      tutorialResult?.commomKnowladge && {
        name: "Common Knowledge",
        tutorial: tutorialResult?.commomKnowladge,
        samester: samesterResult?.commomKnowladge,
      },
    samesterResult?.carrierStudy &&
      tutorialResult?.carrierStudy && {
        name: "Career Study",
        tutorial: tutorialResult?.carrierStudy,
        samester: samesterResult?.carrierStudy,
      },
    samesterResult?.drowing &&
      tutorialResult?.drowing && {
        name: "Drawing",
        tutorial: tutorialResult?.drowing,
        samester: samesterResult?.drowing,
      },
    samesterResult?.ict &&
      tutorialResult?.ict && {
        name: "ICT",
        tutorial: tutorialResult?.ict,
        samester: samesterResult?.ict,
      },
    samesterResult?.physicalEducation &&
      tutorialResult?.physicalEducation && {
        name: "Physical Education",
        tutorial: tutorialResult?.physicalEducation,
        samester: samesterResult?.physicalEducation,
      },
    samesterResult?.piyerAndCarecter &&
      tutorialResult?.piyerAndCarecter && {
        name: "Piety and Character",
        tutorial: tutorialResult?.piyerAndCarecter,
        samester: samesterResult?.piyerAndCarecter,
      },
  ].filter(Boolean); // Remove undefined values

  const calculateTotal = (tutorialMain, samesterMain) => {
    const tutorial50 = Math.round(tutorialMain * 0.5);
    const samester80 = Math.round(samesterMain * 0.8);
    return tutorial50 + samester80;
  };

  const totalSum = subjects.reduce(
    (sum, subject) => sum + calculateTotal(subject.tutorial, subject.samester),
    0
  );

  return (
    <div className="w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-gray-700 text-white p-6 text-center">
        <p>{samesterResult?.examName}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">
                Subject Name
              </th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">
                Tutorial Main Number
              </th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">
                Tutorial 50% Number
              </th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">
                Semester Main Number
              </th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">
                Semester 80% Number
              </th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => {
              const tutorial50 = Math.round(subject.tutorial * 0.5);
              const samester80 = Math.round(subject.samester * 0.8);
              const total = tutorial50 + samester80;
              return (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="py-2 px-4 text-sm">{subject.name}</td>
                  <td className="py-2 px-4 text-sm text-center">
                    {subject.tutorial}
                  </td>
                  <td className="py-2 px-4 text-sm text-center">
                    {tutorial50}
                  </td>
                  <td className="py-2 px-4 text-sm text-center">
                    {subject.samester}
                  </td>
                  <td className="py-2 px-4 text-sm text-center">
                    {samester80}
                  </td>
                  <td className="py-2 px-4 text-sm text-center">{total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-700 flex gap-5 justify-end items-center text-white p-2 text-center">
        <h2 className="font-semibold">Total Score :</h2>
        <p>{totalSum}</p>
      </div>
    </div>
  );
};

export default FirstSamisterResults;
