import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { thunkGetAllLikes } from "../../store/like";
import LikeCard from "../LikesCard";



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
            {!allLikesArr &&
                <div>No likes yet, be patient!</div>
            }
            <ul>

            {allLikesArr.map((like) => {
                return <LikeCard key={like.id} like={like} />
            })
        }
        </ul>
        </>
    )
}

export default LikesPage;
