import Post from "@/models/post";
import User from "@/models/user";
import connectToDB from "@/utils/database";

// creating a post
export const POST = async (req) => {
  const { post, tag, userId } = await req.json();
  try {
    await connectToDB();
    const myPost = await Post.create({
      creator: userId,
      post,
      tag,
    });
    return new Response(JSON.stringify(myPost), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
};

// getting posts
export const GET = async () => {
  try {
    await connectToDB();
    const posts = await Post.find({}).populate("creator");
    return new Response(JSON.stringify(posts), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
};
