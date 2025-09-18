import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Users,
  FileText,
  Shield
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@hashtransfer.com",
      action: "mailto:hello@hashtransfer.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Call Us",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Live Chat",
      description: "Chat with support",
      contact: "Available 24/7",
      action: "#"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 500\nSan Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri: 9AM-6PM PST"
    },
    {
      city: "London", 
      address: "45 Moorgate Street\nLondon EC2R 6EH, UK",
      phone: "+44 20 7946 0958",
      hours: "Mon-Fri: 9AM-6PM GMT"
    },
    {
      city: "Singapore",
      address: "1 Raffles Place, #40-02\nSingapore 048616",
      phone: "+65 6123 4567", 
      hours: "Mon-Fri: 9AM-6PM SGT"
    }
  ];

  const departments = [
    {
      icon: <Users className="h-5 w-5" />,
      name: "Sales",
      description: "Product demos and pricing",
      email: "sales@hashtransfer.com"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      name: "Support",
      description: "Technical assistance",
      email: "support@hashtransfer.com"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      name: "Partnerships", 
      description: "Business partnerships",
      email: "partners@hashtransfer.com"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Contact</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about Hash Transfer? We're here to help. Reach out to our team 
              for support, sales inquiries, or partnership opportunities.
            </p>
          </div>

          {/* Quick Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {contactMethods.map((method, index) => (
              <Card key={index} className="glass hover-lift text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{method.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={method.action}>{method.contact}</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Acme Inc." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="partnerships">Partnerships</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your needs..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button size="lg" className="w-full glow">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Departments */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Departments
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/20 transition-colors">
                      <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                        {dept.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{dept.name}</h4>
                        <p className="text-muted-foreground text-sm mb-2">{dept.description}</p>
                        <a 
                          href={`mailto:${dept.email}`}
                          className="text-primary text-sm hover:underline"
                        >
                          {dept.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Support Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email Support:</span>
                    <span>24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Live Chat:</span>
                    <span>24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone Support:</span>
                    <span>Mon-Fri, 9AM-6PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="text-success">&lt; 1 hour</span>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="glass border-destructive/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive">
                    <Shield className="h-5 w-5" />
                    Security Emergency
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    For urgent security issues or data breaches, contact our security team immediately.
                  </p>
                  <Button variant="destructive" size="sm" className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    security@hashtransfer.com
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Office Locations */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              Global Offices
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <Card key={index} className="glass hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {office.city}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-sm text-muted-foreground">Address</Label>
                      <p className="text-sm whitespace-pre-line">{office.address}</p>
                    </div>
                    
                    <div>
                      <Label className="text-sm text-muted-foreground">Phone</Label>
                      <p className="text-sm">{office.phone}</p>
                    </div>
                    
                    <div>
                      <Label className="text-sm text-muted-foreground">Hours</Label>
                      <p className="text-sm">{office.hours}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;