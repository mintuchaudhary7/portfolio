var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// --------menu bar----------


var sideme = document.getElementById("sidemenu");

function openmenu(){
    sideme.style.right = "0";
}

function closemenu(){
    sideme.style.right = "-200px";
}


// ------------------Google Sheets------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbwtSUnuQnv9G0TdNoJV9_EsdbVUCoZNV_3ds0YBevhKValncemtTJnWzoLEdsQY3NXQ/exec'
        const form = document.forms['submit-to-google-sheet']

        const msg = document.getElementById("msg");

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = "Message sent successfully"
                    setTimeout(function(){
                        msg.innerHTML = ""
                    }, 2000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
        })
