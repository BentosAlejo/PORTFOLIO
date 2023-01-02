let hidden = false
const home = document.getElementById("nav")
const menu = document.getElementById("menu1")
const select = document.getElementsByClassName("select")
const testt = document.getElementById("test")
const selected = Array.from(select)
const download = document.getElementById("aCv")
const send =document.getElementById("sendForm")
const name = document.getElementById("nameIn")
const phone = document.getElementById("phoneIn")
const mail = document.getElementById("mailIn")
const subject = document.getElementById("subjectIn")
const text = document.getElementById("textIn")
const form = document.getElementById("formContact")


download.onclick = function(){
    window.open("./media/curriculum2022.pdf")
}
 function isValidProduct(){
     if(
       !name.value ||
       !phone.value ||
       !mail.value ||
       !subject.value || 
       !text.value 
     ) return false
     return true;
   }

// function formReset(){
//     form.reset()
// }   
send.addEventListener("click", (e)=>{
    if(isValidProduct()){
        Swal.fire({
            text:'Submitted successfully',
            icon:'success',
            confirmButtonText:'continue'

        })
        
    }else{
        e.preventDefault()
        Swal.fire({
            text:'Fields missing',
            icon:'error',
            confirmButtonText:'continue'

        })
    }
})
    
// e.preventDefault()
//     if(
//         name.value = "" ||
//         phone.value = "" ||
//         mail.value = "" ||
//         subject.value = "" ||
//         text.value = ""
//     ){
//             Swal.fire({
//                 title:'test',
//                 text:'test',
//                 icon:'success',
//                 confirmButtonText:'continue'
//             })
//     }else{
//         Swal.fire({
//             title:'error test',
//             text:'text test',
//             icon:'Error',
//             confirmButtonText:'continue'
//         })
//     }

menu.addEventListener("click", () => {
    if(hidden){
        home.classList = ""
        hidden = false
    }else{
        home.classList = "responsive"
        hidden = true
    }
})

selected.forEach(e => 
    e.addEventListener("click", ()=>{
        home.classList = ""
        hidden = false
    }
    )
)

const skillsEffect = ()=>{
    var skill = document.getElementById("skills")
    var skillsDistance = window.innerHeight - skill.getBoundingClientRect().top
    if(skillsDistance >= 300){
        let skills = document.getElementsByClassName("progress")
        skills[0].classList.add("javascript")
        skills[1].classList.add("htmlcss")
        skills[2].classList.add("react")
        skills[3].classList.add("hardwork")
        skills[4].classList.add("teamwork")
        skills[5].classList.add("proyect")
        skills[6].classList.add("comunication")
        skills[7].classList.add("creativity")
        
    }
}


window.onscroll = function(){
    skillsEffect()
}
    

// todas las a = <a href="ss" onclick="seleccionar()">inicio</a>
//<div class="nav-responsive" onclick="mostrarOcultarMenu()">