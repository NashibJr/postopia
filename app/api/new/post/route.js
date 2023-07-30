import Post from "@/models/post";
import connectToDB from "@/utils/database";

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
