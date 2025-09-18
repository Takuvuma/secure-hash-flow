import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroBackground } from "@/components/ui/hero-background";
import { Navigation } from "@/components/ui/navigation";
import { Link } from "react-router-dom";
import { Shield, Lock, Globe, Zap, CheckCircle, ArrowRight } from "lucide-react";
import securityIcon from "@/assets/security-icon.jpg";
import blockchainIcon from "@/assets/blockchain-icon.jpg";
import storageIcon from "@/assets/storage-icon.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <HeroBackground className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Secure Transfer.{" "}
                <span className="gradient-text">
                  Blockchain Verified.
                </span>{" "}
                <span className="gradient-text">
                  That easy.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Hash Transfer enables secure file sharing with tamper-evident hashing, 
                verifiable provenance, and auditable access control, all powered by blockchain technology.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="glow hover-lift text-lg px-8" asChild>
                <Link to="/dashboard">
                  Start Transfer
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="hover-lift text-lg px-8" asChild>
                <Link to="/features">Book a Demo</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm text-muted-foreground">End-to-End Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm text-muted-foreground">Blockchain Verified</span>
              </div>
            </div>
          </div>
        </div>
      </HeroBackground>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Revolutionary File Transfer Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built on blockchain foundations for unparalleled security, transparency, and trust
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass hover-lift group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl overflow-hidden">
                  <img src={securityIcon} alt="Security" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold">End-to-End Encryption</h3>
                <p className="text-muted-foreground">
                  Files are encrypted before transmission with military-grade encryption, ensuring only authorized parties can access your data.
                </p>
              </CardContent>
            </Card>

            <Card className="glass hover-lift group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl overflow-hidden">
                  <img src={blockchainIcon} alt="Blockchain" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold">Blockchain Verification</h3>
                <p className="text-muted-foreground">
                  File hashes and metadata are anchored on blockchain for immutable proof of authenticity and transfer history.
                </p>
              </CardContent>
            </Card>

            <Card className="glass hover-lift group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl overflow-hidden">
                  <img src={storageIcon} alt="Storage" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold">Distributed Storage</h3>
                <p className="text-muted-foreground">
                  Files stored across IPFS or secure cloud infrastructure while keeping the blockchain lean and efficient.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Built for Trust & 
                  <span className="gradient-text block">Transparency</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Every file transfer is recorded, verified, and auditable. Smart contracts manage access rights and provide complete transparency in the transfer process.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Tamper-Evident Hashing</h4>
                    <p className="text-muted-foreground">Cryptographic hashes detect any unauthorized modifications</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Lock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Smart Contract Security</h4>
                    <p className="text-muted-foreground">Automated access control and audit trails</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Decentralized Architecture</h4>
                    <p className="text-muted-foreground">No single point of failure or control</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="glow" asChild>
                <Link to="/features">
                  Explore Features <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Card className="glass p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">File Transfer Status</span>
                    <span className="text-sm text-success">Verified ✓</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Hash:</span>
                      <code className="text-primary">0x4a5f...bc2e</code>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Block:</span>
                      <code className="text-primary">#18,542,391</code>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Status:</span>
                      <span className="text-success">Confirmed</span>
                    </div>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full w-full pulse-glow" />
                  </div>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Transfer verified on blockchain with 12 confirmations
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transfer Files Securely?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of users who trust Hash Transfer for their most sensitive file transfers
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="hover-lift text-lg px-8" 
            asChild
          >
            <Link to="/dashboard">
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;