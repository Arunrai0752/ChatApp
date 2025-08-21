import React from 'react';
import { Link } from 'react-router-dom';
import { MdSend } from "react-icons/md";
import { IoChatbubbleEllipses } from "react-icons/io5";



const Home = () => {
  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10'>
        <div className='flex flex-col lg:flex-row justify-between items-center px-6 py-12 lg:py-24 max-w-7xl mx-auto'>
          <div className='lg:w-1/2 mb-12 lg:mb-0'>
            <h1 className='text-5xl lg:text-6xl font-bold text-primary mb-6'>
              Connect with Friends <span className='text-secondary'>Instantly</span>
            </h1>
            <p className='text-xl text-base-content mb-8'>
              Experience seamless messaging with our modern chat application. 
              Stay connected with your friends, family, and colleagues with real-time messaging.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Link to="/signup" className='btn btn-primary btn-lg rounded-full px-8'>
                Get Started
              </Link>
              <Link to="/about" className='btn btn-outline btn-lg rounded-full px-8'>
                Learn More
              </Link>
            </div>
          </div>
          
          <div className='lg:w-1/2 flex justify-center'>
            <div className='mockup-phone border-primary'>
              <div className='display'>
                <div className='artboard artboard-demo  phone-1  bg-base-100'>
                  <div className='flex flex-col h-full'>
                    <div className='p-4 border-b border-base-300 bg-base-200'>
                      <div className='flex items-center gap-3'>
                        <div className='avatar online'>
                          <div className='w-10 rounded-full'>
                            <img src='Arunpng.png' alt='User' />
                          </div>
                        </div>
                        <div>
                          <h3 className='font-bold'>Arun Rai</h3>
                          <p className='text-xs text-base-content/60'>Online</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className='flex-1 p-4 overflow-y-auto space-y-4'>
                      <div className='chat chat-start'>
                        <div className='chat-image avatar'>
                          <div className='w-8 rounded-full'>
                            <img src='Arunpng.png' alt='User' />
                          </div>
                        </div>
                        <div className='chat-bubble bg-base-300/40 text-base-content backdrop-blur-md'>Hey there! How's it going?</div>
                        <div className='chat-footer opacity-50 text-xs'>12:45 PM</div>
                      </div>
                      
                      <div className='chat chat-end'>
                        <div className='chat-image avatar'>
                          <div className='w-8 rounded-full'>
                            <img src='https://i.pravatar.cc/150?img=44' alt='User' />
                          </div>
                        </div>
                        <div className='chat-bubble bg-primary/40 text-primary-content backdrop-blur-md'>All good! Just finished the project.</div>
                        <div className='chat-footer opacity-50 text-xs'>12:46 PM</div>
                      </div>
                      
                      <div className='chat chat-start'>
                        <div className='chat-image avatar'>
                          <div className='w-8 rounded-full'>
                            <img src='Arunpng.png' alt='User' />
                          </div>
                        </div>
                        <div className='chat-bubble bg-base-300/40 text-base-content backdrop-blur-md'>That's great! Want to grab lunch?</div>
                        <div className='chat-footer opacity-50 text-xs'>12:47 PM</div>
                      </div>
                    </div>
                    
                    <div className='p-3 border-t border-base-300 bg-base-200'>
                      <div className='flex items-center gap-2'>
                        <input 
                          type='text' 
                          placeholder='Type a message...' 
                          className='input input-bordered w-full rounded-full' 
                        />
                        <button className='btn btn-primary btn-circle'>
                         <MdSend/>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='py-16 bg-base-100'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-16'>Why Choose Our Chat App</h2>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='card bg-base-200 shadow-lg p-6'>
                <div className='text-primary mb-4'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-12 w-12' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold mb-2'>Real-time Messaging</h3>
                <p className='text-base-content/70'>Send and receive messages instantly with our real-time communication technology.</p>
              </div>
              
              <div className='card bg-base-200 shadow-lg p-6'>
                <div className='text-primary mb-4'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-12 w-12' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold mb-2'>Secure & Private</h3>
                <p className='text-base-content/70'>Your conversations are encrypted end-to-end ensuring complete privacy and security.</p>
              </div>
              
              <div className='card bg-base-200 shadow-lg p-6'>
                <div className='text-primary mb-4 text-4xl'>
                  <IoChatbubbleEllipses />

                </div>
                <h3 className='text-xl font-bold mb-2'>Group Chats</h3>
                <p className='text-base-content/70'>Create groups with friends, family or colleagues and stay connected with everyone.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className='py-16 bg-primary text-primary-content'>
          <div className='max-w-4xl mx-auto text-center px-6'>
            <h2 className='text-4xl font-bold mb-6'>Ready to Start Chatting?</h2>
            <p className='text-xl mb-10'>Join millions of users who trust our platform for their daily communication needs.</p>
            <Link to="/signup" onClick={() => {sessionStorage.setItem("btn", "Signup")}} className='btn btn-secondary btn-lg rounded-full px-10'>
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;