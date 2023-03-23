from flask import Blueprint, request
from flask_login import current_user, login_required
from app.forms import ProfileForm
from app.models import User, db, matches

matches_routes = Blueprint('match', __name__)


@matches_routes.route('/user_matches')
@login_required
def get_matches():
    """
    Query for all of the current user's matches from the instance's own matchlist attribute.
    """
    self_id = current_user.id
    user = User.query.get(self_id)
    matchesArr = user.matchlist_1.all()
    print('INSIDE MATCHES')
    print("HELLO", matchesArr)
    all_matches_arr = [match.to_dict_profile() for match in matchesArr]
    print(all_matches_arr)
    return all_matches_arr
