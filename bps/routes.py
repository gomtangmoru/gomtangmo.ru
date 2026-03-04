from flask import Blueprint, render_template

blueprint = Blueprint('root', __name__)

@blueprint.route('/')
def index():
    return render_template('index.htm'), 200

@blueprint.route('/robot.txt')
def robot():
    return send_from_directory(current_app.static_folder, 'robot.txt'), 200


