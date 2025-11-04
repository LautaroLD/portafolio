export default function LoadingSpinner() {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-900'>
      <div className='relative'>
        {/* Outer ring */}
        <div className='w-24 h-24 rounded-full border-4 border-cyan-400/20 border-t-cyan-400 animate-spin' />
        
        {/* Inner ring */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 border-blue-400/20 border-t-blue-400 animate-spin' style={{ animationDirection: 'reverse', animationDuration: '1s' }} />
        
        {/* Center dot */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse' />
      </div>
    </div>
  )
}
