import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Target, 
  Globe, 
  Award,
  Calendar,
  MapPin,
  Linkedin,
  Twitter,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";

const Company = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Security at major fintech company. 15+ years in cybersecurity and blockchain technology.",
      image: "👩‍💼"
    },
    {
      name: "Marcus Rodriguez", 
      role: "CTO & Co-Founder",
      bio: "Blockchain architect with PhD in Cryptography. Previously led engineering at distributed systems startup.",
      image: "👨‍💻"
    },
    {
      name: "Dr. Aisha Patel",
      role: "Head of Security",
      bio: "Cybersecurity researcher and former NSA consultant. Expert in cryptographic protocols and secure systems.",
      image: "👩‍🔬"
    },
    {
      name: "James Kim",
      role: "VP of Engineering", 
      bio: "Full-stack engineer with expertise in distributed systems, microservices, and blockchain infrastructure.",
      image: "👨‍🔧"
    }
  ];

  const values = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Security First",
      description: "Security isn't an afterthought—it's built into every aspect of our platform from day one."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Transparency",
      description: "We believe in open, auditable systems that users can trust and verify."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Innovation", 
      description: "Pushing the boundaries of what's possible with blockchain and cryptographic technology."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "Committed to delivering enterprise-grade solutions that exceed expectations."
    }
  ];

  const milestones = [
    {
      year: "2021",
      title: "Company Founded",
      description: "Hash Transfer founded by blockchain security experts"
    },
    {
      year: "2022", 
      title: "Series A Funding",
      description: "$10M Series A led by top VCs in blockchain and security"
    },
    {
      year: "2023",
      title: "Enterprise Launch", 
      description: "Launched enterprise platform with Fortune 500 customers"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded to serve customers across 50+ countries"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Company</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Building the Future of Secure File Transfer
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded by cybersecurity and blockchain experts, Hash Transfer is on a mission to make 
              file sharing secure, transparent, and trustworthy for everyone.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold gradient-text">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In an era where data breaches and file tampering are increasingly common, we believe 
                everyone deserves access to military-grade security for their file transfers. Our 
                mission is to democratize enterprise-level security through blockchain technology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're building infrastructure that doesn't just protect your files—it creates an 
                immutable record of trust that can be verified by anyone, anywhere in the world.
              </p>
              <Button size="lg" className="glow" asChild>
                <Link to="/contact">Join Our Mission</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="glass text-center p-6">
                <div className="text-3xl font-bold gradient-text mb-2">10M+</div>
                <div className="text-sm text-muted-foreground">Files Transferred</div>
              </Card>
              <Card className="glass text-center p-6">
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Enterprise Customers</div>
              </Card>
              <Card className="glass text-center p-6">
                <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </Card>
              <Card className="glass text-center p-6">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </Card>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="glass hover-lift text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold gradient-text mb-4">Leadership Team</h2>
              <p className="text-lg text-muted-foreground">
                Industry veterans with deep expertise in security, blockchain, and enterprise software
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="glass hover-lift">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="text-6xl mb-4">{member.image}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                    </div>
                    <div className="flex justify-center gap-3">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Company Timeline</h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <Card className="glass inline-block max-w-md">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-primary">{milestone.year}</span>
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                          <p className="text-muted-foreground text-sm">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background relative z-10"></div>
                    
                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-card/30 rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Want to Learn More?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interested in partnerships, careers, or have questions about our technology? 
              We'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/features">
                  <MapPin className="mr-2 h-5 w-5" />
                  Visit Our Office
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                📍 Headquarters: San Francisco, CA | 🌍 Global Offices: London, Singapore, Toronto
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;