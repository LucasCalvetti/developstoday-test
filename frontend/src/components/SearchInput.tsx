import { DetailsIcon } from "../ui/icons/DetailsIcon";

type InputProps = {
    placeholder?: string;
    children?: React.ReactNode;
    className?: string;
    [key: string]: unknown;
};

export function SearchInput({ placeholder, children, className = "", ...props }: InputProps) {
    return (
        <div className="flex gap-2 pl-2 w-fit items-center mb-8 border-[1px] rounded-lg border-black/30 ">
            <DetailsIcon className="w-5 h-5 md:p-[2px]" />
            <input
                {...props}
                type="text"
                className={`bg-transparent !border-r-0 !border-t-0 !border-b-0 focus:!border-l-black/30 !rounded-sm !text-sm md:!text-md w-full md:text-sm md:w-[400px] border-[1px] border-black/30 px-3 py-2 outline-none focus:border-blue-300 ${className}`}
                placeholder={placeholder}
            >
                {children}
            </input>
        </div>
    );
}
