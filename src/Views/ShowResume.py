from Views.View import View
from flask import views, session, render_template, redirect, url_for, request, jsonify
from werkzeug.wrappers.response import Response
from flask_weasyprint import HTML, CSS, render_pdf

class ShowResume(View):
    methods = ['GET', 'POST']

    def dispatch_request(self):
        if request.method == "POST":
            html = render_template("resumeTemplates/BasicTemplate.html", **request.form)

            html_to_pdf = HTML(string=html)
            css = []

            download = request.form.get("download", "1")

            if download == "1":
                return render_pdf(html=html_to_pdf, download_filename="myawesomeresume.pdf")

            return render_pdf(html=html_to_pdf)
        return redirect(url_for("index"))
