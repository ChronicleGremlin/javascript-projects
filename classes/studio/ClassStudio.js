//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(score){
        this.scores + this.scores.push(score);
    }

    average(){
        let sum = 0
        for (let i = 0; i < this.scores.length; i++){
            sum += this.scores[i];
        }
        let averageScore = Math.round((sum / this.scores.length) * 10) / 10;
        
        return averageScore;
    }
}

let crewCandidateOne = new CrewCandidate(
    "Bubba Bear",
    135, 
    [88, 85, 90]
);

let crewCandidateTwo = new CrewCandidate(
    "Merry Maltese",
    1.5,
    [93, 88, 97]
);

let crewCandidateThree = new CrewCandidate(
    "Glad Gator",
    225,
    [75, 78, 62]
);

console.log(crewCandidateOne,crewCandidateTwo, crewCandidateThree);
crewCandidateOne.addScore(83);
console.log(crewCandidateOne.scores);
console.log(crewCandidateTwo.average());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.