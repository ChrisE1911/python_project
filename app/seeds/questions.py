from app.models import db, Question, environment, SCHEMA


def seed_questions():
    quest_1 = Question(
        quest_txt="Do you like to travel?"
    )
    quest_2 = Question(
        quest_txt="Do you like to try new foods?"
    )
    quest_3 = Question(
        quest_txt="Do you try to exercise regularly?"
    )
    quest_4 = Question(
        quest_txt="Could you date someone who makes less money than you?"
    )
    quest_5 = Question(
        quest_txt="Have you ever gone cow-tipping?"
    )
    quest_6 = Question(
        quest_txt="Have you ever wet your pants in public in front of your friends?"
    )
    quest_7 = Question(
        quest_txt="Have you ever had an imaginary friend?"
    )
    quest_8 = Question(
        quest_txt="Have you ever lied about your birthday to get a free dessert?"
    )
    quest_9 = Question(
        quest_txt="Have you ever stolen from a kid's Halloween candy stash?"
    )
    quest_10 = Question(
        quest_txt="Do you own Bitcoin?"
    )
    quest_11 = Question(
        quest_txt="Do you have a best friend?"
    )
    quest_12 = Question(
        quest_txt="Would you tell me if I had something in my teeth?"
    )
    quest_13 = Question(
        quest_txt="Do you like surprises?"
    )
    quest_14 = Question(
        quest_txt="Do you believe that you should 'never go to bed angry?'"
    )
    quest_15 = Question(
        quest_txt="Would you share your Netflix password with me?"
    )

    db.session.add(quest_1)
    db.session.add(quest_2)
    db.session.add(quest_3)
    db.session.add(quest_4)
    db.session.add(quest_5)

    db.session.add(quest_6)
    db.session.add(quest_7)
    db.session.add(quest_8)
    db.session.add(quest_9)
    db.session.add(quest_10)

    db.session.add(quest_11)
    db.session.add(quest_12)
    db.session.add(quest_13)
    db.session.add(quest_14)
    db.session.add(quest_15)

    db.session.commit()


def undo_questions():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.questions RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM questions")

    db.session.commit()
