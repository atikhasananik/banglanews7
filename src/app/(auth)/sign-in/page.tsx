"use client";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";

const SignUp: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    const { data: resData, error } = await signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });
  };

  return (
    <div
      className="min-h-screen  bg-[#fafafa] pt-[21px]"
      style={{
        fontFamily: "'Noto Serif Bengali', serif",
      }}
    >
      <div className="mx-auto w-[384px] max-w-[calc(100%-32px)]">
        {/* Title */}
        <h1 className="mb-[28px] text-center text-[23px] font-bold leading-[1.35] text-[#c90012]">
          সাইন আপ
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-[15px]">
            <label
              htmlFor="email"
              className="mb-[6px] block text-[14px] font-normal leading-[1.25] text-[#333]"
            >
              ইমেইল
            </label>

            <input
              id="email"
              name="email"
              type="email"
              className="block h-[39px] w-full rounded-[4px] border border-[#d2d2d2] bg-white px-[10px] py-[6px] text-[15px] text-[#333] outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-[15px]">
            <label
              htmlFor="password"
              className="mb-[6px] block text-[14px] font-normal leading-[1.25] text-[#333]"
            >
              পাসওয়ার্ড
            </label>

            <input
              id="password"
              name="password"
              type="password"
              className="block h-[39px] w-full rounded-[4px] border border-[#d2d2d2] bg-white px-[10px] py-[6px] text-[15px] text-[#333] outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-[15px] block h-[37px] w-full rounded-[4px] border-0 bg-[#ca0014] p-0 font-[inherit] text-[14px] font-semibold text-white"
          >
            সাইন ইন করুন
          </button>
        </form>

        {/* Sign Up */}
        <p className="mt-[12px] text-center text-[14px] leading-[1.5] text-[#777]">
          অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/sign-up"
            className="text-[#ca0014] no-underline hover:underline"
          >
            সাইন আপ করুন
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
