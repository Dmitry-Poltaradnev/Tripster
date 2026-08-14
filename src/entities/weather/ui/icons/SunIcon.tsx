import type {SVGProps} from 'react'

export const SunIcon = ({
                            width = 16,
                            height = 16,
                            ...props
                        }: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 16"
            fill="none"
            color="#ffb900"
            {...props}
        >
            <path
                d="M8.00004 10.6666C9.4728 10.6666 10.6667 9.47268 10.6667 7.99992C10.6667 6.52716 9.4728 5.33325 8.00004 5.33325C6.52728 5.33325 5.33337 6.52716 5.33337 7.99992C5.33337 9.47268 6.52728 10.6666 8.00004 10.6666Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M8 1.33325V2.66659" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 13.3333V14.6666" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.28662 3.28662L4.22662 4.22662" stroke="currentColor" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M11.7733 11.7734L12.7133 12.7134" stroke="currentColor" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M1.33337 8H2.66671" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.3334 8H14.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.22662 11.7734L3.28662 12.7134" stroke="currentColor" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M12.7133 3.28662L11.7733 4.22662" stroke="currentColor" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    )
}

