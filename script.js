function Skills(){

    const Container = document.getElementById("skill-container");

    const div = document.createElement("div");
    div.setAttribute("class", "mt-3 mb-3 d-flex align-items-center skill-item");

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class","form-control me-3");
    input.setAttribute("placeholder", "Skill name");

    const select = document.createElement("select");
    select.setAttribute("class", "form-select me-3");

    const option1 = document.createElement("option");
    option1.setAttribute("value", "1");
    option1.textContent = "1";

    const level = document.createElement("option");
    level.textContent = "Level";

    const option2 = document.createElement("option");
    option2.setAttribute("value", "2");
    option2.textContent = "2";

    const option3 = document.createElement("option");
    option3.setAttribute("value", "3");
    option3.textContent = "3";

    const option4 = document.createElement("option");
    option4.setAttribute("value", "4");
    option4.textContent = "4";

    const option5 = document.createElement("option");
    option5.setAttribute("value", "5");
    option5.textContent = "5";

    const buttonCreate = document.createElement("button");
    buttonCreate.setAttribute("class", "btn btn-primary");
    buttonCreate.setAttribute("onclick", "Skills()");
    buttonCreate.setAttribute("type", "button");
    buttonCreate.textContent = "+";

    const buttonEliminate = document.createElement("button");
    buttonEliminate.setAttribute("class", "btn btn-danger remover");
    buttonEliminate.setAttribute("onclick", "SkillsRemove(this)");
    buttonEliminate.setAttribute("type", "button");
    buttonEliminate.textContent = "-";

    div.appendChild(input);
    div.appendChild(select);
    div.appendChild(buttonCreate);
    div.appendChild(buttonEliminate);

    select.appendChild(level);
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);

    Container.appendChild(div);

}

function SkillsRemove(button) {
    const skillContainer = button.closest(".skill-item");
    if (skillContainer) {
        skillContainer.remove();
    }
}

function Software(){

    const ContainerSoftware = document.getElementById("software-container");

    const divSoftware = document.createElement("div");
    divSoftware.setAttribute("class", "mt-3 mb-3 d-flex align-items-center software-item");

    const inputSoftware = document.createElement("input");
    inputSoftware.setAttribute("type", "text");
    inputSoftware.setAttribute("class","form-control me-3");
    inputSoftware.setAttribute("placeholder", "Software name");

    const selectSoftware = document.createElement("select");
    selectSoftware.setAttribute("class", "form-select me-3");

    const option1Software = document.createElement("option");
    option1Software.setAttribute("value", "1");
    option1Software.textContent = "1";

    const levelSoftware = document.createElement("option");
    levelSoftware.textContent = "Level";

    const option2Software = document.createElement("option");
    option2Software.setAttribute("value", "2");
    option2Software.textContent = "2";

    const option3Software = document.createElement("option");
    option3Software.setAttribute("value", "3");
    option3Software.textContent = "3";

    const option4Software = document.createElement("option");
    option4Software.setAttribute("value", "4");
    option4Software.textContent = "4";

    const option5Software = document.createElement("option");
    option5Software.setAttribute("value", "5");
    option5Software.textContent = "5";

    const buttonCreateSoftware = document.createElement("button");
    buttonCreateSoftware.setAttribute("class", "btn btn-primary");
    buttonCreateSoftware.setAttribute("onclick", "Software()");
    buttonCreateSoftware.setAttribute("type", "button");
    buttonCreateSoftware.textContent = "+";

    const buttonEliminateSoftware = document.createElement("button");
    buttonEliminateSoftware.setAttribute("class", "btn btn-danger remover");
    buttonEliminateSoftware.setAttribute("onclick", "SoftwareRemove(this)");
    buttonEliminateSoftware.setAttribute("type", "button");
    buttonEliminateSoftware.textContent = "-";

    divSoftware.appendChild(inputSoftware);
    divSoftware.appendChild(selectSoftware);
    divSoftware.appendChild(buttonCreateSoftware);
    divSoftware.appendChild(buttonEliminateSoftware);

    selectSoftware.appendChild(levelSoftware);
    selectSoftware.appendChild(option1Software);
    selectSoftware.appendChild(option2Software);
    selectSoftware.appendChild(option3Software);
    selectSoftware.appendChild(option4Software);
    selectSoftware.appendChild(option5Software);

    ContainerSoftware.appendChild(divSoftware);

}

