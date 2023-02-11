from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


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
    add_prefix_for_prod(profile)
    admirer = db.relationship('Like', back_populates='admirers')
    add_prefix_for_prod(admirer)
    like_receiver = db.relationship('Like', back_populates='like_receivers')
    add_prefix_for_prod(like_receiver)
    hater = db.relationship('Dislike', back_populates='haters')
    add_prefix_for_prod(hater)
    hate_receiver = db.relationship('Dislike', back_populates='hate_receivers')
    add_prefix_for_prod(hate_receiver)
    question = db.relationship(
        'Question', secondary='answers', back_populates='user')
    add_prefix_for_prod(question)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'firstname': self.firstname,
            'lastname': self.lastname
        }
