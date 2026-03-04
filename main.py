from flask import Flask
from bps.routes import blueprint

app = Flask(__name__, static_folder='statics')
app.register_blueprint(blueprint)

if __name__ == '__main__':
    app.run(debug=True)