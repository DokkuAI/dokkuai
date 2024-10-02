type svgInputs = {route: string, path: string} ;

export function DetailsIcon({route, path} : svgInputs) {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_1_2127)">
        <rect x="2" y="2" width="48" height="48" rx="4" fill="white" />
        <path
          d="M31.32 30.053C29.683 29.5 28.842 28.293 28.415 27.32C30.773 25.906 32 22.55 32 20C32 16.686 29.314 14 26 14C22.686 14 20 16.686 20 20C20 22.552 21.228 25.91 23.589 27.322C23.164 28.303 22.325 29.519 20.692 30.049C17.812 30.982 15 31.287 15 36V38L37 38V36C37 31.357 34.313 31.064 31.32 30.053Z"
          fill={path === route ? "#171A1F" : "#9095A0"}
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_1_2127"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0901961 0 0 0 0 0.101961 0 0 0 0 0.121569 0 0 0 0.07 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_2127"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0901961 0 0 0 0 0.101961 0 0 0 0 0.121569 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_2127"
            result="effect2_dropShadow_1_2127"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1_2127"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function VerifyIcon({ route, path }: svgInputs) {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_1_2130)">
        <rect x="2" y="2" width="48" height="48" rx="4" fill="white" />
        <path
          d="M27.4 28.6004C26.989 28.8818 26.4977 29.0222 26 29.0004C25.5023 29.0222 25.011 28.8818 24.6 28.6004L14 22.9004L14 33.0004C14 33.796 14.3161 34.5591 14.8787 35.1217C15.4413 35.6843 16.2044 36.0004 17 36.0004L35 36.0004C35.7956 36.0004 36.5587 35.6843 37.1213 35.1217C37.6839 34.5591 38 33.796 38 33.0004V22.9004L27.4 28.6004Z"
          fill={path === route ? "#171A1F" : "#9095A0"}
        />
        <path
          d="M35 16L17 16C16.2044 16 15.4413 16.3161 14.8787 16.8787C14.3161 17.4413 14 18.2044 14 19L14 20C13.9991 20.1803 14.0446 20.3579 14.1321 20.5155C14.2197 20.6731 14.3464 20.8055 14.5 20.9L25.5 26.9C25.6536 26.9808 25.8272 27.0156 26 27C26.1728 27.0156 26.3465 26.9808 26.5 26.9L37.5 20.9C37.6536 20.8055 37.7803 20.6731 37.8679 20.5155C37.9555 20.3579 38.001 20.1803 38 20V19C38 18.2044 37.6839 17.4413 37.1213 16.8787C36.5587 16.3161 35.7957 16 35 16Z"
          fill={path === route ? "#171A1F" : "#9095A0"}
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_1_2130"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0901961 0 0 0 0 0.101961 0 0 0 0 0.121569 0 0 0 0.07 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_2130"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0901961 0 0 0 0 0.101961 0 0 0 0 0.121569 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_2130"
            result="effect2_dropShadow_1_2130"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1_2130"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function WelcomeIcon({ route, path }: svgInputs) {
    return (
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_1_2136)">
          <rect x="2" y="2" width="48" height="48" rx="4" fill="white" />
          <path
            d="M31.0001 16C30.0951 16 29.2701 16.312 28.6001 16.818C29.4751 17.986 30.0001 19.431 30.0001 21V22C30.0001 22.953 29.8071 23.862 29.4601 24.691C29.9351 24.889 30.4541 25 31.0001 25C33.2091 25 35.0001 23.209 35.0001 21V20C35.0001 17.791 33.2091 16 31.0001 16Z"
            fill={path === route ? "#171A1F" : "#9095A0"}
          />
          <path
            d="M23 27C20.239 27 18 24.761 18 22V21C18 18.239 20.239 16 23 16C25.761 16 28 18.239 28 21V22C28 24.761 25.761 27 23 27Z"
            fill={path === route ? "#171A1F" : "#9095A0"}
          />
          <path
            d="M36.8388 28.405C35.5548 27.815 33.3538 27 30.9998 27C29.8048 27 28.6498 27.211 27.6328 27.495C28.0088 27.573 28.3858 27.652 28.7628 27.748C31.6738 28.49 33.7328 31.023 33.9548 34H36.9998C37.5518 34 37.9998 33.552 37.9998 33V30.221C37.9998 29.439 37.5498 28.731 36.8388 28.405Z"
            fill={path === route ? "#171A1F" : "#9095A0"}
          />
          <path
            d="M31 36L15 36C14.448 36 14 35.552 14 35V34.525C14 32.25 15.527 30.248 17.731 29.686C19.205 29.31 21.021 29 23 29C24.979 29 26.795 29.31 28.269 29.686C30.473 30.248 32 32.25 32 34.525V35C32 35.552 31.552 36 31 36Z"
            fill={path === route ? "#171A1F" : "#9095A0"}
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_1_2136"
            x="0"
            y="0"
            width="52"
            height="52"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="0.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0901961 0 0 0 0 0.101961 0 0 0 0 0.121569 0 0 0 0.07 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_2136"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0901961 0 0 0 0 0.101961 0 0 0 0 0.121569 0 0 0 0.12 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_1_2136"
              result="effect2_dropShadow_1_2136"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_1_2136"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
};

