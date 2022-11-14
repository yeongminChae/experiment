const ProfileBioBar = () => {
  return (
    <div className="-ml-3 mt-[0.01rem] flex w-[31rem] border-t transition-colors duration-200 ease-in-out">
      <div className="grid h-[60vh] w-full grid-flow-row grid-cols-3 grid-rows-3 ">
        <div className="mr-[0.01rem] bg-red-200">1</div>
        <div className=" bg-red-200">2</div>
        <div className="ml-[0.01rem] bg-red-200">3</div>
        <div className="mt-[0.05rem] mr-[0.01rem] bg-violet-100">4</div>
        <div className="mt-[0.05rem] bg-violet-100">5</div>
        <div className="mt-[0.05rem] ml-[0.01rem] bg-violet-100">6</div>
        <div className="mt-[0.05rem] mr-[0.01rem] bg-violet-100">7</div>
        <div className="mt-[0.05rem] mr-[0.01rem] bg-violet-100">8</div>
        <div className="mt-[0.05rem] ml-[0.01rem] bg-violet-100">9</div>
      </div>
    </div>
  );
};

export default ProfileBioBar;