function SoftwareRemove(buttonSoftware) {
    const softwareContainer = buttonSoftware.closest(".software-item");
    if (softwareContainer) {
        softwareContainer.remove();
    }
}

function Languages(){

    const ContainerLanguages = document.getElementById("languages-container");

    const divLanguages = document.createElement("div");
    divLanguages.setAttribute("class", "mt-3 mb-3 d-flex align-items-center languages-item");

    const inputLanguages = document.createElement("input");
    inputLanguages.setAttribute("type", "text");
    inputLanguages.setAttribute("class","form-control me-3");
    inputLanguages.setAttribute("placeholder", "Language name");

    const selectLanguages = document.createElement("select");
    selectLanguages.setAttribute("class", "form-select me-3");

    const option1Languages = document.createElement("option");
    option1Languages.setAttribute("value", "1");
    option1Languages.textContent = "1";

    const levelLanguages = document.createElement("option");
    levelLanguages.textContent = "Level";

    const option2Languages = document.createElement("option");
    option2Languages.setAttribute("value", "2");
    option2Languages.textContent = "2";

    const option3Languages = document.createElement("option");
    option3Languages.setAttribute("value", "3");
    option3Languages.textContent = "3";

    const option4Languages = document.createElement("option");
    option4Languages.setAttribute("value", "4");
    option4Languages.textContent = "4";

    const option5Languages = document.createElement("option");
    option5Languages.setAttribute("value", "5");
    option5Languages.textContent = "5";

    const buttonCreateLanguages = document.createElement("button");
    buttonCreateLanguages.setAttribute("class", "btn btn-primary");
    buttonCreateLanguages.setAttribute("onclick", "Languages()");
    buttonCreateLanguages.setAttribute("type", "button");
    buttonCreateLanguages.textContent = "+";

    const buttonEliminateLanguages = document.createElement("button");
    buttonEliminateLanguages.setAttribute("class", "btn btn-danger remover");
    buttonEliminateLanguages.setAttribute("onclick", "LanguagesRemove(this)");
    buttonEliminateLanguages.setAttribute("type", "button");
    buttonEliminateLanguages.textContent = "-";

    divLanguages.appendChild(inputLanguages);
    divLanguages.appendChild(selectLanguages);
    divLanguages.appendChild(buttonCreateLanguages);
    divLanguages.appendChild(buttonEliminateLanguages);

    selectLanguages.appendChild(levelLanguages);
    selectLanguages.appendChild(option1Languages);
    selectLanguages.appendChild(option2Languages);
    selectLanguages.appendChild(option3Languages);
    selectLanguages.appendChild(option4Languages);
    selectLanguages.appendChild(option5Languages);

    ContainerLanguages.appendChild(divLanguages);

}

function LanguagesRemove(buttonLanguages) {
    const languagesContainer = buttonLanguages.closest(".languages-item");
    if (languagesContainer) {
        languagesContainer.remove();
    }
}

function Work(){

    const ContainerWork = document.getElementById("work-container");

    const divWork = document.createElement("div");
    divWork.setAttribute("class", "mt-3 mb-3 d-flex align-items-center work-item");

    const inputWorkName = document.createElement("input");
    inputWorkName.setAttribute("id", "word-experience");
    inputWorkName.setAttribute("type", "text");
    inputWorkName.setAttribute("class", "form-control me-3");
    inputWorkName.setAttribute("placeholder", "Company Name");

    const labelWorkStar = document.createElement("label");
    labelWorkStar.setAttribute("for", "start-date");
    labelWorkStar.setAttribute("class", "me-2");
    labelWorkStar.textContent = "Start Date: ";

    const inputWorkStar = document.createElement("input");
    inputWorkStar.setAttribute("id", "start-date");
    inputWorkStar.setAttribute("type", "date");
    inputWorkStar.setAttribute("class", "form-control me-3");

    const labelWorkEnd = document.createElement("label");
    labelWorkEnd.setAttribute("for", "end-date");
    labelWorkEnd.setAttribute("class", "me-2");
    labelWorkEnd.textContent = "End Date: ";

    const inputWorkEnd = document.createElement("input");
    inputWorkEnd.setAttribute("id", "end-date");
    inputWorkEnd.setAttribute("type", "date");
    inputWorkEnd.setAttribute("class", "form-control me-3");

    const buttonCreateWork = document.createElement("button");
    buttonCreateWork.setAttribute("class", "btn btn-primary");
    buttonCreateWork.setAttribute("onclick", "Work()");
    buttonCreateWork.setAttribute("type", "button");
    buttonCreateWork.textContent = "+";

    const buttonEliminateWork = document.createElement("button");
    buttonEliminateWork.setAttribute("class", "btn btn-danger remover");
    buttonEliminateWork.setAttribute("onclick", "WorkRemove(this)");
    buttonEliminateWork.setAttribute("type", "button");
    buttonEliminateWork.textContent = "-";

    divWork.appendChild(inputWorkName);
    divWork.appendChild(labelWorkStar);
    divWork.appendChild(inputWorkStar);
    divWork.appendChild(labelWorkEnd);
    divWork.appendChild(inputWorkEnd);
    divWork.appendChild(buttonCreateWork);
    divWork.appendChild(buttonEliminateWork);


    ContainerWork.appendChild(divWork);

}

