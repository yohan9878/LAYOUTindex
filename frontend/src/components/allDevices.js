import React,{useState, useEffect} from "react";
import Header from "./header";
import axios from "axios";

export default function AllDevices() { 

    const [devices,setDevices] = useState([]);
    const [searchTerm, setSearchTerm] = React.useState("");

    useEffect(()=>{

        fetch('https://localhost:8070/device/')
      .then(response => response.json())
      .then(devices => setDevices(devices));
        
       function getDevices(){
         axios.get("http://localhost:8070/device/").then((res)=>{
            console.log(res.data);
            setDevices(res.data);
         }).catch((err)=>{
            alert(err.message);
         })
       }
        getDevices();
    }, [])

    const handleDelete = (id) => {
        console.log("🚀 ~ file: allDevices.js:27 ~ handleDelete ~ id:", id)
    
 axios.delete(`http://localhost:8070/device/delete/${id}`).then((res) => {
     console.log("🚀 ~ file: allDevices.js:31 ~ axios.delete ~ res:", res)
     alert("Device removed");
 }).catch((err)=>{
    alert(err.message);
 })

      }

      const filteredDevices = devices.filter((device) => {
        return (
            device.serialNo.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            device.type.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            device.location.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            device.status.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
    });

    


    return(
        <>
        <Header /><br></br>
        
        
        <div className="container">
        <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder='Enter the location' onChange={(e) => setSearchTerm(e.target.value)} /><br></br>
        <a type="submit" class="btn btn-primary"  href="/addDevice">Add Device</a>
        </form>
        </div>
        <br></br>


        <div className="container">
            <h3>All Devices</h3><br></br>
        </div>
        <div className= "container">
        <table class="table table-hover" >
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Serial No</th>
      <th scope="col">Type</th>
      <th scope="col">Location</th>
      <th scope="col">Image</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
  {filteredDevices.map((row, index) => (
          <tr key={index}>
            <td>{row._id}</td>
            <td>{row.serialNo}</td>
            <td>{row.type}</td>
            <td>{row.location}</td>
            <td><img src={row.image} alt={row.type} style={{ maxWidth: "500px", maxHeight: "500px" }} /></td>
            <td>{row.status}</td>
            <td><button class="btn btn-danger" onClick={() => handleDelete(row._id)}>Remove</button></td>
            
          </tr>
          ))}
    
  </tbody>
</table>
</div>
        </>
    )
}
