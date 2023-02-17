import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { thunkCreateMorePictures, thunkGetAllPictures } from "../../store/picture";
import { NavLink } from "react-router-dom";

// Will render all pictures as a gallery, rest is up for discussion

export default function Gallery() {
    const dispatch = useDispatch();
    const gallery = useSelector((state) => state.pictureReducer.allPictures)
    // Convert to array
    const [loaded, setLoaded] = useState(false)
    const galleryArr = Object.values(gallery)

    // State and console log below getting hit @ localhost:3000/pictures
    useEffect(() => {
        dispatch(thunkGetAllPictures())
            .then(() => setLoaded(true))
    }, [dispatch])

    if (!galleryArr.length) return null

    console.log("AAAAA", gallery)
    return (
        <>
            <h1>Pictures</h1>
            {!galleryArr.length &&
                <div>Add some photos so people can get to know you!</div>
            }
            <div id="gallery-container">
                <ul id="gallery-list">
                {loaded && galleryArr.map((pic) => {
                        return <img className="picture" src={pic.picture_url} />
                    })
                    }
                </ul>

            </div>
        </>
    )
}
