from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

from .like import likes
from .match import matches
from .dislike import dislikes


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    # add to schema
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    firstname = db.Column(db.String(255), nullable=False)
    lastname = db.Column(db.String(255), nullable=False)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    # relationships
    profile = db.relationship('Profile', back_populates='users')

    # admirer = db.relationship(
    #     'Like', back_populates='admirers', secondary=likes)
    # like_receiver = db.relationship('Like', back_populates='like_receivers')
    # hater = db.relationship('Dislike', back_populates='haters')
    # hate_receiver = db.relationship('Dislike', back_populates='hate_receivers')
    question = db.relationship(
        'Question', secondary='answers', back_populates='user')
    # Joint relationships
    like_requests = db.relationship(
        "User",
        secondary=likes,
        primaryjoin=(likes.c.admirer_id == id),
        secondaryjoin=(likes.c.like_receiver_id == id),
        backref=db.backref("outgoing", lazy="dynamic"),
        lazy="dynamic"
    )
    dislike_requests = db.relationship(
        "User",
        secondary=dislikes,
        primaryjoin=(dislikes.c.hater_id == id),
        secondaryjoin=(dislikes.c.hate_receiver_id == id),
        backref=db.backref("hate_outgoing", lazy="dynamic"),
        lazy="dynamic"
    )
    matchlist_1 = db.relationship(
        "User",
        secondary=matches,
        primaryjoin=(matches.c.matched_1 == id),
        secondaryjoin=(matches.c.matched_2 == id),
        backref=db.backref("matchlist_2", lazy="dynamic"),
        lazy="dynamic"
    )

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'firstname': self.firstname,
            'lastname': self.lastname,
        }

    def to_dict_profile(self):
        profile = self.profile
        print('HIIIIII', profile)
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'firstname': self.firstname,
            'lastname': self.lastname,
            'profile': self.profile[0].to_dict()
        }

# # Reworked code for self-referencing Many-to-Many. See like.py and dislike.py for corresponding code
# # class User(db.Model):
# # __tablename__ = "users"
# # id = db.Column(db.Integer, primary_key=True)

# liker = db.relationship(
#       "User",
#       secondary=likes,
#       primaryjoin=(likes.c.admirer_id == id),
#       secondaryjoin=(likes.c.like_receiver_id == id),
#       backref=db.backref("liked", lazy="dynamic"),
#       lazy="dynamic"
#   )

# disliker = db.relationship(
#     "User",
#     secondary=dislikes,
#     primaryjoin=(dislikes.c.hater_id == id),
#     secondaryjoin=(dislikes.c.hate_receiver_id == id),
#     backref=db.backref("disliked", lazy="dynamic"),
#     lazy="dynamic"
#   )


