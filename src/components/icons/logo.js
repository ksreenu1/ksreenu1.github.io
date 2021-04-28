import React from 'react';

const IconLogo = () => (
  // <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
  //   <title>Logo</title>
  //   <g transform="translate(-8.000000, -2.000000)">
  //     <g transform="translate(11.000000, 5.000000)">
  //       <path
  //         d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
  //         fill="currentColor"
  //       />
  //       <polygon
  //         id="Shape"
  //         stroke="currentColor"
  //         strokeWidth="5"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         points="39 0 0 22 0 67 39 90 78 68 78 23"
  //       />
  //     </g>
  //   </g>
  // </svg>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
	<defs>
		<image width="87" height="100" id="img1" href="data:image/png;base64,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"/>
		<image width="49" height="70" id="img2" href="data:image/png;base64,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"/>
	</defs>
	<style>
		
	</style>
	<use id="Background" href="#img1" x="6" y="0" />
	<use id=" " href="#img2" x="21" y="19" />

</svg>
);

export default IconLogo;
