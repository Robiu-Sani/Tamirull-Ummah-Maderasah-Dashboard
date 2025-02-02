import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full flex justify-center  items-center h-[30px] border-t bg-white">
      <Link to={`https://robiussani.netlify.app/`}> Made by Robius-Sani </Link>
    </div>
  );
}
