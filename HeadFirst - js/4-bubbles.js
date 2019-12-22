var scores = [1, 2, 3, 4, 4, 1, 2, 4, 4, 4, 4];

function bubblesResearch(research) {
    var solutionCounter = 0;
    var highestScore = 0;
    var bestSolutions = "";
    for (let i = 0; i < research.length; i++) {
        console.log("Bubble solution # " + i + " score: " + research[i]);
        solutionCounter = solutionCounter + 1;
        if (research[i] >= highestScore) {
            highestScore = research[i];
        }
    }
    for (let i = 0; i < research.length; i++) {
        if (research[i] == highestScore) {
            bestSolutions = bestSolutions + "# " + i;
            if (i!==research.length-1) {
                bestSolutions = bestSolutions + ", ";
            }
        }
        
    }
    console.log("Bubble tests: " + solutionCounter);
    console.log("Highest bubble score: " + highestScore);
    console.log("Solutions with highest score: " + bestSolutions);
}
bubblesResearch(scores);