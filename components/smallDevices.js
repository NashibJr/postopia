import DropdownLink from "./Link";

const SmallDevices = ({
  toggle,
  handleToggle,
  handleCloseToggle,
  imageURL,
  handleSignout,
}) => {
  return (
    <>
      <img
        src={imageURL}
        alt=""
        width={40}
        height={20}
        className="rounded-full cursor-pointer"
        onClick={!toggle ? handleToggle : handleCloseToggle}
      />
      <div
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        {toggle && (
          <div className="py-1" role="none">
            <DropdownLink
              label="Profile"
              pathName="/profile"
              handleCloseToggle={handleCloseToggle}
            />
            <DropdownLink
              label="Create post"
              pathName="/post/newPost"
              handleCloseToggle={handleCloseToggle}
            />
            <span onClick={handleSignout}>
              <DropdownLink
                label="Signout"
                pathName=""
                handleCloseToggle={handleCloseToggle}
              />
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default SmallDevices;
