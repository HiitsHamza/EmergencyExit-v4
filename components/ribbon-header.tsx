import React from "react"

type RibbonHeaderProps = {
  text: string
  className?: string
}

export default function RibbonHeader({
  text,
  className = "",
}: RibbonHeaderProps) {
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      {/* Arrow shape with double left border */}
      <div className="relative flex items-center">
        {/* Blue border (outermost) */}
        <div className="w-1.5 h-16 bg-[#1e2742] rounded-l-sm" />
        
        {/* Gray border */}
        <div className="w-3 h-16 bg-gray-300" />
        
        {/* Main content area + arrow with borders using clipPath */}
        <div className="relative h-16">
          {/* Blue border layer (outermost, extends furthest right) */}
          <div 
            className="absolute bg-[#1e2742]"
            style={{
              top: '0',
              bottom: '0',
              left: '0',
              right: '-35px',
              clipPath: 'polygon(0% 0%, calc(100% - 26px) 0%, 100% 50%, calc(100% - 26px) 100%, 0% 100%)'
            }}
          />
          
          {/* Gray border layer (middle, thinner) */}
          <div 
            className="absolute bg-gray-300"
            style={{
              top: '0',
              bottom: '0',
              left: '0',
              right: '-25px',
              clipPath: 'polygon(0% 0%, calc(100% - 26px) 0%, 100% 50%, calc(100% - 26px) 100%, 0% 100%)'
            }}
          />
          
          {/* Main navy content + arrow */}
          <div 
            className="relative bg-[#1e2742] h-16 px-10 flex items-center"
            style={{
              clipPath: 'polygon(0% 0%, calc(100% - 24px) 0%, 100% 50%, calc(100% - 24px) 100%, 0% 100%)',
              paddingRight: '3.5rem'
            }}
          >
            <span className="text-white text-2xl font-bold tracking-wide whitespace-nowrap">
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
