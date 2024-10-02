import type { SVGProps } from "react"
const Clock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={ 2 }
    className="lucide lucide-clock-3"
    { ...props }
  >
    <circle cx={ 12 } cy={ 12 } r={ 10 } />
    <path d="M12 6v6h4.5" />
  </svg>
)
export default Clock
