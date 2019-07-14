$(document).ready(function() {
    //JSON string
    var persons =[{
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
        }];

    let html="";
    // Create the Person class constructor
    class Person {
        // Give it expected parameters
        constructor(name, job, company, experience, school, major, email, url){
                this.name = name;
                this.job = job;
                this.company = company;
                this.experience = experience;
                this.school = school;
                this.major = major;
                this.email = email;
                this.url = url;
        }
        //create a html template
        getTemplate(){
             html += `<div class="mkcard">
                <div class="card">
                    <div class="pic">
                    <img  src="/img/unsplash-headshot.jpg"  alt="${this.name}">
                        <h2>${this.name}</h2>
                        <p>${this.job}</p>
                    </div>
                    <div class="desc">
                        <ul>
                            <li><span class="bold">Company:</span> ${this.company}</li>
                            <li><span class="bold">Experience:</span> ${this.cxperience}</li>
                            <li><span class="bold">School:</span> ${this.school}</li>
                            <li><span class="bold">Major:</span> ${this.major}</li>
                            <li><span class="bold">Email:</span><a href="mailto:${this.email}"> ${this.email}</a></li>
                            <li><img src="/img/linkedin.svg" alt="linkedin logo"><a href="${this.url}"> ${this.url}</a></li>
                        </ul>
                    </div>
                </div>
            </div>` ;
            //insert template data into html document
            //$(".template-hook'").append(html);
            document.getElementById('template-hook').innerHTML = html;
        }
    }
    let people=[];  //  consolthis.log("type of " + people);
    for ( let i=0; i < persons.length; i++) { //loop through object
        let p = new Person(persons[i].name, persons[i].jobTitle, persons[i].Company, persons[i].Experience, persons[i].School, persons[i].Major, persons[i].Email, persons[i].LinkedInUrl);
        //console.log(p);
        //console.log(JSON.stringify(p));
        people.push(p);
        p.getTemplate();
    }
});   //document object


