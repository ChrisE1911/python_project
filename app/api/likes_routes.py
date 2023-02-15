from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, db

likes_routes = Blueprint('likes', __name__)

# POST likes
# send 'like_receiver_id' from the frontend


@likes_routes.route('/', methods=['POST'])
@login_required
def create_likes():

    # like_receiver_id = request.json['like_receiver_id']
    # like_receiver_id = request.json['admirer_id']
    # print(like_receiver_id, 'likeRECEIVER ID')
    # pass

    admirer_id = request.json['admirer_id']
    like_receiver_id = request.json['like_receiver_id']

    admirer = User.query.get(int(admirer_id))
    like_receiver = User.query.get(like_receiver_id)

    if like_receiver not in admirer.like_requests:
        admirer.like_requests.append(like_receiver)
    db.session.add(admirer)
    db.session.commit()

    print(admirer, 'admirer')

    return admirer.to_dict()

# @likes_routes.route('/my_likes')
# @login_required
# def my_likes():
