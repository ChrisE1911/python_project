from app.models import db, environment, SCHEMA

# demo_like_1 = Like(
#     admirer_id=1, like_receiver_id=2
# )
# demo_like_2 = Like(
#     admirer_id=1, like_receiver_id=3
# )
# demo_like_3 = Like(
#     admirer_id=1, like_receiver_id=4
# )
# marnie_like = Like(
#     admirer_id=2, like_receiver_id=1
# )
# bobbie_like = Like(
#     admirer_id=3, like_receiver_id=5
# )

# db.session.add(demo_like_1)
# db.session.add(demo_like_2)
# db.session.add(demo_like_3)
# db.session.add(marnie_like)
# db.session.add(bobbie_like)


def seed_likes(users):

    # # user1 = users[0]
    # user2 = users[1]
    # user3 = users[2]
    # user4 = users[3]
    # user5 = users[4]

    # # user1.outgoing.append(user5)
    # user2.outgoing.append(user4)
    # # user3.outgoing.append(user1)

    # db.session.commit()
    pass


def undo_likes():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.likes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM likes")

    db.session.commit()
