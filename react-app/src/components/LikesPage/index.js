import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { thunkGetAllLikes } from "../../store/like";
import LikeCard from "../LikesCard";
import "./LikesPage.css"



function LikesPage() {
    const dispatch = useDispatch()
    const allLikes = useSelector((state) => state.like.likes)
    const allLikesArr = Object.values(allLikes)
    console.log(allLikesArr)

    useEffect(() => {
        dispatch(thunkGetAllLikes())
    }, [dispatch])

    return (
        <>
            <h1>Likes</h1>
            {!allLikesArr &&
                <div>No likes yet, be patient!</div>
            }
            <div id="card-container">
                <ul id="card-list">
                    {allLikesArr.map((like) => {
                        return <LikeCard key={like.id} like={like} />
                    })
                    }
                </ul>
            </div>
        </>
    )
}

export default LikesPage;
