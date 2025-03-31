import { useEffect, useReducer } from "react";
import "./App.css";

function App() {

  // This is the example of useReducer hook which is used to manage state in functional components
  // And this syntax of useReducer used in REDUX .

  const initialState = {
    name: "ABC",
    email: "XYZ",
    message: "MNO",
    phone: "123",
    // address: "",
    // city: "",
  }

  function RenderFunction(state, action) {
    const { type, payload } = action;

    switch (type) {
      case 'name':
        return { ...state, name: name };
      case 'email':
        return { ...state, name: email };
      case 'message':
        return { ...state, name: message };
      case 'phone':
        return { ...state, name: phone };
      default:
        return state
    }

  }

  const [formData, dispatch] = useReducer(RenderFunction, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
  };

  useEffect(() => {
    console.log("<<==================>>");
    console.log("USE EFFECT RAN");
    console.log("<<==================>>");

    // })  // useEffect will always run in any case or changement.
  }, []) // useEffect will only run single time when component is mounted. 
  // },[formData.name])  // useEffect will only run when there change in specific field(formData.name)

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-center mb-4">{formData?.name}</h2>
        <h2 className="text-center mb-4">{formData?.email}</h2>
        <h2 className="text-center mb-4">{formData?.phone}</h2>
        <h2 className="text-center mb-4">{formData?.message}</h2>
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
              value={formData?.name}
              onChange={(e) => dispatch({ type: 'name', payload: e.target.value })}
              required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
              value={formData?.email}
              onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
              required />

            <div className="mb-3">
              <label htmlFor="phone" className="form-label fw-bold">Your Phone</label>
              <input
                className="form-control"
                id="phone"
                name="phone"
                rows="4"
                placeholder="Enter your phone..."
                value={formData?.phone}
                onChange={(e) => dispatch({ type: 'phone', payload: e.target.value })}
                required />
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
              value={formData?.message}
              onChange={(e) => dispatch({ type: 'message', payload: e.target.value })}
              required />
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-bold">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
