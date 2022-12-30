let hidden = false
const home = document.getElementById("nav")
const menu = document.getElementById("menu1")
const select = document.getElementsByClassName("select")
const testt = document.getElementById("test")
const selected = Array.from(select)


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
    let skill = document.getElementById("skills")
    let skillsDistance = window.innerHeight = skill.getBoundingClientRect().top
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