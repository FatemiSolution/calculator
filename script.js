let string = ''
let buttons = document.getElementsByClassName('button');
let screen = document.getElementById('screen');
let a ;
let b ;
Array.from(buttons).forEach(element => {
    element.addEventListener('click',(e) => {
        if (e.target.innerHTML === '=') {
            try {
                
                string = eval(string);
                screen.value = string;
            } catch (error) {
                alert('please enter a valid string');
            }
        }else if (e.target.innerHTML === 'CE') {
        string = ''
        screen.value = string;
        }else if (e.target.innerHTML === 'MS') {
           a= string;
            string = ''
           

        }else if (e.target.innerHTML === 'MR') {
            b = string;
            string = a;
            screen.value = string;
        }else if (e.target.innerHTML === 'M+') {
            string = a + b;
            screen.value = string;
        }else if (e.target.innerHTML === 'M-') {
            string = a - b;
            screen.value = string;
        }else if (e.target.innerHTML === '%') {
           string = string /100
           screen.value = string;
        }else if (e.target.innerHTML === 'MRC') {
            string = ''
            a = ''
            b = ''
            screen.value = string
         }else if (e.target.innerHTML === 'C') {
           string = string.slice(0,-1);
           screen.value = string
         }else{
            try {
                string += e.target.innerHTML;
                screen.value = string;
            } catch (error) {
                alert('error');
            }
        }
    })
});
50010081009890031