// components/NavBar.tsx
import { Button } from "@/components/ui";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export const NavBar: React.FC = () => {
  const GOOGLE_FORMS_LINK = import.meta.env.VITE_GOOGLE_FORM_URL;
  return (
    <header className="w-full py-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold tracking-wide">
          <img
            src={logo}
            alt="Logo"
            className="invert h-12 object-contain px-0 py-0"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="/" className="transition">
            Home
          </a>
          <a href="/#about" className="transition">
            About
          </a>
          <Link to="/locations" className="transition">
            locations
          </Link>
          <Link to={GOOGLE_FORMS_LINK} className="transition" target="_blank">
            Collaborate
          </Link>
          <a href="/#contact" className="transition">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6 text-white" />
        </Button>
      </div>
    </header>
  );
};
