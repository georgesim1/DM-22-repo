document.addEventListener("DOMContentLoaded", e =>{
    console.log("loaded");
    const btns = document.querySelectorAll("button");
    const all_list = document.querySelectorAll("li");

    //events

    btns.forEach(btn =>{
        btn.addEventListener("click",(e)=>{
            e.stopPropagation(); //stoppper la propagation de l'événement
            console.log(e.target.tagName)
            console.log("button")
        })
    })

    //liste

    all_list.forEach(li =>{
        li.addEventListener("click", e => {
            e.stopPropagation(); //stoppper la propagation de l'événement
            console.log(e.target.tagName)
            console.log("liste")
        })
    })

    //tester le parent

    document.body.addEventListener("click", e =>{
        e.stopPropagation(); //stoppper la propagation de l'événement
        console.log("Hello Body")
    })

    //tester le document
    document.addEventListener("click", e =>{
        e.stopPropagation(); //stoppper la propagation de l'événement
        console.log(e.target.tagName)
        console.log("Hello Document")
    })
    

})