from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Profile, Picture, Answer, db, matches, likes


discover_routes = Blueprint('discover', __name__)


@discover_routes.route('/')
@login_required
def queue():
    """
    Query for all users, filtering out current user and those the user has already liked/disliked
    """

    """
    we are filtering out user who we liked and disliked
    """
    self_id = current_user.id
    user = User.query.get(self_id)
    likes = user.like_requests.all()
    likes_dicted = [ele.to_dict() for ele in likes]
    likes_id = [like['id'] for like in likes_dicted]

    dislikes = user.dislike_requests.all()
    dislikes_dicted = [ele.to_dict() for ele in dislikes]
    dislikes_id = [dislike['id'] for dislike in dislikes_dicted]

    all_users = User.query.filter(User.id != self_id).all()
    unmarked_users = [user.to_dict_profile()
                    for user in all_users if user.id not in likes_id and user.id not in dislikes_id]

    # return jsonify({"filtered": [ele.to_dict() for ele in filtered]})
    return {
        'unmarked_users': unmarked_users,

    }


@discover_routes.route('/', methods=['POST'])
@login_required
def create_likes():

    print("HEY")

    like_receiver_id = request.json['like_receiver_id']
    admirer_id = request.json['admirer_id']['id']

    admirer = User.query.get(admirer_id)
    like_receiver = User.query.get(like_receiver_id)


    print("HELLO", like_receiver.like_requests.filter(like_receiver_id != admirer_id).first())

    if like_receiver not in admirer.like_requests:
        admirer.like_requests.append(like_receiver)


    db.session.add(admirer)
    db.session.commit()

    return admirer.to_dict()
    # return {'message': 'I work'}

    # return {
    #     'like_receiver_id': like_receiver_id,
    #     'admirer_id': admirer_id

    # }
