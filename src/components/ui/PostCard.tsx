/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaRegClock, FaTable } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";
import { GoBookmark } from "react-icons/go";
import Badge from "./Badge";
import Link from "next/link";
import { PostCardType } from "@/types/postType";
import Image from "next/image";

interface Props {
  postCard: PostCardType;
}

function PostCard({ postCard }: Props) {
  const postCardContent = postCard.content.rendered.slice(0, 100) + "...";
  const postCardWrittenDate = postCard.date.slice(0, 10);
  return (
    <div dir="rtl" className=" rounded-lg  shadow-lg bg-[rgb(16,24,32)]">
      <Image
        src={postCard.featured_media_object.source_url}
        width={600}
        height={200}
        alt="Picture of the Post"
      />
      <div className="grid h-[310px]  content-between  p-5 pt-1 ">
        <div className=" space-y-3 pt-3">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex space-x-2">
              {postCard.status === "publish" && (
                <Badge type="primary">انتشار یافته</Badge>
              )}
              {postCard.status === "semiFinished" && (
                <Badge type="secondary">تکمیل نشده</Badge>
              )}
              {postCard.status === "completing" && (
                <Badge type="tertiary">درحال تکمیل</Badge>
              )}
            </div>
            <div>
              <GoBookmark className="text-xl" />
            </div>
          </div>

          <Link
            href={"/"}
            className="text-md font-semibold transition-all duration-200 hover:text-blue-700 dark:text-slate-100 hover:dark:text-blue-600 "
          >
            {postCard.title}
          </Link>
          <p className="font-normal text-gray-300 mb-3">{postCardContent}</p>

          <div className="flex space-x-4 ">
            <div className="flex items-center space-x-6">
              <FaRegClock className=" text-red-500 ml-2" />
              <span>{postCardWrittenDate}</span>
            </div>
          </div>
        </div>

        <hr className="my-2 border-gray-200 dark:border-gray-700 "></hr>
        <div className="flex items-center justify-center">
          <Link
            href={"/"}
            className="text-center w-full rounded-md border-2 border-gray-400 bg-transparent px-3 py-2 font-semibold text-gray-400 transition-all hover:border-transparent hover:bg-gray-500 hover:text-white "
          >
            بیشتر
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
