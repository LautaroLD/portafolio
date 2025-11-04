export default function ButtonCv() {
  return (
    <a
      className='btn-primary group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-bold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/30 dark:hover:shadow-cyan-500/50 transition-all duration-300 inline-flex items-center gap-3 hover:scale-105'
      href='https://drive.google.com/file/d/1AhQq2FOn-JL3xwNmSreW7IWah7KnRpT0/view?usp=drivesdk'
      target='_blank'
      rel='noreferrer'
    >
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
      </svg>
      <span>Descargar CV</span>
      <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
      </svg>
    </a>
  )
}
