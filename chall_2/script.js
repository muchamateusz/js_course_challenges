{
  const mikesTeamScores = [119, 120, 103];
  const johnsTeamScores = [116, 94, 123];
  const marysTeamScores = [97, 134, 102];

  console.log("mikesAvg :", averageScore(mikesTeamScores));
  console.log("johnsAvg :", averageScore(johnsTeamScores));
  console.log("marysAvg :", averageScore(marysTeamScores));

  console.log(
    whoIsTheWinner(
      averageScore(mikesTeamScores),
      averageScore(johnsTeamScores),
      averageScore(marysTeamScores)
    )
  );
  function averageScore(scores) {
    const sum = scores.reduce((a, b) => a + b);
    return sum / scores.length;
  }
  function whoIsTheWinner(mikesAvg, johnsAvg, marysAvg) {


    if ((mikesAvg > johnsAvg) && (mikesAvg > marysAvg)) {
      console.log("mikes team wins!", mikesAvg);
    } else if ((johnsAvg > mikesAvg) && (johnsAvg > marysAvg)) {
      console.log("johns team wins!", johnsAvg);
    } else if ((marysAvg > mikesAvg) && (marysAvg > johnsAvg)) {
        console.log("marys team wins!", marysAvg);
    } else {
      console.log("its a draw!");
    }


  }
}
