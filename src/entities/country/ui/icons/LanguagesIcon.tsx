import type {SVGProps} from 'react'

export const LanguagesIcon = ({
                                  width = 18,
                                  height = 18,
                                  ...props
                              }: SVGProps<SVGSVGElement>) => {
    return (
        <svg width={width}
             height={height}
             viewBox="0 0 12 12"
             fill="none"
             {...props}>
            <path d="M2.5 4L5.5 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 7L5 4L6 2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 2.5H7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.5 1H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 11L8.5 6L6 11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 9H10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}


