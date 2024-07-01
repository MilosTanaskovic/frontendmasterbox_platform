import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MetricDisplayProps {
  imgUrl: string;
  value: string | number;
  title: string;
  alt: string;
  imgWidth?: number; // default 16px
  imgHeight?: number; // default 16px
  href?: string;
  isAuthor?: boolean;
  textStyles?: string;
}

const MetricDisplay: React.FC<MetricDisplayProps> = ({
  imgUrl,
  value,
  title,
  alt = "",
  imgWidth = 16,
  imgHeight = 16,
  href = "",
  textStyles = "",
  isAuthor = false,
}) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={imgWidth}
        height={imgHeight}
        className={` object-contain ${href ? " rounded-full" : ""}`}
      />
      <p className={` ${textStyles} flex items-center gap-1`}>
        {value}
        <span
          className={` small-regular line-clamp-1 ${
            isAuthor ? "max-sm:hidden" : ""
          }`}
        >
          {title}
        </span>
      </p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className=" flex-center gap-1">
        {metricContent}
      </Link>
    );
  }

  return (
    <div id={`metric-${title}`} className=" flex-center flex-wrap gap-1">
      {metricContent}
    </div>
  );
};

export default MetricDisplay;
