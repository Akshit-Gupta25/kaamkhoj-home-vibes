import { Building2, Star, Users, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CompanySection = () => {
  const companies = [
    {
      name: 'TechCorp Solutions',
      logo: '🏢',
      industry: 'Technology',
      location: 'Bangalore',
      rating: 4.8,
      employees: '1000-5000',
      openings: 45,
      description: 'Leading technology solutions provider specializing in cloud computing and AI.'
    },
    {
      name: 'InnovateLabs',
      logo: '🚀',
      industry: 'Startup',
      location: 'Mumbai',
      rating: 4.6,
      employees: '100-500',
      openings: 28,
      description: 'Fast-growing startup focused on fintech and digital transformation.'
    },
    {
      name: 'Global Finance Corp',
      logo: '💰',
      industry: 'Finance',
      location: 'Delhi',
      rating: 4.7,
      employees: '5000+',
      openings: 62,
      description: 'Multinational financial services company with operations across Asia.'
    },
    {
      name: 'HealthTech India',
      logo: '🏥',
      industry: 'Healthcare',
      location: 'Hyderabad',
      rating: 4.5,
      employees: '500-1000',
      openings: 35,
      description: 'Revolutionary healthcare technology company improving patient care.'
    },
    {
      name: 'EduSphere',
      logo: '📚',
      industry: 'Education',
      location: 'Pune',
      rating: 4.4,
      employees: '200-500',
      openings: 22,
      description: 'EdTech platform transforming online learning experiences.'
    },
    {
      name: 'GreenEnergy Solutions',
      logo: '🌱',
      industry: 'Energy',
      location: 'Chennai',
      rating: 4.6,
      employees: '1000-5000',
      openings: 18,
      description: 'Sustainable energy solutions for a greener tomorrow.'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Top Companies Hiring
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover opportunities at leading companies across various industries. Join teams that value innovation, growth, and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <Card key={index} className="hover:shadow-warm transition-all duration-300 transform hover:-translate-y-1 bg-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{company.logo}</div>
                    <div>
                      <h3 className="font-semibold text-foreground">{company.name}</h3>
                      <p className="text-sm text-muted-foreground">{company.industry}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 bg-primary/10 px-2 py-1 rounded">
                    <Star className="h-4 w-4 text-primary fill-current" />
                    <span className="text-sm font-medium text-primary">{company.rating}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {company.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{company.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{company.employees} employees</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                    <span>{company.openings} open positions</span>
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  View Jobs
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="font-semibold">
            View All Companies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;