import AuthForm from "@/components/AuthForm";
import React from "react";

const SignIn = () => {
  return (
    <>
      <div className="absolute top-8 left-8 max-w-sm flex flex-col gap-4 p-4 rounded-lg drop-shadow-md border-2 border-dashed bg-blue-25 border-blue-600">
        <h3 className="text-16 font-semibold text-gray-900">
          Test Credentials
        </h3>
        <p>
          Email: <span className="font-semibold">test.user@email.com</span>
        </p>
        <p>
          Password: <span className="font-semibold">test.user</span>
        </p>
      </div>

      <section className="grid place-items-center size-full max-sm:px-6">
        <AuthForm type="sign-in" />
      </section>
    </>
  );
};

export default SignIn;
