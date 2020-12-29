function toggle(){
    document.getElementById("toggleBtn").classList.toggle('toggle');
    //document.getElementsByClassName("show-nav").classList.toggle('show-nav');
    document.getElementById("navigation").classList.toggle('show-nav');
    if(!isPhone())
        {
            document.querySelectorAll('.nav-devider>li')[0].click();
            document.querySelectorAll('.nav>li')[0].click();
        }
    logoSplash();
}

const nav1 = document.querySelectorAll('.nav-devider>li');
nav1.forEach(el => el.addEventListener('click', event => {
    toogleNav();
    var x = document.getElementById("onscreen");
    if(x)
        x.id = "";
    event.target.id = "onscreen";
    toogleNav();
}));

var listNav = [
                'about', 
                'history', 
                'rental information', 
                'on display', 
                'calender', 
                'upcoming exhibitions',
                'archived exhibitions',
                'contact procedure',
                'rent the gallery',
                'quick text'
            ]

const nav0 = document.querySelectorAll('.nav>li');
nav0.forEach(el => el.addEventListener('click', event => {
    // if(isPhone()){
    //     var tot = event.target.innerHTML;
    //     tot += ".html";
    //     location.href = tot.replace(" ", "-");
    // }

    if(isPhone()){
        toggleCon();
    }

    //console.log(event.target.innerHTML);
    var height = (listNav.indexOf(event.target.innerHTML))*(-100)
    //document.getElementById("about").style.top = height+'%';
    var sectors = document.getElementsByClassName('containBox');
    for(i in sectors){
        try{
            sectors[i].style.top = height+'%';
        }
        catch{
            //pass
        };
    }
    document.getElementById("active").id = "";
    event.target.id = "active";
}));


function toogleNav(){
    var x = document.getElementById("onscreen");
    if(x && x.innerHTML)
        {
            var navChoosed = document.getElementsByClassName(x.innerHTML+'-nav');
            document.getElementById("active").id = "";
            //console.log(x.innerHTML)
            //console.log(navChoosed)
            for(i in navChoosed){
                //console.log(navChoosed[i]);
                try{
                    navChoosed[i].classList.toggle('open-nav');
                    if(i==0)
                    {
                        if(navChoosed[i].id == 'active')
                            navChoosed[i].id = '';
                        else
                            {
                                navChoosed[i].id = 'active';
                                if(!isPhone())
                                    navChoosed[i].click();
                            }
                    }
                }
                catch{
                    //pass
                }}
        }
}
var haveSplash = false;
logoSplash();
function logoSplash(){
var w;
if(window.innerWidth !== undefined) { 
    w = window.innerWidth;
  } else {  
    w = document.documentElement.clientWidth;
}
if(w<570){
    var t = document.getElementById("logoScr");
    //console.log(t); t.style.visibility || 
    if(haveSplash)
    {
        t.style.visibility = "hidden";
        t.style.opacity = "0";
        haveSplash = false;
    }
    else
    {
        t.style.visibility = "visible";
        t.style.opacity = "100%";
        haveSplash = true;
    }
}
}

function isPhone(){
    var w;
    if(window.innerWidth !== undefined) { 
        w = window.innerWidth;
    } else {  
        w = document.documentElement.clientWidth;
    }
    if(w<570)
        return true;
    else 
        return false;
}

function toggleCon(){
    // moveCon
    document.getElementById("Con").classList.toggle('moveCon');
    var io = document.getElementsByClassName('mskey');
    for(i in io){
        try{
            io[i].classList.toggle('moveScr0');
        }
        catch{
            //pass
        }
    }
    //left: -100vw;
}


// if(window.innerWidth !== undefined && window.innerHeight !== undefined) { 
//     var w = window.innerWidth;
//     var h = window.innerHeight;
//   } else {  
//     var w = document.documentElement.clientWidth;
//     var h = document.documentElement.clientHeight;
// }