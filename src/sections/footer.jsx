import React, { useState } from "react";
import { DocumentDuplicateIcon, BookmarkSquareIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [scaled, setScaled] = useState(false);

  const handleCopyEmail = () => {
    const email = "juenmiguel00@gmail.com";
    navigator.clipboard.writeText(email);
    // Scale pop: lasts ~300ms
    setScaled(true);
    setTimeout(() => setScaled(false), 300);
    // Icon swap: stays for 3s
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <footer id="footer" class="mt-48 lg:mt-72 border-gray-200 flex-col">
      <h1 class="text-lg tracking-tight mb-8 pb-4 border-b border-gray-200">
        Reach out
      </h1>
      <div class="flex flex-col md:flex-row gap-8 md:gap-0 justify-between my-24 w-full">
        <p class="text-lg md:text-2xl leading-relaxed max-w-lg">
          That's it for now. If you want to work together, just reach out!
        </p>
        <nav>
          <ul class="flex flex-col items-start gap-4">
            <li>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 group cursor-pointer"
                title="Copy email"
              >
                <span>juenmiguel00@gmail.com</span>
                <span
                  className="transition-all duration-300"
                  style={{
                    transform: scaled ? "scale(1.2)" : "scale(1)",
                  }}
                >
                  {copied ? (
                    <BookmarkSquareIcon className="size-5 " />
                  ) : (
                    <DocumentDuplicateIcon className="size-5  group-hover:opacity-100 " />
                  )}
                </span>
              </button>
            </li>
            <li>
              <a href="" class="">
                09566077676
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
