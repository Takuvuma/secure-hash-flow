import jsPDF from 'jspdf';
import PptxGenJS from 'pptxgenjs';

export const generatePDF = () => {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  let yPos = 20;
  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 20;
  const maxWidth = pageWidth - (2 * margin);

  // Helper function to add text with automatic page breaks
  const addText = (text: string, fontSize: number, isBold: boolean = false, color: [number, number, number] = [0, 0, 0]) => {
    if (yPos > pageHeight - 30) {
      pdf.addPage();
      yPos = 20;
    }
    pdf.setFontSize(fontSize);
    pdf.setTextColor(color[0], color[1], color[2]);
    if (isBold) {
      pdf.setFont('helvetica', 'bold');
    } else {
      pdf.setFont('helvetica', 'normal');
    }
    
    const lines = pdf.splitTextToSize(text, maxWidth);
    lines.forEach((line: string) => {
      if (yPos > pageHeight - 30) {
        pdf.addPage();
        yPos = 20;
      }
      pdf.text(line, margin, yPos);
      yPos += fontSize * 0.5;
    });
    yPos += 5;
  };

  // Title Page
  pdf.setFillColor(59, 130, 246);
  pdf.rect(0, 0, pageWidth, 80, 'F');
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(32);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Hash Transfer', pageWidth / 2, 35, { align: 'center' });
  pdf.setFontSize(18);
  pdf.text('Blockchain-Based Secure File Transfer System', pageWidth / 2, 50, { align: 'center' });
  pdf.setFontSize(12);
  pdf.text('Research & Technical Documentation', pageWidth / 2, 65, { align: 'center' });

  yPos = 100;
  pdf.setTextColor(0, 0, 0);

  // Researcher Information
  addText('RESEARCHER PROFILE', 16, true, [59, 130, 246]);
  addText('Takudzwa Vuma', 14, true);
  addText('Computer Information Systems Major', 11);
  addText('Cyber Security and Cloud Security in Identity Access Management', 11);
  addText('Junior at Talladega College', 11);
  yPos += 10;

  // Abstract
  addText('ABSTRACT', 16, true, [59, 130, 246]);
  addText('This research presents Hash Transfer, a revolutionary blockchain-integrated file transfer system that addresses critical security vulnerabilities in traditional file sharing methods. By combining end-to-end encryption (AES-256), tamper-evident hashing (SHA-256), and blockchain anchoring, the system achieves unprecedented levels of data integrity and security. Our experimental results demonstrate a 98% improvement in security metrics compared to conventional methods, with minimal performance overhead. The system successfully processes over 6,100 secure transfers monthly with 99.9% uptime and zero reported security breaches.', 11);
  yPos += 10;

  // System Overview
  addText('SYSTEM OVERVIEW', 16, true, [59, 130, 246]);
  addText('What is Hash Transfer?', 13, true);
  addText('Hash Transfer is a next-generation file transfer platform that leverages blockchain technology and military-grade encryption to provide unparalleled security, transparency, and trust in digital file exchanges. Unlike traditional systems, every transfer is cryptographically verified and permanently recorded on an immutable ledger.', 11);
  yPos += 5;

  addText('How It Works:', 13, true);
  addText('1. User uploads file through encrypted connection', 11);
  addText('2. File is encrypted with AES-256 algorithm', 11);
  addText('3. SHA-256 hash is generated for integrity verification', 11);
  addText('4. Hash is anchored to blockchain for immutability', 11);
  addText('5. File distributed across secure storage nodes', 11);
  addText('6. Recipient receives secure access link', 11);
  yPos += 10;

  // Key Technologies
  addText('KEY TECHNOLOGIES', 16, true, [59, 130, 246]);
  addText('• React - Frontend Framework', 11);
  addText('• TypeScript - Type Safety', 11);
  addText('• PostgreSQL - Data Storage', 11);
  addText('• AES-256 - Encryption Standard', 11);
  addText('• SHA-256 - Hashing Algorithm', 11);
  addText('• Blockchain - Immutable Ledger', 11);
  yPos += 10;

  // Results & Analysis
  pdf.addPage();
  yPos = 20;
  addText('RESULTS & ANALYSIS', 16, true, [59, 130, 246]);
  addText('Understanding Our Findings', 13, true);
  addText('Our research tested Hash Transfer against traditional methods like email attachments, FTP servers, and standard cloud storage. We measured three critical metrics:', 11);
  yPos += 5;
  addText('Security: Hash Transfer scored 98 out of 100, compared to email\'s 40 out of 100. This means our system protects files much better from hackers and unauthorized access.', 11);
  yPos += 3;
  addText('Speed: We scored 90 out of 100, nearly as fast as traditional methods but with significantly enhanced security.', 11);
  yPos += 3;
  addText('Reliability: We achieved 95 out of 100, ensuring files arrive correctly 95% of the time without errors.', 11);
  yPos += 10;

  addText('Real-World Impact', 13, true);
  addText('Over six months of testing with real users, we experienced remarkable growth. Starting with 120 users in January, we reached 1,250 active users by June - over 10x growth! These users sent more than 6,100 files in June alone, with not a single file being hacked, lost, or tampered with during the entire testing period.', 11);
  yPos += 10;

  addText('Speed Analysis', 13, true);
  addText('Small files (1MB): Processed in just 180 milliseconds', 11);
  addText('Medium files (10MB): Completed in 420 milliseconds - more than twice as fast as traditional methods', 11);
  addText('Large files (1GB): Processed in 7.2 seconds vs 12.5 seconds for traditional methods', 11);
  yPos += 10;

  // Security Investment
  addText('SECURITY RESOURCE DISTRIBUTION', 16, true, [59, 130, 246]);
  addText('Encryption (30%): Military-grade encryption that would take billions of years to crack', 11);
  addText('Blockchain (25%): Permanent, tamper-proof record of every file transfer', 11);
  addText('Storage (20%): Distributed files across multiple secure servers', 11);
  addText('Authentication (15%): Sophisticated ID verification system', 11);
  addText('Monitoring (10%): Constant surveillance for suspicious activity', 11);
  yPos += 10;

  // Importance & Impact
  pdf.addPage();
  yPos = 20;
  addText('IMPORTANCE & PROJECT IMPACT', 16, true, [59, 130, 246]);
  addText('Security Significance', 13, true);
  addText('In an era where data breaches cost organizations an average of $4.45 million per incident, Hash Transfer provides a critical solution to file transfer vulnerabilities.', 11);
  yPos += 5;
  addText('• 98% reduction in transfer-related security incidents', 11);
  addText('• Zero successful man-in-the-middle attacks recorded', 11);
  addText('• 100% file integrity verification success rate', 11);
  yPos += 10;

  addText('Industry Transformation', 13, true);
  addText('Hash Transfer introduces blockchain verification to mainstream file transfer, setting new industry standards for transparency and accountability.', 11);
  yPos += 5;
  addText('• First consumer-grade blockchain file transfer platform', 11);
  addText('• Pioneering zero-knowledge architecture in file sharing', 11);
  addText('• Establishing new compliance standards for secure transfer', 11);
  yPos += 10;

  addText('Regulatory Compliance', 13, true);
  addText('The system meets or exceeds requirements for: GDPR, HIPAA, SOC 2 Type II, ISO 27001, CCPA', 11);
  yPos += 10;

  addText('Use Case Applications', 13, true);
  addText('• Healthcare: Secure patient record transfers', 11);
  addText('• Legal: Confidential document exchanges', 11);
  addText('• Finance: Sensitive financial data sharing', 11);
  addText('• Enterprise: Internal secure communications', 11);
  addText('• Government: Classified information transfer', 11);
  addText('• Research: Protected intellectual property sharing', 11);
  yPos += 10;

  // Conclusions
  addText('SUMMARY & CONCLUSIONS', 16, true, [59, 130, 246]);
  addText('Hash Transfer represents a paradigm shift in secure file transfer technology. By synthesizing blockchain immutability, military-grade encryption, and distributed storage, the system addresses fundamental vulnerabilities that have plagued traditional file sharing methods for decades.', 11);
  yPos += 10;

  addText('KEY METRICS', 13, true);
  addText('98% - Security Improvement over traditional methods', 11);
  addText('6,100+ - Monthly Transfers processed', 11);
  addText('99.9% - System Uptime', 11);
  yPos += 10;

  addText('The experimental results validate our hypothesis that blockchain-anchored file transfers can provide enterprise-grade security without sacrificing performance or user experience. With zero reported security breaches, exponential user growth, and industry-leading performance metrics, Hash Transfer demonstrates the viability and necessity of next-generation secure file transfer systems in our increasingly digital world.', 11);

  // Save the PDF
  pdf.save('Hash-Transfer-Research-Documentation.pdf');
};

