module.exports = class UserRepository{
    constructor(){
        this.users = []
    }
    
    add(user){
        this.users.push(user)
    }
    getAll(){
        return this.users
    }
}