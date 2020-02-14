import re
from Views.View import View
import json
from flask import views, session, render_template, redirect, url_for, request, jsonify
from flask_weasyprint import HTML, CSS, render_pdf


class ShowResume(View):
    methods = ['GET', 'POST']

    def dispatch_request(self):
        if request.method == "POST":
            form_data = self.parse_multi_form(request.form)
            html = render_template(
                "resumeTemplates/BasicTemplate.html", **form_data)

            html_to_pdf = HTML(string=html)
            # css = ["https://getbootstrap.com/docs/4.4/dist/css/bootstrap.min.css"]

            download = request.form.get("download", "1")

            if download == "1":
                return render_pdf(html=html_to_pdf, download_filename="myawesomeresume.pdf")

            return render_pdf(html=html_to_pdf)
        return redirect(url_for("index"))