function WorkRemove(buttonWork) {
    const workContainer = buttonWork.closest(".work-item");
    if (workContainer) {
        workContainer.remove();
    }
}

function Education(){

    const ContaineEducation = document.getElementById("education-container");

    const divEducation = document.createElement("div");
    divEducation.setAttribute("class", "mt-3 mb-3 d-flex align-items-center education-item");

    const inputEducationName = document.createElement("input");
    inputEducationName.setAttribute("id", "education-experience");
    inputEducationName.setAttribute("type", "text");
    inputEducationName.setAttribute("class", "form-control me-3");
    inputEducationName.setAttribute("placeholder", "Name of the Institution");

    const labelEducationStar = document.createElement("label");
    labelEducationStar.setAttribute("for", "start-date-education");
    labelEducationStar.setAttribute("class", "me-2");
    labelEducationStar.textContent = "Start Date: ";

    const inputEducationStar = document.createElement("input");
    inputEducationStar.setAttribute("id", "start-date-education");
    inputEducationStar.setAttribute("type", "date");
    inputEducationStar.setAttribute("class", "form-control me-3");

    const labelEducationEnd = document.createElement("label");
    labelEducationEnd.setAttribute("for", "end-date-education");
    labelEducationEnd.setAttribute("class", "me-2");
    labelEducationEnd.textContent = "End Date: ";

    const inputEducationkEnd = document.createElement("input");
    inputEducationkEnd.setAttribute("id", "end-date-education");
    inputEducationkEnd.setAttribute("type", "date");
    inputEducationkEnd.setAttribute("class", "form-control me-3");

    const buttonCreateEducation = document.createElement("button");
    buttonCreateEducation.setAttribute("class", "btn btn-primary");
    buttonCreateEducation.setAttribute("onclick", "Education()");
    buttonCreateEducation.setAttribute("type", "button");
    buttonCreateEducation.textContent = "+";

    const buttonEliminateEducation = document.createElement("button");
    buttonEliminateEducation.setAttribute("class", "btn btn-danger remover");
    buttonEliminateEducation.setAttribute("onclick", "EducationRemove(this)");
    buttonEliminateEducation.setAttribute("type", "button");
    buttonEliminateEducation.textContent = "-";

    divEducation.appendChild(inputEducationName);
    divEducation.appendChild(labelEducationStar);
    divEducation.appendChild(inputEducationStar);
    divEducation.appendChild(labelEducationEnd);
    divEducation.appendChild(inputEducationkEnd);
    divEducation.appendChild(buttonCreateEducation);
    divEducation.appendChild(buttonEliminateEducation);


    ContaineEducation.appendChild(divEducation);

}

function EducationRemove(buttonEducation) {
    const educationContainer = buttonEducation.closest(".education-item");
    if (educationContainer) {
        educationContainer.remove();
    }
}


