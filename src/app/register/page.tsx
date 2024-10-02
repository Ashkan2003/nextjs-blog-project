"use client";
/* eslint-disable no-unused-vars */
import { SubmitHandler, useForm } from "react-hook-form";
import { createClient } from "@/utils/supabase/client";

import { useSignup } from "@/react-query/auth/useSignUp";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import Link from "next/link";
import MiniSpinner from "@/components/ui/MiniSpinner";

interface FormData {
  userName: string;
  email: string;
  password: string;
}

const schema = z.object({
  userName: z
    .string()
    .min(3, { message: "حداقل کاراکتر برای نام رعایت نشده." }),
  email: z.string().email({ message: "فرمت ایمیل باید درست باشد." }),
  password: z
    .string()
    .min(8, { message: "حداقل رمز عبور باید 8 کاراکتر باشد." }),
});

function Signup() {
  const router = useRouter();
  const supabase = createClient();

  const { isPending, singup } = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data, "aaaaaaa");
    singup(
      {
        userName: data.userName,
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: (user) => {
          router.push("/blogPosts");
          toast.success("ثبت نام باموفقیت انجام شد");
          console.log(user);
        },
      }
    );
  };

  return (
    <div
      dir="rtl"
      className="flex min-h-screen flex-col justify-center bg-gray-900 sm:px-6 lg:px-8"
    >
      <div className="mt-8  sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800  px-9 py-8 shadow sm:rounded-lg sm:px-16">
          <div className="mb-6 sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className=" text-center text-3xl font-extrabold text-white">
              ثبت نام کاربر
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* full name input */}
            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-white"
              >
                نام کاربر
              </label>
              <div className="mt-1">
                <input
                  className="relative block w-full appearance-none rounded-md border border-gray-300 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 hover:border hover:border-blue-600 focus:outline focus:outline-blue-600  sm:text-sm"
                  placeholder="نام خود را وارد کنید"
                  id="userName"
                  disabled={isPending}
                  type="text"
                  {...register("userName")}
                />
                <p className="text-red-600">{errors?.userName?.message}</p>
              </div>
            </div>
            {/* email input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                ادرس ایمیل کاربر
              </label>
              <div className="mt-1">
                <input
                  className="relative block w-full appearance-none rounded-md border border-gray-300 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 hover:border hover:border-blue-600 focus:outline focus:outline-blue-600  sm:text-sm"
                  placeholder="ادرس ایمیل خود را وارد کنید"
                  id="email"
                  type="email"
                  disabled={isPending}
                  {...register("email")}
                />
                <p className="text-red-600">{errors?.email?.message}</p>
              </div>
            </div>
            {/* password input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                رمز عبور
              </label>
              <div className="mt-1">
                <input
                  className="relative block w-full appearance-none rounded-md border border-gray-300 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 hover:border hover:border-blue-600 focus:outline focus:outline-blue-600  sm:text-sm"
                  placeholder="رمز عبور خود را وارد کنید"
                  id="password"
                  disabled={isPending}
                  type="password"
                  {...register("password")}
                />
                <p className="text-red-600">{errors?.password?.message}</p>
              </div>
            </div>

            <p className=" font-semibold text-blue-600">
              <Link href="/login" className="text-blue-400">
                قبلا ثبت نام کرده اید؟
              </Link>
            </p>

            <div>
              <button
                type="submit"
                disabled={isPending}
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {!isPending ? "ثبت نام" : <MiniSpinner />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
