import type {SVGProps} from 'react'

export const CloseIcon = ({
                              width = 18,
                              height = 18,
                              ...props
                          }: SVGProps<SVGSVGElement>) => {
    return (
        <svg width={width}
             height={height}
             viewBox="0 0 18 18"
             fill="none"
             {...props}>
            <path d="M13.5 4.5L4.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M4.5 4.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    )
}
