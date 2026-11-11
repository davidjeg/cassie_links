"use client";

export default function FuzzyText({ children = "cassierbn" }) {
  return (
    <svg viewBox="0 0 230 100" width="auto" height={"40"} className="block">
      <defs>
        <filter id="fuzzy">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="400"
            numOctaves="2"
            seed="2"
          >
            <animate
              attributeName="baseFrequency"
              values="0.04;0.06;0.03;0.05;0.04"
              dur="1.0s"
              repeatCount="indefinite"
            />
          </feTurbulence>

          <feDisplacementMap
            in="SourceGraphic"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>

      <text
        x="50%"
        y="65%"
        textAnchor="middle"
        fill="white"
        fontSize="75"
        fontWeight="900"
        filter="url(#fuzzy)"
      >
        {children}
      </text>
    </svg>
  );
}
