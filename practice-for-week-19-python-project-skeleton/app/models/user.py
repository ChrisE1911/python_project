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
    admirer = db.relationship(
        'Like', back_populates='admirers', secondary=likes)
    like_receiver = db.relationship('Like', back_populates='like_receivers')
    hater = db.relationship('Dislike', back_populates='haters')
    hate_receiver = db.relationship('Dislike', back_populates='hate_receivers')
    question = db.relationship(
        'Question', secondary='answers', back_populates='user')



    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'firstname': self.firstname,
            'lastname': self.lastname
        }

# # Reworked code for self-referencing Many-to-Many. See like.py and dislike.py for corresponding code
# # class User(db.Model):
# # __tablename__ = "users"
# # id = db.Column(db.Integer, primary_key=True)

# # liker = db.relationship(
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
