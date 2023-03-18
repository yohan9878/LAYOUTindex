import React,{useState} from "react";
import Header from "./header";
import axios from "axios";
 
export default function AddLocation(){

    const [location, setLocation] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [serialNo, setSerialNo] = useState("");

    

    function sendData(e){
        e.preventDefault();

        const newLocation = {

            location,
            address,
            phone,
            serialNo

        }

        axios.post("http://localhost:8070/location/add",newLocation).then(()=>{
            alert("Location added")
        }).catch((err)=>{
            alert(err)
        })
        console.log(">>>>>>>>",newLocation)
        
    }

    return(
        <>
        <Header/>
        <br></br>
        <div className="container">
            
            <h3>Add Location</h3><br></br>
        <form onSubmit={sendData}>
  <div className="form-group row">
    <label for="location">Location</label>
    <input type="text" className="form-control" id="location"  placeholder="Enter Location" required onChange={(e)=>{

             setLocation(e.target.value);

        }}></input>
  </div>

  <div className="form-group row">
    <label for="address">Address</label>
    <input type="text" className="form-control" id="address" placeholder="Enter Address" required onChange={(e)=>{

             setAddress(e.target.value);

        }}></input>
  </div>

  <div className="form-group row">
    <label for="phone">Phone</label>
    <input type="text" className="form-control" id="phone" placeholder="Enter Phone Number" required onChange={(e)=>{

             setPhone(e.target.value);

        }}></input>
  </div>

  <div className="form-group row">
    <label for="serialNo">Serial No</label>
    <input type="text" className="form-control" id="serialNo" placeholder="Enter serial No" required onChange={(e)=>{

             setSerialNo(e.target.value);

        }}></input>
  </div>
  <br></br>
  <br></br>
  <button type="submit" className="btn btn-primary">Add Location</button>
</form>
</div></>
    )
} 





