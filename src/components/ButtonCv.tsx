import { Link } from 'react-router-dom';

export default function ButtonCv() {
  return (
    <Link
      className='text-dark bg-light text-s-text text-center font-w-b m-auto py-3 px-8 decoration-0 transition-all duration-500 border w-full sm:w-fit sm:mr-0 hover:bg-dark hover:text-light animate-pulse'
      to='https://drive.google.com/file/d/1AhQq2FOn-JL3xwNmSreW7IWah7KnRpT0/view?usp=drivesdk'
      target='_blank'
      rel='noreferrer'
    >
      Ver cv
    </Link>
  );
}
