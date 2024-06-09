import { LoginInput } from '../components/auth/LoginInput';
import { useStore } from '../states/auth';
import useInput from '../hooks/useInput';
import { Toaster } from 'react-hot-toast';
import coverImage from '/cover.jpg';
import quizlogyIcon from '/quizlogy-logo-horizontal.png';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const { login } = useStore((state) => ({
    user: state.user,
    login: state.login,
  }));

  const onSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <>
      <Toaster />
      <div className='w-full h-screen flex flex-col md:flex-row items-start'>
        <div className='relative w-full md:w-1/2 md:h-full flex flex-col'>
          <div className='absolute top-[20%] left-[10%] flex flex-col hidden md:block'>
            <h1 className='text-4xl text-white font-bold my-4'>
              Create engaging quizzes effortlessly
            </h1>
            <p className='text-xl text-white font-normal'>
              Join now and inspire learners everywhere
            </p>
          </div>
          <img
            src={coverImage}
            className='w-full h-full object-cover hidden md:block'
            alt='cover'
          />
        </div>
        <div className='w-full md:w-1/2 h-full max-h-dvh bg-[#F5F5F5] flex flex-col p-8 md:p-10 justify-between items-center sm:p-4 sm:items-start'>
          <Link to="/">
            <img
              src={quizlogyIcon}
              alt="Quizlogy Icon"
              className='w-full max-w-[130px] mx-auto text-xl mr-auto '
            />
          </Link>
          <LoginInput
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;