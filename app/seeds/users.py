from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', firstname="Demo", lastname="User")
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', firstname="Marnie", lastname="Smith")
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', firstname="Bobbie", lastname="Jones")
    alex = User(
        username='alex', email='alex@aa.io', password='password', firstname="Alex", lastname="Parker")
    sarah = User(
        username='sarah', email='sarah@aa.io', password='password', firstname="Sarah", lastname="Henderson")
    v = User(
        username='vbts', email='vbts@aa.io', password='password', firstname='V', lastname='Bts')
    jungkook = User(
        username='jungkook', email='jungkook@aa.io', password='password', firstname='Jungkook', lastname='Bts'
    )
    blake = User(
        username='blake', email='blake@aa.io', password='password', firstname='Blake', lastname='Lively'
    )
    beyonce = User(
        username='beyonce', email='beyonce@aa.io', password='password', firstname='Beyonce', lastname='Carter'
    )
    kim = User(
        username='kim', email='kim@aa.io', password='password', firstname='Kim', lastname='Kardashian'
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(alex)
    db.session.add(sarah)
    db.session.add(v)
    db.session.add(jungkook)
    db.session.add(blake)
    db.session.add(beyonce)
    db.session.add(kim)
    db.session.commit()

    return [user for user in User.query.all()]

# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.


def undo_users():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
