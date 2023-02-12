from .db import db, environment, SCHEMA, add_prefix_for_prod
from .answer import Answer


class Question(db.Model):
    __tablename__ = 'questions'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    quest_txt = db.Column(db.String(255))

    user = db.relationship('User', secondary='answers',
                           back_populates='question', foreign_keys=[Answer.question_id])

    def to_dict(self):
        return {
            'id': self.id,
            'quest_txt': self.quest_txt,

        }
