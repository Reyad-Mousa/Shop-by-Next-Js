import Link from "next/link";
import React from "react";

const SignPage = () => {
  return (
    <div>
      <Link
        href="#"
        className="text-white-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600 mr-2"
      >
        Sign in
      </Link>
      <Link
        href="#"
        className="text-white-800 text-sm font-semibold border px-4 py-1 rounded-lg bg-purple-600 hover:border-white-600"
      >
        Sign up
      </Link>
    </div>
  );
};

export default SignPage;
