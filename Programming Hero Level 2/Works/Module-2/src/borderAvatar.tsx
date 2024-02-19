

export const BorderAvatar = (ExistingAvatar : any) => {
    return (props) => {
        return (
            <div className=" border-yellow-400 border-8 rounded-full">
                <ExistingAvatar {...props} />
            </div>
        )
    }
}