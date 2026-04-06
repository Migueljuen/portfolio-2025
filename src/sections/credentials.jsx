import React, { useState } from "react";
import GithubSection from "../components/github";
import Socials from "../components/socials";
import Techstack from "../components/techstack";
import { GoStack } from "react-icons/go";
export default function Credentials() {

  return (
      <div className="mt-24 lg:mt-48 flex flex-col gap-4">
                  <h1 class="text-lg tracking-tight mb-8 pb-4 border-b border-gray-200">
            Tech stack and credentials
          </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2  w-full gap-4">
          <Socials />
          {/* Github */}
          <div className="h-full min-h-0">
            <GithubSection />
          </div>
        </div>

        {/* Tech stack */}
        <div className="border border-black/5 shadow-xs p-6 rounded-2xl w-auto flex flex-col gap-8 justify-between">
          {/* Header */}
          <div className="text-sm font-medium p-2 text-black/80 mb-4 flex gap-2 items-center w-fit">
            <GoStack size={20} />
            <p>Tech stack</p>
          </div>

          {/* Tech List */}
          <Techstack />

          <div className="space-y-2">
            <h1 className="text-lg">Technologies I've been using</h1>
            <p className="text-sm text-gray">
              {" "}
              Technologies and tools I use to build modern web and mobile
              applications.
            </p>
          </div>
        </div>
      </div>
  );
}
