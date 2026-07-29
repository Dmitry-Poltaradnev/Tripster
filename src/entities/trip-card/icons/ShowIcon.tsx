import type {SVGProps} from 'react'

export const ShowIcon = ({
                             width = 5,
                             height = 9,
                             ...props
                         }: SVGProps<SVGSVGElement>) => {
    return (
        <svg width={width}
             height={height}
             viewBox="0 0 5 9"
             fill="none"
             {...props}
        >
            <path d="M0.583344 7.58333L4.08334 4.08333L0.583344 0.583328" stroke="currentColor" strokeWidth="1.16667"
                  strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
