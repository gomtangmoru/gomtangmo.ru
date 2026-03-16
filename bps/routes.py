from flask import Blueprint, render_template, send_from_directory, current_app, redirect

blueprint = Blueprint('root', __name__)

@blueprint.route('/')
def index():
    return render_template('index.htm'), 200

@blueprint.route('/robot.txt')
def robot():
    return send_from_directory(current_app.static_folder, 'robot.txt'), 200


@blueprint.route('/qwilight')
def qwilight():
    return redirect("https://taehui.net/qwilight/en/avatar/gomtangmoru")
