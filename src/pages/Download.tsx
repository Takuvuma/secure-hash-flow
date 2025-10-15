import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText, AlertCircle } from "lucide-react";
import { Navigation } from "@/components/ui/navigation";
import { useToast } from "@/hooks/use-toast";

const DownloadPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [loading, setLoading] = useState(true);
  const [fileData, setFileData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (!token) {
      setError("Invalid access link");
      setLoading(false);
      return;
    }

    fetchFileData();
  }, [token]);

  const fetchFileData = async () => {
    try {
      const { data, error } = await supabase.functions.invoke("get-file-by-token", {
        body: { token },
      });

      if (error) throw error;

      setFileData(data);
    } catch (err: any) {
      console.error("Error fetching file:", err);
      setError(err.message || "Failed to load file information");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!fileData?.signedUrl) return;

    try {
      const link = document.createElement("a");
      link.href = fileData.signedUrl;
      link.download = fileData.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Download started",
        description: "Your file is being downloaded",
      });
    } catch (err) {
      toast({
        title: "Download failed",
        description: "Failed to download the file",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <Navigation />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-lg mx-auto p-8 text-center">
            <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">Access Error</h1>
            <p className="text-muted-foreground mb-6">{error}</p>
            <Button variant="outline" onClick={() => window.location.href = "/"}>
              Go to Home
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Secure File Transfer</h1>
            <p className="text-muted-foreground">
              You've received a secure file
            </p>
          </div>

          <div className="bg-muted/50 rounded-lg p-6 mb-6">
            <h2 className="font-semibold mb-4">File Details</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">File Name:</span>
                <span className="font-medium">{fileData.fileName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">File Size:</span>
                <span className="font-medium">
                  {(fileData.fileSize / (1024 * 1024)).toFixed(2)} MB
                </span>
              </div>
              {fileData.message && (
                <div className="pt-4 border-t">
                  <span className="text-muted-foreground block mb-2">
                    Message from sender:
                  </span>
                  <p className="text-sm bg-background p-3 rounded border">
                    {fileData.message}
                  </p>
                </div>
              )}
            </div>
          </div>

          <Button
            onClick={handleDownload}
            className="w-full"
            size="lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Download File
          </Button>

          <p className="text-xs text-muted-foreground text-center mt-6">
            This is a secure transfer. The file will be automatically deleted after the expiry date.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default DownloadPage;
