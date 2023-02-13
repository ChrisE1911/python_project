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
