import { useState } from "react";
import {
  FaBook,
  FaBookOpen,
  FaCalendarAlt,
  FaGraduationCap,
  FaClipboardList,
  FaFileAlt,
  FaUserGraduate,
} from "react-icons/fa";
import FirstTutorialForm from "./form/FirstTutorial";
import SecendTutorialForm from "./form/SecendTutorialForm";
import HalfYearlyForm from "./form/HalfYearlyForm";
import FinalExamForm from "./form/FinalExamForm";
import ModelTestForm from "./form/ModelTestForm";
import TestForm from "./form/TestForm";
import AdmissionExamForm from "./form/AdmissionExamForm";

const MenageExam = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, name: "1st Tutorial", icon: <FaBook /> },
    { id: 1, name: "2nd Tutorial", icon: <FaBookOpen /> },
    { id: 2, name: "Half Yearly", icon: <FaCalendarAlt /> },
    { id: 3, name: "Final", icon: <FaGraduationCap /> },
    { id: 4, name: "Model Test", icon: <FaClipboardList /> },
    { id: 5, name: "Test", icon: <FaFileAlt /> },
    { id: 6, name: "Admission", icon: <FaUserGraduate /> },
  ];

  const tabContents = [
    { component: <FirstTutorialForm />, title: "First Tutorial Examination" },
    { component: <SecendTutorialForm />, title: "Second Tutorial Examination" },
    { component: <HalfYearlyForm />, title: "Half Yearly Examination" },
    { component: <FinalExamForm />, title: "Final Examination" },
    { component: <ModelTestForm />, title: "Model Test Papers" },
    { component: <TestForm />, title: "Regular Test Section" },
    { component: <AdmissionExamForm />, title: "Admission Test Resources" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6 md:mb-8">
        Examination Management System
      </h1>

      {/* Tabs Navigation - Shows only icons on mobile, both on desktop */}
      <div className="flex w-full justify-between flex-wrap  mb-4 md:mb-6 border-b border-gray-200  overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center  justify-center md:justify-start p-2 md:px-4 md:py-2 rounded-t-lg transition-colors duration-200 ${
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab.id)}
            aria-label={tab.name}
          >
            <span className="text-lg md:text-base">{tab.icon}</span>
            <span className="hidden md:inline ml-2">{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="bg-white rounded-lg shadow-md p-4 md:p-6 min-h-[300px]">
        <div className="flex items-center mb-3 md:mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            {tabContents[activeTab].title}
          </h2>
        </div>

        {/* Render the form component for the active tab */}
        {tabContents[activeTab].component}
      </div>
    </div>
  );
};

export default MenageExam;
