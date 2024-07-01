import Image from 'next/image'
import React from 'react'

interface MetricDisplayProps {}

const MetricDisplay: React.FC<MetricDisplayProps> = () => {
  return (
    <div id={`MetricDisplay-${null}`}>
        <Image src={""} alt={""} className='' />
        <span className=''>{""}</span>
        <span className=''>{""}</span>
    </div>
  )
}

export default MetricDisplay