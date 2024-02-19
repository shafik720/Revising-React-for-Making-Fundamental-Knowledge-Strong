

export const AvatarWithBorder3 = (ExistingAvatar) => {
    return (props) => {
        return (
            <div className="border-8 border-red-700 rounded-full">
                <ExistingAvatar {...props} />
            </div>
        )
    }
}