import type {SVGProps} from 'react'

type HomePageIconProps = SVGProps<SVGSVGElement>

export const HomePageIcon = ({
                                 width = 17,
                                 height = 17,
                                 ...props
                             }: HomePageIconProps) => {
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
                d="M10.625 14.875V9.20833C10.625 9.02047 10.5504 8.8403 10.4175 8.70747C10.2847 8.57463 10.1045 8.5 9.91667 8.5H7.08333C6.89547 8.5 6.7153 8.57463 6.58247 8.70747C6.44963 8.8403 6.375 9.02047 6.375 9.20833V14.875"
                stroke="currentColor"
                strokeWidth={1.55833}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.125 7.08329C2.12495 6.87721 2.16986 6.67361 2.2566 6.48667C2.34334 6.29974 2.46982 6.13398 2.62721 6.00096L7.58554 1.75167C7.84124 1.53556 8.16521 1.41699 8.5 1.41699C8.83479 1.41699 9.15876 1.53556 9.41446 1.75167L14.3728 6.00096C14.5302 6.13398 14.6567 6.29974 14.7434 6.48667C14.8301 6.67361 14.875 6.87721 14.875 7.08329V13.4583C14.875 13.834 14.7257 14.1943 14.4601 14.46C14.1944 14.7257 13.8341 14.875 13.4583 14.875H3.54167C3.16594 14.875 2.80561 14.7257 2.53993 14.46C2.27426 14.1943 2.125 13.834 2.125 13.4583V7.08329Z"
                stroke="currentColor"
                strokeWidth={1.55833}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}