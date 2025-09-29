import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Upload, 
  Send, 
  Shield, 
  FileText, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Copy,
  Download,
  Eye,
  MoreHorizontal,
  Lock,
  Globe,
  Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isHashing, setIsHashing] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileHash, setFileHash] = useState("");
  const { toast } = useToast();

  const recentTransfers = [
    {
      id: "tx-001",
      fileName: "Q4_Financial_Report.pdf",
      recipient: "john@acme.com",
      size: "2.4 MB",
      status: "completed",
      date: "2024-01-15",
      hash: "0x4a5f...bc2e"
    },
    {
      id: "tx-002", 
      fileName: "Product_Specs.zip",
      recipient: "sarah@tech.co",
      size: "15.7 MB",
      status: "pending",
      date: "2024-01-14", 
      hash: "0x8d2c...f7a1"
    },
    {
      id: "tx-003",
      fileName: "Legal_Contract.docx",
      recipient: "legal@company.org",
      size: "524 KB",
      status: "verified",
      date: "2024-01-13",
      hash: "0x9f1e...d4b8"
    }
  ];

  const stats = [
    {
      title: "Total Transfers",
      value: "1,247",
      change: "+12%",
      icon: <Send className="h-5 w-5" />
    },
    {
      title: "Data Transferred", 
      value: "89.2 GB",
      change: "+23%", 
      icon: <Upload className="h-5 w-5" />
    },
    {
      title: "Active Recipients",
      value: "156",
      change: "+8%",
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "Success Rate",
      value: "99.7%",
      change: "+0.1%",
      icon: <CheckCircle className="h-5 w-5" />
    }
  ];

  // File validation configuration
  const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB
  const ALLOWED_EXTENSIONS = [
    'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx',
    'txt', 'csv', 'zip', 'rar', '7z',
    'jpg', 'jpeg', 'png', 'gif', 'webp',
    'mp4', 'mov', 'avi', 'mp3', 'wav'
  ];
  const SUSPICIOUS_PATTERNS = ['.exe', '.bat', '.cmd', '.com', '.scr', '.vbs', '.js'];

  const validateFile = (file: File): { valid: boolean; error?: string } => {
    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      return {
        valid: false,
        error: `File size exceeds maximum limit of ${MAX_FILE_SIZE / 1024 / 1024}MB`
      };
    }

    // Check for empty files
    if (file.size === 0) {
      return {
        valid: false,
        error: 'Cannot upload empty files'
      };
    }

    // Check file extension
    const fileName = file.name.toLowerCase();
    const extension = fileName.split('.').pop() || '';
    
    if (!ALLOWED_EXTENSIONS.includes(extension)) {
      return {
        valid: false,
        error: `File type .${extension} is not allowed. Allowed types: ${ALLOWED_EXTENSIONS.join(', ')}`
      };
    }

    // Check for suspicious patterns in filename
    for (const pattern of SUSPICIOUS_PATTERNS) {
      if (fileName.includes(pattern)) {
        return {
          valid: false,
          error: 'File contains suspicious patterns and cannot be uploaded'
        };
      }
    }

    // Basic MIME type check
    const allowedMimeTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument',
      'application/vnd.ms-excel',
      'application/vnd.ms-powerpoint',
      'text/',
      'image/',
      'video/',
      'audio/',
      'application/zip',
      'application/x-rar',
      'application/x-7z-compressed'
    ];

    const mimeValid = allowedMimeTypes.some(allowed => 
      file.type.startsWith(allowed)
    );

    if (file.type && !mimeValid) {
      return {
        valid: false,
        error: `Invalid file type: ${file.type}`
      };
    }

    return { valid: true };
  };

  const handleFileSelect = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '*/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        // Validate file before processing
        const validation = validateFile(file);
        
        if (!validation.valid) {
          toast({
            title: "File Validation Failed",
            description: validation.error,
            variant: "destructive"
          });
          return;
        }

        // File passed validation
        toast({
          title: "File Validated",
          description: `${file.name} passed security checks`,
        });
        
        setSelectedFile(file);
        handleFileUpload(file);
      }
    };
    input.click();
  };

  const generateHash = async (file: File): Promise<string> => {
    const arrayBuffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const handleFileUpload = async (file: File) => {
    setIsUploading(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const uploadInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(uploadInterval);
          setIsUploading(false);
          setIsHashing(true);
          
          // Start hashing process
          generateHash(file).then(hash => {
            setFileHash(hash);
            setTimeout(() => {
              setIsHashing(false);
              toast({
                title: "File processed successfully!",
                description: `File "${file.name}" has been encrypted and hashed. Ready for secure transfer.`
              });
            }, 1500);
          });
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Hash has been copied to your clipboard."
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "pending":
        return <Clock className="h-4 w-4 text-warning" />;
      case "verified":
        return <Shield className="h-4 w-4 text-primary" />;
      default:
        return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold gradient-text">Dashboard</h1>
                <p className="text-muted-foreground mt-1">
                  Secure file transfer dashboard
                </p>
              </div>
              <Button size="lg" className="glow">
                <Upload className="mr-2 h-5 w-5" />
                New Transfer
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="glass hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs text-success">{stat.change} from last month</p>
                    </div>
                    <div className="p-2 rounded-lg bg-primary/10">
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Transfer Form */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="upload" className="space-y-6">
                <TabsList className="glass">
                  <TabsTrigger value="upload">New Transfer</TabsTrigger>
                  <TabsTrigger value="history">Transfer History</TabsTrigger>
                </TabsList>

                <TabsContent value="upload" className="space-y-6">
                  <Card className="glass">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Upload className="h-5 w-5 text-primary" />
                        Secure File Transfer
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* File Upload Area */}
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer" onClick={handleFileSelect}>
                        <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-2">Drop files here to upload</h3>
                        <p className="text-muted-foreground mb-4">or click to browse files</p>
                        <Button variant="outline" onClick={handleFileSelect}>
                          Choose Files
                        </Button>
                      </div>

                      {/* Selected File Display */}
                      {selectedFile && (
                        <div className="p-4 rounded-lg bg-muted/20 border">
                          <div className="flex items-center gap-3">
                            <FileText className="h-5 w-5 text-primary" />
                            <div className="flex-1">
                              <p className="font-medium">{selectedFile.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Upload Progress */}
                      {isUploading && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Uploading and encrypting...</span>
                            <span>{uploadProgress}%</span>
                          </div>
                          <Progress value={uploadProgress} className="h-2" />
                        </div>
                      )}

                      {/* Hashing Progress */}
                      {isHashing && (
                        <div className="space-y-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-sm font-medium">Generating cryptographic hash...</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Creating SHA-256 hash for blockchain verification
                          </p>
                        </div>
                      )}

                      {/* File Hash Display */}
                      {fileHash && !isHashing && (
                        <div className="space-y-3 p-4 rounded-lg bg-success/5 border border-success/20">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-success" />
                            <span className="text-sm font-medium text-success">File hash generated</span>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">SHA-256 Hash:</p>
                            <code className="text-xs font-mono bg-muted p-2 rounded block break-all">
                              {fileHash}
                            </code>
                          </div>
                        </div>
                      )}

                      {/* Recipient Info */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="recipient">Recipient Email</Label>
                          <Input id="recipient" placeholder="recipient@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" type="date" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message (Optional)</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Add a message for the recipient..."
                          className="min-h-[80px]"
                        />
                      </div>

                      {/* Security Options */}
                      <div className="border rounded-lg p-4 space-y-3">
                        <h4 className="font-medium flex items-center gap-2">
                          <Shield className="h-4 w-4 text-primary" />
                          Security Options
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Lock className="h-4 w-4 text-success" />
                            <span>End-to-end encryption</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4 text-success" />
                            <span>Blockchain verification</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Eye className="h-4 w-4 text-success" />
                            <span>Audit trail enabled</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-success" />
                            <span>Time-based access</span>
                          </div>
                        </div>
                      </div>

                      <Button size="lg" className="w-full glow" disabled={isUploading}>
                        <Send className="mr-2 h-5 w-5" />
                        Send Secure Transfer
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="history">
                  <Card className="glass">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Transfer History
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentTransfers.map((transfer, index) => (
                          <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/20 transition-colors">
                            <div className="flex items-center gap-4">
                              <div className="p-2 rounded-lg bg-primary/10">
                                <FileText className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-medium">{transfer.fileName}</h4>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <span>To: {transfer.recipient}</span>
                                  <span>{transfer.size}</span>
                                  <span>{transfer.date}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-2">
                                {getStatusIcon(transfer.status)}
                                <Badge variant="outline" className="capitalize">
                                  {transfer.status}
                                </Badge>
                              </div>
                              
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                onClick={() => copyToClipboard(transfer.hash)}
                              >
                                <Copy className="h-4 w-4" />
                              </Button>
                              
                              <Button size="sm" variant="ghost">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Download Received Files
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="mr-2 h-4 w-4" />
                    Security Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Eye className="mr-2 h-4 w-4" />
                    View Audit Log
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-success mt-2"></div>
                      <div className="text-sm">
                        <p className="font-medium">File verified on blockchain</p>
                        <p className="text-muted-foreground">Q4_Financial_Report.pdf</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <div className="text-sm">
                        <p className="font-medium">New transfer initiated</p>
                        <p className="text-muted-foreground">Product_Specs.zip</p>
                        <p className="text-xs text-muted-foreground">4 hours ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-warning mt-2"></div>
                      <div className="text-sm">
                        <p className="font-medium">Access granted to recipient</p>
                        <p className="text-muted-foreground">Legal_Contract.docx</p>
                        <p className="text-xs text-muted-foreground">6 hours ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Storage Usage */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Storage Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Used: 89.2 GB</span>
                        <span>Limit: 100 GB</span>
                      </div>
                      <Progress value={89} className="h-2" />
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      <p>• Active transfers: 15.3 GB</p>
                      <p>• Archived files: 73.9 GB</p>
                    </div>
                    
                    <Button size="sm" variant="outline" className="w-full">
                      Upgrade Storage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;