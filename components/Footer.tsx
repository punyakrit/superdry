import { Linkedin, X } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <div className="md:mx-40 mx-4 mt-10 py-10 border-b-2 border-black flex justify-between">
        <div className="text-xl font-bold">SuperDry</div>
        <div className="flex space-x-5">
          <Link href={"https://www.linkedin.com/in/punyakrit-singh-makhni/"}>
            <Linkedin />
          </Link>
          <Link href={"https://twitter.com/Punyakrit22"}>
            <X />
          </Link>
        </div>
      </div>
      <div className="flex justify-center py-4 text-sm text-gray-500">
        ©2024 SuperDry All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
