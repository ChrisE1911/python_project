import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { thunkGetAllQuestions } from "../../store/question";
import { thunkCreateAnswer } from "../../store/question";

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

    const createYes = async (id) => {
        let question_id = id
        let yes_or_no = "Yes"
        await dispatch(thunkCreateAnswer(question_id, yes_or_no))
    }

    const createNo = async (id) => {
        let question_id = id
        let yes_or_no = "No"
        await dispatch(thunkCreateAnswer(question_id, yes_or_no))
    }

    return (
        <>
            <h1>Questions</h1>
            <div className="left-side"></div>
            <div className="right-side">
                <div className="right-top"></div>
                <div className="right-bottom">
                    <div id="question-container">
                        <ul id="answered-question-card-list">
                            {loaded && unanswered.map((unanswer) =>
                                <div className="question-container" key={unanswer.id}>
                                    <div className="question-container-top">
                                        {/* {console.log(answer)} */}
                                        <div>{unanswer.quest_txt}</div>
                                    </div>
                                    <div className="question-container-bottom">
                                        <button onClick={() => createYes(unanswer.id)}>Yes</button>
                                        <button onClick={() => createNo(unanswer.id)}>No</button>
                                    </div>
                                </div>
                            )
                            }
                        </ul>
                        <ul id="unanswered-question-card-list">
                            {loaded && answers.map((answer) =>
                                <div className="question-container" key={answer.id}>
                                    <div className="question-container-top">
                                        <div>{allQuestions[answer.question_id].quest_txt}</div>
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
