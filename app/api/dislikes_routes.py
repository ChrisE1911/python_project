from flask import Blueprint, request
from flask_login import login_required
from app.models import User, db

dislikes_routes = Blueprint('dislikes', __name__)

@dislikes_routes.route('/', methods=['POST'])
@login_required
def create_dislikes():

    hater_id = request.json['hater_id']
    print("AAA", hater_id["id"])
    hate_receiver_id = request.json['hate_receiver_id']
    print("BBB", hate_receiver_id)

    hater = User.query.get(int(hater_id["id"]))
    print("CCC", hater)
    hate_receiver = User.query.get(int(hate_receiver_id))
    print("DDD", hate_receiver)

    if hate_receiver not in hater.dislike_requests:
        hater.dislike_requests.append(hate_receiver)
    db.session.add(hater)
    db.session.commit()

    print(hater, 'hater')

    return hater.to_dict()
