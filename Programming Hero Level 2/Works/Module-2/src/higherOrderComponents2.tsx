import { UserProfile } from "./User2"
import { BorderAvatar } from "./borderAvatar"

const img = 'https://w7.pngwing.com/pngs/910/606/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png'

const BorderAvatars = BorderAvatar(UserProfile) ; 

export const HigherOrderComponent2 = () => {
    return (
        <div className="w-3/4 mx-auto flex justify-center gap-5">
            <UserProfile img={img} /> 
            <UserProfile  img={img} /> 
            <BorderAvatars img={img} />
            <UserProfile  img={img} /> 
            <UserProfile  img={img} /> 
        </div>
    )
}