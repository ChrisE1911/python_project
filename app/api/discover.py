from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, Profile, Picture, likes

discover_routes = Blueprint('discover',__name__)

@discover_routes.route('/')
# @login_required
def queue():
    """
    Query for all users, filtering out current user and those the user has already liked/disliked
    """
    self_id = current_user.id
    current_user_filter = User.query.filter(User.id != self_id).all()
    # liked = User.query.filter()
    # print('LIKES', likes)
    # user = User.query.get(self_id)
    # dict = user.to_dict()
    # print("LIKE REQUESTS", dict['like_requests'])
    return "Hello World"
