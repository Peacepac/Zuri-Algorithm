function convertFahrToCelsius(fahrenhiet) {
    if (typeof fahrenhiet == 'number') {

        let celsius = ((fahrenhiet - 32) * (5 / 9));
        console.log(celsius.toFixed(4))

    } else if (typeof fahrenhiet == 'object') {
        if (Array.isArray(fahrenhiet)) {



            console.log(`${JSON.stringify(fahrenhiet)} is not a valid number but an Array`)
        } else {

            console.log(`${JSON.stringify(fahrenhiet)} is not a valid number but a/an ${typeof fahrenhiet} type.`)
        }


    } else if (typeof fahrenhiet == 'string') {

        let fahrenhietNumber = Number(fahrenhiet);


        if (isNaN(fahrenhietNumber)) {

            console.log(`${fahrenhiet} is not a valid number but a/an ${typeof fahrenhiet} type.`)
        } else {
            let celsius = ((fahrenhietNumber - 32) * (5 / 9));
            console.log(celsius.toFixed(4))
        }
    } else {
        console.log(`${JSON.stringify(fahrenhiet)} is not a valid number but a/an null type`);



    }
}


// convertFahrToCelsius(23);