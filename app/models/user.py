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
    answer = db.relationship('Answer', back_populates='user')
    # question = db.relationship(
    #     'Question', secondary='answers', back_populates='user')
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
        if self.profile:
            return {
                'id': self.id,
                'username': self.username,
                'email': self.email,
                'firstname': self.firstname,
                'lastname': self.lastname,
                'profile': self.profile[0].to_dict()
            }
