import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signing up with:', formData);
  };

  return (
    <>
      <main className='min-h-screen bg-gradient-to-br from-primary/20 via-base-100 to-secondary/20 flex items-center justify-center p-4'>
        <div className='flex flex-col md:flex-row w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl'>
          <div className='w-full md:w-2/5 bg-gradient-to-br from-primary to-secondary hidden md:flex items-center justify-center p-8'>
            <div className='text-center text-primary-content'>
              <div className='mb-8'>
                <svg className='w-24 h-24 mx-auto' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                  <path d='M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                </svg>
              </div>
              <h2 className='text-3xl font-bold mb-4'>Join Our Community</h2>
              <p className='text-lg'>Create an account and start connecting with friends</p>
            </div>
          </div>

          <div className='w-full md:w-3/5 bg-base-100 p-8 md:p-12'>
            <div className='text-center mb-8'>
              <h1 className='text-4xl font-bold text-primary mb-2'>Create Account</h1>
              <p className='text-base-content/70'>Sign up to get started with ChatApp</p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-5'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text text-base-content'>Full Name</span>
                  </label>
                  <input
                    type='text'
                    name='name'
                    placeholder='Enter your full name'
                    className='input input-bordered input-primary w-full'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text text-base-content'>Username</span>
                  </label>
                  <input
                    type='text'
                    name='username'
                    placeholder='Choose a username'
                    className='input input-bordered input-primary w-full'
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text text-base-content'>Email Address</span>
                </label>
                <input
                  type='email'
                  name='email'
                  placeholder='Enter your email'
                  className='input input-bordered input-primary w-full'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text text-base-content'>Password</span>
                  </label>
                  <div className='relative'>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name='password'
                      placeholder='Create a password'
                      className='input input-bordered input-primary w-full pr-12'
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type='button'
                      className='absolute inset-y-0 right-0 px-4 flex items-center text-sm leading-5'
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <svg className='h-5 text-base-content/60' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
                          <path fill='currentColor' d='M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z'/>
                        </svg>
                      ) : (
                        <svg className='h-5 text-base-content/60' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
                          <path fill='currentColor' d='M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a144 144 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z'/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text text-base-content'>Confirm Password</span>
                  </label>
                  <div className='relative'>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name='confirmPassword'
                      placeholder='Confirm your password'
                      className='input input-bordered input-primary w-full pr-12'
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type='button'
                      className='absolute inset-y-0 right-0 px-4 flex items-center text-sm leading-5'
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <svg className='h-5 text-base-content/60' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
                          <path fill='currentColor' d='M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z'/>
                        </svg>
                      ) : (
                        <svg className='h-5 text-base-content/60' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
                          <path fill='currentColor' d='M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a144 144 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z'/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className='form-control'>
                <label className=' flex label cursor-pointer justify-start gap-3'>
                  <input
                    type='checkbox'
                    name='agreeToTerms'
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className='checkbox checkbox-primary'
                    required
                  />
                  <span className='label-text'>
                    I agree to the{' '}
                    <Link to='/terms' className='link link-primary'>Terms of Service</Link>
                    {' '}and{' '}
                    <Link to='/privacy' className='link link-primary'>Privacy Policy</Link>
                  </span>
                </label>
              </div>

              <div className='form-control mt-8 flex justify-center  '>
                <button type='submit' className='btn btn-primary rounded-full btn-lg w-full'>Create Account</button>
              </div>
            </form>

            <div className='divider my-8'>OR</div>

            <div className='grid grid-cols-2 gap-4 mb-8'>
              <button className='btn btn-outline rounded-full'>
                <svg className='w-5 h-5 mr-2' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z' fill='#4285F4'/>
                  <path d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z' fill='#34A853'/>
                  <path d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z' fill='#FBBC05'/>
                  <path d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z' fill='#EA4335'/>
                </svg>
                Google
              </button>
              <button className='btn btn-outline rounded-full'>
                <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
                </svg>
                GitHub
              </button>
            </div>

            <div className='text-center'>
              <p className='text-base-content/70'>
                Already have an account?{' '}
                <Link to='/login' className='link link-primary font-semibold'>Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;