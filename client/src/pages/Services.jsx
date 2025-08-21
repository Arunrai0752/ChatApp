import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {

    const [planActive , setPlanAcrtive] = useState("Premium")



    useEffect(()=> {

     



    } , 
    
    [planActive])
  const services = [
    {
      id: 1,
      title: 'Personal Messaging',
      description: 'One-on-one encrypted conversations with friends and family with no limits on message history.',
      icon: '💬',
      features: ['End-to-end encryption', 'Unlimited messaging', 'Media sharing', 'Message reactions'],
      price: 'Free'
    },
    {
      id: 2,
      title: 'Group Chats',
      description: 'Create groups for your family, friends, or teams with advanced moderation tools.',
      icon: '👥',
      features: ['Up to 500 members', 'Admin controls', 'Mention notifications', 'Shared media gallery'],
      price: 'Free'
    },
    {
      id: 3,
      title: 'Voice Messages',
      description: 'Send quick voice notes when typing is inconvenient or you want to add personality.',
      icon: '🎤',
      features: ['High-quality audio', 'Background recording', 'Playback speed control', 'Voice effects'],
      price: 'Free'
    },
    {
      id: 4,
      title: 'Video Calls',
      description: 'HD video calling with screen sharing capabilities for up to 8 participants.',
      icon: '📹',
      features: ['HD quality', 'Screen sharing', 'Background blur', 'Call recording'],
      price: 'Premium'
    },
    {
      id: 5,
      title: 'File Sharing',
      description: 'Share documents, photos, videos and other files securely with size limits up to 2GB.',
      icon: '📁',
      features: ['2GB file limit', 'Cloud storage', 'Expiring links', 'Download tracking'],
      price: 'Free'
    },
    {
      id: 6,
      title: 'Business Solutions',
      description: 'Advanced features for teams and businesses including analytics and custom integrations.',
      icon: '🏢',
      features: ['Team management', 'Usage analytics', 'API access', 'Custom branding'],
      price: 'Enterprise'
    }
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for personal use and small groups',
      features: [
        'Unlimited messages',
        'Group chats (up to 50 people)',
        'File sharing (up to 100MB)',
        'Basic themes',
        '1GB storage'
      ],
      cta: 'Get Started',
      popular: planActive === "Free" ? true :  false
    },
    {
      name: 'Premium',
      price: '$4.99',
      period: 'per month',
      description: 'For power users who need more features',
      features: [
        'Everything in Free',
        'Group chats (up to 500 people)',
        'File sharing (up to 2GB)',
        'Video calls (up to 8 people)',
        'Advanced themes',
        '10GB storage',
        'Priority support'
      ],
      cta: 'Try Premium',
      popular: planActive === "Premium" ? true :  false
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'per month',
      description: 'For businesses and organizations',
      features: [
        'Everything in Premium',
        'Unlimited storage',
        'Custom domain',
        'Advanced analytics',
        'API access',
        'Dedicated support',
        'SSO integration'
      ],
      cta: 'Contact Sales',
      popular: planActive === "Enterprise" ? true :  false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200">
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover all the ways our chat app can help you connect, communicate, and collaborate.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">What We Offer</h2>
          <p className="text-lg text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
            From simple messaging to advanced business solutions, we have features for every communication need.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <div key={service.id}  className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="card-body">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="text-base-content/70 mb-4">{service.description}</p>
                  
                  <div className="mt-4">
                    <div className="badge badge-outline">{service.price}</div>
                  </div>
                  
                  <div className="divider my-4"></div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include our core messaging features.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                onClick={()=> setPlanAcrtive(plan.name)} 
                className={`card ${plan.popular ? 'border-2 border-primary shadow-2xl' : 'shadow-lg'} bg-base-100 transition-transform duration-300 hover:scale-105`}
              >
                <div className="card-body">
                  {plan.popular && (
                    <div className="badge badge-primary absolute top-4 right-4">SELECTED</div>
                  )}
                  
                  <h3 className="card-title">{plan.name}</h3>
                  <div className="my-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period !== 'forever' && <span className="text-base-content/70">/{plan.period}</span>}
                  </div>
                  <p className="text-base-content/70 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} w-full`}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-1" /> 
                <div className="collapse-title text-xl font-medium">
                  Is my data secure?
                </div>
                <div className="collapse-content">
                  <p>Yes, we use end-to-end encryption for all messages, which means only you and the recipient can read what's sent.</p>
                </div>
              </div>
              
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-1" /> 
                <div className="collapse-title text-xl font-medium">
                  Can I use the app on multiple devices?
                </div>
                <div className="collapse-content">
                  <p>Absolutely! Our app syncs across all your devices, so you can seamlessly switch between your phone, tablet, and computer.</p>
                </div>
              </div>
              
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-1" /> 
                <div className="collapse-title text-xl font-medium">
                  How do I upgrade to Premium?
                </div>
                <div className="collapse-content">
                  <p>You can upgrade directly in the app through Settings → Account → Upgrade. We accept all major credit cards and PayPal.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                  Are there ads in the free version?
                </div>
                <div className="collapse-content">
                  <p>No, we don't show ads in any version of our app. We believe in keeping your communication experience clean and distraction-free.</p>
                </div>
              </div>
              
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                  Can I cancel my subscription anytime?
                </div>
                <div className="collapse-content">
                  <p>Yes, you can cancel your Premium subscription at any time. You'll retain access to Premium features until the end of your billing period.</p>
                </div>
              </div>
              
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                  How can businesses get started?
                </div>
                <div className="collapse-content">
                  <p>Businesses can contact our sales team through our website. We'll set up a demo and help you choose the right plan for your organization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join millions of users who trust our platform for secure and seamless communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="btn btn-secondary btn-lg rounded-full">
              Create Free Account
            </Link>
            <Link to="/" className="btn btn-outline btn-lg rounded-full text-primary-content border-primary-content">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;