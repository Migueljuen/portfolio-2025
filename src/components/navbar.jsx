import React from "react";

export default function Navbar() {
  return (
    <header class="flex justify-between z-10 sticky top-0 bg-white py-4">
      <p>
        <a href="#" class="">
          Miguel Juen
        </a>
      </p>
      <div>
        <nav>
          <ul class="space-x-8 hidden md:flex">
            <li>
              <a href="#projects" class="">
                Featured Works
              </a>
            </li>
            <li>
              <a href="#story" class="">
                Story
              </a>
            </li>
            <li>
              <a href="#others" class="">
                Others
              </a>
            </li>
            <li>
              <a href="#footer" class="">
                Reach Out
              </a>
            </li>
          </ul>
          <button onclick="toggleMenu()" class="block md:hidden text-sm">
            See more
          </button>
        </nav>
      </div>
    </header>
  );
}
