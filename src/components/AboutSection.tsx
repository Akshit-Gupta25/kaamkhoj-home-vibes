import { Target, Users, Award, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: 'Targeted Job Matching',
      description: 'Our AI-powered algorithm matches you with jobs that fit your skills and preferences perfectly.'
    },
    {
      icon: Users,
      title: 'Trusted by Companies',
      description: 'Top companies across India trust KaamKhoj.in to find the best talent for their organizations.'
    },
    {
      icon: Award,
      title: 'Quality Opportunities',
      description: 'We curate high-quality job opportunities from verified companies across various industries.'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Access resources and guidance to accelerate your career growth and professional development.'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose KaamKhoj.in?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            KaamKhoj.in is India's leading job portal connecting talented professionals with opportunities at top companies. 
            We bridge the gap between job seekers and employers with our innovative platform and personalized approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card shadow-warm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card-gradient rounded-2xl p-8 shadow-warm">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who have found their dream jobs through KaamKhoj.in. 
              Create your profile today and take the first step towards your successful career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;