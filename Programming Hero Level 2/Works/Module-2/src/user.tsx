const User = ({imgUrl} : {imgUrl : string}) => {
  return (
    <div>
      <img
        src={imgUrl}
        alt=""
        className="w-20 h-20 rounded-full"
      />
    </div>
  );
};

export default User ; 