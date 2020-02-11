let idExperience = 0;
function addExperience() {
    idExperience++;
    let html = `
    <div class="row">
        <div class="col-md-4 mb-3">
            <label for="title[__id__]">¿Titulo o estudio?</label>
            <input type="text" class="form-control" id="title[__id__]">
        </div>
        <div class="col-md-4 mb-3">
            <label for="rol[__id__]">¿Institucion?</label>
            <input type="text" class="form-control" id="rol[__id__]">
        </div>
        <div class="col-md-2 mb-3">
            <label for="year-of-study[__id__]">¿Año?</label>
            <input type="text" class="form-control" id="year-of-study[__id__]">
        </div>
        <div class="col-md-2 text-right mb-4">
            <span class="br"></span> 
            <button class="btn btn-danger" type="button" onclick="removeParent(this)">Eliminar</button>
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
            <input type="text" class="form-control" id="Skill[__id__]">
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
            <label for="company[__id__]">¿Nombre de la empresa?</label>
            <input type="text" class="form-control" id="company[__id__]">
        </div>
        <div class="col-md-4 mb-3">
            <label for="rol[__id__]">¿Tu rol en la empresa?</label>
            <input type="text" class="form-control" id="rol[__id__]">
        </div>
        <div class="col-md-4 mb-3">
            <label for="time[__id__]">¿Cuanto tiempo trabajaste ahi?</label>
            <input type="text" class="form-control" id="time[__id__]">
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="form-group">
                <label for="descripcion_experience[__id__]">¿Que rol tenias dentro de la empresa?</label>
                <textarea class="form-control" id="descripcion_experience[__id__]" rows="3"></textarea>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 text-right mb-5">
            <button class="btn btn-danger" type="button" onclick="removeParent(this.parentElement)">Eliminar</button>
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
    setInputs();
    download.value = 0;
    sendForm.target = "resumeModalData";
    sendForm.submit();
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
document.addEventListener("DOMContentLoaded", function () {
    addExperience();
    addSkills();
    addEducation();

    download = document.getElementById("download");
    sendForm = document.getElementById("sendForm");

    resumeModal = new Modal(document.getElementById("resumeModal"), {});
});