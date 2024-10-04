import Link from "next/link";
import React from "react";

const PostNotFoundPage = () => {
  return (
    <section className="bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-52 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">
            مشکلی رخ داد
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            صفحه مورد نظر شما یافت نشد.
          </p>
          <Link
            href="/"
            className="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            بازگشت به خانه
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PostNotFoundPage;
