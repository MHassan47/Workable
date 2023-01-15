import { useMutation, useQuery } from "@apollo/client";
import { fieldNameFromStoreName } from "@apollo/client/cache";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { REGISTER } from "../../GraphQL/Mutations";

function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);

  const [createUser, { error, data }] = useMutation(REGISTER, {
    onCompleted: (data) => {
      console.log(data);
    },
  });

  const onSubmitHandler = () => {
    createUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    });

    if (error) {
      console.log(error);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center  w-4/6  h-screen">
      <h1 className="text-3xl font-bold text-blue-600 text-left mb-12">
        Register
      </h1>
      <input
        className="  w-2/5 mb-10 p-2 rounded-lg border-2 border-black"
        type="firstName"
        name="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required={true}
        placeholder="First Name"
      />

      <input
        className="  w-2/5 mb-10 p-2 rounded-lg border-2 border-black"
        type="lastName"
        name="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required={true}
        placeholder="Last Name"
      />
      <input
        className="  w-2/5 mb-10 p-2 rounded-lg border-2 border-black"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required={true}
        placeholder="Email"
      />
      <input
        className="  w-2/5 mb-10 p-2 rounded-lg border-2 border-black"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required={true}
        placeholder="Password"
      />

      <a className=" flex w-2/5 text-center" href="/login">
        Forgot your password?
      </a>
      <button
        onClick={onSubmitHandler}
        className="bg-blue-600 hover:bg-blue-500 h-10 w-20 rounded-lg mt-10 font-semibold text-white"
      >
        Sign In
      </button>
    </div>
  );
}

export default Register;
