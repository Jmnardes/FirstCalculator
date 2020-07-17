function Calculator() {
    this.display = document.querySelector('.display');

    //method for events
    this.start = () => {
        this.btnClick();
        this.pressEnter();
        this.pressBack();
    };
    
    //event for button click
    this.btnClick = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            //check the clicked element
            if(el.classList.contains('btn-num')) this.displayBtn(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eq')) this.eq();
        });
    };

    //use keycode to identify enter pressed
    this.pressEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if(e.keyCode === 13) this.eq();
        });
    };
    
    //same as enter, but with backspace
    this.pressBack = () => {
        this.display.addEventListener('keypress', (e) => {
            if(e.keyCode === 8) this.del();
        });
    };

    // writes on display and take the focus back to display every 'equals pressed'
    this.displayBtn = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    //clear and del
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.eq = () => {
        let math = this.display.value;

        try {
            math = eval(math);

            if(!math) {
                alert('Conta inválida!');
                return;
            }
            
            this.display.value = String(math);
        } catch(e){
            alert('Conta inválida!');
            return;
        };
    };
};

const calculator = new Calculator();
calculator.start();