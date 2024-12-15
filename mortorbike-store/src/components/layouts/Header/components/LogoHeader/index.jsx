import { Link } from "react-router-dom";

const LogoHeader = () => {
  return (
    <Link to={"/"} className="flex-1">
      <img src="/images/logo.webp" alt="logo" className="w-32 h-32" />
    </Link>
  );
};

export default LogoHeader;
