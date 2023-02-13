from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, db

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

    admirer = User.query.get(admirer_id)
    like_receiver = User.query.get(like_receiver_id)

    if not admirer:
        return "User not found."
    res = like_receiver.create_likes(admirer)
    like_receiver.outgoing = res.outgoing
    db.session.commit()
    return {'message': f'Success {admirer_id}'}























# @request_routes.route("/<int:invitee_id>", methods=["POST"])
# @login_required
# def create_request(invitee_id):
#     invitee = User.query.get(invitee_id)
#     inviter = get_user_model(current_user, User)
#     if not invitee:
#         raise NotFoundError("User not found.")
#     res = inviter.create_request(invitee)
#     inviter.outgoing = res.outgoing

#     db.session.commit()
#     return {"message": f"Successfully Friend Requested {invitee_id}", "statusCode": 201}
