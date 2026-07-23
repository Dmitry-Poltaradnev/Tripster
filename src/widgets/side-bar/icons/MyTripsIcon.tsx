import type {SVGProps} from 'react'

type MyTripsIconProps = SVGProps<SVGSVGElement>

export const MyTripsIcon = ({
                                width = 17,
                                height = 17,
                                ...props
                            }: MyTripsIconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 17 17"
            fill="none"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M11.3334 14.1666V2.83329C11.3334 2.45757 11.1842 2.09723 10.9185 1.83156C10.6528 1.56588 10.2925 1.41663 9.91675 1.41663H7.08341C6.70769 1.41663 6.34736 1.56588 6.08168 1.83156C5.816 2.09723 5.66675 2.45757 5.66675 2.83329V14.1666"
                stroke="currentColor"
                strokeWidth={1.0625}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.1667 4.25H2.83341C2.05101 4.25 1.41675 4.88426 1.41675 5.66667V12.75C1.41675 13.5324 2.05101 14.1667 2.83341 14.1667H14.1667C14.9492 14.1667 15.5834 13.5324 15.5834 12.75V5.66667C15.5834 4.88426 14.9492 4.25 14.1667 4.25Z"
                stroke="currentColor"
                strokeWidth={1.0625}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}