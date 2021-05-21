// CheckYuGiOh Algorithm

function checkYuGioh(e) {
    let checkYuGiohArray = []

    if (e === null || isNaN(e) || typeof e == "boolean") {
        console.log(`invalid parameter: ${e}`)
    } else {
        for (let i = 1; i <= e; i++) {
            if (e == 1) {
                console.log(1);
            } else if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
                checkYuGiohArray.push("yu-gi-oh");

            } else if (i % 2 == 0 && i % 3 == 0) {
                checkYuGiohArray.push("yu-gi");
            } else if (i % 2 == 0 && i % 5 == 0) {
                checkYuGiohArray.push("yu-oh");
            } else if (i % 3 == 0 && i % 5 == 0) {
                checkYuGiohArray.push("gi-oh");
            } else if (i % 2 == 0) {
                checkYuGiohArray.push("yu");
            } else if (i % 3 == 0) {
                checkYuGiohArray.push("gi");
            } else if (i % 5 == 0) {
                checkYuGiohArray.push("oh");
            } else {
                checkYuGiohArray.push("" + i)
            }
        }
        console.log(checkYuGiohArray)
    }


}

checkYuGioh(null);