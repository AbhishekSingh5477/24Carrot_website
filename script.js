let image=document.getElementsByClassName("imgch")[0];
let heading =document.getElementsByClassName("deshead")[0];
let description =document.getElementsByClassName("desdescr")[0];
let click1=document.getElementsByClassName("f1")[0];
let click2=document.getElementsByClassName("f2")[0];
let click3=document.getElementsByClassName("f3")[0];
let click4=document.getElementsByClassName("f4")[0];

click1.addEventListener("click",()=>{
    image.src="wedingimg.jpg"
    heading.textContent="EXEPTIONAL WEDDING"
    description.innerHTML="The most important day of your life, is ours too. <br> Your wedding should be the ultimate celebration of <br> your relationship, and our team of experts guide you <br> through the process, offering peace of mind and a <br> remarkable experience." 
})
click2.addEventListener("click",()=>{
    image.src="socialimg.jpg"
    heading.textContent="INCOMPARABLE SOCIAL EVENTS"
    description.innerHTML=" We sweat the small stuff, so you don’t have to. For all of life’s special occasions, we give your anniversary, shower, or birthday party the attention it deserves, allowing you to focus on being present with your guests!"
})
click3.addEventListener("click",()=>{
    image.src="Corporate.jpg"
    heading.textContent="ONE-OF-A-KIND CORPORATE EVENTS"
    description.innerHTML="Our job is to make you look good. From office lunches to large-scale corporate events, we’ve made our business out of making your business shine."
})
click4.addEventListener("click",()=>{
    image.src="mainpart3learnimg1.jpg"
    heading.textContent="EXCLUSIVE SOCIAL VENUES"
    description.innerHTML="We don’t put you in a box. Each venue is unique to each party, and our curated list of event spaces and venue partners offers easy access with personalized service at Southern California’s premier locations."
})