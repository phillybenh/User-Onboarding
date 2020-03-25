import React from "react";

export default function Form(props) {
  return (
    <form>
      {" "}
      {/*onSubmit={formSubmit} */}
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        name="name"
        value="" //{formState.name}
        //onChange={inputChange}
      />
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="text"
        name="email"
        value="" //{formState.name}
        //onChange={inputChange}
      />
      <label htmlFor="pwd">Password: </label>
      <input
        id="pwd"
        type="text"
        name="pwd"
        value="" //{formState.name}
        //onChange={inputChange}
      />
      <input
        type="checkbox"
        name="terms"
        checked={true} //{formState.terms}
        //   onChange={inputChange}
      />
      <label htmlFor="terms" className="terms">
        Terms of Service
      </label>
      <button>Submit</button> {/*disabled={buttonDisabled}*/}
    </form>
  );
}
