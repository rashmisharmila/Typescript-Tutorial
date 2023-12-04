let owner_name_input_element = document.getElementById('ownerName') as HTMLInputElement;
let fixed_amount_input_element = document.getElementById('fixedAmount') as HTMLInputElement;
let add_fixed_btn_element = document.getElementById('addFixBtn');
let update_interest_Rate_btn_element = document.getElementById('updateInterestBtn');
let new_interest_rate_input_element = document.getElementById('newInterestRate') as HTMLInputElement;
let tbl_body_element = document.getElementById('fixedDepositTableBody') as HTMLTableSectionElement;


class FixedDepositManagement {
    ownerName: string;
    fixedAmount: number;
    interestRate: number;
    annualInterest: number;


    constructor(ownerName: string, fixedAmount: number, interestRate: number, annualInterest: number) {
        this.ownerName = ownerName;
        this.fixedAmount = fixedAmount;
        this.interestRate = interestRate;
        this.annualInterest = annualInterest;
    }

    updateRate(interest_rate: number): void {
        this.interestRate = interest_rate;
        this.annualInterest = (this.fixedAmount * interest_rate) / 100;
    }
}

let account: FixedDepositManagement[] = [];
let interest_rate: number = 8.75;
add_fixed_btn_element.addEventListener('click', () => {
    let owner_name = owner_name_input_element.value;
    let fixed_amount: number = Number(fixed_amount_input_element.value);

    console.log("owner name: ", owner_name);
    console.log("fixed amount: ", fixed_amount);

    let annual_interest: number = (fixed_amount * interest_rate / 100);
    let accounts = new FixedDepositManagement(owner_name, fixed_amount, interest_rate, annual_interest);
    console.log("annual_interest: ", annual_interest.toFixed(2));
    account.push(accounts);
    loadDataToTable();

});

function loadDataToTable() {
    tbl_body_element.innerHTML = "";

    account.map(r => {

        let record_element = document.createElement('tr');
        let record_data = `<td>${r.ownerName}</td>
                        <td>${r.fixedAmount}</td>
                        <td>${r.interestRate}</td>
                        <td>${r.annualInterest}</td>`;
        record_element.innerHTML = record_data;

        tbl_body_element.appendChild(record_element);

    });
}

update_interest_Rate_btn_element.addEventListener('click', () => {
    let new_interest_rate = new_interest_rate_input_element.value;
    interest_rate = +new_interest_rate;
    let newAccounts: FixedDepositManagement[] = [];
    account.map(r => {
        r.updateRate(interest_rate);
        newAccounts.push(r);
    });
    account = newAccounts;
    loadDataToTable();
});




























