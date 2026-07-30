import type {SVGProps} from 'react'

export const PlusIcon = ({
                             width = 18,
                             height = 18,
                             ...props
                         }: SVGProps<SVGSVGElement>) => {
    return (
        <svg width={width}
             height={height}
             viewBox="0 0 18 18" fill="none"
             {...props}>
            <path d="M3.75 9H14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M9 3.75V14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    )
}
