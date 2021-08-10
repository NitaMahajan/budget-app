
class UI {
    constructor() {
        this.budgetSection = document.getElementById('budget-form');
        this.budgetInput = document.getElementById('budget-input');
        this.displayBudget = document.getElementById('amount-budget');
        this.errorMessage = document.getElementById('error-budget');
        this.expenseSection = document.getElementById('expense-form');
        this.expenseName = document.getElementById('expense-name');
        this.expenseValue = document.getElementById('expense-value');
        this.expenseListingName = document.getElementById('expense-listing-title');
        this.expenseListingValue = document.getElementById('expense-listing-value');

        this.budget = 0;
        this.expenseNames = [];
        this.expenseValues = [];

    }
    updateBudget() {
        let value = this.budgetInput.value;
        if(!value || value < 0) {
            this.errorMessage.classList.remove('hidden');
            setTimeout(() => {
                this.errorMessage.classList.add('hidden');
            },4000)
        }
        else {
            this.budget = value;
            this.showBalance();
        }
    }
    showBalance() {
        this.displayBudget.innerText = this.formatValue(this.budget);
    }
    showExpense(expense, value) {
        let expenseDiv = document.createElement('div');
        let newContent = document.createTextNode(`${expense}`);
        expenseDiv.appendChild(newContent);
        this.expenseListingName.appendChild(expenseDiv);

        expenseDiv = document.createElement('div');
        newContent = document.createTextNode(`$ ${value}`);
        expenseDiv.appendChild(newContent);
        this.expenseListingValue.appendChild(expenseDiv);

        
        console.log(this.expenseListingName);
        console.log(this.expenseListingValue);
    }
    formatValue(value) {
        return `$ ${value}`;
    }
    addExpense() {
        let name = this.expenseName.value;
        let value = this.expenseValue.value;
        this.expenseNames.push(name);
        this.expenseValues.push(value);
        this.showExpense(name, value);
    }
}

function eventListeners(){
    console.log('Initializing event listeners...');

    let budgetApp = new UI();

    const budgetSection = document.getElementById('budget-form');
    const expenseSection = document.getElementById('expense-form');

    // Event listeners
    budgetSection.addEventListener('submit', (e) => {
        e.preventDefault();
        budgetApp.updateBudget();
    });
    expenseSection.addEventListener('submit', (e) => {
        e.preventDefault();
        budgetApp.addExpense();
    });
    
}

document.addEventListener('DOMContentLoaded', (event) => {
    eventListeners();
});
