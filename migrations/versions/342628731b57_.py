"""empty message

Revision ID: 342628731b57
Revises:
Create Date: 2023-02-16 02:14:52.942431

"""
from alembic import op
import sqlalchemy as sa

import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")


# revision identifiers, used by Alembic.
revision = '342628731b57'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('questions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('quest_txt', sa.String(length=255), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE questions SET SCHEMA {SCHEMA};")
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('firstname', sa.String(length=255), nullable=False),
    sa.Column('lastname', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")
    op.create_table('answers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('question_id', sa.Integer(), nullable=False),
    sa.Column('yes_or_no', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['question_id'], ['questions.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE answers SET SCHEMA {SCHEMA};")
    op.create_table('dislikes',
    sa.Column('hater_id', sa.Integer(), nullable=True),
    sa.Column('hate_receiver_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['hate_receiver_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['hater_id'], ['users.id'], )
    )
    if environment == "production":
        op.execute(f"ALTER TABLE dislikes SET SCHEMA {SCHEMA};")
    op.create_table('likes',
    sa.Column('admirer_id', sa.Integer(), nullable=True),
    sa.Column('like_receiver_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['admirer_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['like_receiver_id'], ['users.id'], )
    )
    if environment == "production":
        op.execute(f"ALTER TABLE likes SET SCHEMA {SCHEMA};")
    op.create_table('matches',
    sa.Column('matched_1', sa.Integer(), nullable=False),
    sa.Column('matched_2', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['matched_1'], ['users.id'], ),
    sa.ForeignKeyConstraint(['matched_2'], ['users.id'], ),
    sa.PrimaryKeyConstraint('matched_1', 'matched_2')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE matches SET SCHEMA {SCHEMA};")
    op.create_table('profiles',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('city', sa.String(length=50), nullable=False),
    sa.Column('state', sa.String(length=50), nullable=False),
    sa.Column('occupation', sa.String(length=50), nullable=True),
    sa.Column('gender', sa.String(length=50), nullable=False),
    sa.Column('sexual_orientation', sa.String(length=50), nullable=False),
    sa.Column('height', sa.String(length=50), nullable=True),
    sa.Column('religion', sa.String(length=50), nullable=True),
    sa.Column('political_affiliation', sa.String(length=50), nullable=True),
    sa.Column('language', sa.String(length=50), nullable=True),
    sa.Column('kids', sa.String(length=50), nullable=True),
    sa.Column('pets', sa.String(length=50), nullable=True),
    sa.Column('diet', sa.String(length=50), nullable=True),
    sa.Column('smoker', sa.String(length=50), nullable=True),
    sa.Column('drinker', sa.String(length=50), nullable=True),
    sa.Column('marijuana', sa.String(length=50), nullable=True),
    sa.Column('zodiac', sa.String(length=50), nullable=True),
    sa.Column('ethnicity', sa.String(length=50), nullable=True),
    sa.Column('body_type', sa.String(length=50), nullable=True),
    sa.Column('education_level', sa.String(length=50), nullable=True),
    sa.Column('bio', sa.String(length=500), nullable=True),
    sa.Column('age', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE profiles SET SCHEMA {SCHEMA};")
    op.create_table('pictures',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('profile_id', sa.Integer(), nullable=False),
    sa.Column('picture_url', sa.String(length=1000), nullable=False),
    sa.Column('is_profile_pic', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['profile_id'], ['profiles.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE pictures SET SCHEMA {SCHEMA};")
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('pictures')
    op.drop_table('profiles')
    op.drop_table('matches')
    op.drop_table('likes')
    op.drop_table('dislikes')
    op.drop_table('answers')
    op.drop_table('users')
    op.drop_table('questions')
    # ### end Alembic commands ###
