import type {SVGProps} from 'react'

export const ThreeDotIcon = ({
                                 width = 14,
                                 height = 14,
                                 ...props
                             }: SVGProps<SVGSVGElement>) => {
    return (
        <svg width={width}
             height={height}
             viewBox="0 0 14 14"
             fill="none"
             {...props}>
            <path
                d="M6.99984 7.58341C7.322 7.58341 7.58317 7.32225 7.58317 7.00008C7.58317 6.67792 7.322 6.41675 6.99984 6.41675C6.67767 6.41675 6.4165 6.67792 6.4165 7.00008C6.4165 7.32225 6.67767 7.58341 6.99984 7.58341Z"
                stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M11.0833 7.58341C11.4055 7.58341 11.6667 7.32225 11.6667 7.00008C11.6667 6.67792 11.4055 6.41675 11.0833 6.41675C10.7612 6.41675 10.5 6.67792 10.5 7.00008C10.5 7.32225 10.7612 7.58341 11.0833 7.58341Z"
                stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M2.91683 7.58341C3.239 7.58341 3.50016 7.32225 3.50016 7.00008C3.50016 6.67792 3.239 6.41675 2.91683 6.41675C2.59466 6.41675 2.3335 6.67792 2.3335 7.00008C2.3335 7.32225 2.59466 7.58341 2.91683 7.58341Z"
                stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}


