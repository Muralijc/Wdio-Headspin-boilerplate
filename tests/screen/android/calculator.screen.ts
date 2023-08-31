class CalculatorScreen {
    number: (number:string)=>string;
    add: string;
    equal: string;
    result: string;
    clear: string;
    constructor() {
        this.number = number => `//android.widget.Button[@content-desc="${number}"]`;
        this.add = '//android.widget.Button[@content-desc="Plus"]';
        this.equal = '//android.widget.Button[@content-desc="Equal"]';
        this.result = '//android.view.ViewGroup[contains(@content-desc,"Calculation result")]'
        this.clear = '//android.widget.Button[@content-desc="Clear"]';
    }
}

export default new CalculatorScreen()

