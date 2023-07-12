
const generate_random_workout = () => {
    let num = Math.floor(Math.random() * 9);

    switch (num) {
        case 1: return 'Do 10 sit-ups';
        break;
        case 2: return 'Do 20 push ups';
        break;
        case 3: return 'Do 10 pull ups';
        break;
        case 4: return 'Do 30 dips';
        break;
        case 5: return 'Do 30 shoulder taps';
        break;
        case 6: return 'Do 50 squats';
        break;
        case 7: return 'Do piston squats 10 on each legs';
        break;
        case 8: return 'Do 40 burpees';
        break;
        case 9: return 'Hold 1 minutes of plank';
        break;
        default: return 'This should never run';
        break;
    }
}

console.log(generate_random_workout());

