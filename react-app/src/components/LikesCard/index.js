const LikeCard = ({like}) => {
    console.log('BBBBBB', like)
    return (
        <>
        {/* trying to add image from profile state */}
            {/* <div>
                <img src=></img>
            </div> */}
            <div>
                {`${like.firstname} ${like.lastname}`}
            </div>
        </>
    )
}

export default LikeCard;
