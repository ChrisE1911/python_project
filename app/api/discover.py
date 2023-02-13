from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, Profile, Picture, Answer, likes


discover_routes = Blueprint('discover', __name__)


@discover_routes.route('/')
@login_required
def queue():
    """
    Query for all users, filtering out current user and those the user has already liked/disliked
    """
    self_id = current_user.id
    user = User.query.get(self_id)
    likes = user.like_requests.all()
    likes_dicted = [ele.to_dict() for ele in likes]
    likes_id = [like['id'] for like in likes_dicted]

    all_users = User.query.filter(User.id != self_id).all()
    unliked_users = [user.to_dict()
                     for user in all_users if user.id not in likes_id]
    print('PRINTTTTTT', all_users)
    # return jsonify({"filtered": [ele.to_dict() for ele in filtered]})
    return {
        'unliked_users': unliked_users
    }
