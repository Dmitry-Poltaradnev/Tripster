import type {SVGProps} from 'react'

type ShareIconProps = SVGProps<SVGSVGElement>

export const ShareIcon = ({
                              width = 17,
                              height = 17,
                              ...props
                          }: ShareIconProps) => {
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
                d="M12.75 5.66669C13.9236 5.66669 14.875 4.71529 14.875 3.54169C14.875 2.36808 13.9236 1.41669 12.75 1.41669C11.5764 1.41669 10.625 2.36808 10.625 3.54169C10.625 4.71529 11.5764 5.66669 12.75 5.66669Z"
                stroke="currentColor"
                strokeWidth={1.0625}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.25 10.625C5.4236 10.625 6.375 9.6736 6.375 8.5C6.375 7.32639 5.4236 6.375 4.25 6.375C3.07639 6.375 2.125 7.32639 2.125 8.5C2.125 9.6736 3.07639 10.625 4.25 10.625Z"
                stroke="currentColor"
                strokeWidth={1.0625}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.75 15.5833C13.9236 15.5833 14.875 14.6319 14.875 13.4583C14.875 12.2847 13.9236 11.3333 12.75 11.3333C11.5764 11.3333 10.625 12.2847 10.625 13.4583C10.625 14.6319 11.5764 15.5833 12.75 15.5833Z"
                stroke="currentColor"
                strokeWidth={1.0625}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.08447 9.56958L10.9224 12.3887"
                stroke="currentColor"
                strokeWidth={1.0625}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.9153 4.61127L6.08447 7.43043"
                stroke="currentColor"
                strokeWidth={1.0625}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}