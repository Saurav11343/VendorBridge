import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "../components/FromInput";
import { loginSchema } from "../../../backend/src/validator/auth.validator";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
        <div className="mb-8">
          <h1 className="text-center text-3xl font-bold text-slate-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-center text-sm text-slate-500">
            Sign in to continue
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 text-slate-900"
        >
          <FormInput
            name="email"
            label="Email"
            type="email"
            placeholder="Enter Email"
            register={register}
            errors={errors}
          />

          <FormInput
            name="password"
            label="Password"
            type="password"
            placeholder="Enter Password"
            register={register}
            errors={errors}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-all duration-200 hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

          <p className="text-center text-sm text-slate-600">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="cursor-pointer font-medium text-blue-600 hover:text-blue-700"
            >
              Register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
