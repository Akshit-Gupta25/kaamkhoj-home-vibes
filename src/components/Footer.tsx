import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'For Job Seekers': [
      'Browse Jobs',
      'Resume Builder',
      'Career Advice',
      'Salary Guide',
      'Interview Tips'
    ],
    'For Employers': [
      'Post a Job',
      'Browse Resumes',
      'Recruiting Solutions',
      'Employer Branding',
      'Pricing'
    ],
    'Company': [
      'About Us',
      'Our Team',
      'Press Releases',
      'Careers',
      'Contact Us'
    ],
    'Support': [
      'Help Center',
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Report Issue'
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">KaamKhoj.in</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              India's leading job portal connecting talented professionals with dream opportunities. 
              Your career success is our mission.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-sm">support@kaamkhoj.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-sm">+91-9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-sm">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-accent">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-2 text-accent">Stay Connected</h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-2 text-accent">Download Our App</h4>
              <div className="flex space-x-3 justify-center md:justify-end">
                <div className="bg-primary-foreground/10 px-4 py-2 rounded text-sm">
                  Play Store
                </div>
                <div className="bg-primary-foreground/10 px-4 py-2 rounded text-sm">
                  App Store
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 KaamKhoj.in. All rights reserved. Made with ❤️ in India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;