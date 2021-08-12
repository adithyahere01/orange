var tl = gsap.timeline();

tl.from('.links',{
    y:-100,
    stagger:{
        each: 0.1
    }
})
tl.from('.ora',{
    x:"-200%",
    delay:0.1,
    ease:Power4.easeOut
}, "content")
tl.from('.nge',{
    x:"200%",
    delay:0.5,
    ease:Power4.easeOut
}, "content")

tl.from('.image',{
    y:"-150%",
    duration:2,
    ease:Elastic.easeOut
})
tl.from('.leaf',{
    //stagger:2,
    width:0,
    scale:0,
    //opacity:0,
    ease:Back.easeOut.config(1.7)
})

tl.from('.text-1',{
    x:"-150%",
    ease:Power4.easeOut,
    opacity:0
},"text")

tl.from('.caption',{
    x:"150%",
    ease:Power4.easeOut,
    opacity:0
},"text")


//parallax js
const scene = document.querySelector("#scene");
var parallaxInstance = new Parallax(scene);