from flask.cli import AppGroup
from .users import seed_users, undo_users
from .answers import seed_answers, undo_answers
from .likes import seed_likes, undo_likes
from .matches import seed_matches, undo_matches
from .pictures import seed_pictures, undo_pictures
from .profiles import seed_profiles, undo_profiles
from .questions import seed_questions, undo_questions
from .dislikes import seed_dislikes, undo_dislikes


from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_matches()
        undo_dislikes()
        undo_likes()
        undo_answers()
        undo_pictures()
        undo_profiles()
        undo_questions()
        undo_users()

    users = seed_users()
    seed_questions()
    seed_profiles()
    seed_pictures()
    seed_answers()
    seed_likes(users)
    seed_dislikes(users)
    seed_matches(users)

    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_matches()
    undo_dislikes()
    undo_likes()
    undo_answers()
    undo_pictures()
    undo_profiles()
    undo_questions()
    undo_users()
    # Add other undo functions here
