//You can NOT write comments
//Yeah

function whatIsKiran(isKiranButtface){
   
    if(isKiranButtface){
        console.log("Mr.Buttface");
    }else{
        console.log("Mr.Poopguy")
    }

}

function whatIsLloyd(isLloydPoopyHead){
   
    if(isLloydPoopyHead){
        console.log("Mr.Poop Head");
    }else{
        console.log("Mr.Fart man")
    }

}


// for(let i = 0; i<=10; i++){
//     whatIsKiran(i % 2);
// }


let x = ["hey", "hi", "kiran is poo"];

function modifySentences(sentences){
    let count = 0;
    for(let i = 0; i<sentences.length; i++){
        sentences[i]+="poo";
        count++;
    }
    return count;
}

// console.log(modifySentences(x));
// console.log(x);


async function practiced(didPractice){

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(didPractice){
                resolve(80);
            }else{
                reject("I failed");
            }
        }, 2000);
        
    });
}

practiced(true).
    then((value) => {
        console.log("I reached a wpm of "+value);
    })
    .catch((err) => {
        console.log(err);
    });

    