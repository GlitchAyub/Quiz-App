const questData = [{
    questions:'What does HTML stands  for?',
    a:'Helicopter tale motors less',
    b:'High tower multi language',
    c:'Hypertext Markup Language',
    d:'High translate markjson launguage',
    correct:'c'
},
{
    questions:'What year was JavaScript launched?',
    a:'2000',
    b:'1998',
    c:'1997',
    d:'1995',
    correct:'d'
},
{
    questions:'AI and ML stands for? ',
    a:'Artificial Inteligent and Machine Learning',
    b:'Artificial Intergalactic and mars launched',
    c:'Arts Inteligents and Margin Line',
    d:'None of these',
    correct:'a'
},
{
    questions:'The Movie  I Robot, What is the Main Actor name ?',
    a:'Aim Undefined',
    b:'Anuj Kumar Sharma',
    c:'Sandeep Shrestha Pradhan',
    d:'Will Smith',
    correct:'d' 
}
];
//hmtl elements
const answerEl= document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl =document.getElementById('quest');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn =document.getElementById('btn')

//declaring
let currentQuiz = 0;
let score = 0;


//load quiz
const loadQuiz =()=>{
    deSelect();
    const currentQuizData =questData[currentQuiz];
    questionEl.innerHTML=currentQuizData.questions;
    a_text.innerHTML=currentQuizData.a;
    b_text.innerHTML=currentQuizData.b;
    c_text.innerHTML=currentQuizData.c;
    d_text.innerHTML=currentQuizData.d;
    

}
loadQuiz();

//answer select
function getSelect(){
    
    let answer =undefined;
    answerEl.forEach(answers=>{
        
        if(answers.checked){
           answer = answers.id;
        }
        
        });
        return answer;
}

// !selected
function deSelect(){
    answerEl.forEach(answers=>{
        if(answers.checked){
            answers.checked=false;
            }
    })
}


//addEventListener

submitBtn.addEventListener('click',()=>{
    const answer =getSelect();
    console.log(answer)
    
    if(answer){
        if(answer===questData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz<questData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML=`<h2> YOUR RESULT ${score}/${questData.length}</h2>
             <button onClick="location.reload()">Reload</button>`;
        }
        
    }


})
