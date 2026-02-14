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
              <a href="projects.html" class="">
                Featured Work
              </a>
            </li>
            <li>
              <a href="services.html" class="">
                Solutions
              </a>
            </li>
            <li>
              <a href="about.html" class="">
                Story
              </a>
            </li>
            <li>
              <a href="contact.html" class="">
                Reach Out
              </a>
            </li>
          </ul>
          <button onclick="toggleMenu()" class="block md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
