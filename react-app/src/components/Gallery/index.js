import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { thunkCreateMorePictures } from "../../store/picture";
import { NavLink } from "react-router-dom";

export default function Gallery() {
    const dispatch = useDispatch();
    const gallery = useSelector((state) => state.pictures.allPictures)
    
    return (
        <>
            <h1>Pictures</h1>
        </>
    )
}
