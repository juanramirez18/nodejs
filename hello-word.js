console.log("Hello word")

async function  myFun () {
    await setTimeout(()=> {
        console.log("hola desde async")

    }, 3000) 

};

myFun();