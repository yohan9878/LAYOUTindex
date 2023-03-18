import React, { useState } from "react";
import Header from "./header";
import axios from "axios";

export default function AddDevice() {

    const [serialNo, setSerialNo] = useState("");
    const [type,setType] = useState("");
    console.log("🚀 ~ file: addDevice.js:9 ~ AddDevice ~ type:", type)
    const [location,setLocation] = useState("");
    const [image,setImage] = useState("");
    const [status,setStatus] = useState("");
    console.log("🚀 ~ file: addDevice.js:12 ~ AddDevice ~ status:", status)


    const handleChange = (event) => {
        setStatus(event.target.value);
      }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (event) => {
          setImage(event.target.result);
        };
    
        reader.readAsDataURL(file);
      };


    function sendData(e){
        e.preventDefault();

        const newDevice = { 

            serialNo,
            type,
            location,
            image,
            status
        }

        axios.post("http://localhost:8070/device/add",newDevice).then(()=>{
            alert("Device added")
        }).catch((err)=>{
            alert(err)
        })
        console.log(newDevice.status)
        
    }


    return (

        <>
            <Header /><br></br>
            <div className="container">

                <h3>Add Device</h3><br></br>
                <form onSubmit={sendData}> 
                    <div className="form-group row">
                        <label for="serialNo">Serial No</label>
                        <input type="text" className="form-control" id="serialNo" placeholder="Enter Serial Number" required onChange={(e)=>{

                           setSerialNo(e.target.value);

                        }}></input>
                    </div>

                    <div className="form-group row">
                        <label for="type">Type</label>
                        <select className="form-control" onChange={(e)=>{

                           setType(e.target.value);

                           }}>
                            <option value="default">default</option>
                            <option value="kiosk">KIOSK</option>
                            <option value="sinage">SINAGE</option>
                            <option value="pos">POS</option>
                        </select>

                    </div>

                    <div className="form-group row">
                        <label for="location">Location</label>
                        <input type="text" className="form-control" id="location" placeholder="Enter Location" required onChange={(e)=>{

                           setLocation(e.target.value);

                        }}></input>
                    </div>

                    {/* <div className="form-group">
    <label for="image">Image</label>
    <input type="text" className="form-control" id="image" placeholder="Upload Image"></input>
  </div> */}

                    
                        
                            <label for="image">Select Image</label>
                            <br></br>
                            <input type="file" id="image" onChange={handleImageChange} required/>
                             {image && (
                               <div>
                                 <img src={image} alt="Selected" />
                                </div>
                              )}

                              
                        
                   



                    <div className="form-group ">
                    <br></br>
                        <label for="status">Status</label>
                        <br></br>

                        <div>
                          <input type="radio" id="option1" name="radioGroup" value="Active" checked={status === "Active"}  onChange={handleChange} />
                          <label htmlFor="option1">Active</label>
                        </div>

                        <div>
                          <input type="radio" id="option2" name="radioGroup" value="Inactive" checked={status === "Inactive"} onChange={handleChange} />
                          <label htmlFor="option2">Inactive</label>
                        </div>


                    </div>
                    <br></br>
                    <br></br>
                    <button type="submit" class="btn btn-primary">Add Device</button>
                </form>
            </div></>
    )
} 
