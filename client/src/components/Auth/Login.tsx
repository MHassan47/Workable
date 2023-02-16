import { useMutation, useQuery } from "@apollo/client";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../GraphQL/Mutations";
import LandingLeft from "./LandingLeft";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);

  const [loginUser, { error, data }] = useMutation(LOGIN, {
    onCompleted: (data) => {
      localStorage.setItem("authorization", data.login.accessToken);
      localStorage.setItem("userId", data.login.user);
      navigate("/home");
    },
  });

  const onSubmitHandler = () => {
    loginUser({
      variables: {
        email: email,
        password: password,
      },
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-row w-full">
      <LandingLeft />
      <div className=" flex flex-col justify-center items-center  w-3/5  h-screen">
        <h1 className="text-3xl font-bold text-sky-400 text-left mb-12">
          Sign In
        </h1>
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
          className="bg-sky-600 h-10 w-20 rounded-lg mt-10"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;
