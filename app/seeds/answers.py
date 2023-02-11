from app.models import db, Answer, environment, SCHEMA

def seed_answers():
    answer_1 = Answer(
        user_id = 1, question_id = 1, yes_or_no = True
    )
    answer_2 = Answer(
        user_id = 1, question_id = 2, yes_or_no = True
    )
    answer_3 = Answer(
        user_id = 1, question_id = 3, yes_or_no = True
    )
    answer_4 = Answer(
        user_id = 1, question_id = 4, yes_or_no = False
    )
    answer_5 = Answer(
        user_id = 1, question_id = 5, yes_or_no = False
    )

    db.session.add(answer_1)
    db.session.add(answer_2)
    db.session.add(answer_3)
    db.session.add(answer_4)
    db.session.add(answer_5)
    db.session.commit()

def undo_answers():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.answers RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM answers")

    db.session.commit()
