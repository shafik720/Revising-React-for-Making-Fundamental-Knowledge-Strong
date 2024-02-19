
import { User3 } from "./User3";
import { AvatarWithBorder3 } from "./avatarBorder";

const imgUrl =
  "https://w7.pngwing.com/pngs/910/606/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png";

  const UserWithBorder = AvatarWithBorder3(User3) ; 


export const HigherOrderComponent3 = () => {
  return (
    <div className="w-3/5 flex justify-center gap-5 mx-auto">
      <User3 img={imgUrl} />
      <User3 img={imgUrl} />
      <UserWithBorder img={imgUrl} /> 
      <User3 img={imgUrl} />
      <User3 img={imgUrl} />
    </div>
  );
};

