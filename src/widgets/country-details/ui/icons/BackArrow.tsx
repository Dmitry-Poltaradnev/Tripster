import type {SVGProps} from 'react'

export const BackArrowIcon = ({
                                  width = 18,
                                  height = 18,
                                  ...props
                              }: SVGProps<SVGSVGElement>) => {
    return (
        <svg width={width} height={height} viewBox="0 0 18 18" fill="none"  {...props}>
            <path d="M9 14.25L3.75 9L9 3.75" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M14.25 9H3.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
