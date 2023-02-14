from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_user, logout_user, login_required
from app.forms import ProfileForm
from app.models import User, db, Profile, Picture

profile_routes = Blueprint('profile', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@profile_routes.route('/create', methods=['POST'])
@login_required
def create_profile():
    """
    Creates use profile and picture
    """
    form = ProfileForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user_profile = Profile(
          user_id=current_user.id,
          city=form.data['city'],
          state=form.data['state'],
          occupation=form.data['occupation'],
          gender=form.data['gender'],
          sexual_orientation=form.data['sexual_orientation'],
          height=form.data['height'],
          religion=form.data['religion'],
          political_affiliation=form.data['political_affiliation'],
          language=form.data['language'],
          kids=form.data['kids'],
          pets=form.data['pets'],
          diet=form.data['diet'],
          smoker=form.data['smoker'],
          marijuana=form.data['marijuana'],
          zodiac=form.data['zodiac'],
          ethnicity=form.data['ethnicity'],
          body_type=form.data['body_type'],
          education_level=form.data['education_level'],
          bio=form.data['bio'],
          age=form.data['age']
        )
        # user_picture = Picture(
        #   user_id=current_user.id,
        #   picture_url=form.data['picture_url'],
        #   is_profile_pic=True
        # )
        db.session.add(user_profile)
        # db.session.add(user_picture)
        db.session.commit()
        print('HELLO', user_profile)
        return user_profile.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@profile_routes.route('/current_user')
# @login_required
def self():
    """
    Query for the current user logged in and return in dictionary
    """
    self_id = current_user.id
    user = User.query.get(self_id)
    print('USER!!!!!', user.to_dict_profile())
    print("!!!!!!!!!!!!!!!!!")
    return user.to_dict_profile()
