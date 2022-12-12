var color = {
    Personal: "purple",
    School:"blue",
    Work:"red",
    Cleaning:"peach",
    Others:"skyblue",
}


$('#datepicker').datepicker;

// adding a url to delete anchor tag when a check happen on task

var del = document.getElementById('delete');
var checkbox = document.getElementById('taskShowcase');

checkbox.addEventListener('click',function(event){
    let target = event.target;
    console.log(target);

    if(target.classList.contains('check')){
        del.setAttribute('href',`/delete-task/?id=${target.id}` );
        let date = target.parentElement.parentElement.querySelector('.date');
        target.nextElementSibling.classList.toggle('check-line');
        console.log(date.querySelector('i'));
        date.querySelector('i').classList.toggle('check-line');
    }
   
})

// create color functionalit purpose div
var tasklist = document.querySelectorAll('li');
(function(){
    console.log(tasklist.length)
    if(tasklist.length > 0){
        for(let task of tasklist){
           var purpose = task.querySelector('#purpose').textContent;
           task.querySelector('#purpose').style.background = '' +color[purpose.substring(1)];
        }
    }
})();


// var form = document.getElementById('contactFill');
// form.addEventListener('click',function(event){
    // let target = event.target;
    // console.log(target.id);
    // if(target.classList.contains('boxfill') ){
        // console.log(target);
        // target.parentElement.classList.toggle('bg-form');
        // target.classList.toggle('bg-form');
        // 
    // }
// })