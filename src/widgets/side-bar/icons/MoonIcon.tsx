import type {SVGProps} from 'react'

type MoonIconProps = SVGProps<SVGSVGElement>

export const MoonIcon = ({
                             width = 17,
                             height = 17,
                             ...props
                         }: MoonIconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 11 11"
            fill="none"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M5.41675 0.541626C4.77029 1.18809 4.4071 2.06489 4.4071 2.97913C4.4071 3.89337 4.77029 4.77016 5.41675 5.41663C6.06322 6.06309 6.94001 6.42627 7.85425 6.42627C8.76849 6.42627 9.64529 6.06309 10.2918 5.41663C10.2918 6.38081 10.0058 7.32334 9.47016 8.12503C8.93449 8.92672 8.17312 9.55156 7.28233 9.92054C6.39154 10.2895 5.41134 10.3861 4.46569 10.198C3.52003 10.0099 2.65139 9.54555 1.9696 8.86377C1.28782 8.18199 0.823525 7.31335 0.635422 6.36769C0.447319 5.42203 0.54386 4.44183 0.912838 3.55104C1.28181 2.66025 1.90666 1.89888 2.70835 1.36321C3.51004 0.82754 4.45257 0.541626 5.41675 0.541626Z"
                stroke="currentColor"
                strokeWidth={1.08333}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}