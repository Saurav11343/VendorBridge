function FormInput({
  name,
  label,
  register,
  errors,
  type = "text",
  placeholder,
}) {
  return (
    <div className="space-y-1">
      <label className="block font-medium">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full rounded-lg border px-3 py-2"
      />

      {errors[name] && (
        <p className="text-sm text-red-500">{errors[name].message}</p>
      )}
    </div>
  );
}

export default FormInput;
