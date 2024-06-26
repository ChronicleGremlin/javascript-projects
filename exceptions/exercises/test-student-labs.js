function gradeLabs(labs) {
  for (let i = 0; i < labs.length; i++) {
    let lab = labs[i];
    try {
      console.log(`${lab.student} code worked: ${result === 27}`);
      let result = lab.runLab(3);
    } catch(err) {
      let result = "Error thrown";
      console.log(result);
    }
}
}

let studentLabs2 = [
  {
    student: 'Carly',
    runLab: function (num) {
      return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
      return num * num;
    }
  }
];

gradeLabs(studentLabs2);
