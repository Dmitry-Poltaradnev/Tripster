import type {SVGProps} from 'react'

type TripsterIconProps = SVGProps<SVGSVGElement>

export const TripsterIcon = ({
                                 width = 32,
                                 height = 32,
                                 ...props
                             }: TripsterIconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 28 28"
            fill="none"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z"
                fill="#7C6FFF"
            />
            <g clipPath="url(#clip0_tripster)">
                <path
                    d="M14 24.3125C19.6954 24.3125 24.3125 19.6954 24.3125 14C24.3125 8.30456 19.6954 3.6875 14 3.6875C8.30456 3.6875 3.6875 8.30456 3.6875 14C3.6875 19.6954 8.30456 24.3125 14 24.3125Z"
                    stroke="white"
                    strokeOpacity={0.25}
                    strokeWidth={0.6875}
                />
                <path d="M14 5.75L15.925 12.075L14 10.9062L12.075 12.075L14 5.75Z" fill="white"/>
                <path
                    d="M14 22.25L12.075 15.925L14 17.0938L15.925 15.925L14 22.25Z"
                    fill="white"
                    fillOpacity={0.4}
                />
                <path
                    d="M5.75 14L12.075 12.075L10.9062 14L12.075 15.925L5.75 14Z"
                    fill="white"
                    fillOpacity={0.4}
                />
                <path
                    d="M22.25 14L15.925 15.925L17.0938 14L15.925 12.075L22.25 14Z"
                    fill="white"
                    fillOpacity={0.4}
                />
                <path
                    d="M14 15.375C15.3289 15.375 16.4062 14.2977 16.4062 12.9688C16.4062 11.6398 15.3289 10.5625 14 10.5625C12.6711 10.5625 11.5938 11.6398 11.5938 12.9688C11.5938 14.2977 12.6711 15.375 14 15.375Z"
                    fill="white"
                />
                <path
                    d="M14 15.375C13.0833 16.75 13.0833 18.2396 14 19.8438C14.9167 18.2396 14.9167 16.75 14 15.375Z"
                    fill="white"
                />
                <path
                    d="M14 14C14.5695 14 15.0312 13.5383 15.0312 12.9688C15.0312 12.3992 14.5695 11.9375 14 11.9375C13.4305 11.9375 12.9688 12.3992 12.9688 12.9688C12.9688 13.5383 13.4305 14 14 14Z"
                    fill="#7C6FFF"
                />
            </g>
            <defs>
                <clipPath id="clip0_tripster">
                    <rect width="22" height="22" fill="white" transform="translate(3 3)"/>
                </clipPath>
            </defs>
        </svg>
    )
}