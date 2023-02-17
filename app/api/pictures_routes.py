from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_user, logout_user, login_required
from app.forms import ProfileForm
from app.models import User, db, Profile, Picture

picture_routes = Blueprint('picture', __name__)

@picture_routes.route('/')
@login_required
def get_all_pictures():
    """
    Retrieve all of a user's pictures
    """

    my_id = current_user.id
    pictures = Picture.query.filter_by(user_id = my_id)
    pictures_arr = [picture.to_dict() for picture in pictures]

    return pictures_arr



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

@picture_routes.route('/create-additional', methods=['POST'])
@login_required
def create_additional_picture():
    """
    Creates extra pictures after initial profile picture
    """

    picture_url=request.json['picture_url']
    user_id=current_user.id
    current_profile = Profile.query.get(user_id)
    profile_dict = current_profile.to_dict()

    newPicture = Picture(
      profile_id= profile_dict['id'],
      picture_url= picture_url,
      is_profile_pic= False
    )
    db.session.add(newPicture)
    db.session.commit()
    return newPicture.to_dict()
