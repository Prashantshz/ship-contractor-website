import {useState} from "react"

function Contact(){

const [form,setForm]=useState({
name:"",
email:"",
company:"",
message:""
})

const handleChange=(e)=>{

setForm({...form,[e.target.name]:e.target.value})

}

const submitForm=async(e)=>{

e.preventDefault()

await fetch("http://localhost:5000/api/request",{

method:"POST",

headers:{"Content-Type":"application/json"},

body:JSON.stringify(form)

})

alert("Request Submitted")

}

return(

<form onSubmit={submitForm}>

<h2>Request Service</h2>

<input name="name" placeholder="Name" onChange={handleChange}/>

<input name="email" placeholder="Email" onChange={handleChange}/>

<input name="company" placeholder="Company"/>

<textarea name="message" placeholder="Repair requirement" onChange={handleChange}></textarea>

<button type="submit">Submit</button>

</form>

)

}

export default Contact