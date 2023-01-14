import main from '../assets/images/main.svg';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
import '../assets/styles/landing-page.scss';

const Landing = () => {
  return (
    <div className='landing-page'>
      <nav>
        <Logo />
      </nav>
      <section className='container page'>
        <div className='info'>
          <h1>
          Subscription overload?<span> Subslify</span> your life today!
          </h1>
          <p>
          With <span>Subslify</span>, you can easily track, organize, and understand your monthly subscriptions. No more surprise charges or hidden fees - Subslify has you covered. Try it now and take control of your subscription-based expenses!
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
