import { Link } from 'react-router-dom';
import img from '../assets/images/404.jpeg';

const Error = () => {
  return (
    <section className='full-page error'>
      <div>
        <img src={img} alt='page not found' />
        <h3>Ohh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </section>
  );
};

export default Error;
