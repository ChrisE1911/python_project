import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { thunkGetAllLikes } from "../../store/like";
import LikeCard from "../LikesCard";
import "./LikesPage.css"



function LikesPage() {
    const dispatch = useDispatch()
    const allLikes = useSelector((state) => state.like.likes)
    const allLikesArr = Object.values(allLikes)
    const [loaded, setLoaded] = useState(false)
    console.log(allLikesArr)

    useEffect(() => {
        dispatch(thunkGetAllLikes())
            .then(() => setLoaded(true))
    }, [dispatch])

    if (!allLikesArr.length) return null

    return (
        <>
            <h1 id='likespage-title'>Likes</h1>
            {!allLikesArr &&
                <div>No likes yet, be patient!</div>
            }
            <div id="card-container">
                <ul id="card-list">
                    {loaded && allLikesArr.map((like) => {
                        return <LikeCard key={like.id} like={like} />
                    })
                    }
                </ul>
            </div>
        </>
    )
}

export default LikesPage;
