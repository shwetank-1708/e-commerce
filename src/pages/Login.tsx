import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[80vh] gap-4">
        <h1 className="text-5xl p-4 font-bold">Welcome to Centefer</h1>
        <h3 className="text-4xl p-4 font-bold">Login</h3>
        <div className="border-2 w-[30%] rounded-xl">
          <input
            type="email"
            placeholder="Enter Your Email Id"
            className="p-4 w-[100%] focus:outline-none rounded-xl text-xl"
          ></input>
        </div>
        <div className="border-2 w-[30%] rounded-xl">
          <input
            type="password"
            placeholder="Enter Your Password"
            className="p-4 w-[100%] focus:outline-none rounded-xl text-xl"
          ></input>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-full text-xl">
          Login
        </button>

        <NavLink to="/signup">
          Don't have an account? Sign Up here for free.
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
