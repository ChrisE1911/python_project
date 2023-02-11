from app.models import db, environment, SCHEMA

def seed_dislikes():
    demo_dislike_1 = Dislike(
        hater_id = 1, hate_receiver_id = 4
    )
    demo_dislike_2 = Dislike(
        hater_id = 1, hate_receiver_id = 5
    )
    marnie_dislike = Dislike(
        hater_id = 2, hate_receiver_id = 3
    )
    marnie_dislike_2 = Dislike(
        hater_id = 2, hate_receiver_id = 4
    )
    marnie_dislike_3 = Dislike(
        hater_id = 2, hate_receiver_id = 5
    )


    db.session.add(demo_dislike_1)
    db.session.add(demo_dislike_2)
    db.session.add(marnie_dislike)
    db.session.add(marnie_dislike_2)
    db.session.add(marnie_dislike_3)
    db.session.commit()

def undo_dislikes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.dislikes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM dislikes")

    db.session.commit()
