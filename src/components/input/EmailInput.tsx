type Props = {
  label: string;
  required: boolean;
  name: string;
};

function EmailInput({ label, required, name }: Props) {
  return (
    <label className="block h-full w-full">
      <span className="text-black text-[18px] md:text-[20px]">{label}</span>
      <input
        type="email"
        className="w-full border-b border-gray-[#EEEEEE] focus:outline-none focus:border-black"
        required={required}
        name={name}
      />
    </label>
  );
}

export default EmailInput;
