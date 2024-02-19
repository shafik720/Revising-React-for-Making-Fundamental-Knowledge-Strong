import User from "./user";
import BorederedComponent from "./wrappedComponet";

const BorderedUser = BorederedComponent(User) ; 

const img= 'https://w7.pngwing.com/pngs/910/606/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png'

const HigherOrderComponent = () => {
    return (
        <div className="w-3/5 mx-auto flex justify-center gap-10">
            <User imgUrl={img} />
            <User  imgUrl={img}/>
            <BorderedUser  imgUrl={img}/>
            <User  imgUrl={img}/>
            <User  imgUrl={img}/>
        </div>
    )
}

export default HigherOrderComponent ;