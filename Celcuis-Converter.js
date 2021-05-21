let convertFahrToCelsius = (f) => {
    if (typeof f == 'number') {

        let celsius = ((f - 32) * (5 / 9));
        return (celsius.toFixed(4))

    } else if (typeof f == 'object') {
        if (Array.isArray(f)) {



            console.log(`${JSON.stringify(f)} is not a valid number but an Array`)
        } else {
            const a = f;

            output = `${JSON.stringify(f)} is not a valid number but a ${typeof f}.`
            return output
        }


    } else if (typeof f == 'string') {

        console.log('')
        let fNumber = Number(f);
        // let celsius = ((fNumber - 32) * (5/9));

        if (isNaN(fNumber)) {
            console.log("this is not a number")
            return (`${f} is not a valid number but a ${typeof f}.`)
        } else {
            let celsius = ((fNumber - 32) * (5 / 9));
            return (celsius.toFixed(4))
        }
    } else {
        console.log(`${JSON.stringify(f)} is not a valid number but a/an null type`);



    }
}


convertFahrToCelsius([1, 2.3]);