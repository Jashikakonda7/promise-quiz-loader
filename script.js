function loadQuiz(){
    const status=document.getElementById('status')
    const question=document.getElementById('question')
    status.textContent="Loading..."
    question.textContent = ""
    const quizpromise= new Promise((resolve,reject)=>{
        setTimeout(()=>{
           const success=true
            if(success){
                resolve("This is the question")
            }
            else{
                reject("Failed to load quiz")
            }
        },2000)
    })
    quizpromise.
    then((data)=>{
        status.textContent="quiz loaded "
        question.textContent=data

    })
    .catch((data)=>{
        status.textContent="error"
        
    })

}












// function loadQuiz() {

//     const status = document.getElementById("status");
//     const question = document.getElementById("question");

//     status.textContent = "Loading...";
//     question.textContent = "";

//     const quizPromise = new Promise((resolve, reject) => {

//         setTimeout(() => {

//             const success = false;

//             if (success) {
//                 resolve("What does Promise.resolve() do?");
//             } else {
//                 reject("Failed to load quiz");
//             }

//         }, 2000);

//     });

//     quizPromise
//         .then((data) => {
//             status.textContent = "Quiz Loaded!";
//             question.textContent = data;
//         })
//         .catch((error) => {
//             status.textContent = error;
//         });
// }