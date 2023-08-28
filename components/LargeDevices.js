import Button from "./Button";

const LargeDevices = ({ handleCreatePost, handleSignout, imageURL }) => {
  return (
    <>
      <Button
        class_name="rounded-full bg-black text-white h-10 mx-1 border-1 border-white w-28 font-semibold hover:bg-white hover:text-black hover:border hover:border-black"
        label="Create post"
        handleClick={handleCreatePost}
      />
      <Button
        class_name="rounded-full text-black h-10 mx-1 border-1 border-black w-28 font-semibold hover:bg-black hover:text-white bg-white border border-black"
        label="Signout"
        handleClick={handleSignout}
      />
      <img
        src={imageURL}
        alt=""
        width={40}
        height={20}
        className="rounded-full mx-1 cursor-pointer"
      />
    </>
  );
};

export default LargeDevices;
