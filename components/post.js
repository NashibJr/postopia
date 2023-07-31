import { GoCopy } from "react-icons/go";

const Post = ({ image, creatorName }) => {
  return (
    <div className="flex flex-col flex-wrap justify-start items-start border p-2 bg-slate-50 rounded-lg mb-3">
      <div className="flex justify-between w-full">
        <span>
          <img
            src={image}
            width={30}
            height={30}
            alt=""
            className="rounded-md"
          />
        </span>
        <div className="flex items-end flex-col">
          <GoCopy />
          <p>
            By: <span className="text-xs font-bold">Nashib JR</span>
          </p>
        </div>
      </div>
      <div className="overflow-auto h-20 post-scroll mt-2">
        <p className="text-sm">
          This post is about JavaScript. This is a programming language that is
          the most popular among all the programming languages. All modern web
          applications use javascript.
        </p>
        <p className="font-semibold">#webdevelopment</p>
      </div>
    </div>
  );
};

export default Post;
