'use client';

const plans = [
  {
    name: 'Free Forever',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    includedFeatures: [
       'Everything in Free Forever',
      'Unlimited message credits',
      'Unlimited agents'
      
    ],
    excludedFeatures: [
      'Advanced automation workflows',
      'Custom chatbot builder',
      'Priority support',
      'Advanced analytics',
      'CRM integrations',
      'Payment gateway integrations',
      'White-label options'
    ],
    cta: 'Start Free',
    popular: false,
    gradient: 'from-gray-600 to-gray-800'
  },
  {
  name: 'Pro Plan',
  price: '$49',
  period: 'per month',
  description: 'Scale your business communication',
  includedFeatures: [
    'Everything in Free Forever',
    'Unlimited message credits',
    'Unlimited agents',
    'Advanced automation workflows',
    'Custom chatbot builder',
    'Priority support',
  ],
  excludedFeatures: [
    'Advanced analytics',
    'CRM integrations',
    'Payment gateway integrations',
    'White-label options',
  ],
  cta: 'Start Pro Trial',
  popular: true,
  gradient: 'from-cyan-500 to-purple-500'
},

  {
    name: 'Premium Enterprise',
    price: '$69',
    period: 'per month',
    description: 'Tailored for large-scale businesses',
    features: [
      'Everything in Free Forever',
      'Unlimited message credits',
      'Unlimited agents',
      'Advanced automation workflows',
      'Custom chatbot builder',
      'Priority support',
      'Advanced analytics',
      'CRM integrations',
      'Payment gateway integrations',
      'White-label options'
    ],
    cta: 'Start Pre Trial',
    popular: false,
    gradient: 'from-yellow-400 via-amber-500 to-orange-600'
  }
];

export default function Pricing() {
  return (
    <section className="py-20 bg-black relative overflow-visible">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Choose the perfect plan for your business. Start free and upgrade as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const isPremium = plan.name === 'Premium Enterprise';
            return (
              <div
                key={index}
                className={`
                  group relative p-8 rounded-3xl border transition-all duration-500 
                  backdrop-blur-sm overflow-visible
                  ${
                    plan.popular
                      ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20 scale-105'
                      : isPremium
                      ? 'border-yellow-500/40 hover:shadow-xl hover:shadow-yellow-400/40'
                      : 'border-gray-700 hover:border-gray-500'
                  }
                  bg-gradient-to-br from-gray-900/80 to-gray-800/80
                `}
              >
                {/* Hover gradient effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Special glowing background for popular or premium */}
                {(plan.popular || isPremium) && (
                  <div
                    className={`
                      absolute inset-0 rounded-3xl blur-xl animate-pulse 
                      ${plan.popular ? 'bg-gradient-to-br from-cyan-500/30 to-purple-500/30' : ''}
                      ${isPremium ? 'bg-gradient-to-br from-yellow-300/20 to-yellow-500/30' : ''}
                    `}
                  ></div>
                )}

                {/* Floating Badge for Most Popular */}
{plan.popular && (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md">
      Most Popular
    </span>
  </div>
)}


                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6 font-light">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">/ {plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 text-left">
  {/* For plans with included + excluded features */}
  {plan.includedFeatures?.map((feature, featureIndex) => (
    <li key={`included-${featureIndex}`} className="flex items-start gap-3">
      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
        <i className="ri-check-line text-white text-sm"></i>
      </div>
      <span className="text-gray-300 font-light">{feature}</span>
    </li>
  ))}
  {plan.excludedFeatures?.map((feature, featureIndex) => (
    <li key={`excluded-${featureIndex}`} className="flex items-start gap-3 opacity-60">
      <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
        <i className="ri-close-line text-white text-sm"></i>
      </div>
      <span className="text-gray-400">{feature}</span> {/* ✅ No strike-through */}
    </li>
  ))}

  {/* For Pro and Premium plans */}
  {plan.features?.map((feature, featureIndex) => (
    <li key={`feature-${featureIndex}`} className="flex items-start gap-3">
      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
        <i className="ri-check-line text-white text-sm"></i>
      </div>
      <span className="text-gray-300 font-light">{feature}</span>
    </li>
  ))}
</ul>



                  <button
  className="w-full relative px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg whitespace-nowrap group overflow-hidden font-semibold
  bg-green-600 text-white hover:bg-green-500 hover:shadow-green-500/25"
>
                    <span className="relative z-10">{plan.cta}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4 font-light">
            Need a custom solution? We offer enterprise plans with volume discounts.
          </p>
          <button className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors cursor-pointer hover:underline">
            Contact Sales Team
          </button>
        </div>
      </div>
    </section>
  );
}



