import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg width={272} height={160} viewBox="0 0 272 160" {...props}>
      <title>{'Rectangle'}</title>
      <defs>
        <filter
          x="-21.9%"
          y="-11.9%"
          width="143.9%"
          height="123.8%"
          filterUnits="objectBoundingBox"
          id="prefix__a"
        >
          <feOffset dy={4} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation={11}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.503649779 0 0 0 0 0.634555332 0 0 0 0 1 0 0 0 0.196473053 0"
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-6.9%"
          y="-9.5%"
          width="113.8%"
          height="121.4%"
          filterUnits="objectBoundingBox"
          id="prefix__d"
        >
          <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation={5.5}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.383798927 0 0 0 0 0.547392132 0 0 0 0 1 0 0 0 0.278702446 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <filter
          x="-25.5%"
          y="-25.5%"
          width="151.1%"
          height="151.1%"
          filterUnits="objectBoundingBox"
          id="prefix__g"
        >
          <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation={2}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.117829778 0 0 0 0 0.206944976 0 0 0 0 0.453497024 0 0 0 0.328521286 0"
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-12.7%"
          y="-32.3%"
          width="125.5%"
          height="190.3%"
          filterUnits="objectBoundingBox"
          id="prefix__i"
        >
          <feOffset dy={4} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation={4}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.298039216 0 0 0 0 0.439215686 0 0 0 0 0.843137255 0 0 0 0.240658967 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <path
          d="M10 0h208c5.523 0 10 4.477 10 10v401c0 5.523-4.477 10-10 10H10c-5.523 0-10-4.477-10-10V10C0 4.477 4.477 0 10 0z"
          id="prefix__b"
        />
        <path
          d="M20.252-68.38h186.823c18.225 0 33 14.775 33 33v97.244c0 18.226-14.775 33-33 33H20.252c-18.226 0-33-14.774-33-33v-97.243c0-18.226 14.774-33 33-33z"
          id="prefix__e"
        />
        <path
          d="M350 228h100a5 5 0 015 5v21a5 5 0 01-5 5H350a5 5 0 01-5-5v-21a5 5 0 015-5z"
          id="prefix__j"
        />
        <linearGradient
          x1="1.552%"
          y1="30.532%"
          x2="100%"
          y2="69.742%"
          id="prefix__f"
        >
          <stop stopColor="#7D96D6" offset="0%" />
          <stop stopColor="#4269D7" offset="100%" />
        </linearGradient>
        <circle id="prefix__h" cx={23.5} cy={23.5} r={23.5} />
      </defs>
      <g transform="translate(-264 -78)" fill="none" fillRule="evenodd">
        <path fill="#F7FBFF" d="M0 0h859v674H0z" />
        <circle fill="#FFF" cx={692.5} cy={110.5} r={237.5} />
        <g filter="url(#prefix__a)" transform="translate(286 96)">
          <mask id="prefix__c" fill="#fff">
            <use xlinkHref="#prefix__b" />
          </mask>
          <use fill="#FFF" xlinkHref="#prefix__b" />
          <g mask="url(#prefix__c)" transform="rotate(-11 113.663 13.243)">
            <use fill="#000" filter="url(#prefix__d)" xlinkHref="#prefix__e" />
            <use fill="url(#prefix__f)" xlinkHref="#prefix__e" />
          </g>
        </g>
        <circle fillOpacity={0.09} fill="#FFF" cx={326} cy={147} r={29} />
        <g filter="url(#prefix__g)" transform="translate(303 123)">
          <use fill="#B0C5FF" xlinkHref="#prefix__h" />
        </g>
        <text fontFamily="Helvetica" fontSize={13} fill="#FFF">
          <tspan x={365} y={142}>
            {'Dr. Jessica '}
          </tspan>
          <tspan x={365} y={158}>
            {'James'}
          </tspan>
        </text>
        <text opacity={0.7} fontFamily="Helvetica" fontSize={10} fill="#FFF">
          <tspan x={365} y={157}>
            {'Dermathologist'}
          </tspan>
        </text>
        <use fill="#000" filter="url(#prefix__i)" xlinkHref="#prefix__j" />
        <use fill="#628CFF" xlinkHref="#prefix__j" />
        <text fontFamily="Helvetica" fontSize={10} fill="#FFF">
          <tspan x={381} y={247}>
            {'Add Branch'}
          </tspan>
        </text>
      </g>
    </svg>
  )
}

export default SvgComponent
