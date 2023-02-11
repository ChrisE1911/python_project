from .db import db, environment, SCHEMA, add_prefix_for_prod

likes = db.Table(
    "likes",
    db.Column("admirer_id", db.Integer, db.ForeignKey(
        add_prefix_for_prod("users.id"))),
    db.Column("like_receiver_id", db.Integer, db.ForeignKey(
        add_prefix_for_prod("users.id")))
)
if environment == "production":
    likes.schema = SCHEMA




# class Like(db.Model):
#     __tablename__ = 'likes'
#     if environment == "production":
#         __table_args__ = {'schema': SCHEMA}

#     id = db.Column(db.Integer, primary_key=True)
#     admirer_id = db.Column(
#         db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
#     like_receiver_id = db.Column(
#         db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

#     # relationships
#     admirers = db.relationship('User', back_populates='admirer')
#     like_receivers = db.relationship('User', back_populates='like_receiver')

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'admirer_id': self.admirer_id,
#             'like_receiver_id': self.like_receiver_id
#         }

## Reworked code for self-referencing Many-to-Many. See user.py for corresponding code
#
# class Like(db.Model):
#     __tablename__ = 'likes'
#     if environment == "production":
#         __table_args__ = {'schema': SCHEMA}

#     id = db.Column(db.Integer, primary_key=True)
#     admirer_id = db.Column(
#         db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
#     like_receiver_id = db.Column(
#         db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'admirer_id': self.admirer_id,
#             'like_receiver_id': self.like_receiver_id
#         }
