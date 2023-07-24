var delay = 0

function multiple(num){
    return new Promise((resolve, reject) => {
        //delay
        while(delay < 1000000000){
            delay = delay + 1
        }

        if (num%2===0){
            resolve({
                multiple: num * 10
            })
        } else {
            reject({
                error: 404,
                message: "not an even number"
            })
        }

    })
}

async function getMultiple(number){
    await multiple(number)
    .then((res_obj) => {
        console.log(res_obj.multiple)
    })
    .catch(rej_obj => {
        console.log(rej_obj.error + " " + rej_obj.message)
    })

    console.log("thread reached here just now")
}

getMultiple(3)