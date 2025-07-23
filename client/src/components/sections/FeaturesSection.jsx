import { Shield, Search, Heart, MessageSquare, Star, CheckCircle } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Smart Matching",
      description: "Our AI-powered algorithm matches you with compatible flatmates and perfect living spaces based on your preferences.",
      color: "primary"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Profiles",
      description: "All users go through our verification process. Every profile is checked for authenticity and safety.",
      color: "accent"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Easy Communication",
      description: "Chat directly with potential flatmates and landlords. Schedule viewings and ask questions seamlessly.",
      color: "primary"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community First",
      description: "Join a community of trusted individuals looking for genuine connections and great living experiences.",
      color: "accent"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Rating System",
      description: "Build your reputation with our transparent rating system. Good flatmates get recognized and rewarded.",
      color: "primary"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Success Guarantee",
      description: "98% of our users find their perfect match within 30 days. We're committed to your success.",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">FlataMi</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've built the most trusted platform for flat-sharing, with advanced features 
            that make finding your perfect living situation simple and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth border border-border group">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth ${
                feature.color === 'primary' 
                  ? 'bg-primary-soft text-primary' 
                  : 'bg-accent-soft text-accent'
              }`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;