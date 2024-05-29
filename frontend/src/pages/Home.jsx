import {useState, useEffect} from "react"
import api from "../api"

import Bill from "../components/Bill";

import "../styles/Home.css"

const Home = () => {
    const [bills, setBills] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getBills();
    }, []);

    const getBills = () => {
        api.get("/api/bills/")
           .then((res) => res.data)
           .then((data) => {
                setBills(data);
                console.log(data);
           })
           .catch((error) => alert(error));
    }

    const deleteBill = (id) => {
        api.delete(`/api/bills/delete/${id}`)
            .then((res) => {
                if(res.status == 204){
                    alert(`Bill with ${id} has been successfully deleted.`);
                }
                else{
                    alert(`Failed to delete Bill # ${id}`);
                }
                getBills();
            })
            .catch((error) => {
                alert(error);
            });
    }

    const createBill = (e) => {
        e.preventDefault();
        api.post("/api/bills/", {content, title})
            .then((res) => {
                if(res.status == 201){
                    alert("Bill Created!");
                }
                else{
                    alert("Bill Failed to Create!");
                }
            })
            .catch((error) => {
                alert(error);
            }
        );
        getBills();
    }

    return (
        <div>
            <div>
                <h2>Bills</h2>
                {bills.map((bill) => <Bill bill={bill} onDelete={deleteBill} key={bill.id}/>)}

            </div>
            <h2>Create Bills</h2>
            <form onSubmit={createBill}>
                <label htmlFor="title">Title: </label>
                <br/>
                <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                />

                <label htmlFor="content">Content: </label>
                <br/>
                <textarea 
                    id="content" 
                    name="content" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    required
                ></textarea>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Home;