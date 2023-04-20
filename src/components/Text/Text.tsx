import './Text.css';

interface iProps {
    className?: string
    children?: string
}

const Text = ({children} : iProps) => {
    return <p className='text'>{children}</p>
  }

export default Text