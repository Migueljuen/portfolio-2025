import React from "react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className=" h-90 mt-24 flex flex-col justify-center gap-8"
    >
      <h1 className="text-2xl">&copy; Miguel Juen. All Rights Reserved.</h1>
      <div className="flex flex-col gap-2">
        <p className="text-2xl w-fit  text-gray hover:text-gray/50 transition-colors duration-300 cursor-pointer">
          Facebook
        </p>

        <p className="text-2xl w-fit  text-gray hover:text-gray/50 transition-colors duration-300 cursor-pointer">
          LinkedIn
        </p>
        <p className="text-2xl w-fit  text-gray hover:text-gray/50 transition-colors duration-300 cursor-pointer">
          Copy Email
        </p>
      </div>
    </footer>
  );
}
