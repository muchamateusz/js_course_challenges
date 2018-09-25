{
  dinner = {
    bills: [124, 48, 268],
    tips: [],
    pays: [],

    calcTheTip: function () {
      this.bills.forEach((bill, index) => {
        if (bill < 50) {
          this.tips.push(Math.floor(bill * 0.2));
        } else if (bill > 50 && bill < 200) {
          this.tips.push(Math.floor(bill * 0.15));
        } else if (bill > 200) {
          this.tips.push(Math.floor(bill * 0.1));
        }
        this.pays.push(bill + this.tips[index]);
      });
      console.log("this.tips :", this.tips);
      console.log("this.pays :", this.pays);
    }
  };
  dinner.calcTheTip();
}
