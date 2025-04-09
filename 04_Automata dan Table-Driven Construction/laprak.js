const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const State = {
    START: "START",
    PLAYING: "PLAYING",
    GAME_OVER: "GAME_OVER"
};

let state = State.START;

function runStateMachine() {
    console.log(`${state} SCREEN`);
    rl.question("Enter Command: ", (command) => {
        if (command === "EXIT") {
            console.log("EXIT SCREEN");
            rl.close();
            return;
        }
        
        switch (state) {
            case State.START:
                if (command === "PLAY") state = State.PLAYING;
                break;
            case State.PLAYING:
                if (command === "LOSE") state = State.GAME_OVER;
                break;
            case State.GAME_OVER:
                if (command === "RESTART") state = State.START;
                break;
        }
        
        runStateMachine();
    });
}

runStateMachine();
