interface ButtonProps {
    value: string;
}

export default function Button({ value }: ButtonProps) {
    return (
        <div>
            <input className="w-[440px] bg-[#2C73EB] p-1 text-white border-white rounded-md"
            type="submit"
            value={value}
            />
        </div>
    )
}
