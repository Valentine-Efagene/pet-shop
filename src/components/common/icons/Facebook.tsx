import { SVGAttributes } from "react";

export default function Facebook(props: SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      {...props}
    >
      <path
        d="M8.14655 4.14456C8.14655 1.92192 6.34474 0.120117 4.1221 0.120117C1.89946 0.120117 0.0976562 1.92192 0.0976562 4.14456C0.0976562 6.15328 1.56934 7.8182 3.49328 8.12012V5.30788H2.47145V4.14456H3.49328V3.25793C3.49328 2.2493 4.0941 1.69217 5.01337 1.69217C5.45368 1.69217 5.91424 1.77077 5.91424 1.77077V2.76116H5.40676C4.90683 2.76116 4.75092 3.07138 4.75092 3.38964V4.14456H5.86708L5.68865 5.30788H4.75092V8.12012C6.67487 7.8182 8.14655 6.15328 8.14655 4.14456Z"
        fill="#F3F3F3"
      />
    </svg>
  );
}
