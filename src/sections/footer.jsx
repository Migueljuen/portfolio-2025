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
    <footer class="mt-48 lg:mt-72 border-t-2 border-gray-200 flex-col">
      <div class="flex flex-col md:flex-row gap-8 md:gap-0 justify-between my-24 w-full">
        <p class="text-lg md:text-2xl leading-relaxed max-w-lg">
          That's it for now. If you want to work together, just reach out!
        </p>
        <nav>
          <ul class="flex flex-col items-start gap-4">
            <li>
              <a href="" class="">
                juenmiguel00@gmail.com
              </a>
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
