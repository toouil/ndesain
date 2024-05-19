export const NAV = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 6">
    <path
      fill="currentcolor"
      strokeLinecap="round"
      strokeWidth="2"
      d="M1 1h18M1 5h18"
    ></path>
  </svg>
);

export const XMARK = () => (
  <svg
    width={25}
    height={25}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const SHORT_ARROW = ({ deg = 0 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    fill="none"
    viewBox="0 0 15 15"
    style={{ rotate: `${deg}deg` }}
  >
    <path
      fill="currentcolor"
      d="M1.136 6.5a1 1 0 000 2v-2zm13.435 1.707a1 1 0 000-1.414L8.207.429a1 1 0 00-1.414 1.414L12.45 7.5l-5.657 5.657a1 1 0 101.414 1.414l6.364-6.364zM1.136 8.5h12.728v-2H1.136v2z"
    ></path>
  </svg>
);

export const LONG_ARROW = ({ deg = 0 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="16"
    fill="none"
    viewBox="0 0 28 16"
    style={{ rotate: `${deg}deg` }}
  >
    <path
      fill="currentcolor"
      d="M1 7a1 1 0 000 2V7zm26.167 1.707a1 1 0 000-1.414L20.803.929a1 1 0 10-1.414 1.414L25.046 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM1 9h25.46V7H1v2z"
    ></path>
  </svg>
);

export const EMAIL = () => (
  <svg
    width={25}
    height={25}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

export const PHONE = () => (
  <svg
    width={25}
    height={25}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
export const FACEBOOK = () => (
  <svg
    width={25}
    height={25}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
export const INSTAGRAM = () => (
  <svg
    width={25}
    height={25}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <path d="M17.5 6.5h.01" />
  </svg>
);
export const LINKEDIN = () => (
  <svg
    width={25}
    height={25}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <path d="M2 9h4v12H2z" />
    <path d="M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z" />
  </svg>
);
export const TWITTER = () => (
  <svg
    width={25}
    height={25}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0 0 23 3Z" />
  </svg>
);
