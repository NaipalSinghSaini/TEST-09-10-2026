# ⚡ Axion Technologies - Enterprise IT, Cloud & DevOps Platform

एक आधुनिक, हाई-परफॉरमेंस **IT Company Web Platform** जो **Node.js** और **Express** बैकएंड सपोर्टेड है और **React + Tailwind CSS** के साथ बना है। 

यह प्रोजेक्ट [devopsinsiders/axion-ui](https://github.com/devopsinsiders/axion-ui.git) के आधुनिक क्लाउड और डेवऑप्स आर्किटेक्चर से प्रेरित है, जिसमें लाइव सिस्टम टेलीमेट्री (Live Infrastructure Health), इंटरएक्टिव प्रोजेक्ट कॉस्ट एस्टीमेटर, सर्विस कैटलॉग, क्लाइंट लीड्स मैनेजमेंट और डस्ट-फ्री डॉकर कंटेनराइजेशन शामिल है।

---

## 🌟 मुख्य विशेषताएं (Key Features)

1. **Node.js & Express REST Backend**:
   - `/api/contact`: क्लाइंट कंसल्टेशन रिक्वेस्ट सबमिट करने के लिए।
   - `/api/quote`: तुरंत IT प्रोजेक्ट बजट और टाइमलाइन कैलकुलेट करने के लिए।
   - `/api/system-status`: लाइव क्लाउड क्लस्टर टेलीमेट्री (RPS, Latency, Active Nodes, Security Audit)।
   - `/api/inquiries`: कंपनी एडमिन के लिए सभी सबमिट किए गए लीड्स देखने की सुविधा।
   - `/api/newsletter`: टेक न्यूज़लेटर सब्सक्रिप्शन।
   - `/api/health`: प्रोडक्शन रेडी हेल्थ चेक।

2. **Enterprise Frontend UI (React + Tailwind CSS)**:
   - **Hero Section**: एनिमेटेड लाइव CI/CD पाइपलाइन रनर (Git push ➔ Trivy Scan ➔ Docker Build ➔ Terraform ➔ Kubernetes Rollout)।
   - **Axion Live Infrastructure Dashboard**: ग्लोबल एज नोड्स (Mumbai, Virginia, Frankfurt, Singapore) का लाइव स्टेटस, पिंग और लोड।
   - **Interactive IT Cost Estimator**: सर्विस टाइप, क्लाउड प्रोवाइडर, और स्केल चुनकर लाइव प्राइसिंग रेंज ($) और टाइमलाइन कैलकुलेट करने का टूल।
   - **Services Suite**: Cloud Architecture, DevOps & CI/CD, DevSecOps, Custom Node.js Engineering, Enterprise AI & Agents, 24/7 SRE Support।
   - **Case Studies & Testimonials**: रियल-वर्ल्ड फिनटेक, हेल्थटेक और रिटेल मेट्रिक्स।
   - **Careers & Job Board**: ओपनिंग लिस्टिंग्स और इंस्टेंट एप्लीकेशन।
   - **Client Portal / Leads Drawer**: इन-बिल्ट एडमिन पैनल जहाँ से सभी ग्राहक इन्क्वायरीज़ लाइव देखी जा सकती हैं।

3. **Cloud-Native & Production Ready**:
   - `Dockerfile` (Multi-stage Node.js build)
   - `docker-compose.yml`
   - Single-command Production Start: `npm start`

---

## 🚀 इस कोड को अपनी GitHub Repo में कैसे डालें (How to Push to Your GitHub)

इस पूरे प्रोजेक्ट फोल्डर को अपनी GitHub रिपॉजिटरी में पुश करने के लिए नीचे दिए गए स्टेप्स फॉलो करें:

### Step 1: टर्मिनल / PowerShell में इस फोल्डर में जाएँ
```bash
cd "C:\Users\Amit Saini\.gemini\antigravity\scratch\axion-it-company"
```

### Step 2: Git Repository Initialize करें
```bash
git init
```

### Step 3: सभी फाइल्स को स्टेज और कमिट करें
```bash
git add .
git commit -m "Initial commit: Axion IT Company Platform"
```

### Step 4: ब्रांच को main नाम दें
```bash
git branch -M main
```

### Step 5: अपनी GitHub Repo का Remote URL जोड़ें
*(नीचे दिए गए URL की जगह अपनी GitHub Repo का असली URL डालें)*
```bash
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
```

### Step 6: GitHub पर कोड पुश करें
```bash
git push -u origin main
```

बस! आपका पूरा IT कंपनी का कोड आपकी GitHub रिपॉजिटरी में अपलोड हो जाएगा।

---

## 💻 लोकल मशीन पर कैसे चलाएं (How to Run Locally)

### 1. डिपेंडेंसीज इनस्टॉल करें:
PowerShell में:
```powershell
npm.cmd install
```
या स्टैंडर्ड टर्मिनल में:
```bash
npm install
```

### 2. डेवलपमेंट मोड चालू करें (Dev Server):
```powershell
npm.cmd run dev
```
- **Frontend URL**: [http://localhost:3000](http://localhost:3000)
- **Node.js Backend API**: [http://localhost:5000](http://localhost:5000)

*नोट: `npm run dev` एक साथ बैकएंड एक्सप्रेस सर्वर (Port 5000) और फ्रंटएंड Vite सर्वर (Port 3000) दोनों को एक कमांड में शुरू कर देता है।*

### 3. प्रोडक्शन बिल्ड और रन:
```powershell
npm.cmd run build
npm.cmd start
```
पूरा फुल-स्टैक ऐप [http://localhost:5000](http://localhost:5000) पर सिंगल पोर्ट से चलने लगेगा।

---

## 🐳 Docker Deployment

अगर आपके पास Docker इनस्टॉल है, तो आप इसे सिर्फ 1 कमांड में रन कर सकते हैं:

```bash
docker-compose up --build
```
एप्लिकेशन [http://localhost:5000](http://localhost:5000) पर लाइव हो जाएगा।

---

## 📁 फोल्डर संरचना (Project Structure)

```text
axion-it-company/
├── server/                    # Node.js + Express Backend
│   ├── routes/
│   │   └── api.js             # All REST API endpoints (contact, quote, telemetry, etc.)
│   ├── data/
│   │   └── inquiries.json     # Local database for client inquiries & leads
│   └── index.js               # Express server entry point & static server
├── src/                       # React Frontend (Client)
│   ├── components/
│   │   ├── Navbar.jsx         # Header with branding & navigation
│   │   ├── Hero.jsx           # Animated CI/CD terminal visualizer
│   │   ├── LiveStatusWidget.jsx # Axion-style infrastructure dashboard
│   │   ├── Services.jsx       # IT services & capabilities grid
│   │   ├── CostEstimator.jsx  # Interactive cost calculator
│   │   ├── CaseStudies.jsx    # Real-world client case studies
│   │   ├── TechStack.jsx      # Tools & technology landscape
│   │   ├── Testimonials.jsx   # Client reviews & certifications
│   │   ├── Careers.jsx        # Job listings & hiring
│   │   ├── ContactModal.jsx   # Consultation request modal
│   │   ├── InquiriesDrawer.jsx# Admin client leads drawer
│   │   └── Footer.jsx         # Footer & newsletter form
│   ├── App.jsx                # Main application coordinator
│   ├── main.jsx               # React DOM root
│   └── index.css              # Dark theme, glassmorphism & Tailwind utilities
├── index.html                 # HTML shell
├── package.json               # Node.js dependencies & scripts
├── vite.config.js             # Vite configuration with API proxy
├── tailwind.config.js         # Tailwind styling tokens & cyber colors
├── Dockerfile                 # Multi-stage production container
├── docker-compose.yml         # Container orchestration
├── .gitignore                 # Ignored files (node_modules, dist, etc.)
└── README.md                  # Documentation
```

---

## ⚙️ कस्टमाइज़ेशन गाइड (Customization)

- **कंपनी का नाम और लोगो बदलें**: `src/components/Navbar.jsx` और `src/components/Footer.jsx` में जाकर `AXION` की जगह अपनी कंपनी का नाम लिख सकते हैं।
- **कॉन्टैक्ट डिटेल्स**: `src/components/Footer.jsx` में अपना फोन नंबर, ईमेल और ऑफिस एड्रेस अपडेट करें।
- **सर्विस और प्राइसिंग**: `server/routes/api.js` और `src/components/Services.jsx` से अपनी सर्विसेज और रेट्स अपडेट कर सकते हैं।
