function Calculadora() {
    this.display = document.querySelector('.display');
    
    this.start = () => {
        this.btnClick();
        this.pressEnter();
        this.pressBack();
    };
    
    this.btnClick = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.displayBtn(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eq')) this.eq();
        });
    };

    this.pressEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if(e.keyCode === 13) this.eq();
        });
    };
    
    this.pressBack = () => {
        this.display.addEventListener('keypress', (e) => {
            if(e.keyCode === 8) this.del();
        });
    };

    this.displayBtn = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

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

const calculadora = new Calculadora();
calculadora.start();