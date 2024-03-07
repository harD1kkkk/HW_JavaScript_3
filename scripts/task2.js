class ExtendedDate extends Date {
    constructor(dateString) {
        super(dateString);
    }

    getDateText() {
        const months = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
        if (isNaN(this.getTime())) {
            return 'Invalid Date';
        }
        return `${this.getDate()} ${months[this.getMonth()]}, ${this.getFullYear()}`;
    }

    isFutureOrPresent() {
        if (isNaN(this.getTime())) {
            return false;
        }
        return this.getTime() >= Date.now();
    }

    isLeapYear() {
        const year = this.getFullYear();
        if (isNaN(year)) {
            return false;
        }
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    getNextDate() {
        if (isNaN(this.getTime())) {
            return 'Invalid Date';
        }
        const nextDay = new Date(this);
        nextDay.setDate(nextDay.getDate() + 1);
        return nextDay;
    }
}

let today = new ExtendedDate('2024-03-07'); 
console.log(today.getDateText());
console.log(today.isFutureOrPresent()); 
console.log(today.isLeapYear()); 
console.log(today.getNextDate()); 
