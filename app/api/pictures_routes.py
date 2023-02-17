from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User, db, Profile, Picture

picture_routes = Blueprint('pictures', __name__)


@picture_routes.route('/all')
@login_required
def get_all_pictures():
    """
    Retrieve all of a user's pictures
    """

    # Will get all pictures objects for the Gallery component, into a list.
    # Still includes profile picture even though separate from above.

    print("You hit the route!!!!!")
    my_id = current_user.id
    print('AAAAA', my_id)
    pictures = Picture.query.filter(Picture.profile_id == my_id).all()
    print('BBBBB', pictures)
    pictures_arr = [picture.to_dict() for picture in pictures]
    print('CCCCC', pictures_arr)

    return pictures_arr


@picture_routes.route('/create', methods=['POST'])
@login_required
def create_picture():
    """
    Creates user picture
    """
    picture_url = request.json['picture_url']
    print('PICTURE !!!!!!!!!!!!!!', picture_url)
    user_id = current_user.id
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
        profile_id=profile_dict['id'],
        picture_url=picture_url,
        is_profile_pic=True
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

    #   The above "/create" route creates a picture, but sets profile equal to True.
    #   This route should be accessible from components not on initial-setup and
    #   will set is_profile_pic to False for all pictures made here. NOT IMPLEMENTED YET

    picture_url = request.json['picture_url']
    print('PICTURE URL!!!!!!!!!!!!!!!', picture_url)
    user_id = current_user.id
    current_profile = Profile.query.get(user_id)
    profile_dict = current_profile.to_dict()
    print('PROFILE DICT!!!!!!!!!!!!!', profile_dict)
    newPicture = Picture(
        profile_id=profile_dict['id'],
        picture_url=picture_url,
        is_profile_pic=False
    )

    db.session.add(newPicture)
    db.session.commit()
    return newPicture.to_dict()


@picture_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_picture(id):
    picture_to_delete = Picture.query.get(int(id))
    deleted_picture = picture_to_delete.to_dict()
    # print(deleted_answer_obj)
    db.session.delete(picture_to_delete)
    db.session.commit()

    return deleted_picture
