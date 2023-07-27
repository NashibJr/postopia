import User from "@/models/user";
import connectToDB from "@/utils/database";

export const POST = async (req) => {
  const { displayName, photoURL, email } = await req.json();
  try {
    await connectToDB();
    const userExists = await User.findOne({ name: displayName });
    if (!userExists) {
      const user = await User.create({
        name: displayName,
        email: email,
        image: photoURL,
      });
      return new Response(JSON.stringify(user), { status: 201 });
    }
    return new Response(JSON.stringify({ message: "" }));
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 401,
    });
  }
};
