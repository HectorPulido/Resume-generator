from Views.View import View
from flask import views, session, render_template, redirect, url_for
from werkzeug.wrappers.response import Response

class Index(View):
    methods = ['GET']

    def dispatch_request(self):
        return render_template("spanish/create_resume.html")
