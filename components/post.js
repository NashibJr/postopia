"use client";

import React from "react";
import { GoCopy } from "react-icons/go";
import { MdDone } from "react-icons/md";

const Post = ({
  post: {
    creator: { image, name },
    post,
    tag,
  },
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(post);
    setCopied(true);
    console.log("copied");
    window.setTimeout(() => setCopied(false), 5000);
  };

  return (
    <div className="flex flex-col flex-wrap justify-start items-start border p-2 bg-slate-50 rounded-lg mb-3">
      <div className="flex justify-between w-full">
        <span>
          <img
            src={image}
            width={30}
            height={30}
            alt=""
            className="rounded-full"
          />
        </span>
        <div className="flex items-end flex-col">
          <span onClick={handleCopy} className="cursor-pointer">
            {copied ? <MdDone /> : <GoCopy />}
          </span>
          <p>
            By: <span className="text-xs font-bold">{name}</span>
          </p>
        </div>
      </div>
      <div className="overflow-auto h-12 post-scroll mt-2">
        <p className="text-sm">{post}</p>
        <p className="font-semibold">{tag}</p>
      </div>
    </div>
  );
};

export default Post;
