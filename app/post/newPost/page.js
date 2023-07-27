"use client";

import React from "react";
import Button from "@/components/Button";

const NewPost = () => {
  const [post, setPost] = React.useState({ post: "", tag: "" });
  const handleChange = (event) =>
    setPost({ ...post, [event.target.name]: event.target.value });
  return (
    <div className="p-5 flex flex-col justify-center items-center">
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
          />
          <Button
            class_name="rounded-full text-white p-1 mx-1 border-1 border-white w-20 font-semibold signout-btn"
            label="Create"
          />
        </div>
      </form>
    </div>
  );
};

export default NewPost;
