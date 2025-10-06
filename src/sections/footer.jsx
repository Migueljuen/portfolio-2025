import React, { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = "juenmiguel00@gmail.com";
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      className="h-90 mt-24 flex flex-col justify-center gap-8"
    >
      <h1 className="text-lg lg:text-2xl">
        &copy; Miguel Juen. All Rights Reserved.
      </h1>

      <div className="flex flex-col gap-2">
        {/* Facebook link */}
        <a
          href="https://www.facebook.com/migueljueen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg lg:text-2xl w-fit text-gray hover:text-gray/50 transition-colors duration-300 cursor-pointer"
        >
          Facebook
        </a>

        {/* LinkedIn link */}
        <a
          href="https://www.linkedin.com/in/miguel-juen-639718280/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg lg:text-2xl w-fit text-gray hover:text-gray/50 transition-colors duration-300 cursor-pointer"
        >
          LinkedIn
        </a>

        {/* Copy email */}
        <button
          onClick={handleCopyEmail}
          className="text-lg lg:text-2xl w-fit text-gray hover:text-gray/50 transition-colors duration-300 cursor-pointer"
        >
          {copied ? "Copied!" : "Copy Email"}
        </button>
      </div>
    </footer>
  );
}
