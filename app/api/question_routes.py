from flask import Blueprint
from flask_login import current_user, login_required
from app.models import User, Profile, db, Question, Answer

question_routes = Blueprint('questions', __name__)

@question_routes.route('/all')
@login_required
def all_questions():
    """
    Retrieves all questions from the question table
    """

    questions_list = Question.query.all()
    print('AAAAA', questions_list)
    all_questions_obj = {}
    all_questions_list = [question for question in questions_list]
    for i in all_questions_list:
        all_questions_obj[i.id] = i.to_dict()
    print('BBBBB', all_questions_obj)


    answers = Answer.query.filter(Answer.user_id == current_user.id).all()
    all_answers_obj = {}
    answered_id = []
    all_answers_list = [answer for answer in answers]
    for i in all_answers_list:
        all_answers_obj[i.id] = i.to_dict()
        answered_id.append(i.id)
    print("CCCCC", all_answers_obj)

    all_unanswered_obj = {}
    for i in all_questions_obj:
        if i not in answered_id:
            all_unanswered_obj[i] = all_questions_obj[i]
    print("DDDDD", all_unanswered_obj)

    # all_unanswered_obj = {}
    # for i in all_answers_list:
    #     if i.yes_or_no == "":
    #         all_unanswered_obj[i.id] = i.to_dict()
    # print("DDDDD", all_unanswered_obj)


    return {"allQuestions": all_questions_obj, "answerQuestions": all_answers_obj, "unansweredQuestions": all_unanswered_obj}
