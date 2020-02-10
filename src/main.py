import firebase_admin
from flask import Flask, session, redirect, url_for, \
    request, render_template, flash, jsonify
# from firebase_admin import credentials, firestore
from Views.Index import Index
from const import CERTIFICATE, SECRET_FLASK_KEY, PORT, DEBUG

app = Flask(__name__)
app.secret_key = SECRET_FLASK_KEY

app.add_url_rule('/', view_func=Index.as_view('index'))

if __name__ == "__main__":
    # cred = credentials.Certificate(CERTIFICATE)
    # firebase_admin.initialize_app(cred)
    app.run(debug=DEBUG, host="0.0.0.0", port=PORT)
