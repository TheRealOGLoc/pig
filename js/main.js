// GIT
// git commit is for saving changes locally with a meaningful commit message.
// git push is for pushing those committed changes to a remote repository.


/*----- constants -----*/
const SIDES = {
    1: "&#x2680",
    2: "&#x2681",
    3: "&#x2682",
    4: "&#x2683",
    5: "&#x2684",
    6: "&#x2685",
}

/*----- state variables -----*/
const state = {
    player: '',
    totalPoints: {
        player: 0,
        player: 0
    },
    points: 0,
    rolls: []
}

/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
const init = function() {
    state.player = 'player1';
    state.totalPoints.player1 = 0;
    state.totalPoints.player2 = 0;
    state.points = 0;
    state.rolls.pop();
};

init();
console.log()



