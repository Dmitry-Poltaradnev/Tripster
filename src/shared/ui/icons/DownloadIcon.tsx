import type {SVGProps} from 'react'

export const DownloadIcon = ({
                                 width = 15,
                                 height = 15,
                                 ...props
                             }: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="15"
             height="15"
             viewBox="0 0 15 15"
             fill="none"
             {...props}>
            <path
                d="M13.125 9.375V11.875C13.125 12.2065 12.9933 12.5245 12.7589 12.7589C12.5245 12.9933 12.2065 13.125 11.875 13.125H3.125C2.79348 13.125 2.47554 12.9933 2.24112 12.7589C2.0067 12.5245 1.875 12.2065 1.875 11.875V9.375"
                stroke="currentColor" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.375 6.25L7.5 9.375L10.625 6.25" stroke="currentColor" strokeWidth="0.9375" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M7.5 9.375V1.875" stroke="currentColor" strokeWidth="0.9375" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    )
}


