interface ButtonProps {
  value: string;
}

export default function Button({ value }: ButtonProps) {
  return (
    <div>
      <input
        type="submit"
        className="w-[440px] h-[40px] bg-[#2C73EB] border border-[#2C73EB] rounded-md text-white outline-none cursor-pointer"
        value={value}
      />
    </div>
  );
}
