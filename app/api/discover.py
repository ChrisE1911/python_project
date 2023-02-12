from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, Profile, Picture

discover_routes = Blueprint('discover',__name__)

@discover_routes.route('/')
# @login_required
def queue():
    """
    Query for all users, filtering out current user and those the user has already liked/disliked
    """
    # self_id = current_user(id)
    # users = User.query.all().filter()
    print(current_user)
    return current_user
