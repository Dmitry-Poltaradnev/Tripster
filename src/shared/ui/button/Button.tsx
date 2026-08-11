import type {ButtonHTMLAttributes, ReactNode} from "react";

type BtnProps = {
    children: ReactNode
    className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({children, className, ...props}: BtnProps) => {
    return (
        <button className={className} {...props}>{children}</button>
    );
};

