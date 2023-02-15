const LikeCard = ({like}) => {
    console.log('BBBBBB', like)
    return (
        <>
            <div>
                {`${like.firstname} ${like.lastname}`}
            </div>
        </>
    )
}

export default LikeCard;