export function InviteIcon({ route, path }: svgInputs) {
    
    return (
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_1_2142)">
          <rect x="2" y="2" width="48" height="48" rx="4" fill="white" />
          <path
            d="M16 36L36 36"
            stroke={path === route ? "#171A1F" : "#9095A0"}
            strokeWidth="2.4"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M23 31.0002L18 32.0002L19 27.0002L29.707 16.2932C30.098 15.9022 30.731 15.9022 31.121 16.2932L33.707 18.8793C34.098 19.2703 34.098 19.9033 33.707 20.2933L23 31.0002Z"
            stroke={path === route ? "#171A1F" : "#9095A0"}
            strokeWidth="2.4"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M27 19L31 23"
            stroke={path === route ? "#171A1F" : "#9095A0"}
            strokeWidth="2.4"
            strokeMiterlimit="10"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_1_2142"
            x="0"
            y="0"
            width="52"
            height="52"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="0.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0901961 0 0 0 0 0.101961 0 0 0 0 0.121569 0 0 0 0.07 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_2142"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0901961 0 0 0 0 0.101961 0 0 0 0 0.121569 0 0 0 0.12 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_1_2142"
              result="effect2_dropShadow_1_2142"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_1_2142"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
};

export function WorkspaceIcon({ route, path }: svgInputs) {

  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_242_833)">
        <rect x="2" y="2" width="48" height="48" rx="4" fill="white" />
        <path
          d="M26 18C27.1046 18 28 17.1046 28 16C28 14.8954 27.1046 14 26 14C24.8954 14 24 14.8954 24 16C24 17.1046 24.8954 18 26 18Z"
          fill={path.startsWith(route) ? "#171A1F" : "#9095A0"}
        />
        <path
          d="M36 24C37.1046 24 38 23.1046 38 22C38 20.8954 37.1046 20 36 20C34.8954 20 34 20.8954 34 22C34 23.1046 34.8954 24 36 24Z"
          fill={path.startsWith(route) ? "#171A1F" : "#9095A0"}
        />
        <path
          d="M16 24C17.1046 24 18 23.1046 18 22C18 20.8954 17.1046 20 16 20C14.8954 20 14 20.8954 14 22C14 23.1046 14.8954 24 16 24Z"
          fill={path.startsWith(route) ? "#171A1F" : "#9095A0"}
        />
        <path
          d="M33 38H19V35.677C19 34.466 19.721 33.371 20.84 32.908C21.969 32.44 23.654 32 26 32C28.346 32 30.031 32.44 31.16 32.908C32.279 33.371 33 34.466 33 35.677V38Z"
          fill={path.startsWith(route) ? "#171A1F" : "#9095A0"}
        />
        <path
          d="M22 26C22 23.791 23.791 22 26 22C28.209 22 30 23.791 30 26C30 28.209 28.209 31 26 31C23.791 31 22 28.209 22 26Z"
          fill={path.startsWith(route) ? "#171A1F" : "#9095A0"}
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_242_833"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0901961 0 0 0 0 0.101961 0 0 0 0 0.121569 0 0 0 0.07 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_242_833"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0901961 0 0 0 0 0.101961 0 0 0 0 0.121569 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_242_833"
            result="effect2_dropShadow_242_833"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_242_833"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );

};