function Certification(){

    const ContainerCertification = document.getElementById("certifications-container");

    const divCertification = document.createElement("div");
    divCertification.setAttribute("class", "mt-3 mb-3 d-flex align-items-center certification-item");

    const inputCertificationName = document.createElement("input");
    inputCertificationName.setAttribute("id", "certifications");
    inputCertificationName.setAttribute("type", "text");
    inputCertificationName.setAttribute("class", "form-control me-3");
    inputCertificationName.setAttribute("placeholder", "Certification Name");

    const labelCertificationStar = document.createElement("label");
    labelCertificationStar.setAttribute("for", "start-date-certification");
    labelCertificationStar.setAttribute("class", "me-2");
    labelCertificationStar.textContent = "Date of Obtaining: ";

    const inputCertificationStar = document.createElement("input");
    inputCertificationStar.setAttribute("id", "start-date-certification");
    inputCertificationStar.setAttribute("type", "date");
    inputCertificationStar.setAttribute("class", "form-control me-3");

    const labelCertificationEnd = document.createElement("label");
    labelCertificationEnd.setAttribute("for", "end-date-certification");
    labelCertificationEnd.setAttribute("class", "me-2");
    labelCertificationEnd.textContent = "Date of Expiration: ";

    const inputCertificationEnd = document.createElement("input");
    inputCertificationEnd.setAttribute("id", "end-date-certification");
    inputCertificationEnd.setAttribute("type", "date");
    inputCertificationEnd.setAttribute("class", "form-control me-3");

    const buttonCreateCertification = document.createElement("button");
    buttonCreateCertification.setAttribute("class", "btn btn-primary");
    buttonCreateCertification.setAttribute("onclick", "Certification()");
    buttonCreateCertification.setAttribute("type", "button");
    buttonCreateCertification.textContent = "+";

    const buttonEliminateCertification = document.createElement("button");
    buttonEliminateCertification.setAttribute("class", "btn btn-danger remover");
    buttonEliminateCertification.setAttribute("onclick", "CertificationRemove(this)");
    buttonEliminateCertification.setAttribute("type", "button");
    buttonEliminateCertification.textContent = "-";

    divCertification.appendChild(inputCertificationName);
    divCertification.appendChild(labelCertificationStar);
    divCertification.appendChild(inputCertificationStar);
    divCertification.appendChild(labelCertificationEnd);
    divCertification.appendChild(inputCertificationEnd);
    divCertification.appendChild(buttonCreateCertification);
    divCertification.appendChild(buttonEliminateCertification);


    ContainerCertification.appendChild(divCertification);

}

function CertificationRemove(buttonCertification) {
    const certificationkContainer = buttonCertification.closest(".certification-item");
    if (certificationkContainer) {
        certificationkContainer.remove();
    }
}

function Save(){
    let isValid = true;

    const nameInput = document.getElementById("input-name");
    const titleInput = document.getElementById("input-title");
    const emailInput = document.getElementById("input-email"); 
    const telephoneInput = document.getElementById("input-telephone");
    const birthdayInput = document.getElementById("input-birthday");
    const linkInput = document.getElementById("input-link"); 
    const skillInput = document.getElementById("skill-name");
    const softwareInput = document.getElementById("software-name"); 
    const languageInput = document.getElementById("language-name"); 
    const resume = document.getElementById("resume"); 
    const workNameInput = document.getElementById("word-experience");
    const workStarInput = document.getElementById("start-date");
    const workEndInput = document.getElementById("end-date");
    const educationInput = document.getElementById("education");
    const educationStarInput = document.getElementById("start-date-education");
    const educationEndInput = document.getElementById("end-date-education");
    const certificationInput = document.getElementById("certification");
    const certificationStarInput = document.getElementById("start-date-certification");
    const certificationEndInput = document.getElementById("end-date-certification");

    isValid = InputValidator(nameInput, isValid);
    isValid = InputValidator(titleInput, isValid);
    isValid = InputValidator(emailInput, isValid);
    isValid = InputValidator(telephoneInput, isValid);
    isValid = InputValidator(birthdayInput, isValid);
    isValid = InputValidator(linkInput, isValid);
    isValid = InputValidator(softwareInput, isValid);
    isValid = InputValidator(languageInput, isValid);
    isValid = InputValidator(resume, isValid);
    isValid = InputValidator(skillInput, isValid);
    isValid = InputValidator(workNameInput, isValid);
    isValid = InputValidator(workStarInput, isValid);
    isValid = InputValidator(workEndInput, isValid);
    isValid = InputValidator(educationInput, isValid);
    isValid = InputValidator(educationStarInput, isValid);
    isValid = InputValidator(educationEndInput, isValid);
    isValid = InputValidator(certificationInput, isValid);
    isValid = InputValidator(certificationStarInput, isValid);
    isValid = InputValidator(certificationEndInput, isValid);

    if (isValid) {
        alert("All data is complete");
        CrearCV();
    } else {
        alert("Missing fields to complete");
    }

} 


