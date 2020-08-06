class User{
    constructor(){
        this.name=null;
        this.answer=[];
        this.index=[];
    }
    update(){
        var userIndex="users/user"+this.index;
        database.ref(userIndex).set({
            name:this.name,
            answer:this.answer

        });
    }
    updateCount(count){
        database.ref('/').update({
            userCount:count
        });
    }

    

}