import { TextField } from "@mui/material";
import  axios  from "axios";
import {React,useState} from "react";

export default function NewPatient() {

    const [image,setImage] = useState('');

    const handleAdd = async(e)=>{
      e.preventDefault();
        const formData = new FormData(e.target);
        formData.append('image',image);
        await axios
          .post("http://localhost:3001/patients/add/newPatient",formData)
          .then(res => console.log(res))
          .catch(err => console.error(err));
        alert('New Patient added');
    }

  return (
    <form onSubmit={handleAdd} encType="multipart/formData">
      <div>newPatient</div>
      <TextField
        color='secondary'
        type='file'
        name='image'
        value={image}
        onChange={(e)=>{setImage(e.target.value)}}
        variant='outlined'
      ></TextField>
      <button type='submit'>Submit</button>
    </form>
  );
}
