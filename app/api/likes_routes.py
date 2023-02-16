from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, db, likes
from sqlalchemy.orm import Session


likes_routes = Blueprint('likes', __name__)

# POST likes
# send 'like_receiver_id' from the frontend


@likes_routes.route('/', methods=['POST'])
@login_required
def create_likes():

    # like_receiver_id = request.json['like_receiver_id']
    # like_receiver_id = request.json['admirer_id']
    # print(like_receiver_id, 'likeRECEIVER ID')
    # pass

    admirer_id = request.json['admirer_id']
    like_receiver_id = request.json['like_receiver_id']

    admirer = User.query.get(int(admirer_id))
    like_receiver = User.query.get(like_receiver_id)

    if like_receiver not in admirer.like_requests:
        admirer.like_requests.append(like_receiver)
    db.session.add(admirer)
    db.session.commit()

    print(admirer, 'admirer')

    return admirer.to_dict()

@likes_routes.route('/my-likes')
@login_required
def my_likes():

    my_id = current_user.id
    me = User.query.get(int(my_id))
    likes_arr = [liked.to_dict_profile() for liked in me.like_requests]

    return likes_arr

@likes_routes.route('/delete-like/<int:user_id>', methods=["DELETE"])
@login_required
def delete_like(user_id):
    my_id = current_user.id
    print("CCCCCC", my_id)
    me = User.query.get(int(my_id))
    print("DDDDD", me.to_dict())
    unliked = User.query.get(int(user_id))
    deleted_user = me.like_requests.remove(unliked)
    likes_arr = me.like_requests
    # new_likes_arr = [liked.to_dict() for liked in likes_arr if liked.id != user_id]
    new_likes_arr = [liked.to_dict() for liked in likes_arr]
    print("EEEEE", likes_arr)
    print("EFGEFG", new_likes_arr)

    db.session.commit()


    # for i in range(len(likes_arr)):
    #     if likes_arr[i]['id'] == user_id:
    #         del likes_arr[i]

    return {"message": "User has been deleted from likes"}

    # # all_likes = Session.query(likes).all()
    # # print("EEEEE", all_likes)
    # specific_like = Session.query(likes).filter_by(likes.c.like_receiver_id==user_id)
    # print("FFFFF", specific_like)
    # return {}
