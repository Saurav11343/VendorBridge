import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "../components/FromInput";
import { signupSchema } from "../../../backend/src/validator/auth.validator";
import { useAuthStore } from "../store/auth.store";

function Signup() {
  const navigate = useNavigate();

  const { signup, isSigningUp } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "vendor",
    },
  });

  const onSubmit = async (data) => {
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
    };

    const result = await signup(payload);

    if (result?.success) {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-lg text-slate-900">
          <div className="mb-8">
            <h1 className="text-center text-3xl font-bold">Create Account</h1>

            <p className="mt-2 text-center text-sm text-slate-500">
              Register to get started
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormInput
              name="name"
              label="Full Name"
              placeholder="Enter your name"
              register={register}
              errors={errors}
            />

            <FormInput
              name="email"
              label="Email"
              type="email"
              placeholder="Enter email"
              register={register}
              errors={errors}
            />

            <FormInput
              name="password"
              label="Password"
              type="password"
              placeholder="Enter password"
              register={register}
              errors={errors}
            />

            <FormInput
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirm password"
              register={register}
              errors={errors}
            />

            <div>
              <label className="mb-1 block font-medium">Role</label>

              <select
                {...register("role")}
                className="w-full rounded-lg border px-3 py-2"
              >
                <option value="vendor">Vendor</option>
                <option value="manager">Manager</option>
                <option value="procurement_officer">Procurement Officer</option>
              </select>

              {errors.role && (
                <p className="text-sm text-red-500">{errors.role.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSigningUp}
              className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {isSigningUp ? "Creating Account..." : "Create Account"}
            </button>

            <p className="text-center text-sm text-slate-600">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="cursor-pointer font-medium text-blue-600"
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
