import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import React from 'react'
export default function Footer() {
  return (
    <footer className="footer footer-center rounded bg-secondary p-10 text-secondary-content">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/home">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/photos">Photos</Link>
        <Link href="/about">About</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <IoLogoTwitter className="size-6"/>
          </a>
          <a>
            <FaLinkedin className="size-6"/>
          </a>
        </div>
      </nav>
      <div className="grid grid-flow-col gap-4">
        <a
          // href="mailto:lij110397@163.com?subject=Inquiry%20from%20jiaoll&body=Hi%2C%20I%27d%20have%20more%20questions%20about%20you%20."
          className="flex flex-row gap-3 items-center"
        >
          <MdOutlineEmail className="size-6"/>lij110397@163.com
        </a>
        <a className="flex flex-row gap-3 items-center">
          <FaPhoneAlt className="size-4"/>+86 18510600489
        </a>
      </div>
      <aside>
        <p>Copyright © 2024 - All right reserved by Author - JIAO LI</p>
      </aside>
    </footer>
  );
}
