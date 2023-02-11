from .db import db, environment, SCHEMA, add_prefix_for_prod


class Dislike(db.Model):
    __tablename__ = 'dislikes'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    hater_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    hate_receiver_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    # relationships
    haters = db.relationship('User', back_populates='hater')
    hate_receivers = db.relationship('User', back_populates='hate_receiver')

    def to_dict(self):
        return {
            'id': self.id,
            'hater_id': self.hater_id,
            'hate_receiver_id': self.hate_receiver_id
        }
