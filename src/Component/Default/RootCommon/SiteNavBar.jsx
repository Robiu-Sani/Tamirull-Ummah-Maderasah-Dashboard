import logo from "../../../image/logo.png";

export default function SiteNavBar() {
  return (
    <div className="w-full h-full bg-white border-0 sm:border-r  p-4 flex flex-col gap-5">
      <div className="w-full border-b py-5">
        <img
          src={logo}
          alt="tamirul ummah maderasah logo"
          className="mx-auto w-[80px]"
        />
      </div>
    </div>
  );
}
