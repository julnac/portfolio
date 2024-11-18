import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-light flex justify-between p-12 items-center fixed bottom-0 right-0 left-0">
      <p>&copy; {new Date().getFullYear()} Julia Pozorska</p>

      <div className="flex space-x-6">
        <Link href="https://facebook.com" target="_blank" className="text-dark">
          <FaFacebook size={24} />
        </Link>
        <Link href="https://twitter.com" target="_blank" className="text-dark">
          <FaTwitter size={24} />
        </Link>
        <Link href="https://instagram.com" target="_blank" className="text-dark">
          <FaInstagram size={24} />
        </Link>
        <Link href="https://linkedin.com" target="_blank" className="text-dark">
          <FaLinkedin size={24} />
        </Link>
      </div>
    </footer>
  );
}