"use client";

import { useLogin } from "@/react-query/auth/useLogin";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import MiniSpinner from "@/components/ui/MiniSpinner";
import { LoginDTOType } from "@/types/authTypes";

const schema = z.object({
  email: z.string().email({ message: "فرمت ایمیل باید درست باشد." }),
  password: z
    .string()
    .min(8, { message: "حداقل رمز عبور باید 8 کاراکتر باشد." }),
});

function Login() {
  const router = useRouter();

  const { isPending, login } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDTOType>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<LoginDTOType> = async (data: LoginDTOType) => {
    console.log(data, "aaaaaaa");
    login(
      // the login-function is the react-query mutate-function so we can use functions like "onSuccess" or "onError" or "onSettled" by in. we can use these-finction by adding "," and writing a second-optional-argument that is a obj to write these-functions into it
      { email: data.email, password: data.password },
      {
        onSettled: () => {
          // the onSettled-func is like onSuccess-func but its defference is that when ever the mutate-func succeded or failed(error) its code will run
          // when ever the user loged-in or failed to log-in, clear these states(clear inputs)
        },
        onSuccess(data) {
          console.log(data, "sdsaaaaaaaaaaaaaaaaaaa");
          toast.success("ورود با موفقیت انجام شد")
          router.push("/blogPosts");
        },
      }
    );
  };

  return (
    <div
      dir="rtl"
      className="flex min-h-screen flex-col justify-center bg-gray-900 py-12 sm:px-6 lg:px-8"
    >
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800  px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <div className="mb-6 sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className=" text-center text-3xl font-extrabold text-white">
              ورود کاربر
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                ادرس ایمیل
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  disabled={isPending}
                  type="email"
                  className="relative block w-full appearance-none rounded-md border border-gray-300 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 hover:border hover:border-blue-600 focus:outline focus:outline-blue-600  sm:text-sm"
                  placeholder="ادرس ایمیل خود را وارد کنید"
                  {...register("email")}
                />
                <p className="text-red-600">{errors?.email?.message}</p>
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                رمز عبور کاربر
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  disabled={isPending}
                  type="password"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 hover:border hover:border-blue-600 focus:outline focus:outline-blue-600  sm:text-sm"
                  placeholder="رمز عبور خود را وارد کنید"
                  {...register("password")}
                />
                <p className="text-red-600">{errors?.password?.message}</p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isPending}
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {!isPending ? "Login" : <MiniSpinner />}
              </button>
            </div>
          </form>
          <hr className="mx-1 my-4 border-indigo-700" />
          <p className="text- font-semibold text-blue-600">
            حساب کاربری ندارید؟
            <Link href="/register" className="text-blue-400">
              {" "}
              ثبت نام
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
