import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Footer() {

  return (
    <footer className="bg-background text-muted p-6 flex justify-end">
      <div className="flex space-x-6">
        <Link 
          href="https://facebook.com"
          target="_blank" 
        >
          <FaFacebook size={24} />
        </Link>
        <Link 
          href="https://twitter.com" 
          target="_blank" 
        >
          <FaTwitter size={24} />
        </Link>
        <Link 
          href="https://instagram.com" 
          target="_blank"
        >
          <FaInstagram size={24} />
        </Link>
        <Link 
          href="https://linkedin.com" 
          target="_blank"
        >
          <FaLinkedin size={24} />
        </Link>
      </div>
    </footer>
  );
}