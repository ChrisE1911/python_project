from app.models import db, Question, environment, SCHEMA

def seed_questions():
    quest_1 = Question(
        quest_txt = "Do you like to travel?"
    )
    quest_2 = Question(
        quest_txt = "Do you like to try new foods?"
    )
    quest_3 = Question(
        quest_txt = "Do you try to exercise regularly?"
    )
    quest_4 = Question(
        quest_txt = "Could you date someone who makes less money than you?"
    )
    quest_5 = Question(
        quest_txt = "Have you ever gone cow-tipping?"
    )

    db.session.add(quest_1)
    db.session.add(quest_2)
    db.session.add(quest_3)
    db.session.add(quest_4)
    db.session.add(quest_5)
    db.session.commit()

def undo_questions():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.questions RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM questions")

    db.session.commit()
