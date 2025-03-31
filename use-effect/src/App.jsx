import { useState, useEffect } from "react";
import "./App.css";

function App() {

  //  The probem in useState object destructure is object key can be lost 
      // const [user, setUser] = useState({ name: 'Alice', age: 25 });
      // // Incorrect update
      // setUser({ name: 'Bob' });
      // console.log(user); // { name: 'Bob' } - `age` is lost! 
  // Additionally we need keep in mind that we have to destructure the previous state always and then pass the new object.
  // That's why useReducer hook is more suitable for complex state management.

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "", });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              onChange={handleChange}
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
              onChange={handleChange}
              required
            />
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
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
