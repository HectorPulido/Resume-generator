let idExperience = 0;

function addExperience() {
    idExperience++;
    let html = `
    <div class="row">
        <div class="col-md-4 mb-3">
            <label for="experience[__id__][company]">¿Nombre de la empresa?</label>
            <input type="text" class="form-control" id="experience[__id__][company]">
        </div>
        <div class="col-md-4 mb-3">
            <label for="experience[__id__][rol]">¿Tu rol en la empresa?</label>
            <input type="text" class="form-control" id="experience[__id__][rol]">
        </div>
        <div class="col-md-4 mb-3">
            <label for="experience[__id__][time]">¿Cuanto tiempo trabajaste ahi?</label>
            <input type="text" class="form-control" id="experience[__id__][time]">
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="form-group">
                <label for="experience[__id__][descripcion_experience]">¿Que rol tenias dentro de la empresa?</label>
                <textarea class="form-control" id="experience[__id__][descripcion_experience]" rows="3"></textarea>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 text-right mb-5">
            <button class="btn btn-danger" type="button" onclick="removeParent(this.parentElement)">Eliminar</button>
        </div>
    </div>
    
    `;
    html = html.replace(/__id__/g, idExperience);
    addFieldToSection(html, "experience");
}

let idSkill = 0;

function addSkills() {
    idSkill++;
    let html = `
    <div class="row">
        <div class="col-md-10">
            <label for="skill[__id__]">¿Habilidad o Skill?</label>
            <input type="text" class="form-control" id="skill[__id__]">
        </div>
        <div class="col-md-2 text-right mb-4">
            <span class="br"></span> 
            <button class="btn btn-danger" type="button" onclick="removeParent(this)">Eliminar</button>
        </div>
    </div>
    `;
    html = html.replace(/__id__/g, idSkill);
    addFieldToSection(html, "skills");
}

let idEducation = 0;

function addEducation() {
    idEducation++;
    let html = `
    <div class="row">
        <div class="col-md-4 mb-3">
            <label for="education[__id__][title">¿Titulo o estudio?</label>
            <input type="text" class="form-control" id="education[__id__][title]">
        </div>
        <div class="col-md-4 mb-3">
            <label for="education[__id__][rol]">¿Institucion?</label>
            <input type="text" class="form-control" id="education[__id__][rol]">
        </div>
        <div class="col-md-2 mb-3">
            <label for="education[__id__][year-of-study]">¿Año?</label>
            <input type="text" class="form-control" id="education[__id__][year-of-study]">
        </div>
        <div class="col-md-2 text-right mb-4">
            <span class="br"></span> 
            <button class="btn btn-danger" type="button" onclick="removeParent(this)">Eliminar</button>
        </div>
    </div>
    `;
    html = html.replace(/__id__/g, idEducation);
    addFieldToSection(html, "studies");
}

function removeParent(self) {
    self.parentElement.parentElement.remove();
}

function addFieldToSection(html, id) {
    let section = document.getElementById(id);
    const field = document.createElement('div');
    field.innerHTML = html;
    section.appendChild(field);
}

function setInputs() {
    document.querySelectorAll("input, select, textarea").forEach((self) => {
        self.name = self.id;
    });
}

function showResumeModal() {
    setLoading();
    setInputs();
    download.value = 0;
    sendForm.target = "resumeModalData";
    sendForm.submit();

    resumeModalIframe.onload = function () { unsetLoading(); };
    resumeModal.show();
}

function downloadResume() {
    setInputs();
    download.value = 1;
    sendForm.target = "_blank";
    sendForm.submit()
}

let sendForm;
let resumeModal
let download;
let resumeModalIframe;
document.addEventListener("DOMContentLoaded", function () {
    addExperience();
    addSkills();
    addEducation();

    download = document.getElementById("download");
    resumeModalIframe = document.getElementById("resumeModalData");
    sendForm = document.getElementById("sendForm");

    resumeModal = new Modal(document.getElementById("resumeModal"), {});
});