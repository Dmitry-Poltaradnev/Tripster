import type {SVGProps} from 'react'

export const RainIcon = ({
                             width = 16,
                             height = 16,
                             ...props
                         }: SVGProps<SVGSVGElement>) => {
    return (
        <svg width={width} height={height} viewBox="0 0 16 16" fill="none" {...props}>
            <path
                d="M2.66669 9.9326C2.17138 9.42654 1.79773 8.81441 1.57405 8.14256C1.35036 7.47071 1.28249 6.75676 1.3756 6.0548C1.4687 5.35284 1.72033 4.68127 2.11142 4.09096C2.50251 3.50064 3.02281 3.00708 3.63291 2.64763C4.24301 2.28819 4.92691 2.0723 5.6328 2.01632C6.33869 1.96033 7.04807 2.06572 7.7072 2.32451C8.36633 2.58329 8.95793 2.98867 9.43718 3.50996C9.91643 4.03124 10.2708 4.65475 10.4734 5.33327H11.6667C12.3104 5.33319 12.937 5.54015 13.454 5.92356C13.971 6.30697 14.351 6.84651 14.5379 7.46247C14.7247 8.07843 14.7085 8.73815 14.4916 9.34418C14.2747 9.95021 13.8686 10.4704 13.3334 10.8279"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M10.6666 9.33325V13.3333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.33337 9.33325V13.3333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 10.6667V14.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
