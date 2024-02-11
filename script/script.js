let btn = document.querySelector(".btn");
let fName = document.querySelector("#fName");
let lName = document.querySelector("#lName");
let age = document.querySelector("#age");
let gender = document.querySelector("#gender");
let Interest = document.querySelector("#Interest");
let subject = document.querySelector("#subject");
let bio = document.querySelector("#bio");
let greeting = document.querySelector("#greeting");

let res = document.createElement("section")
res.classList.add("box")
document.body.appendChild(res)

function teacher(fName , lName , age, gender, Interest, subject, bio, greeting){
    this.firstName = fName,
    this.lastName = lName,
    this.age = age,
    this.gender = gender,
    this.Interest = Interest,
    this.subject = subject,
    this.bio = bio,
    this.greeting = greeting
}

btn.addEventListener('click', ()=>{

    var teachers = []
    teachers.push(new teacher
        (fName.value, lName.value, age.value, gender.value,
             Interest.value, subject.value, bio.value, greeting.value))
    for(i in teachers){
        res.innerHTML += 
        `
        <main class="container">
        <section class="user-photo">
            <img src="image/download.png" alt="profile-photo">
        </section>
        <section class="desc">
            <h2 class="desc-head">Teacher${i}</h2>
            <div class="desc-body">
                <div>
                    <label>Name : </label>
                    <P>[${teachers[i].firstName } , ${teachers[i].lastName}]</p>                     
                    </div>
                    <div>
                    <label>Age :</label>
                    <P> ${teachers[i].age} </p>
                </div>
                <div>
                    <label>Gender :</label>
                    <p> ${teachers[i].gender} </p>
                </div>
                <div>
                    <label>Subject :</label>
                    <p> ${teachers[i].subject} </p>
                </div>
                <div>
                    <label>Interests :</label>
                    <p> ${teachers[i].Interest} </p>
                </div>
                <div>
                    <label>Bio :</label>
                    <p>{" ${teachers[i].bio} "} </p>
                </div>
                <div>
                    <label>Greeting :</label>
                    <p>{" ${teachers[i].greeting} "} </p>
                </div>
            </div>
        </section>
    </main>
        `
    }
})