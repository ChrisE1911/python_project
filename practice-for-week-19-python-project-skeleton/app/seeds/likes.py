from app.models import db, Like, environment, SCHEMA

def seed_likes():
    demo_like_1 = Like(
        admirer_id = 1, like_receiver_id = 2
    )
    demo_like_2 = Like(
        admirer_id = 1, like_receiver_id = 3
    )
    demo_like_3 = Like(
        admirer_id = 1, like_receiver_id = 4
    )
    marnie_like = Like(
        admirer_id = 2, like_receiver_id = 1
    )
    bobbie_like = Like(
        admirer_id = 3, like_receiver_id = 5
    )

    db.session.add(demo_like_1)
    db.session.add(demo_like_2)
    db.session.add(demo_like_3)
    db.session.add(marnie_like)
    db.session.add(bobbie_like)
    db.session.commit()

def undo_likes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.likes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM likes")

    db.session.commit()
