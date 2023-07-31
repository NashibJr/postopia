"use client";

import client from "@/_app/client/client";
import Post from "@/components/post";
import React from "react";

const Posts = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchPostsAndUsers = async () => {
      try {
        const response = await client.get("/new/post");
        setPosts(response.data);
        console.log(response.data);
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
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
