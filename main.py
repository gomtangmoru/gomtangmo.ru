from flask import Flask
from bps.routes import blueprint
import mimetypes


mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')

app = Flask(__name__, static_folder='statics')
app.register_blueprint(blueprint)


def main() -> None:
    app.run(debug=True)


if __name__ == '__main__':
    main()

