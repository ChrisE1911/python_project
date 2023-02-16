import './LikesCard.css';
import { useDispatch } from 'react-redux';
import { thunkDeleteLike } from '../../store/like';

const LikeCard = ({ like }) => {
    const dispatch = useDispatch();

    const handleDelete = async () => {
        await dispatch(thunkDeleteLike(like.id))
        alert("You have un-liked this person")
    }

    console.log('BBBBBB', like)
    return (
        <div id="likes-card">
        {/* trying to add image from profile state */}
            <div>
                <img src={like.profile.userImages[0].picture_url} style={{width: "100px", height: '100px'}}></img>
            </div>
            <div>
                {`${like.firstname}, ${like.profile.age}`}
                <div>{`${like.profile.city}, ${like.profile.state}`}</div>
            </div>
{/* Add onclick and handle delete like to this component */}
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default LikeCard;
