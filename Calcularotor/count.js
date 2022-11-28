let disp=document.querySelector('.calc .calc1 .screen span')
let buttons=Array.from(document.getElementsByTagName('button'))
buttons.map(button=>{
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText)
        {
            case 'AC':
                disp.innerText=' ';
            break;
            case  "<--":
                if(disp.innerText){
                disp.innerText=disp.innerText.slice(0,-1);
                }
            break;
            case '=':
                try{
                   
                    disp.innerText=eval(disp.innerText);
                }
                catch{
                    disp.innerText='Error!';
                }
            break;
            default:
                disp.innerText+=e.target.innerText;
        }
    });
});