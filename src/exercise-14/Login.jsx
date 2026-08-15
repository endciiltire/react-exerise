import React, { useReducer } from "react";
import { formReducer, initialState } from "./formReducer";

const Login = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const nextStep = () => {
    dispatch({
      type: "NEXT_STEP",
    });
  };

  const prevStep = () => {
    dispatch({
      type: "PREV_STEP",
    });
  };

  const resetForm = () => {
    dispatch({
      type: "RESET_FORM",
    });
  };

  const handleSubmit = () => {
    alert("Form submitted successfully!");
    nextStep();
  };

  return (
    <div>
      <h2>Multi-Step Registration</h2>

      {/* STEP 1 */}
      {state.step === 1 && (
        <div>
          <h3>Step 1: Profile</h3>

          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
          />

          <br />
          <br />

          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />

          <br />
          <br />

          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {/* STEP 2 */}
      {state.step === 2 && (
        <div>
          <h3>Step 2: Contact</h3>

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />

          <br />
          <br />

          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={state.phone}
            onChange={handleChange}
          />

          <br />
          <br />

          <button onClick={prevStep}>Back</button>{" "}

          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {/* STEP 3 */}
      {state.step === 3 && (
        <div>
          <h3>Step 3: Review</h3>

          <p>
            <strong>First Name:</strong> {state.firstName}
          </p>

          <p>
            <strong>Last Name:</strong> {state.lastName}
          </p>

          <p>
            <strong>Email:</strong> {state.email}
          </p>

          <p>
            <strong>Phone:</strong> {state.phone}
          </p>

          <button onClick={prevStep}>Back</button>{" "}

          <button onClick={handleSubmit}>Confirm</button>
        </div>
      )}

      {/* STEP 4 */}
      {state.step === 4 && (
        <div>
          <h3>Form Completed</h3>

          <p>Your registration has been submitted successfully.</p>

          <button onClick={resetForm}>Start Over</button>
        </div>
      )}
    </div>
  );
};

export default Login;