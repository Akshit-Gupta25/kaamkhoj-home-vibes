import { Trophy, Users, Building, Clock, CheckCircle, TrendingUp } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Award Winning Platform',
      stat: '#1',
      description: 'Best Job Portal in India 2024'
    },
    {
      icon: Users,
      title: 'Active Job Seekers',
      stat: '50K+',
      description: 'Professionals trust our platform'
    },
    {
      icon: Building,
      title: 'Partner Companies',
      stat: '5000+',
      description: 'Companies hiring through us'
    },
    {
      icon: Clock,
      title: 'Average Response Time',
      stat: '24 hrs',
      description: 'Quick responses guaranteed'
    },
    {
      icon: CheckCircle,
      title: 'Successful Placements',
      stat: '25K+',
      description: 'Dreams turned into reality'
    },
    {
      icon: TrendingUp,
      title: 'Growth Rate',
      stat: '300%',
      description: 'Year over year growth'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Platform Launch',
      description: 'KaamKhoj.in was born with a vision to revolutionize job searching in India.'
    },
    {
      year: '2021',
      title: 'First 1000 Users',
      description: 'Reached our first milestone of 1000 registered users and 100 companies.'
    },
    {
      year: '2022',
      title: 'Series A Funding',
      description: 'Secured Series A funding to expand operations across major Indian cities.'
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Launched AI-powered job matching to provide personalized recommendations.'
    },
    {
      year: '2024',
      title: 'Market Leader',
      description: 'Became the #1 job portal in India with 50K+ active users.'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Achievements */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building trust through consistent results and exceptional service to both job seekers and employers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card shadow-warm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <achievement.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">
                {achievement.stat}
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-sm">
                {achievement.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Milestones Timeline */}
        <div className="bg-card-gradient rounded-2xl p-8 shadow-warm">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-primary rounded-full items-center justify-center relative z-10">
                    <span className="text-primary-foreground font-bold text-sm">
                      {milestone.year}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-card/50 rounded-lg p-6 shadow-sm">
                    <div className="md:hidden text-primary font-bold text-sm mb-2">
                      {milestone.year}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;