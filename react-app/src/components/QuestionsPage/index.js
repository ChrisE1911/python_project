import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { thunkGetAllQuestions } from "../../store/question";

function QuestionsPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(thunkGetAllQuestions());
    }, [dispatch])

    return (
        <div>Questions</div>
    )
}

export default QuestionsPage;