# def upgrade():
#     # ### commands auto generated by Alembic - please adjust! ###
#     op.create_table('questions',
#                     sa.Column('id', sa.Integer(), nullable=False),
#                     sa.Column('quest_txt', sa.String(
#                         length=255), nullable=True),
#                     sa.PrimaryKeyConstraint('id')
#                     )
#     if environment == "production":
#         op.execute(f"ALTER TABLE questions SET SCHEMA {SCHEMA};")
#     op.create_table('users',
#                     sa.Column('id', sa.Integer(), nullable=False),
#                     sa.Column('username', sa.String(
#                         length=40), nullable=False),
#                     sa.Column('email', sa.String(length=255), nullable=False),
#                     sa.Column('hashed_password', sa.String(
#                         length=255), nullable=False),
#                     sa.Column('firstname', sa.String(
#                         length=255), nullable=False),
#                     sa.Column('lastname', sa.String(
#                         length=255), nullable=False),
#                     sa.PrimaryKeyConstraint('id'),
#                     sa.UniqueConstraint('email'),
#                     sa.UniqueConstraint('username')
#                     )
#     if environment == "production":
#         op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")
#     op.create_table('answers',
#                     sa.Column('id', sa.Integer(), nullable=False),
#                     sa.Column('user_id', sa.Integer(), nullable=False),
#                     sa.Column('question_id', sa.Integer(), nullable=False),
#                     sa.Column('yes_or_no', sa.Boolean(), nullable=True),
#                     sa.ForeignKeyConstraint(
#                         ['question_id'], ['questions.id'], ),
#                     sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
#                     sa.PrimaryKeyConstraint('id')
#                     )
#     if environment == "production":
#         op.execute(f"ALTER TABLE answers SET SCHEMA {SCHEMA};")
#     op.create_table('likes',
#                     sa.Column('admirer_id', sa.Integer(), nullable=True),
#                     sa.Column('like_receiver_id', sa.Integer(), nullable=True),
#                     sa.ForeignKeyConstraint(['admirer_id'], ['users.id'], ),
#                     sa.ForeignKeyConstraint(
#                         ['like_receiver_id'], ['users.id'], )
#                     )
#     if environment == "production":
#         op.execute(f"ALTER TABLE likes SET SCHEMA {SCHEMA};")
#     op.create_table('matches',
#                     sa.Column('matched_1', sa.Integer(), nullable=False),
#                     sa.Column('matched_2', sa.Integer(), nullable=False),
#                     sa.ForeignKeyConstraint(['matched_1'], ['users.id'], ),
#                     sa.ForeignKeyConstraint(['matched_2'], ['users.id'], ),
#                     sa.PrimaryKeyConstraint('matched_1', 'matched_2')
#                     )
#     if environment == "production":
#         op.execute(f"ALTER TABLE matches SET SCHEMA {SCHEMA};")
#     op.create_table('profiles',
#                     sa.Column('id', sa.Integer(), nullable=False),
#                     sa.Column('user_id', sa.Integer(), nullable=False),
#                     sa.Column('city', sa.String(length=50), nullable=False),
#                     sa.Column('state', sa.String(length=50), nullable=False),
#                     sa.Column('occupation', sa.String(
#                         length=50), nullable=True),
#                     sa.Column('gender', sa.String(length=50), nullable=False),
#                     sa.Column('sexual_orientation', sa.String(
#                         length=50), nullable=False),
#                     sa.Column('height', sa.String(length=50), nullable=True),
#                     sa.Column('religion', sa.String(length=50), nullable=True),
#                     sa.Column('political_affiliation',
#                               sa.String(length=50), nullable=True),
#                     sa.Column('language', sa.String(length=50), nullable=True),
#                     sa.Column('kids', sa.String(length=50), nullable=True),
#                     sa.Column('pets', sa.String(length=50), nullable=True),
#                     sa.Column('diet', sa.String(length=50), nullable=True),
#                     sa.Column('smoker', sa.String(length=50), nullable=True),
#                     sa.Column('drinker', sa.String(length=50), nullable=True),
#                     sa.Column('marijuana', sa.String(
#                         length=50), nullable=True),
#                     sa.Column('zodiac', sa.String(length=50), nullable=True),
#                     sa.Column('ethnicity', sa.String(
#                         length=50), nullable=True),
#                     sa.Column('body_type', sa.String(
#                         length=50), nullable=True),
#                     sa.Column('education_level', sa.String(
#                         length=50), nullable=True),
#                     sa.Column('bio', sa.String(length=50), nullable=True),
#                     sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
#                     sa.PrimaryKeyConstraint('id')
#                     )
#     if environment == "production":
#         op.execute(f"ALTER TABLE profiles SET SCHEMA {SCHEMA};")
#     op.create_table('pictures',
#                     sa.Column('id', sa.Integer(), nullable=False),
#                     sa.Column('profile_id', sa.Integer(), nullable=False),
#                     sa.Column('picture_url', sa.String(
#                         length=1000), nullable=False),
#                     sa.Column('is_profile_pic', sa.Boolean(), nullable=True),
#                     sa.ForeignKeyConstraint(['profile_id'], ['profiles.id'], ),
#                     sa.PrimaryKeyConstraint('id')
#                     )
#     if environment == "production":
#         op.execute(f"ALTER TABLE pictures SET SCHEMA {SCHEMA};")
#     # ### end Alembic commands ###


# def downgrade():
#     # ### commands auto generated by Alembic - please adjust! ###
#     op.drop_table('pictures')
#     op.drop_table('profiles')
#     op.drop_table('matches')
#     op.drop_table('likes')
#     op.drop_table('answers')
#     op.drop_table('users')
#     op.drop_table('questions')
#     # ### end Alembic commands ###
