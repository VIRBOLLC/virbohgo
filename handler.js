
function Class() {
    opt = document.getElementById('class').value;
    localStorage.setItem('class',opt)
    if (opt == 'Class 1') {
        box = document.getElementById('box').innerHTML = `
        <select name="Subject" id="subject">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
    </select>
    <br><br>
    <button onclick="Subject()"><i class='bx bxs-chevron-right'></i> Next</button>
    `
    }
    else if (opt == 'Class 2') {
        box = document.getElementById('box').innerHTML = `
        <select name="Subject" id="subject">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
    </select>
    <br><br>
    <button onclick="Subject()"><i class='bx bxs-chevron-right'></i> Next</button>
    `
    }
    else if (opt == 'Class 3') {
        box = document.getElementById('box').innerHTML = `
        <select name="Subject" id="subject">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
              <option value="Evs">Environmental Studies</option>
    </select>
    <br><br>
    <button onclick="Subject()"><i class='bx bxs-chevron-right'></i> Next</button>
    `
    }
    else if (opt == 'Class 4') {
        box = document.getElementById('box').innerHTML = `
        <select name="Subject" id="subject">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
              <option value="Evs">Environmental Studies</option>
    </select>
    <br><br>
    <button onclick="Subject()"><i class='bx bxs-chevron-right'></i> Next</button>
    `
    }
    else if (opt == 'Class 5') {
        box = document.getElementById('box').innerHTML = `
        <select name="Subject" id="subject">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
              <option value="Evs">Environmental Studies</option>
    </select>
    <br><br>
    <button onclick="Subject()"><i class='bx bxs-chevron-right'></i> Next</button>
    `
    }
    else {
        alert('☹ | Sorry, The requested content will be available soon...')
    }
    
}
function Subject() {
    sub = document.getElementById('subject').value;
    cls = localStorage.getItem('class').replace('Class ','');
    if (cls == '1') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','ahhn1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','aeen1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${localStorage.getItem('subject')} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Maths') {
            localStorage.setItem('link','aemh1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
    }
    else if (cls == '2') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','bhhn1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','been1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Maths') {
            localStorage.setItem('link','bemh1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
    }
    else if (cls == '3') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','chhn1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','ceen1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Maths') {
            localStorage.setItem('link','cemh1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Evs') {
            localStorage.setItem('link','ceap1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
    }
    else if (cls == '4') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','dhhn1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','deen1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Maths') {
            localStorage.setItem('link','demh1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Evs') {
            localStorage.setItem('link','deap1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
    }
    else if (cls == '5') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','ehhn1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','eeen1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Maths') {
            localStorage.setItem('link','eemh1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Evs') {
            localStorage.setItem('link','eeap1dd.zip')
            
document.getElementById('box').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
    }
}
document.getElementById('premium').style.visibility = 'hidden';
if (localStorage.getItem('premium') == 'yes') {
    document.getElementById('premium').style.visibility = 'visible';
    document.getElementById('err').style.visibility = 'hidden';
}
function premium() {
    if (localStorage.getItem('premium') == 'yes') {
    window.location.replace('premium.html')
    }
    else {
        alert("You don't have premium :(\nDon't worry, buy it :)");
        window.location.replace('homepage.html')
    }
}
// PREMIUM SECTION

function Classp() {
    opt = document.getElementById('classp').value;
    localStorage.setItem('class',opt)
    if (opt == 'Class 1') {
        box = document.getElementById('boxp').innerHTML = `
        <select name="Subject" id="subject">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
    </select>
    <br><br>
    <button onclick="Subjectp()"><i class='bx bxs-chevron-right'></i> Next</button>
    `
    }
    else if (opt == 'Class 2') {
        box = document.getElementById('boxp').innerHTML = `
        <select name="Subject" id="subject">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
    </select>
    <br><br>
    <button onclick="Subjectp()"><i class='bx bxs-chevron-right'></i> Next</button>
    `
    }
    else if (opt == 'Class 3') {
        box = document.getElementById('boxp').innerHTML = `
        <select name="Subject" id="subject">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
              <option value="Evs">Environmental Studies</option>
    </select>
    <br><br>
    <button onclick="Subjectp()"><i class='bx bxs-chevron-right'></i> Next</button>
    `
    }
    else if (opt == 'Class 4') {
        box = document.getElementById('boxp').innerHTML = `
        <select name="Subject" id="subject">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
              <option value="Evs">Environmental Studies</option>
    </select>
    <br><br>
    <button onclick="Subjectp()"><i class='bx bxs-chevron-right'></i> Next</button>
    `
    }
    else if (opt == 'Class 5') {
        box = document.getElementById('boxp').innerHTML = `
        <select name="Subject" id="subject">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
              <option value="Evs">Environmental Studies</option>
    </select>
    <br><br>
    <button onclick="Subjectp()"><i class='bx bxs-chevron-right'></i> Next</button>
    `
    }
    else if (opt == 'Class 6') {
        box = document.getElementById('boxp').innerHTML = `
        <select name="Subject" id="subject">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
              <option value="Science">Science</option>
              <option value="SS">Social Science</option>
    </select>
    <br><br>
    <button onclick="Subjectp()"><i class='bx bxs-chevron-right'></i> Next</button>
    `
    }
    else if (opt == 'Class 7') {
        box = document.getElementById('boxp').innerHTML = `
        <select name="Subject" id="subject">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
              <option value="Science">Science</option>
              <option value="SS">Social Science</option>
    </select>
    <br><br>
    <button onclick="Subjectp()"><i class='bx bxs-chevron-right'></i> Next</button>
    `
    }
    else if (opt == 'Class 8') {
        box = document.getElementById('boxp').innerHTML = `
        <select name="Subject" id="subject">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
              <option value="Science">Science</option>
              <option value="SS">Social Science</option>
    </select>
    <br><br>
    <button onclick="Subjectp()"><i class='bx bxs-chevron-right'></i> Next</button>
    `
    }
    else if (opt == 'Class 9') {
        box = document.getElementById('boxp').innerHTML = `
        <select name="Subject" id="subject">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
              <option value="Science">Science</option>
              <option value="SS">Social Science</option>
    </select>
    <br><br>
    <button onclick="Subjectp()"><i class='bx bxs-chevron-right'></i> Next</button>
    `
    }
    else if (opt == 'Class 10') {
        box = document.getElementById('boxp').innerHTML = `
        <select name="Subject" id="subject">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
              <option value="Science">Science</option>
              <option value="SS">Social Science</option>
    </select>
    <br><br>
    <button onclick="Subjectp()"><i class='bx bxs-chevron-right'></i> Next</button>
    `
    }
    else if (opt == 'Class 11') {
        box = document.getElementById('boxp').innerHTML = `
        <select name="Subject" id="subject">
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
              <option value="Accountancy">Accountancy</option>
              <option value="BSB">Business Studies Book</option>
              <option value="Economics">Economics</option>
              <option value="Geography">Geography</option>
              <option value="History">History</option>
              <option value="Sociology">Sociology</option>
              <option value="PS">Political Science</option>
    </select>
    <br><br>
    <button onclick="Subjectp()"><i class='bx bxs-chevron-right'></i> Next</button>
    `
    }
    else if (opt == 'Class 12') {
        box = document.getElementById('boxp').innerHTML = `
        <select name="Subject" id="subject">
        <option value="Hindi">Hindi</option>
        <option value="English">English</option>
        <option value="Maths">Maths</option>
        <option value="Physics">Physics</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Biology">Biology</option>
        <option value="Accountancy">Accountancy</option>
        <option value="BSB">Business Studies Book</option>
        <option value="Economics">Economics</option>
        <option value="Geography">Geography</option>
        <option value="History">History</option>
        <option value="Sociology">Sociology</option>
        <option value="PS">Political Science</option>
    </select>
    <br><br>
    <button onclick="Subjectp()"><i class='bx bxs-chevron-right'></i> Next</button>
    `
    }
    
    else {
        alert('A server error occured. Please refresh the page.')
    }
    
}
function Subjectp() {
    sub = document.getElementById('subject').value;
    cls = localStorage.getItem('class').replace('Class ','');
    if (cls == '1') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','ahhn1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','aeen1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${localStorage.getItem('subject')} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Maths') {
            localStorage.setItem('link','aemh1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
    }
    else if (cls == '2') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','bhhn1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','been1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Maths') {
            localStorage.setItem('link','bemh1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
    }
    else if (cls == '3') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','chhn1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','ceen1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Maths') {
            localStorage.setItem('link','cemh1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Evs') {
            localStorage.setItem('link','ceap1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
    }
    else if (cls == '4') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','dhhn1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','deen1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Maths') {
            localStorage.setItem('link','demh1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Evs') {
            localStorage.setItem('link','deap1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
    }
    else if (cls == '5') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','ehhn1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','eeen1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Maths') {
            localStorage.setItem('link','eemh1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Evs') {
            localStorage.setItem('link','eeap1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
    }
    else if (cls == '6') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','fhbr1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','fepw1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Maths') {
            localStorage.setItem('link','femh1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Science') {
            localStorage.setItem('link','fesc1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'SS') {
            localStorage.setItem('link','fess1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
    }
    else if (cls == '7') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','fhss3dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','geen1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Maths') {
            localStorage.setItem('link','gemh1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Science') {
            localStorage.setItem('link','gesc1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'SS') {
            localStorage.setItem('link','gess1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
    }
    else if (cls == '8') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','hhdv1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','hehd1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Maths') {
            localStorage.setItem('link','hemh1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Science') {
            localStorage.setItem('link','hesc1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'SS') {
            localStorage.setItem('link','hess1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
    }
    else if (cls == '9') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','ihkr1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','ieen1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://cdn1.byjus.com/wp-content/uploads/2022/04/NCERT-Class-9-English-Literature-2022-Revised-Textbook.pdf;alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Maths') {
            localStorage.setItem('link','iemh1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Science') {
            localStorage.setItem('link','iesc1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'SS') {
            localStorage.setItem('link','iess1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
    }
    else if (cls == '10') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','jhkr1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','jeff1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Maths') {
            localStorage.setItem('link','jemh1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Science') {
            localStorage.setItem('link','jesc1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'SS') {
            localStorage.setItem('link','jess1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
    }
    else if (cls == '11') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','khat1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','kehb1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        
        else if (sub == 'PS') {
            localStorage.setItem('link','keps1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Physics') {
            localStorage.setItem('link','keph1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Chemistry') {
            localStorage.setItem('link','kech1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Biology') {
            localStorage.setItem('link','kebo1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Accountancy') {
            localStorage.setItem('link','keac1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'BSB') {
            localStorage.setItem('link','kebs1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Economics') {
            localStorage.setItem('link','keec1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Geography') {
            localStorage.setItem('link','kegy1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'History') {
            localStorage.setItem('link','kehs1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Sociology') {
            localStorage.setItem('link','kesy1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
    }
    else if (cls == '12') {
        if (sub == 'Hindi') {
            localStorage.setItem('link','lhat1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'English') {
            localStorage.setItem('link','lefl1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        
        else if (sub == 'PS') {
            localStorage.setItem('link','leps1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Physics') {
            localStorage.setItem('link','leph1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Chemistry') {
            localStorage.setItem('link','lech1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Biology') {
            localStorage.setItem('link','lebo1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Accountancy') {
            localStorage.setItem('link','leac1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'BSB') {
            localStorage.setItem('link','lebs1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Economics') {
            localStorage.setItem('link','leec1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Geography') {
            localStorage.setItem('link','legy1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'History') {
            localStorage.setItem('link','lehs1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
        else if (sub == 'Sociology') {
            localStorage.setItem('link','lesy1dd.zip')
            
document.getElementById('boxp').innerHTML = `
<h3> Download ${sub} For ${localStorage.getItem('class')}</h3>
<hr>
<button onclick="window.location.replace('https://ncert.nic.in/textbook/pdf/${localStorage.getItem('link')}');alert('😄 Download Started')"><i class='bx bxs-download' ></i> Download</button>
`
        }
    }
}