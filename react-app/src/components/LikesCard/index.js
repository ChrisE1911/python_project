import './LikesCard.css';
import { useDispatch } from 'react-redux';
import { thunkDeleteLike } from '../../store/like';
import { useHistory } from 'react-router-dom'
import { useState } from 'react';

const LikeCard = ({ like }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [likeArr, setLikeArr] = useState([])
    const handleDelete = async () => {
        await dispatch(thunkDeleteLike(like.id))
            .then(() => {

                alert("You have un-liked this person")
            })
            .then(setLikeArr(like))
    }

    console.log('BBBBBB', like)
    return (
        <div className="likes-card">
        {/* trying to add image from profile state */}
            <div className="likes-image">
                <img src={like.profile.userImages[0].picture_url} style={{width: "100px", height: '100px'}}></img>
            </div>
            <div>
                {`${like.firstname}, ${like.profile.age}`}
            </div>
            <div>
                <div>{`${like.profile.city}, ${like.profile.state}`}</div>
            </div>
{/* Add onclick and handle delete like to this component */}
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default LikeCard;
