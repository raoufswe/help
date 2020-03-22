const maxmin = (fmax, fmin = 11, smin = 320, smax = 1920) =>
  `calc(${fmin}px + ${fmax - fmin} * (100vw - ${smin}px) / ${smax - smin} )`;
  
export default maxmin;
