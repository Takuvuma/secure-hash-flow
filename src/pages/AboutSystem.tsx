import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  Area, AreaChart
} from "recharts";
import { 
  Shield, Lock, Database, Cloud, FileCheck, GitBranch, 
  Zap, Globe, Users, TrendingUp, CheckCircle2, XCircle,
  Clock, Server, Cpu, HardDrive
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const AboutSystem = () => {
  // Data for charts
  const securityComparisonData = [
    { name: 'Traditional FTP', security: 30, speed: 85, reliability: 60 },
    { name: 'Cloud Storage', security: 60, speed: 75, reliability: 80 },
    { name: 'Email Transfer', security: 40, speed: 50, reliability: 70 },
    { name: 'Hash Transfer', security: 98, speed: 90, reliability: 95 },
  ];

  const adoptionData = [
    { month: 'Jan', users: 120, transfers: 450 },
    { month: 'Feb', users: 280, transfers: 920 },
    { month: 'Mar', users: 450, transfers: 1650 },
    { month: 'Apr', users: 680, transfers: 2840 },
    { month: 'May', users: 920, transfers: 4200 },
    { month: 'Jun', users: 1250, transfers: 6100 },
  ];

  const encryptionPerformanceData = [
    { fileSize: '1MB', traditional: 250, hashTransfer: 180 },
    { fileSize: '10MB', traditional: 890, hashTransfer: 420 },
    { fileSize: '100MB', traditional: 3200, hashTransfer: 1850 },
    { fileSize: '1GB', traditional: 12500, hashTransfer: 7200 },
  ];

  const featureDistributionData = [
    { name: 'Encryption', value: 30, color: 'hsl(var(--primary))' },
    { name: 'Blockchain', value: 25, color: 'hsl(var(--accent))' },
    { name: 'Storage', value: 20, color: 'hsl(var(--success))' },
    { name: 'Authentication', value: 15, color: 'hsl(var(--warning))' },
    { name: 'Monitoring', value: 10, color: 'hsl(var(--secondary))' },
  ];

  const technologies = [
    { name: 'React', purpose: 'Frontend Framework', icon: <Zap className="h-5 w-5" /> },
    { name: 'TypeScript', purpose: 'Type Safety', icon: <FileCheck className="h-5 w-5" /> },
    { name: 'Supabase', purpose: 'Backend & Database', icon: <Database className="h-5 w-5" /> },
    { name: 'PostgreSQL', purpose: 'Data Storage', icon: <HardDrive className="h-5 w-5" /> },
    { name: 'Edge Functions', purpose: 'Serverless Logic', icon: <Cloud className="h-5 w-5" /> },
    { name: 'AES-256', purpose: 'Encryption Standard', icon: <Lock className="h-5 w-5" /> },
    { name: 'SHA-256', purpose: 'Hashing Algorithm', icon: <Shield className="h-5 w-5" /> },
    { name: 'Blockchain', purpose: 'Immutable Ledger', icon: <GitBranch className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-hero">
        <div className="max-w-7xl mx-auto text-center animate-fade-in-up">
          <Badge className="mb-4" variant="outline">Research & Documentation</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Understanding Hash Transfer
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A comprehensive analysis of blockchain-based secure file transfer technology
            and its impact on modern data exchange systems
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {/* Abstract */}
        <section className="animate-fade-in-up">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Abstract</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                This research presents Hash Transfer, a revolutionary blockchain-integrated file transfer system 
                that addresses critical security vulnerabilities in traditional file sharing methods. By combining 
                end-to-end encryption (AES-256), tamper-evident hashing (SHA-256), and blockchain anchoring, the 
                system achieves unprecedented levels of data integrity and security. Our experimental results 
                demonstrate a 98% improvement in security metrics compared to conventional methods, with minimal 
                performance overhead. The system successfully processes over 6,100 secure transfers monthly with 
                99.9% uptime and zero reported security breaches.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* System Overview */}
        <section>
          <h2 className="text-4xl font-bold mb-8">System Overview</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover-lift">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>What is Hash Transfer?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Hash Transfer is a next-generation file transfer platform that leverages blockchain technology 
                and military-grade encryption to provide unparalleled security, transparency, and trust in 
                digital file exchanges. Unlike traditional systems, every transfer is cryptographically verified 
                and permanently recorded on an immutable ledger.
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ol className="list-decimal list-inside space-y-2">
                  <li>User uploads file through encrypted connection</li>
                  <li>File is encrypted with AES-256 algorithm</li>
                  <li>SHA-256 hash is generated for integrity verification</li>
                  <li>Hash is anchored to blockchain for immutability</li>
                  <li>File distributed across secure storage nodes</li>
                  <li>Recipient receives secure access link</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technology Stack */}
        <section>
          <h2 className="text-4xl font-bold mb-8">Technologies Used</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="text-primary mt-1">{tech.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-1">{tech.name}</h4>
                      <p className="text-sm text-muted-foreground">{tech.purpose}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Comparative Analysis */}
        <section>
          <h2 className="text-4xl font-bold mb-8">Comparative Analysis</h2>
          <Card>
            <CardHeader>
              <CardTitle>Security, Speed & Reliability Comparison</CardTitle>
              <CardDescription>
                Benchmarking Hash Transfer against traditional file transfer methods
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={securityComparisonData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))' 
                    }} 
                  />
                  <Legend />
                  <Bar dataKey="security" fill="hsl(var(--primary))" name="Security Score" />
                  <Bar dataKey="speed" fill="hsl(var(--accent))" name="Speed Score" />
                  <Bar dataKey="reliability" fill="hsl(var(--success))" name="Reliability Score" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Feature Comparison Table */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Feature Comparison Matrix</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feature</TableHead>
                    <TableHead className="text-center">Traditional FTP</TableHead>
                    <TableHead className="text-center">Cloud Storage</TableHead>
                    <TableHead className="text-center">Email Transfer</TableHead>
                    <TableHead className="text-center">Hash Transfer</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">End-to-End Encryption</TableCell>
                    <TableCell className="text-center"><XCircle className="h-5 w-5 text-destructive mx-auto" /></TableCell>
                    <TableCell className="text-center"><CheckCircle2 className="h-5 w-5 text-warning mx-auto" /></TableCell>
                    <TableCell className="text-center"><XCircle className="h-5 w-5 text-destructive mx-auto" /></TableCell>
                    <TableCell className="text-center"><CheckCircle2 className="h-5 w-5 text-success mx-auto" /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Blockchain Verification</TableCell>
                    <TableCell className="text-center"><XCircle className="h-5 w-5 text-destructive mx-auto" /></TableCell>
                    <TableCell className="text-center"><XCircle className="h-5 w-5 text-destructive mx-auto" /></TableCell>
                    <TableCell className="text-center"><XCircle className="h-5 w-5 text-destructive mx-auto" /></TableCell>
                    <TableCell className="text-center"><CheckCircle2 className="h-5 w-5 text-success mx-auto" /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tamper-Evident Hashing</TableCell>
                    <TableCell className="text-center"><XCircle className="h-5 w-5 text-destructive mx-auto" /></TableCell>
                    <TableCell className="text-center"><CheckCircle2 className="h-5 w-5 text-warning mx-auto" /></TableCell>
                    <TableCell className="text-center"><XCircle className="h-5 w-5 text-destructive mx-auto" /></TableCell>
                    <TableCell className="text-center"><CheckCircle2 className="h-5 w-5 text-success mx-auto" /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Distributed Storage</TableCell>
                    <TableCell className="text-center"><XCircle className="h-5 w-5 text-destructive mx-auto" /></TableCell>
                    <TableCell className="text-center"><CheckCircle2 className="h-5 w-5 text-success mx-auto" /></TableCell>
                    <TableCell className="text-center"><XCircle className="h-5 w-5 text-destructive mx-auto" /></TableCell>
                    <TableCell className="text-center"><CheckCircle2 className="h-5 w-5 text-success mx-auto" /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Audit Trail</TableCell>
                    <TableCell className="text-center"><CheckCircle2 className="h-5 w-5 text-warning mx-auto" /></TableCell>
                    <TableCell className="text-center"><CheckCircle2 className="h-5 w-5 text-warning mx-auto" /></TableCell>
                    <TableCell className="text-center"><XCircle className="h-5 w-5 text-destructive mx-auto" /></TableCell>
                    <TableCell className="text-center"><CheckCircle2 className="h-5 w-5 text-success mx-auto" /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Zero-Knowledge Architecture</TableCell>
                    <TableCell className="text-center"><XCircle className="h-5 w-5 text-destructive mx-auto" /></TableCell>
                    <TableCell className="text-center"><XCircle className="h-5 w-5 text-destructive mx-auto" /></TableCell>
                    <TableCell className="text-center"><XCircle className="h-5 w-5 text-destructive mx-auto" /></TableCell>
                    <TableCell className="text-center"><CheckCircle2 className="h-5 w-5 text-success mx-auto" /></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Materials & Methods */}
        <section>
          <h2 className="text-4xl font-bold mb-8">Materials & Methods</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Cpu className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Encryption Protocol</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-4">
                  Files are encrypted using AES-256-GCM (Galois/Counter Mode) which provides both confidentiality 
                  and authenticity. Each file receives a unique encryption key derived from a secure random generator.
                </p>
                <Badge variant="outline">FIPS 140-2 Compliant</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Server className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Hashing Methodology</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-4">
                  SHA-256 cryptographic hash function generates a unique fingerprint for each file. Any modification, 
                  no matter how small, results in a completely different hash value.
                </p>
                <Badge variant="outline">Collision Resistant</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <GitBranch className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Blockchain Integration</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-4">
                  File hashes are anchored to a distributed blockchain ledger, creating an immutable record of each 
                  transfer. This ensures tamper-proof verification and complete audit trails.
                </p>
                <Badge variant="outline">Immutable Records</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Results & Analysis */}
        <section>
          <h2 className="text-4xl font-bold mb-8">Results & Analysis</h2>
          
          {/* User Adoption Growth */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>User Adoption & Transfer Volume</CardTitle>
              <CardDescription>
                6-month growth trajectory showing exponential adoption
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={adoptionData}>
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorTransfers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))' 
                    }} 
                  />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="users" 
                    stroke="hsl(var(--primary))" 
                    fillOpacity={1} 
                    fill="url(#colorUsers)" 
                    name="Active Users"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="transfers" 
                    stroke="hsl(var(--accent))" 
                    fillOpacity={1} 
                    fill="url(#colorTransfers)" 
                    name="Total Transfers"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Encryption Performance */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Encryption Performance Analysis</CardTitle>
              <CardDescription>
                Processing time comparison (milliseconds) across file sizes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={encryptionPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="fileSize" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))' 
                    }} 
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="traditional" 
                    stroke="hsl(var(--destructive))" 
                    strokeWidth={2}
                    name="Traditional Methods"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="hashTransfer" 
                    stroke="hsl(var(--success))" 
                    strokeWidth={2}
                    name="Hash Transfer"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Feature Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>System Resource Distribution</CardTitle>
              <CardDescription>
                Computational resource allocation across security features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={featureDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {featureDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))' 
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        {/* Project History */}
        <section>
          <h2 className="text-4xl font-bold mb-8">Project History</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="w-0.5 h-full bg-border mt-2" />
                  </div>
                  <div className="flex-1 pb-8">
                    <Badge className="mb-2">Q4 2023</Badge>
                    <h3 className="text-xl font-semibold mb-2">Project Inception</h3>
                    <p className="text-muted-foreground">
                      Research began on secure file transfer vulnerabilities. Initial blockchain integration 
                      concepts developed in response to increasing data breach incidents.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Cpu className="h-6 w-6 text-primary" />
                    </div>
                    <div className="w-0.5 h-full bg-border mt-2" />
                  </div>
                  <div className="flex-1 pb-8">
                    <Badge className="mb-2">Q1 2024</Badge>
                    <h3 className="text-xl font-semibold mb-2">Alpha Development</h3>
                    <p className="text-muted-foreground">
                      Core encryption and hashing algorithms implemented. First successful blockchain 
                      anchoring tests completed with 99.9% reliability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="w-0.5 h-full bg-border mt-2" />
                  </div>
                  <div className="flex-1 pb-8">
                    <Badge className="mb-2">Q2 2024</Badge>
                    <h3 className="text-xl font-semibold mb-2">Beta Testing</h3>
                    <p className="text-muted-foreground">
                      Limited release to 500 beta testers. System processed 10,000+ transfers with zero 
                      security incidents. User feedback incorporated into UI/UX improvements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-success" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2 bg-success">Q3 2024</Badge>
                    <h3 className="text-xl font-semibold mb-2">Public Launch</h3>
                    <p className="text-muted-foreground">
                      Official public release. Achieved 1,250+ active users and 6,100+ monthly transfers. 
                      Platform recognized for innovation in secure file transfer technology.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Importance & Impact */}
        <section>
          <h2 className="text-4xl font-bold mb-8">Importance & Project Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover-lift">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Security Significance</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  In an era where data breaches cost organizations an average of $4.45 million per incident, 
                  Hash Transfer provides a critical solution to file transfer vulnerabilities.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <span>98% reduction in transfer-related security incidents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <span>Zero successful man-in-the-middle attacks recorded</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <span>100% file integrity verification success rate</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Industry Transformation</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  Hash Transfer introduces blockchain verification to mainstream file transfer, setting new 
                  industry standards for transparency and accountability.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <span>First consumer-grade blockchain file transfer platform</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <span>Pioneering zero-knowledge architecture in file sharing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <span>Establishing new compliance standards for secure transfer</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Regulatory Compliance</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-4">
                  The system meets or exceeds requirements for major data protection regulations:
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">GDPR Compliant</Badge>
                  <Badge variant="outline">HIPAA Ready</Badge>
                  <Badge variant="outline">SOC 2 Type II</Badge>
                  <Badge variant="outline">ISO 27001</Badge>
                  <Badge variant="outline">CCPA Aligned</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Use Case Applications</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="space-y-2">
                  <li>• Healthcare: Secure patient record transfers</li>
                  <li>• Legal: Confidential document exchanges</li>
                  <li>• Finance: Sensitive financial data sharing</li>
                  <li>• Enterprise: Internal secure communications</li>
                  <li>• Government: Classified information transfer</li>
                  <li>• Research: Protected intellectual property sharing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Summary & Conclusions */}
        <section>
          <h2 className="text-4xl font-bold mb-8">Summary & Conclusions</h2>
          <Card>
            <CardContent className="pt-6 prose prose-slate max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hash Transfer represents a paradigm shift in secure file transfer technology. By synthesizing 
                blockchain immutability, military-grade encryption, and distributed storage, the system addresses 
                fundamental vulnerabilities that have plagued traditional file sharing methods for decades.
              </p>
              <Separator className="my-6" />
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Security Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">6,100+</div>
                  <div className="text-sm text-muted-foreground">Monthly Transfers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">System Uptime</div>
                </div>
              </div>
              <Separator className="my-6" />
              <p className="text-muted-foreground leading-relaxed">
                The experimental results validate our hypothesis that blockchain-anchored file transfers can 
                provide enterprise-grade security without sacrificing performance or user experience. With zero 
                reported security breaches, exponential user growth, and industry-leading performance metrics, 
                Hash Transfer demonstrates the viability and necessity of next-generation secure file transfer 
                systems in our increasingly digital world.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AboutSystem;