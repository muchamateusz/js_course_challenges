{
  var bills = [124, 48, 268];
  calcTheTip(bills);

  function calcTheTip(bills) {
    var tips = [];
    var pays = [];
    bills.forEach((bill, index) => {
      if (bill < 50) {
        tips.push(Math.floor(bill * 0.2));
      } else if (bill > 50 && bill < 200) {
        tips.push(Math.floor(bill * 0.15));
      } else if (bill > 200) {
        tips.push(Math.floor(bill * 0.1));
      }
      pays.push(bill + tips[index]);
    });
    console.log("tips :", tips);
    console.log("pays :", pays);
  }
}
