import { GoCopy } from "react-icons/go";

const Post = ({
  post: {
    creator: { image, name },
    post,
    tag,
  },
}) => {
  return (
    <div className="flex flex-col flex-wrap justify-start items-start border p-2 bg-slate-50 rounded-lg mb-3">
      <div className="flex justify-between w-full">
        <span>
          <img
            src={image}
            width={30}
            height={30}
            alt=""
            className="rounded-fully"
          />
        </span>
        <div className="flex items-end flex-col">
          <span>
            <GoCopy />
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
