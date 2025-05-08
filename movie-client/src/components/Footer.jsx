import { Link } from "react-router-dom";
import logo from "../assets/movieLogo.png";

export function Footer() {
  return (
    <div className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        {/* Logo and Description */}
        <div className="flex-1">
          <img src={logo} alt="Logo" className="h-12 mb-4" />
          <p className="text-sm text-gray-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ea, quidem quas maxime maiores voluptas ratione hic. Laborum pariatur tenetur quisquam fugit doloremque animi odit quia, laudantium commodi eos vitae.
          </p>
        </div>

        {/* Customer Service Links */}
        <div className="flex-1">
          <h1 className="text-lg font-semibold mb-2">Customer Service</h1>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link to="/home" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link to="/top-rated" className="hover:text-white transition">Top Rated</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <h1 className="text-lg font-semibold mb-2">Contact Us</h1>
          <p className="text-sm text-gray-300">Mobile: 9301760927</p>
          <p className="text-sm text-gray-300">Email: Vipinbarode@gmail.com</p>
          <p className="text-sm text-gray-300">Jambadi, Betul, Madhya Pradesh</p>
        </div>
      </div>
    </div>
  );
}
