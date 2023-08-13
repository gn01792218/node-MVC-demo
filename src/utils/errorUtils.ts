export const customErrorObject = (err:string, errorMeg?:string) =>{
    const error = new Error(err)
    if(errorMeg) error.message = `${errorMeg} : ${err}`
    return error
}