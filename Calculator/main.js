const submitBtn = document.querySelector('#submitBtn');
let math;
let macro;
let legal;
let marketing;
let lang;
let GPA;

submitBtn.addEventListener('click', function(){
    math = document.querySelector('#math').value;
    math = Number(math);

    macro = document.querySelector('#macro').value;
    macro = Number(macro);

    legal = document.querySelector('#legal').value;
    legal = Number(legal);

    marketing = document.querySelector('#marketing').value;
    marketing = Number(marketing);

    lang = document.querySelector('#lang').value;
    lang = Number(lang);

    GPA = document.getElementById("GPA").value;
    GPA = Number(GPA);


    
    
    let grade = GPA * 6 - math - macro - legal - marketing - lang;

    let roundGrade = Math.round(grade);

    document.getElementById("result").innerHTML =  `You Got <span>${roundGrade}/100</span>  in Principles of Management!</p>`
})

