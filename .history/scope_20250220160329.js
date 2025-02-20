const a = 1;
const b = 2;
const c = 3;

(function firstFunction() {
    const b = 5;
    const c = 6; // This is the 'c' we want to use

    (function secondFunction() {
        const b = 8; // This is the 'b' we want to use

        (function thirdFunction() {
            const a = 7;
            const c = 9;

            (function fourthFunction() {
                const a = 1;
                const c = 8;

                // Correct placement of console.log to print the correct values
                console.log(`a: ${a}, b: ${b}, c: ${c}`);
            })()
        })()
    })()
})()