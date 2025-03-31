import { useEffect, useReducer } from "react";
import "./App.css";

function App() {

  // This is the example of useReducer hook which is used to manage state in functional components
  // But the useReducer syntax used in REDUX is little different from this example.

  const initialState = {
    name: "", 
    email: "",
    message: "",  
    phone: "",  
    // address: "",
    // city: "",
  }

  function RenderFunction(prevState, nextState) {
    return {...prevState, ...nextState}
  }

  const [formData, setFormData] = useReducer(RenderFunction, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
  };

    useEffect(()=>{
      console.log("<<==================>>");
      console.log("USE EFFECT RAN");
      console.log("<<==================>>");
      
    // })  // useEffect will always run in any case or changement.
    },[]) // useEffect will only run single time when component is mounted. 
    // },[formData.name])  // useEffect will only run when there change in specific field(formData.name)

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
                <h2 className="text-center mb-4">{formData.name}</h2>
                <h2 className="text-center mb-4">{formData.email}</h2>
                <h2 className="text-center mb-4">{formData.phone}</h2>
                <h2 className="text-center mb-4">{formData.message}</h2>
            </div>


      <div className="card p-4 shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-center mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bold">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ [e.target.name]: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ [e.target.name]: e.target.value })}
              required/>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label fw-bold">Your Phone</label>
            <input
              className="form-control"
              id="phone"
              name="phone"
              rows="4"
              placeholder="Enter your phone..."
              value={formData.phone}
              onChange={(e) => setFormData({ [e.target.name]: e.target.value })}
              required/>
          </div>
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label fw-bold">Your Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your message..."
              value={formData.message}
              onChange={(e) => setFormData({ [e.target.name]: e.target.value })}
              required/>
          </div>
          
          <button type="submit" className="btn btn-primary w-100 fw-bold">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