function InputValidator(input, isValid){
    const value = input.value;

    if(value == "" || value == undefined || value == null){
        input.classList.add("input-bad");
        input.classList.remove("input-good");
        return false;
    } else{
        input.classList.add("input-good");
        input.classList.remove("input-bad");
        if (!isValid) {
            return false;
        }
        return true;
    }
}

function CrearCV() {
    const CVContainer = document.getElementById("cv-container");

    while (CVContainer.firstChild) {
        CVContainer.removeChild(CVContainer.firstChild);
    }

    const sectionCv = document.createElement("section");
    sectionCv.setAttribute("class", "row g-4");

    const asideCv = document.createElement("aside");
    asideCv.setAttribute("class", "col-md-4 bg-light p-4");

    const headerCv = document.createElement("header");
    headerCv.setAttribute("class", "text-center mb-4");

    const h2Name = document.createElement("h2");
    const hName = document.getElementById("input-name");
    h2Name.textContent = hName.value;

    const h3Title = document.createElement("h3");
    const hTitle = document.getElementById("input-title");
    h3Title.textContent = hTitle.value;

    headerCv.appendChild(h2Name);
    headerCv.appendChild(h3Title);
    asideCv.appendChild(headerCv);

    const sectionCv2 = document.createElement("section");
    sectionCv2.setAttribute("class", "mb-4");

    const h6PerInfo = document.createElement("h6");
    h6PerInfo.textContent = "Personal Information";

    const pEmail = document.createElement("p");
    const hEmail = document.getElementById("input-email");
    pEmail.textContent = `Email: ${hEmail.value}`;

    const pPhone = document.createElement("p");
    const hPhone = document.getElementById("input-telephone");
    pPhone.textContent = `Phone: ${hPhone.value}`;

    const pBDay = document.createElement("p");
    const hBDay = document.getElementById("input-birthday");
    pBDay.textContent = `Birthday: ${hBDay.value}`;

    const pLink = document.createElement("p");
    const hLink = document.getElementById("input-link");
    pLink.textContent = `LinkedIn: ${hLink.value}`;

    sectionCv2.appendChild(h6PerInfo);
    sectionCv2.appendChild(pEmail);
    sectionCv2.appendChild(pPhone);
    sectionCv2.appendChild(pBDay);
    sectionCv2.appendChild(pLink);

    asideCv.appendChild(sectionCv2);

    const sectionCv3 = document.createElement("section");
    sectionCv3.setAttribute("class", "mb-4");

    const h6Skill = document.createElement("h6");
    h6Skill.textContent = "Skills";

    const ulSkill = document.createElement("ul");
    ulSkill.setAttribute("class", "list-group");

    const skillContainer = document.getElementById("skill-container");
    skillContainer.querySelectorAll(".d-flex").forEach(skillDiv => {
        const skillName = skillDiv.querySelector("input").value;
        const skillLevel = skillDiv.querySelector("select").value;

        const liSkill = document.createElement("li");
        liSkill.setAttribute("class", "list-group-item");
        liSkill.textContent = `${skillName} ${skillLevel}/5`;
        ulSkill.appendChild(liSkill);
    });

    sectionCv3.appendChild(h6Skill);
    sectionCv3.appendChild(ulSkill);
    asideCv.appendChild(sectionCv3);

    const sectionCv4 = document.createElement("section");
    sectionCv4.setAttribute("class", "mb-4");

    const h6Software = document.createElement("h6");
    h6Software.textContent = "Software";

    const ulSoftware = document.createElement("ul");
    ulSoftware.setAttribute("class", "list-group");

    const softwareContainer = document.getElementById("software-container");
    softwareContainer.querySelectorAll(".d-flex").forEach(softwareDiv => {
        const softwareName = softwareDiv.querySelector("input").value;
        const softwareLevel = softwareDiv.querySelector("select").value;

        const liSoftware = document.createElement("li");
        liSoftware.setAttribute("class", "list-group-item");
        liSoftware.textContent = `${softwareName} ${softwareLevel}/5`;
        ulSoftware.appendChild(liSoftware);
    });

    sectionCv4.appendChild(h6Software);
    sectionCv4.appendChild(ulSoftware);
    asideCv.appendChild(sectionCv4);

    const sectionCv5 = document.createElement("section");
    sectionCv5.setAttribute("class", "mb-4");

    const h6Language = document.createElement("h6");
    h6Language.textContent = "Languages";

    const ulLanguage = document.createElement("ul");
    ulLanguage.setAttribute("class", "list-group");

    const languagesContainer = document.getElementById("languages-container");
    languagesContainer.querySelectorAll(".d-flex").forEach(languageDiv => {
        const languageName = languageDiv.querySelector("input").value;
        const languageLevel = languageDiv.querySelector("select").value;

        const liLanguage = document.createElement("li");
        liLanguage.setAttribute("class", "list-group-item");
        liLanguage.textContent = `${languageName} ${languageLevel}/5`;
        ulLanguage.appendChild(liLanguage);
    });

    sectionCv5.appendChild(h6Language);
    sectionCv5.appendChild(ulLanguage);
    asideCv.appendChild(sectionCv5);

    sectionCv.appendChild(asideCv);

    const sectionCv6 = document.createElement("section");
    sectionCv6.setAttribute("class", "col-md-8");

    const articleResume = document.createElement("article");
    const h6WResume = document.createElement("h6");
    h6WResume.textContent = "Professional Resume";

    const pResume = document.createElement("p");
    const hResume = document.getElementById("resume");
    pResume.textContent = hResume.value;

    articleResume.appendChild(h6WResume);
    articleResume.appendChild(pResume);

    sectionCv6.appendChild(articleResume);

    const articleWork = document.createElement("article"); 
    const h6WWork = document.createElement("h6");
    h6WWork.textContent = "Work Experience";
    articleWork.appendChild(h6WWork);

    const workContainer = document.getElementById("work-container");
    workContainer.querySelectorAll(".d-flex").forEach(workDiv => {
        const pWork = document.createElement("p");
        const companyName = workDiv.querySelector("input").value;
        const startDate = workDiv.querySelector("#start-date").value;
        const endDate = workDiv.querySelector("#end-date").value;
        pWork.textContent = `${companyName} (${startDate} - ${endDate})`;
        articleWork.appendChild(pWork);
    });

    sectionCv6.appendChild(articleWork);

    const articleEducation = document.createElement("article"); 
    const h6Education = document.createElement("h6");
    h6Education.textContent = "Education";
    articleEducation.appendChild(h6Education);

    const educationContainer = document.getElementById("education-container");
    educationContainer.querySelectorAll(".d-flex").forEach(educationDiv => {
        const pEducation = document.createElement("p");
        const institutionName = educationDiv.querySelector("input").value;
        const startDateEducation = educationDiv.querySelector("#start-date-education").value;
        const endDateEducation = educationDiv.querySelector("#end-date-education").value;
        pEducation.textContent = `${institutionName} (${startDateEducation} - ${endDateEducation})`;
        articleEducation.appendChild(pEducation);
    });

    sectionCv6.appendChild(articleEducation);

    const articleCertification = document.createElement("article"); 
    const h6Certification = document.createElement("h6");
h6Certification.textContent = "Certifications";
articleCertification.appendChild(h6Certification);

const certificationContainer = document.getElementById("certifications-container");
certificationContainer.querySelectorAll(".d-flex").forEach(certificationDiv => {
    const pCertification = document.createElement("p");
    const certificationName = certificationDiv.querySelector("input").value;
    const startDateCertification = certificationDiv.querySelector("#start-date-certification").value;
    const endDateCertification = certificationDiv.querySelector("#end-date-certification").value;
    pCertification.textContent = `${certificationName} (Obtained: ${startDateCertification}, Expiration: ${endDateCertification})`;
    articleCertification.appendChild(pCertification);
});

sectionCv6.appendChild(articleCertification);

sectionCv.appendChild(sectionCv6);

CVContainer.appendChild(sectionCv);
}