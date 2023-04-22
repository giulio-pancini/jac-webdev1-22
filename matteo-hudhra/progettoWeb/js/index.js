// Array delle materie
var subjects = [];
		
// Funzione per creare il contenitore di una materia
function createSubjectContainer(subject) {
    // Creazione del contenitore
    var container = document.createElement("div");
    container.className = "subject-container";
    
    // Aggiunta del titolo della materia
    var title = document.createElement("p");
    title.className = "subject-title";
    title.textContent = subject.name;
    container.appendChild(title);
    
    // Aggiunta del nome del professore
    var teacherName = document.createElement("p");
    teacherName.className = "teacher-name";
    teacherName.textContent = subject.teacher;
    container.appendChild(teacherName);
    
    // Calcolo della media dei voti
    var sum = 0;
    for (var i = 0; i < subject.votes.length; i++) {
        sum += subject.votes[i];
    }
    var average = sum / subject.votes.length;
    
    // Aggiunta della media dei voti
    var averageGrade = document.createElement("p");
    averageGrade.className = "average-grade";
    averageGrade.textContent = "Media voti: " + average.toFixed(2);
    container.appendChild(averageGrade);
    
    return container;
}

// Gestore di eventi per l'aggiunta di una nuova materia
var form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Lettura dei dati del form
    var subjectName = document.getElementById("subject-name").value;
    var teacherName = document.getElementById("teacher-name").value;

// Creazione dell'oggetto materia
var subject = {
    name: subjectName,
    teacher: teacherName,
    votes: []
};

// Aggiunta della materia all'array
subjects.push(subject);

// Creazione del contenitore della materia
var container = createSubjectContainer(subject);

// Aggiunta del contenitore alla pagina
var subjectsContainer = document.getElementById("subjects-container");
subjectsContainer.appendChild(container);

// Reset del form
form.reset();
});