function blackFlag(array) {
    let [daysPlunder, dayAmound, expectedPlunder] = array.map(Number);

    let totalPlunder = 0;

    for (let i = 1; i <= daysPlunder; i++) {

        totalPlunder += dayAmound;

        if (i % 3 === 0) {
            totalPlunder += 0.5 * dayAmound;
        }

        if (i % 5 === 0) {
            totalPlunder *= 0.7;
        }

    }
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = totalPlunder / expectedPlunder * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }

}
blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);