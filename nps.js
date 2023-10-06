const nps = {
    scoreCategories: {
        promoters: 0,
        passives: 0,
        detractors: 0
    },
    totalScores: 0,
    npsScore: 0,
    scores: Array(11).fill(0),
    scoreSum: 0
};

document.querySelectorAll('input[name="nps-score"]').forEach(function(e) {
    e.addEventListener('click', addScore);
});

function addScore() {
    const score = Number(document.querySelector('input[name=nps-score]:checked').value);
    nps.scores[score]++;
    nps.totalScores++;
    nps.scoreSum += score;

    if (score >= 9) {
        nps.scoreCategories.promoters++;
    } else if (score >= 7) {
        nps.scoreCategories.passives++;
    } else {
        nps.scoreCategories.detractors++;
    }

    updateNPS();
    updatePageInfo();
}

function updateNPS() {
    const newNPSScore = (nps.scoreCategories.promoters - nps.scoreCategories.detractors) / nps.totalScores * 100;
    nps.npsScore = newNPSScore.toFixed(2);
}

function updatePageInfo() {
    document.querySelector('#nps').innerText = nps.npsScore;
    document.querySelector('#average').innerText = (nps.scoreSum / nps.totalScores).toFixed(1);

    const promotersPercentage = (nps.scoreCategories.promoters / nps.totalScores) * 100;
    document.querySelector('#promoters').innerText = `${nps.scoreCategories.promoters} (${promotersPercentage.toFixed(2)}%)`;

    const passivesPercentage = (nps.scoreCategories.passives / nps.totalScores) * 100;
    document.querySelector('#passives').innerText = `${nps.scoreCategories.passives} (${passivesPercentage.toFixed(2)}%)`;

    const detractorsPercentage = (nps.scoreCategories.detractors / nps.totalScores) * 100;
    document.querySelector('#detractors').innerText = `${nps.scoreCategories.detractors} (${detractorsPercentage.toFixed(2)}%)`;

    document.querySelector('#zero').innerText = nps.scores[0];
    document.querySelector('#one').innerText = nps.scores[1];
    document.querySelector('#two').innerText = nps.scores[2];
    document.querySelector('#three').innerText = nps.scores[3];
    document.querySelector('#four').innerText = nps.scores[4];
    document.querySelector('#five').innerText = nps.scores[5];
    document.querySelector('#six').innerText = nps.scores[6];
    document.querySelector('#seven').innerText = nps.scores[7];
    document.querySelector('#eight').innerText = nps.scores[8];
    document.querySelector('#nine').innerText = nps.scores[9];
    document.querySelector('#ten').innerText = nps.scores[10];
}