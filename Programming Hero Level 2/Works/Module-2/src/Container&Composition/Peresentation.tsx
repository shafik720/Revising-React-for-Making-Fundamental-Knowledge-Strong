


export const Presentation = ({data, isLoading, error}) => {
    console.log({data});
    return (
        data.map(user => <h2>{user.name}</h2>)
    )
}