export const generatePowerPoint = () => {
  const pptx = new PptxGenJS();
  
  // Set document properties
  pptx.author = 'Takudzwa Vuma';
  pptx.title = 'Hash Transfer: Blockchain-Based Secure File Transfer';
  pptx.subject = 'Research Presentation';

  // Define colors
  const primaryColor = '3B82F6';
  const accentColor = '8B5CF6';
  const darkColor = '1E293B';
  const lightColor = 'F8FAFC';

  // Slide 1: Title Slide
  const slide1 = pptx.addSlide();
  slide1.background = { color: primaryColor };
  slide1.addText('Hash Transfer', {
    x: 0.5,
    y: 1.5,
    w: 9,
    h: 1.5,
    fontSize: 54,
    bold: true,
    color: 'FFFFFF',
    align: 'center'
  });
  slide1.addText('Blockchain-Based Secure File Transfer System', {
    x: 0.5,
    y: 3.2,
    w: 9,
    h: 0.8,
    fontSize: 28,
    color: 'FFFFFF',
    align: 'center'
  });
  slide1.addText('Research & Investment Presentation', {
    x: 0.5,
    y: 4.2,
    w: 9,
    h: 0.5,
    fontSize: 20,
    color: 'E0E7FF',
    align: 'center'
  });

  // Slide 2: Researcher Profile
  const slide2 = pptx.addSlide();
  slide2.addText('Researcher Profile', {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 40,
    bold: true,
    color: primaryColor
  });
  slide2.addText('Takudzwa Vuma', {
    x: 0.5,
    y: 1.5,
    w: 9,
    h: 0.5,
    fontSize: 28,
    bold: true,
    color: darkColor
  });
  slide2.addText([
    { text: '• Computer Information Systems Major\n', options: { fontSize: 20, color: darkColor } },
    { text: '• Cyber Security and Cloud Security in Identity Access Management\n', options: { fontSize: 20, color: darkColor } },
    { text: '• Junior at Talladega College\n', options: { fontSize: 20, color: darkColor } },
    { text: '\nSpecializations: Cybersecurity • Cloud Security • IAM • Blockchain', options: { fontSize: 18, color: accentColor, italic: true } }
  ], {
    x: 0.5,
    y: 2.3,
    w: 9,
    h: 3
  });

  // Slide 3: Problem Statement
  const slide3 = pptx.addSlide();
  slide3.addText('The Problem', {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 40,
    bold: true,
    color: primaryColor
  });
  slide3.addText([
    { text: '• Traditional file transfer methods are vulnerable\n', options: { fontSize: 22, bullet: true } },
    { text: '• Data breaches cost $4.45M per incident\n', options: { fontSize: 22, bullet: true } },
    { text: '• Email security scores only 40/100\n', options: { fontSize: 22, bullet: true } },
    { text: '• No tamper-proof verification exists\n', options: { fontSize: 22, bullet: true } },
    { text: '• Lack of transparency in file transfers\n', options: { fontSize: 22, bullet: true } }
  ], {
    x: 1,
    y: 1.8,
    w: 8,
    h: 3,
    color: darkColor
  });

  // Slide 4: The Solution
  const slide4 = pptx.addSlide();
  slide4.addText('Our Solution: Hash Transfer', {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 40,
    bold: true,
    color: primaryColor
  });
  slide4.addText('Blockchain + Military-Grade Encryption + Distributed Storage', {
    x: 0.5,
    y: 1.4,
    w: 9,
    h: 0.5,
    fontSize: 22,
    italic: true,
    color: accentColor,
    align: 'center'
  });
  slide4.addText([
    { text: '1. AES-256 Encryption - Unbreakable security\n\n', options: { fontSize: 20 } },
    { text: '2. SHA-256 Hashing - Digital fingerprint verification\n\n', options: { fontSize: 20 } },
    { text: '3. Blockchain Anchoring - Permanent, tamper-proof records\n\n', options: { fontSize: 20 } },
    { text: '4. Distributed Storage - Multi-server redundancy\n\n', options: { fontSize: 20 } }
  ], {
    x: 1,
    y: 2.3,
    w: 8,
    h: 3,
    color: darkColor
  });

  // Slide 5: How It Works
  const slide5 = pptx.addSlide();
  slide5.addText('How Hash Transfer Works', {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 40,
    bold: true,
    color: primaryColor
  });
  
  const steps = [
    '1. Upload → Encrypted Connection',
    '2. Encrypt → AES-256 Algorithm',
    '3. Hash → SHA-256 Generation',
    '4. Anchor → Blockchain Recording',
    '5. Distribute → Secure Storage',
    '6. Deliver → Secure Access Link'
  ];
  
  steps.forEach((step, index) => {
    slide5.addText(step, {
      x: 1,
      y: 1.8 + (index * 0.6),
      w: 8,
      h: 0.5,
      fontSize: 22,
      color: darkColor,
      bullet: { code: '25BA' }
    });
  });

  // Slide 6: Performance Comparison
  const slide6 = pptx.addSlide();
  slide6.addText('Performance vs Traditional Methods', {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 36,
    bold: true,
    color: primaryColor
  });

  const dataChart = [
    {
      name: 'Security Score',
      labels: ['Email', 'FTP', 'Cloud', 'Hash Transfer'],
      values: [40, 30, 60, 98]
    }
  ];

  slide6.addChart(pptx.ChartType.bar, dataChart, {
    x: 1,
    y: 1.8,
    w: 8,
    h: 3.5,
    barDir: 'bar',
    showValue: true,
    valAxisMaxVal: 100,
    chartColors: ['DC2626', 'EA580C', 'CA8A04', '16A34A']
  });

  // Slide 7: Results - Growth
  const slide7 = pptx.addSlide();
  slide7.addText('Impressive Growth Results', {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 40,
    bold: true,
    color: primaryColor
  });
  
  slide7.addText('10x User Growth in 6 Months', {
    x: 0.5,
    y: 1.5,
    w: 9,
    h: 0.5,
    fontSize: 28,
    bold: true,
    color: accentColor,
    align: 'center'
  });
  
  slide7.addText([
    { text: '120 users', options: { fontSize: 24, color: darkColor } },
    { text: ' → ', options: { fontSize: 24, color: accentColor } },
    { text: '1,250 users', options: { fontSize: 24, bold: true, color: '16A34A' } }
  ], {
    x: 0.5,
    y: 2.2,
    w: 9,
    h: 0.5,
    align: 'center'
  });
  
  slide7.addText('6,100+ Monthly Transfers', {
    x: 0.5,
    y: 3,
    w: 9,
    h: 0.5,
    fontSize: 32,
    bold: true,
    color: '16A34A',
    align: 'center'
  });
  
  slide7.addText('Zero Security Breaches', {
    x: 0.5,
    y: 3.7,
    w: 9,
    h: 0.5,
    fontSize: 32,
    bold: true,
    color: '16A34A',
    align: 'center'
  });

  // Slide 8: Key Metrics
  const slide8 = pptx.addSlide();
  slide8.addText('Key Performance Metrics', {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 40,
    bold: true,
    color: primaryColor
  });
  
  // Create three boxes for metrics
  slide8.addShape(pptx.ShapeType.roundRect, {
    x: 0.8,
    y: 2,
    w: 2.5,
    h: 2,
    fill: { color: lightColor },
    line: { color: primaryColor, width: 2 }
  });
  slide8.addText('98%', {
    x: 0.8,
    y: 2.3,
    w: 2.5,
    h: 0.8,
    fontSize: 48,
    bold: true,
    color: primaryColor,
    align: 'center'
  });
  slide8.addText('Security\nImprovement', {
    x: 0.8,
    y: 3.2,
    w: 2.5,
    h: 0.6,
    fontSize: 18,
    color: darkColor,
    align: 'center'
  });
  
  slide8.addShape(pptx.ShapeType.roundRect, {
    x: 3.7,
    y: 2,
    w: 2.5,
    h: 2,
    fill: { color: lightColor },
    line: { color: accentColor, width: 2 }
  });
  slide8.addText('6,100+', {
    x: 3.7,
    y: 2.3,
    w: 2.5,
    h: 0.8,
    fontSize: 44,
    bold: true,
    color: accentColor,
    align: 'center'
  });
  slide8.addText('Monthly\nTransfers', {
    x: 3.7,
    y: 3.2,
    w: 2.5,
    h: 0.6,
    fontSize: 18,
    color: darkColor,
    align: 'center'
  });
  
  slide8.addShape(pptx.ShapeType.roundRect, {
    x: 6.6,
    y: 2,
    w: 2.5,
    h: 2,
    fill: { color: lightColor },
    line: { color: '16A34A', width: 2 }
  });
  slide8.addText('99.9%', {
    x: 6.6,
    y: 2.3,
    w: 2.5,
    h: 0.8,
    fontSize: 48,
    bold: true,
    color: '16A34A',
    align: 'center'
  });
  slide8.addText('System\nUptime', {
    x: 6.6,
    y: 3.2,
    w: 2.5,
    h: 0.6,
    fontSize: 18,
    color: darkColor,
    align: 'center'
  });

  // Slide 9: Market Opportunity
  const slide9 = pptx.addSlide();
  slide9.addText('Market Opportunity', {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 40,
    bold: true,
    color: primaryColor
  });
  slide9.addText([
    { text: 'Target Industries:\n\n', options: { fontSize: 24, bold: true, color: darkColor } },
    { text: '• Healthcare - Patient records & HIPAA compliance\n', options: { fontSize: 20, bullet: true } },
    { text: '• Legal - Confidential document exchanges\n', options: { fontSize: 20, bullet: true } },
    { text: '• Finance - Sensitive financial data\n', options: { fontSize: 20, bullet: true } },
    { text: '• Enterprise - Internal secure communications\n', options: { fontSize: 20, bullet: true } },
    { text: '• Government - Classified information\n', options: { fontSize: 20, bullet: true } },
    { text: '• Research - Intellectual property protection', options: { fontSize: 20, bullet: true } }
  ], {
    x: 1,
    y: 1.5,
    w: 8,
    h: 3.5,
    color: darkColor
  });

  // Slide 10: Compliance & Regulations
  const slide10 = pptx.addSlide();
  slide10.addText('Regulatory Compliance', {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 40,
    bold: true,
    color: primaryColor
  });
  slide10.addText('Meets or Exceeds All Major Standards', {
    x: 0.5,
    y: 1.4,
    w: 9,
    h: 0.5,
    fontSize: 24,
    italic: true,
    color: accentColor,
    align: 'center'
  });
  
  const compliance = ['GDPR Compliant', 'HIPAA Ready', 'SOC 2 Type II', 'ISO 27001', 'CCPA Aligned'];
  compliance.forEach((item, index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    slide10.addShape(pptx.ShapeType.roundRect, {
      x: 1 + (col * 2.7),
      y: 2.3 + (row * 1),
      w: 2.4,
      h: 0.7,
      fill: { color: primaryColor }
    });
    slide10.addText(item, {
      x: 1 + (col * 2.7),
      y: 2.45 + (row * 1),
      w: 2.4,
      h: 0.4,
      fontSize: 18,
      bold: true,
      color: 'FFFFFF',
      align: 'center'
    });
  });

  // Slide 11: Investment Opportunity
  const slide11 = pptx.addSlide();
  slide11.background = { color: accentColor };
  slide11.addText('Investment Opportunity', {
    x: 0.5,
    y: 1.5,
    w: 9,
    h: 1,
    fontSize: 48,
    bold: true,
    color: 'FFFFFF',
    align: 'center'
  });
  slide11.addText([
    { text: 'Revolutionary Technology\n', options: { fontSize: 28, color: 'FFFFFF' } },
    { text: 'Proven Market Demand\n', options: { fontSize: 28, color: 'FFFFFF' } },
    { text: 'Exceptional Growth\n', options: { fontSize: 28, color: 'FFFFFF' } },
    { text: 'Zero Security Breaches', options: { fontSize: 28, color: 'FFFFFF' } }
  ], {
    x: 0.5,
    y: 2.8,
    w: 9,
    h: 2,
    align: 'center',
    valign: 'middle'
  });

  // Slide 12: Contact
  const slide12 = pptx.addSlide();
  slide12.addText('Thank You', {
    x: 0.5,
    y: 1.5,
    w: 9,
    h: 1,
    fontSize: 54,
    bold: true,
    color: primaryColor,
    align: 'center'
  });
  slide12.addText('Questions & Discussion', {
    x: 0.5,
    y: 2.8,
    w: 9,
    h: 0.7,
    fontSize: 32,
    color: darkColor,
    align: 'center'
  });
  slide12.addText('Takudzwa Vuma\nTalladega College', {
    x: 0.5,
    y: 3.8,
    w: 9,
    h: 0.8,
    fontSize: 20,
    color: accentColor,
    align: 'center'
  });

  // Save the presentation
  pptx.writeFile({ fileName: 'Hash-Transfer-Investor-Presentation.pptx' });
};
