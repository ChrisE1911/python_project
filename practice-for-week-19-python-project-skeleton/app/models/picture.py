from .db import db, environment, SCHEMA, add_prefix_for_prod


class Picture(db.Model):
    __tablename__ = 'pictures'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    profile_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('profiles.id')
                                                     ), nullable=False)
    picture_url = db.Column(db.String(1000), nullable=False)
    is_profile_pic = db.Column(db.Boolean)

    # relationships
    profile = db.relationship('Profile', back_populates='pictures')

    def to_dict(self):
        return {
            'id': self.id,
            'profile_id': self.profile_id,
            'picture_url': self.picture_url,
            'is_profile_pic': self.is_profile_pic
        }
