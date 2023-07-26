import Button from "./Button";

const LargeDevices = ({ handleCreatePost, handleSignout, imageURL }) => {
  return (
    <>
      <Button
        class_name="rounded-full bg-black text-white p-2 mx-1 border-1 border-white w-28 font-semibold"
        label="Create post"
        hanldeClick={handleCreatePost}
      />
      <Button
        class_name="rounded-full text-white p-2 mx-1 border-1 border-white w-28 font-semibold signout-btn"
        label="Signout"
        hanldeClick={handleSignout}
      />
      <img
        src={imageURL}
        alt=""
        width={50}
        height={50}
        className="rounded-full mx-1 cursor-pointer"
      />
    </>
  );
};

export default LargeDevices;
