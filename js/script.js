document.addEventListener("DOMContentLoaded", ()=> {

    const nav = document.querySelector("nav");
    const navLink = document.querySelector("nav ul li a");
    const get = document.querySelector(".get");
    const lang = document.querySelector(".lang");
    const card = document.querySelector("img.card");
    const banner = document.querySelector("#banner");
    const bannerP = document.querySelector("#banner p");
    const bannerH1 = document.querySelector("#banner h1");
    const navSidebyside = document.querySelector("nav .sidebyside");
    const emoji = document.querySelector(".emoji");
    const member = document.querySelector("#banner .member");
    const sns = document.querySelector("#banner .sns");

    // console.log(navSidebyside);


    nav.addEventListener("mousemove", ()=> {
        navSidebyside.style.justifyContent = "space-between";
    })

    get.addEventListener("click", ()=> {
        get.style.transform = `translateX(${Math.random()*250}%)`;
    })

    navLink.addEventListener("mousemove", (eventInfo)=> {
        navLink.style.transform = `translateX(-${eventInfo.clientX/5000}%)`;
        navLink.style.scale = (2);
    })

    lang.addEventListener("click", (event)=> {
        lang.style.transform = `translateX(-${event.clientX/15}%)`;
    })

    banner.addEventListener("mousemove", (eventInfo)=> {
        card.style.transform = `translate(-${eventInfo.clientX/100}px, -${eventInfo.clientY/100}px)`;
        
        emoji.style.scale = (1);
        emoji.style.transform = `translate(-${eventInfo.clientY/100}px, -${eventInfo.clientX/100}px)`;
        
        bannerH1.style.opacity = `${eventInfo.clientY/1200}`;
        bannerP.style.opacity = `${eventInfo.clientY/1200}`;


        member.style.padding = "20px 30px";
        sns.style.padding = "20px 30px";

    })

    banner.addEventListener("mousemove", (eventInfo)=> {
        bannerP.style.transform = `translate(-${eventInfo.clientX/100}px, -${eventInfo.clientY/100}px)`;
    })

    banner.addEventListener("mousemove", (eventInfo)=> {
        bannerH1.style.transform = `translate(-${eventInfo.clientY/80}px, -${eventInfo.clientX/80}px)`;
    })

    member.addEventListener("mousemove", (eventInfo)=> {
        member.style.transform = `translate(${eventInfo.clientX/3}px)`;
    })

    sns.addEventListener("mousemove", ()=> {
        sns.style.transform = `translate(${Math.random()*250}%, ${Math.random()*250}%)`;
    })


    const about = document.querySelector("#about");
    const aboutSide1 = document.querySelector(".aboutSide1");
    const aboutSide2 = document.querySelector(".aboutSide2");
    const aboutSide3 = document.querySelector(".aboutSide3");
    const aboutText1 = document.querySelector("#about .text1");
    const aboutImg1 = document.querySelector("#about .img1");
    const aboutText2 = document.querySelector("#about .text2");
    const aboutImg2 = document.querySelector("#about .img2");
    const aboutText3 = document.querySelector("#about .text3");
    const aboutImg3 = document.querySelector("#about .img3");



    about.addEventListener("mousemove", ()=> {
        aboutText1.style.transform = `translateX(0)`
        aboutImg1.style.transform = `translateX(0)`
        
        aboutText2.style.transform = `translateX(0px)`
        aboutImg2.style.transform = `translateX(0px)`
        
        aboutText3.style.transform = `translateX(0)`
        aboutImg3.style.transform = `translateX(0)`
        
    })


    const service = document.querySelector("#service");
    const serviceLeft1 = document.querySelector("#service .leftbox1");
    const serviceLeft2 = document.querySelector("#service .leftbox2");

    service.addEventListener("mousemove", ()=> {
        serviceLeft1.style.transform = `translateX(0)`
        serviceLeft2.style.transform = `translateX(0)`
    })


    const mission = document.querySelector("#mission");
    const missionImg = document.querySelector("#mission img");

    missionImg.addEventListener("mousemove", ()=> {
        missionImg.style.scale = "1.2"
    })

    mission.addEventListener("click", ()=> {
        missionImg.style.scale = "1"
    })

    const close = document.querySelector("#close");
    const box = document.querySelector("#testi .box");
    
    const close2 = document.querySelector("#close2");
    const box2 = document.querySelector("#testi .box2");
    
    const close3 = document.querySelector("#close3");
    const box3 = document.querySelector("#testi .box3");
    
    const close4 = document.querySelector("#close4");
    const box4 = document.querySelector("#testi .box4");
    
    const close5 = document.querySelector("#close5");
    const box5 = document.querySelector("#testi .box5");
    
    const close6 = document.querySelector("#close6");
    const box6 = document.querySelector("#testi .box6");
    
    const close7 = document.querySelector("#close7");
    const box7 = document.querySelector("#testi .box7");
    
    const close8 = document.querySelector("#close8");
    const box8 = document.querySelector("#testi .box8");
    
    const close9 = document.querySelector("#close9");
    const box9 = document.querySelector("#testi .box9");
    
    box.addEventListener("click", (event)=> {
        box.classList.add("actives")
        
    })
    
    close.addEventListener("click", (event)=> {
        event.stopPropagation();
        box.classList.remove("actives")
    })
    
    box2.addEventListener("click", (event)=> {
        box2.classList.add("actives")
        
    })
    
    close2.addEventListener("click", (event)=> {
        event.stopPropagation();
        box2.classList.remove("actives")
    })
    
    box3.addEventListener("click", (event)=> {
        box3.classList.add("actives")
        
    })
    
    close3.addEventListener("click", (event)=> {
        event.stopPropagation();
        box3.classList.remove("actives")
    })
    
    box4.addEventListener("click", (event)=> {
        box4.classList.add("actives")
        
    })
    
    close4.addEventListener("click", (event)=> {
        event.stopPropagation();
        box4.classList.remove("actives")
    })
    
    box5.addEventListener("click", (event)=> {
        box5.classList.add("actives")
        
    })
    
    close5.addEventListener("click", (event)=> {
        event.stopPropagation();
        box5.classList.remove("actives")
    })
    
    box6.addEventListener("click", (event)=> {
        box6.classList.add("actives")
        
    })
    
    close6.addEventListener("click", (event)=> {
        event.stopPropagation();
        box6.classList.remove("actives")
    })
    
    box7.addEventListener("click", (event)=> {
        box7.classList.add("actives")
        
    })
    
    close7.addEventListener("click", (event)=> {
        event.stopPropagation();
        box7.classList.remove("actives")
    })
    
    box8.addEventListener("click", (event)=> {
        box8.classList.add("actives")
        
    })
    
    close8.addEventListener("click", (event)=> {
        event.stopPropagation();
        box8.classList.remove("actives")
    })
    
    box9.addEventListener("click", (event)=> {
        box9.classList.add("actives")
        
    })
    
    close9.addEventListener("click", (event)=> {
        event.stopPropagation();
        box9.classList.remove("actives")
    })
    
    
    const join = document.querySelector("#join");
    const joinLeftImg = document.querySelector("#join-img");
    
    join.addEventListener("mousemove", (eventInfo)=> {
        joinLeftImg.style.transform = `translate(-${eventInfo.clientX/1000}%,-${eventInfo.clientY/1000}%)`;
    })
    
    
    const contact = document.querySelector("#contact");
    const form = document.querySelector("#contact .rightbox");
    
    form.addEventListener("mousemove", (eventInfo)=> {
        form.style.transform = `translate(-${eventInfo.clientX/10}%,-${eventInfo.clientY/10}%)`;
    })
    
    
    const footerButton = document.querySelector("#footer .btn ");
    const footer = document.querySelector("#footer");
    
    
    footer.addEventListener("mousemove", (event)=> {
        footerButton.style.transform = `translate(${event.clientY/3}px, -${event.clientX/3}px)`;
    })
    
    
    
    
    
})








