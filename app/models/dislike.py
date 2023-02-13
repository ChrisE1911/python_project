from .db import db, environment, SCHEMA, add_prefix_for_prod

dislikes = db.Table(
    "dislikes",
    db.Model.metadata,
    db.Column("hater_id", db.Integer, db.ForeignKey(
        add_prefix_for_prod("users.id"))),
    db.Column("hate_receiver_id", db.Integer, db.ForeignKey(
        add_prefix_for_prod("users.id")))
)

if environment == "production":
    dislikes.schema = SCHEMA
