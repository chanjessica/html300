$(document).ready(function () {
    //can't read data from local file
    //jQuery.get('data.json',function(persons){ alert(persons); });
    //JSON string 
    var persons = [{
        "name": "Steve Smith",
        "jobTitle": "Project Manage",
        "Company": "Front End Dev Co",
        "Experience": "3 years",
        "School": "UW",
        "Major": "Marketing",
        "Email": "steve@fedc.com",
        "LinkedInUrl": "steve.linkedinprofile.com"
    }, {
        "name": "Aaron Katz",
        "jobTitle": "Full Stack Developer",
        "Company": "Web Sites and More",
        "Experience": "5 years",
        "School": "SU",
        "Major": "Computer Science",
        "Email": "aaronNotMyEmail@uw.com",
        "LinkedInUrl": "aaron.linkedinprofile.com"
    }, {
        "name": "Kyle Hendricks",
        "jobTitle": "Starting Pitcher",
        "Company": "Chicago Cubs",
        "Experience": "12 years",
        "School": "USC",
        "Major": "Pitching",
        "Email": "kyleH@cubs.com",
        "LinkedInUrl": "kyle.linkedinprofile.com"
    },
    {
        "name": "Michael Jordan",
        "jobTitle": "Point Guard",
        "Company": "Chicago Buls",
        "Experience": "20 years",
        "School": "UNC",
        "Major": "Trash Talking",
        "Email": "mJordan@bulls.com",
        "LinkedInUrl": "mJordas.linkedinprofile.com"
    }
    ];
    //console.log("type of " + persons);
    //console.log("person 1: " + persons[0].name);
    // Create the Person class constructor with getInfo method
    class Person {
        // Give it expected parameters
        constructor(name, job, company, experience, school, major, email, url) {
            this.name = name;
            this.job = job;
            this.company = company;
            this.experience = experience;
            this.school = school;
            this.major = major;
            this.email = email;
            this.url = url;
        }
        getInfo() { let info = `${this.name} has been working for ${this.company} 
        for ${this.experience}`;
            console.log(info);
            //alert(info);
        }
    }
    let people = []; //  console.log("type of " + people);
    for (let i = 0; i < persons.length; i++) { //loop through object
        let p = new Person(persons[i].name, persons[i].jobTitle,
            persons[i].Company, persons[i].Experience, persons[i].School, persons[i].Major,
            persons[i].Email, persons[i].LinkedInUrl);
            //console.log(p);
            //console.log(JSON.stringify(p));
            people.push(p);  //create instance
            p.getInfo();     //invoking constructor getInfo function
    }
    // console.log("type of " + people);
    //console.log("people: " + people.length);
    persons.map(function (e) {
        //create a html template
        let cardHtml = `<div class="mkcard">
                <div class="card">
                    <div class="pic">
                    <img  src="/img/unsplash-headshot.jpg"  alt="${e.name}">
                    <h2>${e.name}</h2> 
                    <p>${e.jobTitle}</p> 
                    </div>
                    <div class="desc">
                        <ul>
                            <li><span class="bold">Company:</span> ${e.Company}</li>
                            <li><span class="bold">Experience:</span> ${e.Experience}</li>
                            <li><span class="bold">School:</span> ${e.School}</li>
                            <li><span class="bold">Major:</span> ${e.Major}</li>
                            <li><span class="bold">Email:</span><a href="mailto:${e.Email}"> ${e.Email}</a></li>
                            <li><img src="/img/linkedin.svg" alt="linkedin logo"><a href="${e.LinkedInUrl}"> ${e.LinkedInUrl}</a></li>
                        </ul>
                    </div>
                </div>
                </div>`;
        //insert template data into html document
        $("#template-hook").append(cardHtml);
    });
}); //document object