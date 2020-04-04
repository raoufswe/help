import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg height={30} viewBox="0 0 64 64" width={30} {...props}>
      <path d="M34 56l2 6h-8l2-6z" fill="#ff826e" />
      <path d="M35.81 52.63L34 56h-4l-1.81-3.37L32 51z" fill="#fc6e51" />
      <path
        d="M19 62h-8v-3.1c0-2.52.88-4.96 2.5-6.9.8-.97 1.77-1.78 2.84-2.41 1.08-.63 2.26-1.07 3.51-1.29l3.15-.57L25 54l3.19-1.37L30 56l-2 6zM45 62h-9l-2-6 1.81-3.37L39 54l2-6.27 3.15.57c2.49.45 4.74 1.76 6.35 3.7.81.97 1.44 2.06 1.86 3.23s.64 2.41.64 3.67V62z"
        fill="#fcd770"
      />
      <path
        d="M32 51l-3.81 1.63L25 54l-2-6.27 4-.73zM41 47.73L39 54l-3.19-1.37L32 51l5-4z"
        fill="#ffc729"
      />
      <path
        d="M51.06 8.84l-3.6 2.25C43.14 7.89 37.79 6 32 6c-7.18 0-13.68 2.91-18.38 7.62C8.91 18.32 6 24.82 6 32v2H2v-2c0-8.28 3.36-15.78 8.79-21.21S23.72 2 32 2c7.24 0 13.88 2.56 19.06 6.84zM62 32v2h-4v-2c0-7.01-2.78-13.38-7.29-18.05l1.81-3.83C58.36 15.59 62 23.37 62 32z"
        fill="#ccd1d9"
      />
      <path
        d="M32 6v8h-1.95C23.39 14 18 19.39 18 26.05c0 1.29.21 2.58.62 3.8l.32.97c-.58.55-.94 1.32-.94 2.18 0 .35.06.69.18 1H6v-2c0-7.18 2.91-13.68 7.62-18.38C18.32 8.91 24.82 6 32 6zM47.46 11.09l-7.36 4.6C38.3 14.62 36.2 14 33.95 14H32V6c5.79 0 11.14 1.89 15.46 5.09zM58 34H45.82c.12-.31.18-.65.18-1 0-.86-.36-1.63-.94-2.18l.32-.97c.41-1.22.62-2.51.62-3.8 0-.63-.05-1.25-.14-1.86l4.85-10.24A25.913 25.913 0 0158 32z"
        fill="#69d6f4"
      />
      <path
        d="M51.06 8.84L54 7l-1.48 3.12-1.81 3.83-4.85 10.24c-.4-2.58-1.62-4.89-3.39-6.66-.71-.71-1.5-1.33-2.37-1.84l7.36-4.6z"
        fill="#ff826e"
      />
      <path
        d="M42 26c0 1.1-.9 2-2 2h-7c-.83 0-1.58-.34-2.12-.88l-.04-.04-.05.03A8.58 8.58 0 0127 28c-.83 0-1.58-.34-2.12-.88S24 25.83 24 25c-1.28 1.28-2 3.02-2 4.83V30h-1c-.8 0-1.53.32-2.06.82l-.32-.97c-.41-1.22-.62-2.51-.62-3.8C18 19.39 23.39 14 30.05 14h3.9c2.25 0 4.35.62 6.15 1.69.87.51 1.66 1.13 2.37 1.84 1.77 1.77 2.99 4.08 3.39 6.66.09.61.14 1.23.14 1.86 0 1.29-.21 2.58-.62 3.8l-.32.97c-.53-.5-1.26-.82-2.06-.82h-1z"
        fill="#656d78"
      />
      <path
        d="M36.05 44.15L37 47l-5 4-5-4 .95-2.85v-.01a9.966 9.966 0 008.1 0zM46 33c0 .35-.06.69-.18 1-.14.43-.39.81-.7 1.12-.54.54-1.29.88-2.12.88h-1.05c.03-.33.05-.66.05-1v-5h1c.8 0 1.53.32 2.06.82.58.55.94 1.32.94 2.18z"
        fill="#f0d0b4"
      />
      <path
        d="M42 30v5a9.974 9.974 0 01-5.95 9.14 9.966 9.966 0 01-8.1 0 9.9 9.9 0 01-3.02-2.07A9.944 9.944 0 0122 35v-5.17c0-1.81.72-3.55 2-4.83 0 .83.34 1.58.88 2.12S26.17 28 27 28c1.32 0 2.61-.31 3.79-.89l.05-.03.04.04c.54.54 1.29.88 2.12.88h7c1.1 0 2-.9 2-2z"
        fill="#f0d0b4"
      />
      <path
        d="M22.05 36H21c-.83 0-1.58-.34-2.12-.88-.31-.31-.56-.69-.7-1.12-.12-.31-.18-.65-.18-1 0-.86.36-1.63.94-2.18.53-.5 1.26-.82 2.06-.82h1v5c0 .34.02.67.05 1z"
        fill="#f0d0b4"
      />
      <circle cx={8} cy={44} fill="#ccd1d9" r={6} />
      <circle cx={56} cy={44} fill="#ccd1d9" r={6} />
      <g>
        <path d="M31 31h-2a1 1 0 01-2 0h-2c0 1.654 1.346 3 3 3s3-1.346 3-3zM36 32a1 1 0 01-1-1h-2c0 1.654 1.346 3 3 3s3-1.346 3-3h-2a1 1 0 01-1 1zM35 37.838C34.568 39.131 33.363 40 32 40s-2.568-.869-3-2.164l-.052-.154-1.896.637.052.152C27.807 40.582 29.774 42 32 42s4.193-1.418 4.896-3.527l.052-.154-1.896-.637z" />
        <path d="M53.73 9.905l2.635-5.562-5.235 3.272A31.046 31.046 0 0032 1C14.906 1 1 14.906 1 32v3h16.556c.694 1.19 1.97 2 3.444 2h.191a11.026 11.026 0 005.538 7.651l-.491 1.471-6.57 1.195a11.798 11.798 0 00-6.939 4.046A11.794 11.794 0 0010 58.9V63h44v-4.1c0-2.749-.969-5.426-2.729-7.537a11.804 11.804 0 00-6.939-4.046l-6.57-1.195-.491-1.471A11.026 11.026 0 0042.809 37H43c1.474 0 2.75-.81 3.444-2H63v-3c0-8.286-3.375-16.292-9.27-22.095zM43 26c0-1.654-1.346-3-3-3h-3v2h3a1 1 0 010 2h-7c-1.103 0-2-.897-2-2s.897-2 2-2v-2c-2.206 0-4 1.794-4 4 0 .574.127 1.118.345 1.612A7.49 7.49 0 0127 27c-1.103 0-2-.897-2-2s.897-2 2-2v-2c-2.058 0-3.738 1.568-3.956 3.569A7.891 7.891 0 0021.048 29H21c-.532 0-1.038.109-1.502.298A11.012 11.012 0 0119 26.045C19 19.955 23.955 15 30.045 15h3.91C40.045 15 45 19.955 45 26.045c0 1.105-.172 2.198-.498 3.253A3.972 3.972 0 0043 29zM33 7.039a24.73 24.73 0 0112.627 4.015l-5.559 3.474A12.964 12.964 0 0033.955 13H33zm8.915 8.694l9.72-6.075-5.53 11.673a13.097 13.097 0 00-4.19-5.598zM3 32C3 16.01 16.01 3 32 3c6.24 0 12.319 2.05 17.301 5.758l-1.823 1.139A26.765 26.765 0 0032 5C17.112 5 5 17.112 5 32v1H3zm4 1v-1C7 18.55 17.677 7.553 31 7.025V13h-.955C22.852 13 17 18.852 17 26.045c0 1.404.226 2.792.669 4.126l.145.436A3.961 3.961 0 0017 33zm12 0c0-1.103.897-2 2-2v4c-1.103 0-2-.897-2-2zm7.73 15.065l3.341 2.673-4.454 1.909-1.32-4.14zM30.721 57h2.559l1.334 4h-5.226zm2.681-2h-2.805l-1.009-1.879L32 52.088l2.412 1.034zM12 58.9c0-2.282.805-4.504 2.266-6.256a9.792 9.792 0 015.76-3.36l2.288-.416 2.068 6.484 3.361-1.44 1.172 2.181L27.28 61H20v-4h-2v4h-6zm37.734-6.255A9.782 9.782 0 0152 58.9V61h-6v-4h-2v4h-7.28l-1.635-4.907 1.172-2.181 3.361 1.44 2.068-6.484 2.288.416a9.787 9.787 0 015.76 3.361zm-10.033-4.138l-1.32 4.14-4.454-1.909 3.341-2.673zm-3.87-1.853L32 49.719l-3.831-3.065.403-1.208c1.08.355 2.23.554 3.428.554s2.348-.199 3.428-.554zM32 44c-4.963 0-9-4.037-9-9v-5.172c0-.926.23-1.839.649-2.658A3.992 3.992 0 0027 29a9.536 9.536 0 003.672-.76c.658.473 1.458.76 2.328.76h7c.352 0 .686-.072 1-.184V35c0 4.963-4.037 9-9 9zm11-9v-4c1.103 0 2 .897 2 2s-.897 2-2 2zm3.186-4.393l.145-.436A13.07 13.07 0 0047 26.045c0-.57-.049-1.128-.12-1.678l4.093-8.64A24.851 24.851 0 0157 32v1H47c0-.901-.31-1.724-.814-2.393zM61 33h-2v-1c0-6.798-2.52-13.243-7.098-18.235l.922-1.946C58.106 17.252 61 24.365 61 32z" />
        <path d="M57 41h-2v2h-2v2h2v2h2v-2h2v-2h-2z" />
        <path d="M56 37c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zM5 43h6v2H5z" />
        <path d="M15 44c0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7 7-3.141 7-7zm-7 5c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
      </g>
    </svg>
  )
}

export default SvgComponent
