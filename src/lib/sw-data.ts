export const BRAND = {
  name: "Students World",
  tagline: "Your Digital Service Partner",
  altTagline: "Fast • Trusted • Government Approved Services",
  email: "studentsworld44@gmail.com",
  phone: "+91 97779 69564",
  phoneRaw: "+919777969564",
  whatsapp: "919777969564",
  address: "Near Madhipur Chhaka, Konark, Odisha, India",
  coords: { lat: 19.8924999, lng: 86.0878677 },
  mapsUrl: "https://maps.app.goo.gl/b76we2Q2NeL7gaEh6?g_st=ac",
};

/** Build a WhatsApp deep link with a pre-filled message for a service. */
export const waLink = (message?: string) => {
  const base = `https://wa.me/${BRAND.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const WA_MESSAGES = {
  general: "Hello Students World, I'd like to enquire about your services.",
  aadhaar: "Hi Students World, I need help with Aadhaar Card services (new / update / correction). Please guide me.",
  pan: "Hi Students World, I'd like to apply for a PAN Card. What documents do I need?",
  certificate: "Hi Students World, I need help applying for a government certificate (Income / Residence / Caste / Birth). Please assist.",
  examForm: "Hi Students World, I'd like to fill a government exam / scholarship form. Please guide me.",
  digital: "Hi Students World, I need digital services (printing / scanning / online registration). Are you available now?",
  apply: "Hi Students World, I'd like to apply for a service. Please share the next steps.",
};

export const NAV = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const FLIP_SERVICES = [
  "Aadhaar Services", "PAN Card", "Income Certificate", "Residence Certificate",
  "Caste Certificate", "Birth Certificate", "Govt Exam Forms", "Scholarship Forms",
  "Voter ID", "Driving Licence", "Passport Services", "Bank KYC",
  "Online Registration", "Job Application Forms", "College Admission", "GST Services",
];

export const TICKER_ROW_1 = [
  { icon: "🪪", name: "Aadhaar Card" }, { icon: "💳", name: "PAN Card" },
  { icon: "📜", name: "Income Certificate" }, { icon: "🏠", name: "Residence Certificate" },
  { icon: "📋", name: "Caste Certificate" }, { icon: "👶", name: "Birth Certificate" },
  { icon: "🕊️", name: "Death Certificate" }, { icon: "📝", name: "Govt Exam Forms" },
  { icon: "🎓", name: "Scholarship Forms" }, { icon: "🗳️", name: "Voter ID" },
  { icon: "🚗", name: "Driving Licence" }, { icon: "✈️", name: "Passport Services" },
  { icon: "🏦", name: "Bank KYC" }, { icon: "⚡", name: "Electricity Bill" },
  { icon: "💻", name: "Online Registration" }, { icon: "💼", name: "Job Applications" },
];

export const TICKER_ROW_2 = [
  { icon: "🎒", name: "College Admission" }, { icon: "🚂", name: "Railway Forms" },
  { icon: "🏛️", name: "UPSC Forms" }, { icon: "📊", name: "SSC Forms" },
  { icon: "🏧", name: "Bank Exam Forms" }, { icon: "🌐", name: "State Govt Exams" },
  { icon: "💸", name: "Digital Payment" }, { icon: "🖨️", name: "Document Printing" },
  { icon: "📄", name: "Photocopy" }, { icon: "🛡️", name: "Lamination" },
  { icon: "📸", name: "Passport Photos" }, { icon: "📡", name: "Scanning" },
  { icon: "📧", name: "Email Services" }, { icon: "📱", name: "Online Recharge" },
  { icon: "📑", name: "Resume Creation" }, { icon: "🧾", name: "GST Services" },
];

export const STATS = [
  { value: 10000, suffix: "+", label: "Happy Customers" },
  { value: 50000, suffix: "+", label: "Forms Submitted" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Satisfaction Rate" },
];

export const SERVICES = [
  { icon: "🪪", title: "Identity Documents", desc: "Aadhaar Card updates, PAN Card applications, Voter ID registration and corrections processed with precision and speed.", wa: "Hi Students World, I need help with Identity Documents (Aadhaar / PAN / Voter ID). Please guide me." },
  { icon: "📋", title: "Government Certificates", desc: "Income, Residence, Caste, Birth, and Death certificates — we manage the complete application, tracking, and follow-up process.", wa: "Hi Students World, I'd like to apply for a Government Certificate (Income / Residence / Caste / Birth). Please assist." },
  { icon: "🎓", title: "Exam & Education", desc: "UPSC, SSC, Bank, Railway, Scholarship, and College Admission forms filled and submitted with zero errors, every time.", wa: "Hi Students World, I'd like help filling a government exam / scholarship / admission form." },
  { icon: "🚗", title: "Driving & Passport", desc: "Driving Licence applications, renewals, and Passport services handled end-to-end with correct documentation and fast turnaround.", wa: "Hi Students World, I need help with Driving Licence / Passport services. Please share next steps." },
  { icon: "💳", title: "Financial Services", desc: "Bank KYC, GST registration, utility bill payments, digital transactions, and online recharge — all under one roof.", wa: "Hi Students World, I need help with Financial Services (Bank KYC / GST / bill payments)." },
  { icon: "🖨️", title: "Print, Scan & Copy", desc: "High-quality colour printing, black & white, scanning, photocopying, lamination, and passport-size photos available instantly.", wa: "Hi Students World, I need Print / Scan / Photocopy / Lamination services. Are you available now?" },
  { icon: "📱", title: "Online Services", desc: "Online bookings, email setup, portal registrations, and digital form submissions handled by our experienced team.", wa: "Hi Students World, I need help with Online Services (bookings / email / portal registrations)." },
  { icon: "💼", title: "Career & Employment", desc: "Professional resume creation, job portal registrations, employment form submissions, and career document preparation.", wa: "Hi Students World, I need help with Career & Employment services (resume / job portals)." },
  { icon: "🤝", title: "Consultation & Support", desc: "Guidance on document requirements, process navigation, government portal help — in Odia, Hindi or English.", wa: "Hi Students World, I'd like a consultation about a government / digital service." },
];

export const WHEEL_ICONS = ["🪪","📋","🎓","🚗","💳","🖨️","📱","💼","🏦","🗳️","✈️","🧾"];

export const PROCESS = [
  { n: "01", title: "Visit Students World", desc: "Walk into our center near Madhipur Chhaka, Konark. Open every day, no appointment needed." },
  { n: "02", title: "Submit Your Documents", desc: "Hand over your documents. Our team reviews everything and tells you exactly what's needed." },
  { n: "03", title: "Verification & Processing", desc: "We verify details and submit your application to the correct government portal with full accuracy." },
  { n: "04", title: "Application Tracking", desc: "We track your application and update you via call or message at every stage of the process." },
  { n: "05", title: "Receive Your Certificate", desc: "Once approved, we notify you immediately. Collect your certificate — printed, certified, and ready." },
];

export const WHY_US = [
  { icon: "⚡", title: "Lightning Fast", desc: "Most services completed same-day. We don't make you wait unnecessarily." },
  { icon: "🔒", title: "100% Secure", desc: "Your documents and data are handled with strict privacy and confidentiality." },
  { icon: "✅", title: "Government Approved", desc: "Officially authorised to process government forms, certificates, and applications." },
  { icon: "💰", title: "Affordable Pricing", desc: "Fair, transparent pricing with no hidden charges — ever." },
  { icon: "🧑‍💻", title: "Expert Team", desc: "10+ years navigating government systems — we know every form, every portal." },
  { icon: "📱", title: "Latest Technology", desc: "Modern tools ensure error-free digital submissions every single time." },
  { icon: "🤝", title: "Friendly Support", desc: "We guide you in Odia, Hindi, or English — never leave you confused." },
  { icon: "📍", title: "Local & Trusted", desc: "Rooted in Konark, serving families across Puri district for a decade." },
];

export const TESTIMONIALS = [
  { quote: "Got my income certificate in just one day. The staff was incredibly helpful.", name: "Ramesh Nayak", role: "Farmer, Konark" },
  { quote: "Applied for my daughter's scholarship form here. Perfect submission, no errors at all.", name: "Priya Mohanty", role: "Parent" },
  { quote: "Students World handled my Aadhaar update I was struggling with for months. Done in 30 minutes.", name: "Sunil Patra", role: "Student" },
  { quote: "Best cyber cafe in Konark. PAN card, bank KYC, and electricity bill all done in one visit.", name: "Anita Sahoo", role: "Business Owner" },
  { quote: "Professional service at affordable rates. They know exactly what documents are needed.", name: "Bikash Das", role: "Teacher" },
  { quote: "My railway exam form was submitted without a single error. Results came through perfectly.", name: "Deepak Jena", role: "Railway Aspirant" },
];
