//user array
const users = [];

//adding new users 

const addUser = ({id,name,room})=>{
name = name.trim().toLowerCase();
room = room.trim().toLowerCase();

//check if user exists
const existingUser = users.find((user)=>user.room === room && user.name === name);
if(existingUser) {
    return {
        error:'username already exists in the room'
    }}


    const user = {id,name,room};
    users.push(user);

    return { user }

}

//removeUser

const removeUser = (id)=>{
const index = users.findIndex((user)=>user.id===id);
if(id !== -1){
    return users.splice(index,1)[0];
}
}

//getUSer

const getUser = (id)=>users.find((user)=>user.id === id)

//get users in a specific room



const getUsersInRoom=(room)=>users.filter((user)=>user.room === room);

module.exports = {addUser,removeUser,getUser,getUsersInRoom}