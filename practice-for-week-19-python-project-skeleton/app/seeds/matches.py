from app.models import db, environment, SCHEMA


def seed_matches(users):

    user1 = users[0]
    user2 = users[1]
    user3 = users[2]
    user4 = users[3]
    user5 = users[4]

    # connection(needs to go both ways)
    user2.matchlist_1.append(user1)
    user2.matchlist_2.append(user1)
    user3.matchlist_1.append(user1)
    user3.matchlist_2.append(user1)
    user4.matchlist_1.append(user1)
    user4.matchlist_2.append(user1)
    user5.matchlist_1.append(user1)
    user5.matchlist_2.append(user1)

    db.session.commit()


def undo_matches():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.matches RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM matches")

    db.session.commit()
