import { Link } from "react-router-dom";
import heroImage from "../../assets/p.PNG";
function HeroSection() {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>

      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Vendor Bridge System</h1>

          <p className="py-6">
            A Vendor Bridge Project is a smart platform that connects companies
            and vendors for smooth, fast, and transparent business dealings
          </p>

          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
