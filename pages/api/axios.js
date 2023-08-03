import axios from "axios";

//User
export const register = async (value)=>
await axios.post('https://odd-pear-dalmatian-toga.cyclic.app/register',value)
export const login = async (value)=>
await axios.post('https://odd-pear-dalmatian-toga.cyclic.app/login',value)
export const auth = async(id_token)=>
await axios.post('https://odd-pear-dalmatian-toga.cyclic.app/Auth',{},
    { headers:{id_token} })
export const GetUserTable = async ()=>
await axios.get('https://odd-pear-dalmatian-toga.cyclic.app/list&user')

//Post
export const POST = async (value)=>
await axios.post('https://odd-pear-dalmatian-toga.cyclic.app/post',value)
export const GETPOST = async ()=>
await axios.get('https://odd-pear-dalmatian-toga.cyclic.app/postlist')
export const mypost =async (id)=>
await axios.get('https://odd-pear-dalmatian-toga.cyclic.app/postlist/user/'+id)
export const datapost =async (id)=>
await axios.get('http://localhost:4040/postlist/'+id)
export const updatepost =async (id,value)=>
await axios.put('https://odd-pear-dalmatian-toga.cyclic.app/post&update/'+id,value)
export const deletepost =async (id)=>
await axios.delete('https://odd-pear-dalmatian-toga.cyclic.app/post&delete/'+id)
