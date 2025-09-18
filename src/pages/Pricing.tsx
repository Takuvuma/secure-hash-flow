import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 10 GB transfers/month",
        "Basic encryption (AES-256)",
        "Standard blockchain anchoring",
        "Email support",
        "30-day audit trail",
        "Basic access controls"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month", 
      description: "Advanced features for growing businesses",
      features: [
        "Up to 100 GB transfers/month",
        "Advanced encryption + HSM",
        "Priority blockchain anchoring",
        "24/7 chat support",
        "1-year audit trail",
        "Role-based access controls",
        "API access",
        "Custom retention policies"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited transfers",
        "Hardware security modules",
        "Private blockchain deployment", 
        "Dedicated account manager",
        "Unlimited audit retention",
        "Advanced compliance tools",
        "Full API suite",
        "On-premise deployment options",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const addons = [
    {
      name: "Additional Storage",
      price: "$0.05",
      unit: "per GB/month",
      description: "Extra storage beyond plan limits"
    },
    {
      name: "Premium Support",
      price: "$500",
      unit: "per month",
      description: "Dedicated support engineer"
    },
    {
      name: "Compliance Pack", 
      price: "$200",
      unit: "per month",
      description: "HIPAA, SOX, PCI-DSS compliance tools"
    },
    {
      name: "Advanced Analytics",
      price: "$150",
      unit: "per month", 
      description: "Enhanced reporting and insights"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Pricing</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your file transfer needs. All plans include core security features.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`glass hover-lift relative ${plan.popular ? 'ring-2 ring-primary glow' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'glow' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    {plan.name === "Enterprise" ? (
                      <Link to="/contact">{plan.cta}</Link>
                    ) : (
                      <Link to="/dashboard">{plan.cta}</Link>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 gradient-text">Add-ons & Extensions</h2>
              <p className="text-lg text-muted-foreground">
                Enhance your plan with additional features and capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addons.map((addon, index) => (
                <Card key={index} className="glass hover-lift">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold mb-2">{addon.name}</h4>
                    <div className="mb-3">
                      <span className="text-2xl font-bold text-primary">{addon.price}</span>
                      <span className="text-sm text-muted-foreground block">{addon.unit}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{addon.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-card/30 rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              Frequently Asked Questions
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Can I change plans anytime?</h4>
                  <p className="text-muted-foreground text-sm">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Is there a free trial?</h4>
                  <p className="text-muted-foreground text-sm">
                    Yes, all paid plans come with a 14-day free trial. No credit card required.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">What happens to my data if I cancel?</h4>
                  <p className="text-muted-foreground text-sm">
                    Your data remains accessible for 30 days after cancellation. We provide export tools to help you migrate.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Do you offer volume discounts?</h4>
                  <p className="text-muted-foreground text-sm">
                    Yes, enterprise customers can receive volume discounts. Contact our sales team for custom pricing.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
                  <p className="text-muted-foreground text-sm">
                    We accept all major credit cards, bank transfers, and can invoice larger organizations.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Is blockchain usage included?</h4>
                  <p className="text-muted-foreground text-sm">
                    Yes, all blockchain transaction fees are included in your monthly plan pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <Card className="glass max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of organizations who trust Hash Transfer for their most sensitive file transfers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="glow" asChild>
                    <Link to="/dashboard">Start Free Trial</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;