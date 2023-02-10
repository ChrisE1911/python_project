from .db import db, environment, SCHEMA, add_prefix_for_prod


class Like(db.Model):
    __tablename__ = 'likes'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    admirer_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    like_receiver_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)

    # relationships
    admirers = db.relationship('User', back_populates='admirer')
    add_prefix_for_prod(admirers)
    like_receivers = db.relationship('User', back_populates='like_receiver')
    add_prefix_for_prod(like_receivers)

    def to_dict(self):
        return {
            'id': self.id,
            'admirer_id': self.admirer_id,
            'like_receiver_id': self.like_receiver_id
        }
