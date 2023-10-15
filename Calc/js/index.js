const input = document.querySelector('.input_div');
const button = document.querySelectorAll('button');

let resolve = "";

button.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{
        switch(e.target.innerText){
            case("="):{
                resolve = eval(resolve)
                input.value = resolve
                break;
            }
            case("CE"):{
                resolve = ""
                input.value = resolve
                break
            }
            case("←"):{
                resolve = resolve.substring(0, resolve.length-1)
                input.value = resolve;
                break
            }
            default:{
                resolve+= e.target.innerText
                input.value = resolve
                break
            }
        }
    })
})
