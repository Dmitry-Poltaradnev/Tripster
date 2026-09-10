import type {SVGProps} from 'react'

export const TickIcon = ({
                             width = 10,
                             height = 8,
                             ...props
                         }: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 10 8"
            fill="none"
            {...props}
        >
            <path d="M9.20866 0.541748L3.25033 6.50008L0.541992 3.79175" stroke="currentColor" stroke-width="1.08333"
                  stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

