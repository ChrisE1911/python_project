import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { thunkGetAllQuestions } from "../../store/question";
import { thunkCreateAnswer } from "../../store/question";
import { thunkUpdateAnswer } from "../../store/question";
import { thunkDeleteAnswer } from "../../store/question";
import './QuestionsPage.css';

function QuestionsPage() {
    const dispatch = useDispatch();
    const questions = useSelector((state) => state.questionReducer)
    const allQuestions = questions.allQuestions
    const allQuestionsArr = Object.values(allQuestions)
    const unanswered = Object.values(questions.unansweredQuestions)
    // const answered = Object.values(questions.answeredQuestions)
    const answers = Object.values(questions.answerQuestions)
    // const answersArr = Object.values(questions.unansweredQuestions)

    const [loaded, setLoaded] = useState(false)
    const [unansweredArr, setUnansweredArr] = useState(unanswered)

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

    const updateAnswer = async (id, current_answer) => {
        if (current_answer === "Yes") {
            let yes_or_no = "No"
            await dispatch(thunkUpdateAnswer(id, yes_or_no))
        } else {
            let yes_or_no = "Yes"
            await dispatch(thunkUpdateAnswer(id, yes_or_no))
        }
    }

    const deleteAnswer = async (id) => {
        await dispatch(thunkDeleteAnswer(id)).then(() => dispatch(thunkGetAllQuestions()));
        // alert("This question has been unanswered");
        // setUnansweredArr(unansweredArr);÷
    }

    const questionPercentage = Math.ceil((answers.length / allQuestionsArr.length) * 100)

    return (
        <>
            <h1 id='questions-title'>Questions</h1>
            <div className="questions-main-container">
                <div className="left-side">
                    <div className="left-side-container">
                    <h3>Questions Complete</h3>
                    <h1>{`${questionPercentage}%`}</h1>
                    </div>
                </div>
                <div className="right-side">
                    <div className="right-top"></div>
                    <div className="right-bottom">
                        <div id="question-container">
                            <ul id="answered-question-card-list">
                                {loaded && unanswered.map((unanswer) =>
                                    <div className="question-container" key={unanswer.id}>
                                        <div className="question-container-top">
                                            {/* {console.log(answer)} */}
                                            <div className="question-text">{unanswer.quest_txt}</div>
                                        </div>
                                        <div className="question-container-bottom">
                                            <button className='like-button' onClick={() => createYes(unanswer.id)}>Yes</button>
                                            <button className='dislike-button' onClick={() => createNo(unanswer.id)}>No</button>
                                        </div>
                                    </div>
                                )
                                }
                            </ul>
                            <ul id="unanswered-question-card-list">
                                {loaded && answers.map((answer) =>
                                    <div className="question-container" key={answer.id}>
                                        <div className="question-container-top">
                                            <div className="question-text">{allQuestions[answer.question_id]?.quest_txt}</div>
                                        </div>
                                        <div className="question-container-bottom">
                                            <div className="answer-text">{`Current Answer: ${answer.yes_or_no}`} </div>
                                            <button className='like-button' onClick={() => updateAnswer(answer.id, answer.yes_or_no)}>Update</button>
                                            <button className="dislike-button" onClick={() => deleteAnswer(answer.id)}>Delete</button>
                                        </div>
                                    </div>
                                )
                                }
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuestionsPage;
