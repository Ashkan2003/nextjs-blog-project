"use client";
import Badge from "@/components/ui/Badge";
import FullPageSpinner from "@/components/ui/FullPageSpinner";
import { usePostById } from "@/react-query/posts/usePostById";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import { FaRegClock } from "react-icons/fa";
import Head from "next/head";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

const PostDetailsPage = ({ params }: Props) => {
  const { currentPost, isLoadingPost, error } = usePostById(params.slug);

  if (isLoadingPost) return <FullPageSpinner />;
  if (error) return toast.error("لطفا اتصال اینترنتی خود را چک کنید");
  if (!currentPost) return notFound(); // if no post were found with the given slug then return 404 page

  const postCardWrittenDate = currentPost.date.slice(0, 10);

  return (
    <>
      {/*seo-optimization // Next.js’s <Head> component allows us to dynamically set HTML tags in the header of your pages. */}
      <Head>
        <title>Post Details Page</title>
        <meta name="description" content={currentPost.title} />
        <meta property="post-date" content={currentPost.date} />
        <meta property="description" content={currentPost.content.rendered} />
        <meta name="keywords" content={currentPost.slug} />
        <meta name="post-status" content={currentPost.status} />
        <meta name="categories" content={currentPost.categories.at(0)?.name} />
        <meta
          property="og:image"
          content={currentPost.featured_media_object.source_url}
        />
      </Head>
      {/* page-content */}
      <div dir="rtl" className="bg-[#121212]">
        <div className="relative overflow-hidden h-[700px] xs:h-[550px] sm:h-[550px] md:h-[550px] ">
          {/* post-img */}
          <Image
            className=" absolute bg-gradient-to-br  from-[#00000000] to-[#000000d5] "
            src={currentPost?.featured_media_object.source_url!}
            alt="poster"
            fill
            priority
          />
          {/* shadow style */}
          <div className="absolute w-full h-full bg-gradient-to-b from-[#ffffff00] to-[#121212] " />
          <div className="absolute p-5 flex flex-col gap-6 text-white">
            {/* post-title */}
            <p className="text-[25px] ">{currentPost?.title}</p>
            <div className="flex flex-wrap text-[14px]  items-center w-full gap-5">
              {/* post-status */}
              <div className="flex pt-1">
                {currentPost.status === "publish" && (
                  <Badge badgeType="primary" badgeTitle="انتشار یافته" />
                )}
                {currentPost.status === "semiFinished" && (
                  <Badge badgeType="secondary" badgeTitle="تکمیل نشده" />
                )}
                {currentPost.status === "completing" && (
                  <Badge badgeType="tertiary" badgeTitle="درحال تکمیل" />
                )}
              </div>
              {/* post-type */}
              <div className="flex pt-1">
                {currentPost.type === "post" && (
                  <Badge badgeType="tertiary" badgeTitle="پست" />
                )}
                {currentPost.type === "news" && (
                  <Badge badgeType="quaternary" badgeTitle="اخبار" />
                )}
                {currentPost.type === "information" && (
                  <Badge badgeType="secondary" badgeTitle="اطلاعات" />
                )}
              </div>
              {/* post-catagories */}
              <div className="flex justify-between ">
                {currentPost.categories.map((catagory) => (
                  <Badge
                    badgeType="primary"
                    badgeTitle={catagory.name}
                    key={catagory.id}
                  />
                ))}
              </div>
              {/* post-date */}
              <div className="flex items-center space-x-6">
                <FaRegClock className=" text-red-500 ml-2" />
                <span>{postCardWrittenDate}</span>
              </div>
            </div>
            <h1 className="-mb-4 font-bold">مقدمه</h1>
            {/* post-content */}
            <p className=" text-[24px] ">{currentPost?.content.rendered}</p>
          </div>
        </div>
        {/* post-excerpt */}
        <div className="text-white text-3xl flex flex-col w-full bg-gradient-to-b from-[#fff0] to-[#000000]  p-11  gap-5">
          <h1>توضیحات بیشتر :</h1>
          <p className="leading-relaxed">{currentPost.excerpt.rendered}</p>
        </div>
      </div>
    </>
  );
};

export default PostDetailsPage;
