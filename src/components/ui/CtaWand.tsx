type CtaWandProps = {
  className?: string
}

export function CtaWand({ className = "size-4" }: CtaWandProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.4 19.6 14.9 9.1"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="m13.1 7.3 3.6 3.6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M17.7 2.7 18.8 5l2.5 1.1-2.5 1.1-1.1 2.5-1.1-2.5-2.5-1.1L16.6 5l1.1-2.3Z"
        fill="currentColor"
      />
      <path
        d="m6.2 4.8.5 1.1 1.1.5-1.1.5-.5 1.1-.5-1.1-1.1-.5 1.1-.5.5-1.1ZM19.2 14.5l.6 1.3 1.3.6-1.3.6-.6 1.3-.6-1.3-1.3-.6 1.3-.6.6-1.3Z"
        fill="currentColor"
      />
    </svg>
  )
}
