from flask import Flask

# set the project root directory as the static folder.
app = Flask(__name__, static_url_path='/srv/http')


@app.route('/snowfakery/<path:path>')
def send_files(path):
    return send_from_directory('./', path)


@app.route('/about/')
def projects():
    return 'The snowfakery about page (probably should be static)'


if __name__ == '__main__':
    print("launching snowfakery server...")
    app.run()
