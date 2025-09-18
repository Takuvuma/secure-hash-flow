import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Lock, 
  Globe, 
  Zap, 
  FileText, 
  Users, 
  Eye, 
  Clock,
  CheckCircle,
  Database,
  Key,
  Network
} from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "End-to-End Encryption",
      description: "Military-grade AES-256 encryption ensures your files are protected from sender to recipient.",
      features: ["AES-256 encryption", "Perfect forward secrecy", "Zero-knowledge architecture"]
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Tamper-Evident Hashing",
      description: "Cryptographic hashes detect any unauthorized modifications to your files.",
      features: ["SHA-256 hashing", "Merkle tree validation", "Real-time integrity checks"]
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Blockchain Anchoring",
      description: "File hashes and metadata are recorded on blockchain for immutable proof.",
      features: ["Permissioned ledger", "Smart contract automation", "Consensus validation"]
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Distributed Storage",
      description: "Files stored across IPFS and secure cloud infrastructure for redundancy.",
      features: ["IPFS integration", "Multi-cloud backup", "Edge distribution"]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Access Control",
      description: "Granular permissions and time-based access controls via smart contracts.",
      features: ["Role-based access", "Time-locked transfers", "Revocable permissions"]
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Audit Trail",
      description: "Complete visibility into file access, transfers, and modifications.",
      features: ["Real-time monitoring", "Compliance reporting", "Forensic analysis"]
    }
  ];

  const technicalFeatures = [
    {
      icon: <Key className="h-6 w-6" />,
      title: "Cryptographic Keys",
      description: "Advanced key management with hardware security module support"
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Network Security",
      description: "TLS 1.3 transport security and certificate pinning"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Stamping",
      description: "RFC 3161 compliant timestamping for legal compliance"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Metadata Protection",
      description: "Encrypted metadata with selective disclosure capabilities"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Features</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Enterprise-Grade Security Features
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hash Transfer combines cutting-edge blockchain technology with military-grade encryption 
              to deliver the most secure file transfer platform available.
            </p>
          </div>

          {/* Core Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="glass hover-lift group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Specifications */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              Technical Specifications
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalFeatures.map((feature, index) => (
                <Card key={index} className="glass hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Architecture Overview */}
          <div className="bg-card/30 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 gradient-text">Platform Architecture</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A robust, scalable architecture designed for enterprise requirements
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Client Layer</h3>
                <p className="text-muted-foreground">
                  Secure web and mobile clients with end-to-end encryption capabilities
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Service Layer</h3>
                <p className="text-muted-foreground">
                  Microservices architecture with load balancing and auto-scaling
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Storage Layer</h3>
                <p className="text-muted-foreground">
                  Hybrid blockchain and distributed storage for optimal performance
                </p>
              </div>
            </div>
          </div>

          {/* Compliance & Standards */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Compliance & Standards</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA", "FIPS 140-2", "Common Criteria"].map((standard) => (
                <Badge key={standard} variant="outline" className="text-sm px-4 py-2">
                  {standard}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;