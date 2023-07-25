const Home = () => {
  return (
    <div className="p-5 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="header-text"> AI-Powered Posts</span>
      </h1>
      <p className="text-center mt-5">
        Postopia is an open source AI posting tool for{" "}
        <br className="max-md:hidden" />
        modern world to discover, create and share creative posts
      </p>
    </div>
  );
};

export default Home;
