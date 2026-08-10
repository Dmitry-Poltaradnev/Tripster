import type {SVGProps} from 'react'

export const DateIcon = ({
                             width = 18,
                             height = 18,
                             ...props
                         }: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 11 11"
            fill="none"
            {...props}
        >
            <g clipPath="url(#clip0_1_10161)" stroke="currentColor">
                <path
                    d="M3.66663 0.916504V2.74984"
                    strokeWidth="0.916667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M7.33337 0.916504V2.74984"
                    strokeWidth="0.916667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8.70833 1.8335H2.29167C1.78541 1.8335 1.375 2.2439 1.375 2.75016V9.16683C1.375 9.67309 1.78541 10.0835 2.29167 10.0835H8.70833C9.21459 10.0835 9.625 9.67309 9.625 9.16683V2.75016C9.625 2.2439 9.21459 1.8335 8.70833 1.8335Z"
                    strokeWidth="0.916667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M1.375 4.5835H9.625"
                    strokeWidth="0.916667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_1_10161">
                    <rect width="11" height="11" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}


