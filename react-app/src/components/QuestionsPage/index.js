import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { thunkGetAllQuestions } from "../../store/question";

function QuestionsPage() {
    const dispatch = useDispatch();
    const questions = useSelector((state) => state.questionReducer)
    const allQuestions = questions.allQuestions
    const unanswered = Object.values(questions.unansweredQuestions)
    const answered = Object.values(questions.answeredQuestions)
    const answers = Object.values(questions.answerQuestions)

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        dispatch(thunkGetAllQuestions())
            .then(() => setLoaded(true))
    }, [dispatch])


    return (
        <>
            <h1>Questions</h1>
            <div className="left-side"></div>
            <div className="right-side">
                <div className="right-top"></div>
                <div className="right-bottom">
                    <div id="question-container">
                        <ul id="answered-question-card-list">
                            {loaded && answers.map((answer) =>
                                <div className="question-container" key={answer.id}>
                                    <div className="question-container-top">
                                        {console.log(answer)}
                                        <div>{allQuestions[answer.question_id].quest_txt}</div>
                                    </div>
                                    <div className="question-container-bottom">
                                        <div>Yes</div>
                                        <div>No</div>
                                    </div>
                                </div>
                            )
                            }
                        </ul>
                        <ul id="unanswered-question-card-list">
                            {loaded && unanswered.map((answer) =>
                                <div className="question-container" key={answer.id}>
                                    <div className="question-container-top">
                                        <div>{answer.quest_txt}</div>
                                    </div>
                                    <div className="question-container-bottom">
                                        <div>user answers here</div>
                                    </div>
                                </div>
                            )
                            }
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default QuestionsPage;
