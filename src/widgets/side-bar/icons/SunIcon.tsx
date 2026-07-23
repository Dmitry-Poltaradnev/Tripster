import type {SVGProps} from 'react'

type SunIconProps = SVGProps<SVGSVGElement>

export const SunIcon = ({
                            width = 17,
                            height = 17,
                            ...props
                        }: SunIconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 13 13"
            fill="none"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M6.49992 8.66671C7.69654 8.66671 8.66659 7.69666 8.66659 6.50004C8.66659 5.30342 7.69654 4.33337 6.49992 4.33337C5.3033 4.33337 4.33325 5.30342 4.33325 6.50004C4.33325 7.69666 5.3033 8.66671 6.49992 8.66671Z"
                stroke="currentColor"
                strokeWidth={1.08333}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.5 1.08337V2.16671"
                stroke="currentColor"
                strokeWidth={1.08333}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.5 10.8334V11.9167"
                stroke="currentColor"
                strokeWidth={1.08333}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.67041 2.67041L3.43416 3.43416"
                stroke="currentColor"
                strokeWidth={1.08333}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.56592 9.5658L10.3297 10.3295"
                stroke="currentColor"
                strokeWidth={1.08333}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M1.08325 6.5H2.16659"
                stroke="currentColor"
                strokeWidth={1.08333}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.8333 6.5H11.9166"
                stroke="currentColor"
                strokeWidth={1.08333}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3.43416 9.5658L2.67041 10.3295"
                stroke="currentColor"
                strokeWidth={1.08333}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.3297 2.67041L9.56592 3.43416"
                stroke="currentColor"
                strokeWidth={1.08333}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}