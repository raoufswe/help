import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg
      className="prefix__icon"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      overflow="hidden"
      {...props}
    >
      <path d="M901.514 502.703l-6.981-12.841c-25.626-46.965-63.343-91.64-108.63-129.244l82.689-51.67c8.152-5.095 10.63-15.83 5.537-23.983-5.094-8.152-15.831-10.63-23.982-5.536l-93.662 58.526a507.333 507.333 0 00-13.255-9.15c-38.334-25.537-78.532-44.688-119.322-57.05l40.708-125.294c2.971-9.143-2.03-18.96-11.173-21.93s-18.96 2.032-21.93 11.173L590.114 263.11c-25.067-5.25-50.224-7.94-75.183-7.94-24.961 0-50.118 2.688-75.181 7.936l-41.397-127.404c-2.97-9.142-12.787-14.144-21.93-11.174-9.141 2.97-14.143 12.788-11.174 21.93l40.707 125.29c-40.793 12.363-80.982 31.517-119.297 57.058a504.37 504.37 0 00-13.258 9.16l-93.682-58.54c-8.152-5.094-18.888-2.617-23.983 5.536s-2.615 18.888 5.538 23.982l82.724 51.695c-38.225 31.78-70.993 68.592-95.599 107.56a383.919 383.919 0 00-13.073 22.068l-2.452 4.5-4.338 7.599a18.422 18.422 0 00.007 18.278l7.223 12.625c33.16 60.86 86.74 117.945 150.885 160.752 72.325 48.267 151.263 73.78 228.278 73.78 76.985 0 155.932-25.513 228.304-73.778 64.194-42.811 117.92-99.949 151.302-160.923l6.968-12.792a18.41 18.41 0 00.01-17.606zm-39.307 12.745c-58.632 107.098-196.744 215.517-347.274 215.517-150.766 0-288.634-108.399-346.9-215.476a22.324 22.324 0 00-.19-.341l-2.091-3.655 2.097-3.675c.067-.117.131-.234.196-.351a339.017 339.017 0 0111.133-18.985C243.072 388.096 373.522 292.41 514.936 292.41c150.768 0 288.636 108.398 346.901 215.474.063.115.126.23.192.342l1.573 2.75h.48l.28.516-2.155 3.956zM514.933 408.653c56.705 0 102.836 46.132 102.836 102.835 0 56.703-46.131 102.835-102.836 102.835-56.703 0-102.835-46.132-102.835-102.835 0-56.703 46.132-102.835 102.835-102.835m0-36.839c-77.14 0-139.674 62.534-139.674 139.674 0 77.141 62.534 139.674 139.674 139.674 77.141 0 139.675-62.533 139.675-139.674 0-77.14-62.534-139.674-139.675-139.674z" />
    </svg>
  )
}

export default SvgComponent
