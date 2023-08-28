"use client";

import React from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import client from "@/_app/client/client";

const NewPost = () => {
  const [post, setPost] = React.useState({ post: "", tag: "" });
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const { _id } = useSelector((state) => state.user.user);

  const handleChange = (event) =>
    setPost({ ...post, [event.target.name]: event.target.value });

  const handleCreatePost = async () => {
    try {
      const response = await client.post("/new/post", {
        userId: _id,
        post: post.post,
        tag: post.tag,
      });
      if (!response) {
        alert("An unexpected error has occured");
      }
      setLoading(true);
      router.push("/");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const canCreatePost = post.post && post.tag;

  return (
    <div className="p-5 flex flex-col justify-center items-center w-full create-post">
      <h1 className="text-4xl font-bold text-center header-text">
        Create Post
      </h1>
      <p className="text-center mt-5">
        Create and share amazing posts with the world and let{" "}
        <br className="max-md:hidden" />
        your imagination run wildwith any AI-powered platform
      </p>
      <form className="pt-10 flex flex-col">
        <label className="font-bold">Your AI-post</label>
        <textarea
          type="text"
          name="post"
          value={post.post}
          placeholder="Write your post here...."
          className="rounded-sm bg-slate-50 border-none outline-none p-2 mt-3"
          rows={5}
          onChange={handleChange}
        ></textarea>
        <label className="font-bold mt-6">
          Tag (eg. #webdevelopment, #product, #idea)
        </label>
        <input
          type="text"
          name="tag"
          value={post.tag}
          placeholder="##tag"
          className="rounded-sm bg-slate-50 border-none outline-none p-2 mt-3"
          onChange={handleChange}
        />
        <div className="flex justify-end mt-2">
          <Button
            class_name="rounded-full text-black p-1 mx-1 border-1 border-white w-20 font-semibold bg-slate-300"
            label="Cancel"
            handleClick={() => router.push("/")}
          />
          <Button
            class_name="rounded-full text-white p-1 mx-1 border-1 border-white w-20 font-semibold signout-btn"
            label={loading ? "Creating..." : "Create"}
            handleClick={handleCreatePost}
            disabled={!canCreatePost}
          />
        </div>
      </form>
    </div>
  );
};

export default NewPost;
