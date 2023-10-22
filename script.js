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

    