type Props = {
  label: string;
};

function TextInput({ label }: Props) {
  return (
    <label className="block h-full w-full">
      <span className="text-black text-[18px] md:text-[20px]">{label}</span>
      <input
        type="text"
        className="w-full border-b border-gray-300 focus:outline-none focus:border-black"
      />
    </label>
  );
}

export default TextInput;
