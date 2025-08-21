import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Aman Patel',
      role: 'Founder & CEO',
      image: `https://placehold.co/600x400?text=A`,
      bio: '10+ years of experience in communication technology and product development.'
    },
    {
      id: 2,
      name: 'Uday Dhurvey',
      role: 'Lead Developer',
      image: `https://placehold.co/600x400?text=U`,
      bio: 'Full-stack developer specializing in real-time applications and security.'
    },
    {
      id: 3,
      name: 'Aadi Jotwani',
      role: 'UI/UX Designer',
      image: `https://placehold.co/600x400?text=A`,
      bio: 'Creates intuitive user experiences with a focus on accessibility and simplicity.'
    },
    {
      id: 4,
      name: 'Xyz Abc',
      role: 'Customer Success',
      image: `https://placehold.co/600x400?text=X`,
      bio: 'Dedicated to ensuring our users have the best possible experience with our app.'
    }
  ];

  const features = [
    {
      title: 'Real-time Messaging',
      description: 'Instant message delivery with read receipts and typing indicators.',
      icon: '💬'
    },
    {
      title: 'End-to-End Encryption',
      description: 'Military-grade encryption keeps your conversations private and secure.',
      icon: '🔒'
    },
    {
      title: 'Group Chats',
      description: 'Create groups with up to 500 members for family, friends, or work.',
      icon: '👥'
    },
    {
      title: 'File Sharing',
      description: 'Share photos, videos, documents and other files up to 2GB.',
      icon: '📎'
    },
    {
      title: 'Voice Messages',
      description: 'Send quick voice notes when typing just won\'t do.',
      icon: '🎤'
    },
    {
      title: 'Custom Themes',
      description: 'Personalize your chat experience with light and dark modes.',
      icon: '🎨'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200">
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Chat App</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're on a mission to create the most intuitive, secure, and feature-rich messaging platform for everyone.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-4">
                Founded in 2020, our chat app began as a university project between friends who were frustrated with 
                existing messaging platforms. We wanted to create something that prioritized user privacy without 
                sacrificing functionality.
              </p>
              <p className="text-lg mb-4">
                Today, we serve millions of users worldwide who trust us with their daily communications. 
                Our commitment to end-to-end encryption and open-source principles has established us as 
                a leader in secure messaging.
              </p>
              <p className="text-lg">
                We believe everyone deserves the right to private communication, and we're continuously 
                working to make our platform more accessible, secure, and enjoyable to use.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-base-300 rounded-2xl p-8 shadow-lg">
                <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
                  <div className="stat">
                    <div className="stat-title">Active Users</div>
                    <div className="stat-value">0</div>
                    <div className="stat-desc">Aug 20st - Aug 21st</div>
                  </div>
                  
                  <div className="stat">
                    <div className="stat-title">Messages Sent</div>
                    <div className="stat-value">0</div>
                    <div className="stat-desc">↗︎ 0% from last Day</div>
                  </div>
                  
                  <div className="stat">
                    <div className="stat-title">Countries</div>
                    <div className="stat-value">1 </div>
                    <div className="stat-desc">Worldwide coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our App</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="card-body items-center text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="card-title">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="card bg-base-100 shadow-lg">
                <div className="card-body items-center text-center">
                  <div className="avatar mb-4">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={member.image} alt={member.name} />
                    </div>
                  </div>
                  <h3 className="card-title">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-base-content/70">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join millions of users who trust our platform for secure and seamless communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="btn btn-secondary btn-lg rounded-full">
              Create Account
            </Link>
            <Link to="/" className="btn btn-outline btn-lg rounded-full text-primary-content border-primary-content">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;