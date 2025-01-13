import { useEffect, useState, useMemo } from "react";
import ChartContainer from "./HomeComponent/ChartContainer";
import EditeBannerContainer from "./HomeComponent/EditeBannerContainer";
import TopCards from "./HomeComponent/TopCards";
import axios from "axios";
import { ImSpinner9 } from "react-icons/im";

export default function Home() {
  const [bannerData, setBannerData] = useState({
    totalUser: 0,
    totalStudent: 0,
    totalTeacher: 0,
    totalMessage: 0,
    classes: [],
    shifts: [],
    residentialStatuses: [],
  });
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCarousel();
  }, []);

  const fetchCarousel = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/about/banner`
      );
      setBannerData(response.data.data);
    } catch (err) {
      console.error("Error fetching carousel data:", err);
      setError("Failed to load data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const total = useMemo(
    () => ({
      totalUser: bannerData.totalUser,
      totalStudent: bannerData.totalStudent,
      totalTeacher: bannerData.totalTeacher,
      totalMessage: bannerData.totalMessage,
    }),
    [bannerData]
  );

  const chartsData = useMemo(
    () => ({
      studentsData: bannerData.classes,
      shiftsData: bannerData.shifts,
      residentialStatusesData: bannerData.residentialStatuses,
    }),
    [bannerData]
  );

  if (error) {
    return <h2 className="text-center text-red-500">{error}</h2>;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div
          className="spinner-border  inline-block   rounded-full "
          role="status"
        >
          <span className="visually-hidden">
            <ImSpinner9 className="animate-spin" size={40} />
          </span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <TopCards total={total} />
      <div className="w-full">
        <ChartContainer chartsData={chartsData} />
        <EditeBannerContainer />
      </div>
    </div>
  );
}
