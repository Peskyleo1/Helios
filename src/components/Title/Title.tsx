import './Title.css';

interface iProps {
    className?: string
    children?: string
}

const Text = ({children} : iProps) => {
    return <p className='title'>{children}</p>
  }

export default Text