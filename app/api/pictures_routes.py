from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_user, logout_user, login_required
from app.forms import ProfileForm
from app.models import User, db, Profile, Picture

picture_routes = Blueprint('picture', __name__)

@picture_routes.route('/create', methods=['POST'])
@login_required
def create_picture():
    """
    Creates user picture
    """
    picture_url=request.json['picture_url']
    user_id=current_user.id
    current_profile = Profile.query.get(user_id)
    profile_dict = current_profile.to_dict()
    # picture_obj = {
    #   'profile_id': profile_dict['id'],
    #   'picture_url': picture_url,
    #   'is_profile_pic': True
    #   }
    # print('HELLO!!!!!!!!!!!!!!!!!!!!!!!', profile_dict['id'])
    # current_profile.pictures.append(picture_obj)
    newPicture = Picture(
      profile_id= profile_dict['id'],
      picture_url= picture_url,
      is_profile_pic= True
    )
    db.session.add(newPicture)
    db.session.commit()
    return newPicture.to_dict()
