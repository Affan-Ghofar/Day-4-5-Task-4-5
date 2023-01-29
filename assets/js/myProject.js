const myProject = [];
function addmyProject(event) {
    event.preventDefault();

    // Delaclaration Variable DOM Selection
    let Name = document.getElementById("project-name").value;
    let startDate = new Date(document.getElementById('start-date').value);
    let endDate = new Date(document.getElementById("end-date").value);
    let description = document.getElementById("description").value;

    // Checked technology checkbox
    let php = document.getElementById("php").checked ? document.getElementById("php").value : false;
    let python = document.getElementById("python").checked ? document.getElementById("python").value : false;
    let java = document.getElementById("java").checked ? document.getElementById("java").value : false;
    let javascript = document.getElementById("javascript").checked ? document.getElementById("javascript").value : false;
    let image = document.getElementById("upload-image").files;

    // Conditional input
    if (Name == "") {
        alert("Please Input Name");
    } else if (startDate == "") {
        alert("Please Input Start Date");
    } else if (endDate == "") {
        alert("Please Input End Date");
    } else if (description == "") {
        alert("Please Input Description");
    } else if (php == false && python == false && java == false && javascript == false) {
        alert("Please Checklist Technologies");
    } else if (image.length == 0) {
        alert("Please Input Image");
    } else {
        // Convert image to blob object
        image = URL.createObjectURL(image[0]);

        // Duration setting
        let duration = (endDate - startDate) / (30 * 24 * 60 * 60 * 1000);
        duration = duration.toFixed(1);

        let myProjectData = {
            Name,
            startDate,
            endDate,
            duration,
            description,
            php,
            python,
            java,
            javascript,
            image
        };

        myProject.push(myProjectData);
        showData();

    }

}

//Arrow function to show list Myprojects
const showData = () => {
    document.getElementById('project').innerHTML = ""

    myProject.map((project) => {
        return document.getElementById('project').innerHTML +=
            `<div class="myProject-item">
            <img src="${project.image}"/>
            <a href="myProject-detail.html">
            <h3>${project.Name}</h3>
            </a>
            <div>
            <h5>Durasi : ${isNaN(project.duration) ? `-` : `${project.duration} Bulan`}</h5>
            </div>
            <p>${project.description}</p>
            <div>
                ${project.php ? `<i class="fa-brands fa-php fa-2x"></i>` : ``}
                ${project.python ? `<i class="fa-brands fa-python fa-2x"></i>` : ``}
                ${project.java ? `<i class="fa-brands fa-java fa-2x"></i>` : ``}
                ${project.javascript ? `<i class="fa-brands fa-js fa-2x"></i>` : ``}
            </div>
            <div>
            <button>Edit</button>
            <button>Delete</button>
            </div>
        </div>`
    })
}