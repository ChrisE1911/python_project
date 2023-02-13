from .db import db, environment, SCHEMA, add_prefix_for_prod


class Profile(db.Model):
    __tablename__ = 'profiles'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    # add relationship
    id = db.Column(db.Integer, primary_key=True)
    # add relationship
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    occupation = db.Column(db.String(50))
    gender = db.Column(db.String(50), nullable=False)
    sexual_orientation = db.Column(db.String(50), nullable=False)
    height = db.Column(db.String(50))
    religion = db.Column(db.String(50))
    political_affiliation = db.Column(db.String(50))
    language = db.Column(db.String(50))
    kids = db.Column(db.String(50))
    pets = db.Column(db.String(50))
    diet = db.Column(db.String(50))
    smoker = db.Column(db.String(50))
    drinker = db.Column(db.String(50))
    marijuana = db.Column(db.String(50))
    zodiac = db.Column(db.String(50))
    ethnicity = db.Column(db.String(50))
    body_type = db.Column(db.String(50))
    education_level = db.Column(db.String(50))
    bio = db.Column(db.String(50))

    # relationships
    users = db.relationship('User', back_populates='profile')
    pictures = db.relationship('Picture', back_populates='profile')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'city': self.city,
            'state': self.state,
            'occupation': self.occupation,
            'gender': self.gender,
            'sexual_orientation': self.sexual_orientation,
            'height': self.height,
            'religion': self.religion,
            'political_affiliation': self.political_affiliation,
            'language': self.language,
            'kids': self.kids,
            'pets': self.pets,
            'diet': self.diet,
            'smoker': self.smoker,
            'drinker': self.drinker,
            'marijuana': self.marijuana,
            'zodiac': self.zodiac,
            'ethnicity': self.ethnicity,
            'body_type': self.body_type,
            'education_level': self.education_level,
            'bio': self.bio,
            'userImages': [user_image.to_dict() for user_image in self.pictures]
        }
