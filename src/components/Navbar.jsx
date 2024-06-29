import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
        <div className="left">
          <Link href="/">
            <div className="flex items-center gap-1">
              <div className="bg-white-500">
                <Hexagon />
              </div>
              <span className="text-xl font-bold uppercase tracking-tight text-primary-500 ">
                Reader&#39;s Hub
              </span>
            </div>
          </Link>
        </div>
        <div className="right flex items-center gap-3">
          <button className="h-10 rounded-md border border-primary-500 px-4 py-2 text-sm font-medium text-primary-500 transition-all hover:border-primary-100 hover:bg-primary-100 active:border-primary-200 active:bg-primary-200">
            Sign In
          </button>
          <button className="h-10 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:border-primary-500 active:bg-primary-700">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const Hexagon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 1024 1024"
      className="left-1/2 top-1/2 h-8 w-10"
      version="1.1"
    >
      <path
        d="M21.333333 810.666667h981.333334v42.666666H21.333333zM533.333333 384h85.333334v341.333333h-85.333334zM661.333333 384h85.333334v341.333333h-85.333334zM789.333333 384h85.333334v341.333333h-85.333334zM405.333333 384h85.333334v341.333333h-85.333334zM277.333333 384h85.333334v341.333333h-85.333334zM149.333333 384h85.333334v341.333333H149.333333zM917.333333 341.333333H106.666667v-64l405.333333-192 405.333333 192zM106.666667 725.333333h810.666666v42.666667H106.666667z"
        fill="#ce7041" // Change this color
      />
      <path
        d="M533.333333 341.333333h85.333334v42.666667h-85.333334zM661.333333 341.333333h85.333334v42.666667h-85.333334zM789.333333 341.333333h85.333334v42.666667h-85.333334zM405.333333 341.333333h85.333334v42.666667h-85.333334zM277.333333 341.333333h85.333334v42.666667h-85.333334zM149.333333 341.333333h85.333334v42.666667H149.333333zM64 768h896v42.666667H64z"
        fill="#E0E0E0" // Change this shadow color
      />
      <path
        d="M512 234.666667m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z"
        fill="#E0E0E0" // Change this color
      />
    </svg>
  );
};
