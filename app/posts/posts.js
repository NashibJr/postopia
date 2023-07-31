"use client";

import client from "@/_app/client/client";
import Post from "@/components/post";
import React from "react";

const Posts = () => {
  React.useEffect(() => {
    const fetchPostsAndUsers = async () => {
      try {
        const postsRepsonse = await client.get("/new/post");
        // const usersResponse = await client.get("/auth");
        console.log(postsRepsonse, ">>>>>>");
      } catch (error) {
        console.log(error);
      }
    };
    fetchPostsAndUsers();
  }, []);
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-lg m-1">Posts</h1>
      <div className="overflow-auto post-scroll" style={{ height: "44vh" }}>
        <Post />
      </div>
    </div>
  );
};

export default Posts;
