import Image from "next/image";
import Me from "../../image/me.png";

const ProfileBio = () => {
  return (
    <>
      <div className="flex h-[7.5rem] w-36 items-center justify-around">
        <div className="absolute -mt-6 ml-0 h-[7.5rem] w-1/2 px-14">
          <Image
            src={Me}
            alt="profile"
            width={95}
            height={95}
            placeholder="blur"
            className="absolute rounded-full object-fill "
          />
        </div>
        <div className="ml-[18.5rem] mb-10 mr-20 flex h-28 w-28 items-center justify-between">
          <div className="mx-12 flex w-1 flex-col items-center justify-center">
            <span className="font-bold opacity-80 dark:text-white">9</span>
            <span className="text-black/60  dark:text-white/90">Posts</span>
          </div>
          <div className="mx-14 flex w-1 flex-col items-center justify-center">
            <span className="font-bold opacity-80 dark:text-white">370</span>
            <span className="text-black/60  dark:text-white/90">Followers</span>
          </div>
          <div className="mx-14 flex w-1 flex-col items-center justify-center">
            <span className="font-bold opacity-80 dark:text-white">500</span>
            <span className="text-black/60  dark:text-white/90">
              Followings
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileBio;
