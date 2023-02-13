from app.models import db, environment, SCHEMA

def seed_dislikes(users):
    user1 = users[0]
    user2 = users[1]
    user3 = users[2]
    user4 = users[3]
    user5 = users[4]

    user1.hate_outgoing.append(user3)
    user4.hate_outgoing.append(user3)
    user5.hate_outgoing.append(user1)

    db.session.commit()

def undo_dislikes():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.dislikes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM dislikes")

    db.session.commit()
