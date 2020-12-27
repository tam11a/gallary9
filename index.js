function toggle(){
    document.getElementById("toggleBtn").classList.toggle('toggle');
    //document.getElementsByClassName("show-nav").classList.toggle('show-nav');
    document.getElementById("navigation").classList.toggle('show-nav');
    document.querySelectorAll('.nav-devider>li')[0].click();
    document.querySelectorAll('.nav>li')[0].click();
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
    console.log(event.target.innerHTML);
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
                                navChoosed[i].click();
                            }
                    }
                }
                catch{
                    //pass
                }}
        }
}

