import main from '../assets/images/main.svg';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='landing'>
      <nav>
        <Logo />
      </nav>
      <section className='container page'>
        <div className='info'>
          <h1>
            Subscription <span>Tracking</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos ut
            doloremque sapiente nam perferendis neque, distinctio dolores omnis
            veniam blanditiis vel ducimus repellat aliquid unde error quasi
            praesentium non tempore!
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img
          src={main}
          alt='subscription tracker'
          className='img main-img'
        ></img>
      </section>
    </div>
  );
};
export default Landing;
