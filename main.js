console.log("Unit Converter:")

/* 
    This Function ask for 3 parameters, `distance`, `from`, `to`
    
        distance: the distance in number to convert
        Example: 1000, 10, 999, or another number

        from: the unit that you want to convert from
        Example: m, dm, cm, km, or another unit

        to: the unit that you want to convert to
        Example: m, dm, cm, km, or another unit

        Available Units:
        mm ==> milimeters
        cm ==> centimeters
        dm ==> decimeters
        m ==> meters
        dam ==> decameter
        hm ==> hetometer
        km ==> kilometer

*/
let distanceConversion = (distance=0, from='', to='') => {
    // First, lets handle some errors
    if(isNaN(distance)){
        console.error("Distance, needs to be a number")
        return 1;
    }
    else if(typeof(from)!='string' || typeof(to)!='string'){
        console.error("The type of From, and To parameters, has to be string")
    }
    else if(from.length==0 || to.length==0){
        console.error('You need to set a value for From and To')
    }
    // Now, lets make the logic
    else{
        // I'm going to store all the distance units in an array
        let units = ['mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km']
        // Now, let's know if we have to multiply or divide
        if(units.indexOf(from)<units.indexOf(to)){
            // We have to divide
            let howManyZeroes=units.indexOf(to)-units.indexOf(from)
            let divideBy='1'
            for(let i=0; i<howManyZeroes; i++){
                divideBy+='0'
            }

            console.log(`${distance}${from} are ${distance/divideBy}${to}`)
        }
        else if(units.indexOf(from)>units.indexOf(to)){
            // we have to divide
            let howManyZeroes=units.indexOf(from)-units.indexOf(to)
            let multiplyBy='1'
            for(let i=0; i<howManyZeroes; i++){
                multiplyBy+='0'
            }

            console.log(`${distance}${from} are ${distance*multiplyBy}${to}`)
        }
        else {
            //we dont need to do nothing, from and to have the same value
            console.error("From and To have to be different")
        }
    }
};

distanceConversion(2, 'm', 'cm')