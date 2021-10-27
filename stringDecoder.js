const decoder=(code) => {
    let splitCode = code.split('')
    let newCode = ''
    for  (i =0; i <splitCode.length; i++){
        if (!isNaN(+splitCode[i])){
            i += +splitCode[i]
        } else {
            newCode += splitCode[i]
        }
        
        }
        return newCode
    }

    console.log(decoder('0h2xce5ngbrdy'))
    
