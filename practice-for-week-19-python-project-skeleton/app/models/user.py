from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


likes = db.Table(
    "likes",
    db.Column("admirer_id", db.Integer, db.ForeignKey("users.id")),
    db.Column("like_receiver_id", db.Integer, db.ForeignKey("users.id"))
)


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    # add to shema
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
    admirer = db.relationship(
        'Like', back_populates='admirers', secondary=likes)
    like_receiver = db.relationship('Like', back_populates='like_receivers')
    hater = db.relationship('Dislike', back_populates='haters')
    hate_receiver = db.relationship('Dislike', back_populates='hate_receivers')
    question = db.relationship(
        'Question', secondary='answers', back_populates='user')

    # class User(db.Model):
    # __tablename__ = "users"
    # id = db.Column(db.Integer, primary_key=True)
    # # columns
    # followers = db.relationship(
    #     "User",
    #     secondary=follows,
    #     primaryjoin=(follows.c.follower_id == id),
    #     secondaryjoin=(follows.c.followed_id == id),
    #     backref=db.backref("following", lazy="dynamic"),
    #     lazy="dynamic"
    # )
    # this relationship allows you to access both the collection of users
    # that follow a given user (with user.followers), and the collection
    # of users that a user follows (with user.following)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'firstname': self.firstname,
            'lastname': self.lastname
        }
