const buttons = document.querySelectorAll("button");
const screen = document.getElementById('display');

for(let button of buttons){
    button.addEventListener('click', function(e){
        const textButton = e.target.textContent;

        if(textButton === 'C'){
            screen.textContent = '0';
        }
        else if(textButton === '='){
            try{
            screen.textContent = eval(screen.textContent);
        }
        catch(e){
            screen.textContent = 'Invalid';
        }}
        else{
            if(screen.textContent === '0'){
                screen.textContent = textButton;
            }else{
                screen.textContent+=textButton;
            }
        }
    })
}