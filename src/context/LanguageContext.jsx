import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      about: 'About',
      contact: 'Contact',
      login: 'Login',
      language: 'Language',
    },
    hero: {
      titleLine1: 'AI-Powered Multilingual',
      titleLine2: 'Healthcare Governance Platform',
      subtitle: 'A unified intelligent system for Government Hospitals and Pharmacies',
      explore: 'Explore Platform',
      demo: 'Toll Free: 1800-123-4567',
    },
    home: {
      ctaTitle: 'Ready to Transform Healthcare Governance?',
      ctaText: 'Join hundreds of government hospitals and pharmacies using our AI platform',
      primary: 'Get Started',
      secondary: 'Contact Us',
    },
    features: {
      heading: 'Powerful Features',
      subheading: 'Comprehensive healthcare governance at your fingertips',
      items: [
        { title: 'Real-Time Medicine Stock Monitoring', icon: '📦' },
        { title: 'Bed Availability Tracking', icon: '🛏️' },
        { title: 'Doctor Attendance', icon: '👨‍⚕️' },
        { title: 'Patient Footfall Analytics', icon: '📊' },
        { title: 'AI Demand Forecasting', icon: '🤖' },
        { title: 'Smart Stock Alerts', icon: '🔔' },
        { title: 'Resource Redistribution', icon: '🔄' },
        { title: 'Multilingual Complaint Portal', icon: '🗣️' },
        { title: 'Authority Dashboard', icon: '👨‍💼' },
        { title: 'Analytics & Reports', icon: '📈' },
      ],
    },
    modules: {
      heading: 'Platform Modules',
      subheading: 'Comprehensive solutions for healthcare management',
      items: [
        { title: 'Hospital Dashboard', description: 'Real-time hospital operations and inventory management', icon: '🏥', color: '#0B5ED7' },
        { title: 'Medicine Inventory', description: 'Track and manage medicine stock across facilities', icon: '💊', color: '#0A9396' },
        { title: 'AI Forecasting Engine', description: 'Predictive analytics for demand planning', icon: '🤖', color: '#10B981' },
        { title: 'Complaint Management', description: 'Efficient multilingual complaint handling', icon: '📋', color: '#F59E0B' },
        { title: 'Authority Dashboard', description: 'District and state-level oversight and analytics', icon: '👨‍💼', color: '#EF4444' },
        { title: 'Analytics & Reports', description: 'Comprehensive insights and performance metrics', icon: '📈', color: '#38BDF8' },
      ],
    },
    aiCapabilities: {
      heading: 'AI Capabilities',
      subheading: 'Advanced artificial intelligence features for smarter decisions',
      items: [
        { title: 'AI Forecasting', description: 'Advanced ai forecasting powered by machine learning', icon: '📊' },
        { title: 'Whisper Speech Recognition', description: 'Advanced whisper speech recognition powered by machine learning', icon: '🎤' },
        { title: 'OCR Image Processing', description: 'Advanced ocr image processing powered by machine learning', icon: '📸' },
        { title: 'Regional Language NLP', description: 'Advanced regional language nlp powered by machine learning', icon: '🗣️' },
        { title: 'Smart Alerts', description: 'Advanced smart alerts powered by machine learning', icon: '🔔' },
        { title: 'Predictive Analytics', description: 'Advanced predictive analytics powered by machine learning', icon: '🤖' },
      ],
    },
    complaintProcess: {
      heading: 'Citizen Complaint Process',
      subheading: 'Efficient and transparent complaint handling workflow',
      steps: [
        { title: 'Voice Complaint', icon: '🗣️' },
        { title: 'Speech to Text', icon: '📝' },
        { title: 'Upload photo', icon: '📸' },
        { title: 'Notifications', icon: '🔔' },
        { title: 'Authority Action', icon: '👨‍💼' },
        { title: 'Complaint Resolved', icon: '✅' },
      ],
    },
    multilingualSupport: {
      heading: 'Multilingual Support',
      subheading: 'Accessible in 10+ regional languages',
      languages: [
        { name: 'English', flag: '🇬🇧', code: 'EN' },
        { name: 'Hindi', flag: '🇮🇳', code: 'HI' },
        { name: 'Punjabi', flag: '🇮🇳', code: 'PA' },
        { name: 'Tamil', flag: '🇮🇳', code: 'TA' },
        { name: 'Telugu', flag: '🇮🇳', code: 'TE' },
        { name: 'Bengali', flag: '🇮🇳', code: 'BN' },
        { name: 'Gujarati', flag: '🇮🇳', code: 'GU' },
        { name: 'Marathi', flag: '🇮🇳', code: 'MR' },
        { name: 'Kannada', flag: '🇮🇳', code: 'KN' },
        { name: 'Malayalam', flag: '🇮🇳', code: 'ML' },
      ],
    },
    statistics: {
      heading: 'Our Impact',
      subheading: 'Transforming healthcare at scale',
      stats: [
        { number: 500, suffix: '+', label: 'Hospitals' },
        { number: 10000, suffix: '+', label: 'Medicines' },
        { number: 250000, suffix: '+', label: 'Citizens' },
        { number: 95, suffix: '%', label: 'Prediction Accuracy' },
      ],
    },
    dashboardPreview: {
      heading: 'Live Dashboard Preview',
      subheading: 'Real-time insights and analytics',
      medicineTitle: 'Medicine Stock Status',
      bedTitle: 'Bed Availability',
      attendanceTitle: 'Doctor Attendance',
      complaintTitle: 'Complaint Status',
      open: 'Open',
      inProgress: 'In Progress',
      resolved: 'Resolved',
    },
    testimonials: {
      heading: 'What They Say',
      subheading: 'Trusted by government officials and healthcare professionals',
      items: [
        { name: 'Dr. Rajesh Kumar', role: 'Government Hospital Director', quote: 'This platform has transformed how we manage hospital operations. The AI forecasting has reduced medicine wastage by 40%.', avatar: '👨‍⚕️' },
        { name: 'Priya Sharma', role: 'District Health Officer', quote: 'The multilingual complaint portal has increased citizen satisfaction significantly. Response times have improved dramatically.', avatar: '👩‍💼' },
        { name: 'Arjun Singh', role: 'Pharmacy Manager', quote: 'Stock management is now seamless. Real-time alerts prevent shortages and the AI recommendations are incredibly accurate.', avatar: '🧑‍💼' },
      ],
    },
    footer: {
      brand: 'HealthGov AI',
      subtitle: 'AI-Powered Multilingual Healthcare Governance Platform',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
    },
    login: {
      heading: 'Select Your Role',
      subheading: 'Choose your account type to continue',
      options: [
        { title: 'Citizen', description: 'Submit and track complaints', link: '/auth/citizen', color: '#0B5ED7' },
        { title: 'Hospital', description: 'Manage hospital operations', link: '/auth/hospital', color: '#0A9396' },
        { title: 'Pharmacy', description: 'Manage medicine inventory', link: '/auth/pharmacy', color: '#10B981' },
        { title: 'District Authority', description: 'District-level oversight', link: '/auth/district', color: '#F59E0B' },
        { title: 'State Authority', description: 'State-level analytics', link: '/auth/state', color: '#EF4444' },
        { title: 'Admin', description: 'Platform administration', link: '/auth/admin', color: '#38BDF8' },
      ],
      footerText: "Don't have an account? Sign up here",
    },
    about: {
      title: 'About Us',
      missionTitle: 'Our Mission',
      missionText: 'To revolutionize healthcare governance through AI-powered intelligent systems that ensure efficient medicine management, optimal resource allocation, and citizen-centric service delivery across government healthcare facilities.',
      visionTitle: 'Our Vision',
      visionText: 'A future where every citizen has access to quality healthcare, powered by intelligent technology that optimizes resources, reduces waste, and improves outcomes across all government hospitals and pharmacies.',
      problemTitle: 'The Problem',
      problemText: 'Government healthcare systems face significant challenges including medicine stockouts, poor resource distribution, inefficient complaint management, and lack of real-time insights. These issues directly impact patient care and healthcare accessibility.',
      solutionTitle: 'Our Solution',
      solutionText: 'Our AI-powered platform integrates real-time monitoring, predictive analytics, multilingual communication, and intelligent resource management to transform healthcare governance. We enable smarter decisions, faster responses, and better outcomes.',
      stackTitle: 'Technology Stack',
      stackItems: ['React.js', 'Node.js', 'AI/ML', 'Real-time Analytics', 'Cloud Computing', 'Multilingual NLP'],
    },
    contact: {
      title: 'Contact Us',
      cards: [
        { title: 'Email', value: 'contact@healthgovai.com' },
        { title: 'Phone', value: '+91 (0) 1234-567890' },
        { title: 'Location', value: 'India' },
      ],
      formTitle: 'Send us a Message',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Your message...',
      submit: 'Send Message',
    },
  },
  hi: {
    nav: { home: 'होम', features: 'विशेषताएँ', about: 'हमारे बारे में', contact: 'संपर्क', login: 'लॉगिन', language: 'भाषा' },
    hero: { titleLine1: 'एआई संचालित बहुभाषी', titleLine2: 'स्वास्थ्य治理 प्लेटफ़ॉर्म', subtitle: 'सरकारी hospitals और pharmacies के लिए एक统一 बुद्धिमान प्रणाली', explore: 'प्लेटफ़ॉर्म देखें', demo: 'टोल फ्री: 1800-123-4567' },
    home: { ctaTitle: 'स्वास्थ्य प्रशासन को बदलने के लिए तैयार हैं?', ctaText: 'हज़ारों सरकारी अस्पतालों और फार्मेसियों के साथ जुड़ें', primary: 'शुरू करें', secondary: 'संपर्क करें' },
    features: { heading: 'शक्तिशाली सुविधाएँ', subheading: 'आपके हाथों में व्यापक स्वास्थ्य治理', items: [{ title: 'रियल-टाइम दवा स्टॉक मॉनिटरिंग', icon: '📦' }, { title: 'बेड उपलब्धता ट्रैकिंग', icon: '🛏️' }, { title: 'डॉक्टर उपस्थिति', icon: '👨‍⚕️' }, { title: 'रोगी भीड़ विश्लेषण', icon: '📊' }, { title: 'एआई मांग पूर्वानुमान', icon: '🤖' }, { title: 'स्मार्ट स्टॉक अलर्ट', icon: '🔔' }, { title: 'संसाधन पुनर्वितरण', icon: '🔄' }, { title: 'बहुभाषी शिकायत पोर्टल', icon: '🗣️' }, { title: 'प्राधिकरण डैशबोर्ड', icon: '👨‍💼' }, { title: 'विश्लेषण और रिपोर्ट', icon: '📈' }] },
    modules: { heading: 'प्लेटफ़ॉर्म मॉड्यूल', subheading: 'स्वास्थ्य प्रबंधन के लिए व्यापक समाधान', items: [{ title: 'अस्पताल डैशबोर्ड', description: 'रियल-टाइम अस्पताल संचालन और इन्वेंटरी प्रबंधन', icon: '🏥', color: '#0B5ED7' }, { title: 'दवा सूची', description: 'संस्थानों में दवा स्टॉक ट्रैक और प्रबंधन', icon: '💊', color: '#0A9396' }, { title: 'एआई पूर्वानुमान इंजन', description: 'मांग योजना के लिए पूर्वानुमानित विश्लेषण', icon: '🤖', color: '#10B981' }, { title: 'शिकायत प्रबंधन', description: 'कुशल बहुभाषी शिकायत संभाल', icon: '📋', color: '#F59E0B' }, { title: 'प्राधिकरण डैशबोर्ड', description: 'जिला और राज्य स्तर की निगरानी और विश्लेषण', icon: '👨‍💼', color: '#EF4444' }, { title: 'विश्लेषण और रिपोर्ट', description: 'व्यापक अंतर्दृष्टि और प्रदर्शन मीट्रिक', icon: '📈', color: '#38BDF8' }] },
    aiCapabilities: { heading: 'एआई क्षमताएँ', subheading: 'अधिक समझदार निर्णयों के लिए उन्नत एआई विशेषताएँ', items: [{ title: 'एआई पूर्वानुमान', description: 'मशीन लर्निंग द्वारा संचालित उन्नत एआई पूर्वानुमान', icon: '📊' }, { title: 'व्हिस्पर वॉइस रिकग्निशन', description: 'मशीन लर्निंग द्वारा संचालित उन्नत व्हिस्पर वॉइस रिकग्निशन', icon: '🎤' }, { title: 'OCR इमेज प्रोसेसिंग', description: 'मशीन लर्निंग द्वारा संचालित उन्नत OCR इमेज प्रोसेसिंग', icon: '📸' }, { title: 'क्षेत्रीय भाषा NLP', description: 'मशीन लर्निंग द्वारा संचालित उन्नत क्षेत्रीय भाषा NLP', icon: '🗣️' }, { title: 'स्मार्ट अलर्ट', description: 'मशीन लर्निंग द्वारा संचालित उन्नत स्मार्ट अलर्ट', icon: '🔔' }, { title: 'पूर्वानुमानित विश्लेषण', description: 'मशीन लर्निंग द्वारा संचालित उन्नत पूर्वानुमानित विश्लेषण', icon: '🤖' }] },
    complaintProcess: { heading: 'नागरिक शिकायत प्रक्रिया', subheading: 'कुशल और पारदर्शी शिकायत निपटान कार्यप्रवाह', steps: [{ title: 'वॉइस शिकायत', icon: '🗣️' }, { title: 'स्पीच टू टेक्स्ट', icon: '📝' }, { title: 'फोटो अपलोड', icon: '📸' }, { title: 'सूचनाएँ', icon: '🔔' }, { title: 'प्राधिकरण कार्रवाई', icon: '👨‍💼' }, { title: 'शिकायत हल', icon: '✅' }] },
    multilingualSupport: { heading: 'बहुभाषी समर्थन', subheading: '10+ क्षेत्रीय भाषाओं में उपलब्ध', languages: [{ name: 'अंग्रेज़ी', flag: '🇬🇧', code: 'EN' }, { name: 'हिंदी', flag: '🇮🇳', code: 'HI' }, { name: 'पंजाबी', flag: '🇮🇳', code: 'PA' }, { name: 'तमिल', flag: '🇮🇳', code: 'TA' }, { name: 'तेलुगु', flag: '🇮🇳', code: 'TE' }, { name: 'बंगाली', flag: '🇮🇳', code: 'BN' }, { name: 'गुजराती', flag: '🇮🇳', code: 'GU' }, { name: 'मराठी', flag: '🇮🇳', code: 'MR' }, { name: 'कन्नड़', flag: '🇮🇳', code: 'KN' }, { name: 'मलयालम', flag: '🇮🇳', code: 'ML' }] },
    statistics: { heading: 'हमारा प्रभाव', subheading: 'पैमाने पर स्वास्थ्य परिवर्तन', stats: [{ number: 500, suffix: '+', label: 'अस्पताल' }, { number: 10000, suffix: '+', label: 'दवाएँ' }, { number: 250000, suffix: '+', label: 'नागरिक' }, { number: 95, suffix: '%', label: 'पूर्वानुमान सटीकता' }] },
    dashboardPreview: { heading: 'लाइव डैशबोर्ड पूर्वावलोकन', subheading: 'रीयल-टाइम अंतर्दृष्टि और विश्लेषण', medicineTitle: 'दवा स्टॉक स्थिति', bedTitle: 'बेड उपलब्धता', attendanceTitle: 'डॉक्टर उपस्थिति', complaintTitle: 'शिकायत स्थिति', open: 'खुला', inProgress: 'प्रगति में', resolved: 'हल हो गया' },
    testimonials: { heading: 'लोग क्या कहते हैं', subheading: 'सरकारी अधिकारियों और स्वास्थ्य पेशेवरों द्वारा भरोसा', items: [{ name: 'डॉ. राजेश कुमार', role: 'सरकारी अस्पताल निदेशक', quote: 'इस प्लेटफ़ॉर्म ने हमारे अस्पताल संचालन को बदल दिया है। एआई पूर्वानुमान ने दवा बर्बादी 40% कम कर दी है।', avatar: '👨‍⚕️' }, { name: 'प्रिया शर्मा', role: 'जिला स्वास्थ्य अधिकारी', quote: 'बहुभाषी शिकायत पोर्टल से नागरिक संतुष्टि काफी बढ़ी है। प्रतिक्रिया समय में भारी सुधार हुआ है।', avatar: '👩‍💼' }, { name: 'अरुण सिंह', role: 'फार्मेसी प्रबंधक', quote: 'स्टॉक प्रबंधन अब आसान है। रीयल-टाइम अलर्ट कमी को रोकते हैं और एआई सुझाव बहुत सटीक हैं।', avatar: '🧑‍💼' }] },
    footer: { brand: 'हेल्थगव एआई', subtitle: 'एआई-संचालित बहुभाषी स्वास्थ्य治理 प्लेटफ़ॉर्म', quickLinks: 'त्वरित लिंक', contact: 'संपर्क', followUs: 'हमें फॉलो करें', rights: 'सर्वाधिकार सुरक्षित।' },
    login: { heading: 'अपनी भूमिका चुनें', subheading: 'जारी रखने के लिए अपना खाता प्रकार चुनें', options: [{ title: 'नागरिक', description: 'शिकायत सबमिट करें और ट्रैक करें', link: '/auth/citizen', color: '#0B5ED7' }, { title: 'अस्पताल', description: 'अस्पताल संचालन प्रबंधित करें', link: '/auth/hospital', color: '#0A9396' }, { title: 'फार्मेसी', description: 'दवा इन्वेंटरी प्रबंधित करें', link: '/auth/pharmacy', color: '#10B981' }, { title: 'जिला प्राधिकरण', description: 'जिला-स्तरीय निगरानी', link: '/auth/district', color: '#F59E0B' }, { title: 'राज्य प्राधिकरण', description: 'राज्य-स्तरीय विश्लेषण', link: '/auth/state', color: '#EF4444' }, { title: 'एडमिन', description: 'प्लेटफ़ॉर्म प्रशासन', link: '/auth/admin', color: '#38BDF8' }], footerText: 'क्या आपके पास खाता नहीं है? यहाँ साइन अप करें' },
    about: { title: 'हमारे बारे में', missionTitle: 'हमारा मिशन', missionText: 'सरकारी स्वास्थ्य सुविधाओं में कुशल दवा प्रबंधन, अनुकूल संसाधन आवंटन और नागरिक-केंद्रित सेवा वितरण सुनिश्चित करने वाले एआई-आधारित बुद्धिमान प्रणालियों के माध्यम से स्वास्थ्य शासन में क्रांति लाना।', visionTitle: 'हमारा दृष्टिकोण', visionText: 'एक ऐसा भविष्य जहाँ हर नागरिक को गुणवत्तापूर्ण स्वास्थ्य सेवा मिले, जो बुद्धिमान तकनीक से संसाधनों को अनुकूलित करे, बर्बादी कम करे और सभी सरकारी अस्पतालों और फार्मेसियों में परिणामों में सुधार करे।', problemTitle: 'समस्या', problemText: 'सरकारी स्वास्थ्य प्रणालियाँ दवा स्टॉकआउट, खराब संसाधन वितरण, अक्षमत शिकायत प्रबंधन और रीयल-टाइम अंतर्दृष्टि की कमी जैसी महत्वपूर्ण चुनौतियों का सामना करती हैं। ये मुद्दे मरीज की देखभाल और स्वास्थ्य पहुँच को सीधे प्रभावित करते हैं।', solutionTitle: 'हमारा समाधान', solutionText: 'हमारी एआई-संचालित प्लेटफ़ॉर्म रीयल-टाइम निगरानी, पूर्वानुमानित विश्लेषण, बहुभाषी संचार और बुद्धिमान संसाधन प्रबंधन को एकीकृत करती है ताकि स्वास्थ्य शासन बदल सके। हम अधिक समझदार निर्णय, तेज़ प्रतिक्रिया और बेहतर परिणाम सक्षम करते हैं।', stackTitle: 'प्रौद्योगिकी स्टैक', stackItems: ['React.js', 'Node.js', 'AI/ML', 'रीयल-टाइम विश्लेषण', 'क्लाउड कंप्यूटिंग', 'बहुभाषी NLP'] },
    contact: { title: 'संपर्क करें', cards: [{ title: 'ईमेल', value: 'contact@healthgovai.com' }, { title: 'फोन', value: '+91 (0) 1234-567890' }, { title: 'स्थान', value: 'भारत' }], formTitle: 'हमें संदेश भेजें', nameLabel: 'नाम', emailLabel: 'ईमेल', messageLabel: 'संदेश', namePlaceholder: 'आपका नाम', emailPlaceholder: 'your@email.com', messagePlaceholder: 'आपका संदेश...', submit: 'संदेश भेजें' },
  },
  te: {
    nav: { home: 'హోమ్', features: 'విశేషాలు', about: 'మా గురించి', contact: 'సంప్రదించండి', login: 'లాగిన్', language: 'భాష' },
    hero: { titleLine1: 'AI ఆధారిత బహుభాషా', titleLine2: 'ఆరోగ్య నిర్వహణ ప్లాట్ఫారమ్', subtitle: 'ప్రభుత్వ ఆసుపత్రులు మరియు ఫార్మసీలు కోసం ఏకీకృత బుజ్జగింపు వ్యవస్థ', explore: 'ప్లాట్ఫార్మ్‌ను అన్వేషించండి', demo: 'టోల్ ఫ్రీ: 1800-123-4567' },
    home: { ctaTitle: 'ఆరోగ్య పరిపాలనను మార్చడానికి సిద్ధంగా ఉన్నారా?', ctaText: 'వందలాది ప్రభుత్వ ఆసుపత్రులు మరియు ఫార్మసీలు మా AI ప్లాట్ఫారంను ఉపయోగిస్తున్నాయి', primary: 'ప్రారంభించండి', secondary: 'సంప్రదించండి' },
    features: { heading: 'శక్తివంతమైన లక్షణాలు', subheading: 'మీ చేతిలో సమగ్రమైన ఆరోగ్య పరిపాలన', items: [{ title: 'రీల్-టైమ్ మందుల స్టాక్ మానిటరింగ్', icon: '📦' }, { title: 'బెడ్ లభ్యత ట్రాకింగ్', icon: '🛏️' }, { title: 'డాక్టర్ హాజరు', icon: '👨‍⚕️' }, { title: 'రోగి తటస్థ విశ్లేషణ', icon: '📊' }, { title: 'AI డిమాండ్ ఫోర్కాస్టింగ్', icon: '🤖' }, { title: 'స్మార్ట్ స్టాక్ అలర్ట్లు', icon: '🔔' }, { title: 'వనరుల పునఃపంపిణీ', icon: '🔄' }, { title: 'బహుభాషా ఫిర్యాదు పోర్టల్', icon: '🗣️' }, { title: 'అధికార డాష్బోర్డ్', icon: '👨‍💼' }, { title: 'విశ్లేషణలు మరియు నివేదికలు', icon: '📈' }] },
    modules: { heading: 'ప్లాట్ఫారమ్ మాడ్యూల్స్', subheading: 'ఆరోగ్య నిర్వహణకు సమగ్రమైన పరిష్కారాలు', items: [{ title: 'ఆసుపత్రి డాష్బోర్డ్', description: 'రీల్-టైమ్ ఆసుపత్రి కార్యకలాపాలు మరియు ఇన్వెంటరీ నిర్వహణ', icon: '🏥', color: '#0B5ED7' }, { title: 'మందుల ఇన్వెంటరీ', description: 'సంస్థలలో మందుల స్టాక్‌ను ట్రాక్ చేసి నిర్వహించండి', icon: '💊', color: '#0A9396' }, { title: 'AI ఫోర్కాస్టింగ్ ఇంజిన్', description: 'డిమాండ్ ప్లానింగ్ కోసం ఊహాత్మక విశ్లేషణ', icon: '🤖', color: '#10B981' }, { title: 'ఫిర్యాదు నిర్వహణ', description: 'సమర్థవంతమైన బహుభాషా ఫిర్యాదు నిర్వహణ', icon: '📋', color: '#F59E0B' }, { title: 'అధికార డాష్బోర్డ్', description: 'జిల్లా మరియు రాష్ట్ర-స్థాయి పర్యవేక్షణ మరియు విశ్లేషణ', icon: '👨‍💼', color: '#EF4444' }, { title: 'విశ్లేషణలు మరియు నివేదికలు', description: 'సమగ్రమైన అంతర్దృష్టులు మరియు పనితీరు మెట్రిక్స్', icon: '📈', color: '#38BDF8' }] },
    aiCapabilities: { heading: 'AI సామర్థ్యాలు', subheading: 'మెరుగైన నిర్ణయాలకు అధునాతన AI లక్షణాలు', items: [{ title: 'AI ఫోర్కాస్టింగ్', description: 'మెషిన్ లెర్నింగ్ ద్వారా ఆధారిత అధునాతన AI ఫోర్కాస్టింగ్', icon: '📊' }, { title: 'Whisper Speech Recognition', description: 'మెషిన్ లెర్నింగ్ ద్వారా ఆధారిత అధునాతన Whisper Speech Recognition', icon: '🎤' }, { title: 'OCR ఇమేజ్ ప్రాసెసింగ్', description: 'మెషిన్ లెర్నింగ్ ద్వారా ఆధారిత అధునాతన OCR ఇమేజ్ ప్రాసెసింగ్', icon: '📸' }, { title: 'ప్రాంతీయ భాష NLP', description: 'మెషిన్ లెర్నింగ్ ద్వారా ఆధారిత అధునాతన ప్రాంతీయ భాష NLP', icon: '🗣️' }, { title: 'స్మార్ట్ అలర్ట్స్', description: 'మెషిన్ లెర్నింగ్ ద్వారా ఆధారిత అధునాతన స్మార్ట్ అలర్ట్స్', icon: '🔔' }, { title: 'ఊహాత్మక విశ్లేషణ', description: 'మెషిన్ లెర్నింగ్ ద్వారా ఆధారిత అధునాతన ఊహాత్మక విశ్లేషణ', icon: '🤖' }] },
    complaintProcess: { heading: 'పౌర ఫిర్యాదు ప్రక్రియ', subheading: 'సమర్థవంతమైన మరియు పారదర్శక ఫిర్యాదు నిర్వహణ కార్యప్రణాళి', steps: [{ title: 'వాయిస్ ఫిర్యాదు', icon: '🗣️' }, { title: 'స్పీచ్ టు టెక్స్ట్', icon: '📝' }, { title: 'ఫొటో అప్‌లోడ్', icon: '📸' }, { title: 'నోటిఫికేషన్లు', icon: '🔔' }, { title: 'అధికార చర్య', icon: '👨‍💼' }, { title: 'ఫిర్యాదు పరిష్కరించబడింది', icon: '✅' }] },
    multilingualSupport: { heading: 'బహుభాషా మద్దతు', subheading: '10+ ప్రాంతీయ భాషలలో అందుబాటులో', languages: [{ name: 'ఇంగ్లీష్', flag: '🇬🇧', code: 'EN' }, { name: 'హిందీ', flag: '🇮🇳', code: 'HI' }, { name: 'పంజాబీ', flag: '🇮🇳', code: 'PA' }, { name: 'తమిళం', flag: '🇮🇳', code: 'TA' }, { name: 'తెలుగు', flag: '🇮🇳', code: 'TE' }, { name: 'బెంగాలీ', flag: '🇮🇳', code: 'BN' }, { name: 'గుజరాతీ', flag: '🇮🇳', code: 'GU' }, { name: 'మరాఠీ', flag: '🇮🇳', code: 'MR' }, { name: 'కన్నడ', flag: '🇮🇳', code: 'KN' }, { name: 'మలయాళం', flag: '🇮🇳', code: 'ML' }] },
    statistics: { heading: 'మా ప్రభావం', subheading: 'స్థాయిలో ఆరోగ్య పరివర్తన', stats: [{ number: 500, suffix: '+', label: 'ఆసుపత్రులు' }, { number: 10000, suffix: '+', label: 'మందులు' }, { number: 250000, suffix: '+', label: 'పౌరులు' }, { number: 95, suffix: '%', label: 'ఊహ సత్య accuracy' }] },
    dashboardPreview: { heading: 'లైవ్ డాష్బోర్డ్ ప్రివ్యూ', subheading: 'రీల్-టైమ్ అంతర్దృష్టులు మరియు విశ్లేషణలు', medicineTitle: 'మందుల స్టాక్ స్థితి', bedTitle: 'బెడ్ లభ్యత', attendanceTitle: 'డాక్టర్ హాజరు', complaintTitle: 'ఫిర్యాదు స్థితి', open: 'తెరవబడింది', inProgress: 'ప్రగతిలో ఉంది', resolved: 'పరిష్కరించబడింది' },
    testimonials: { heading: 'ప్రజలు ఏమంటున్నారు', subheading: 'ప్రభుత్వ అధికారులు మరియు ఆరోగ్య వృత్తిపరులచే విశ్వాసం', items: [{ name: 'డాక్టర్ రాజేష్ కుమార్', role: 'ప్రభుత్వ ఆసుపత్రి డైరెక్టర్', quote: 'ఈ ప్లాట్ఫారమ్ మా ఆసుపత్రి కార్యకలాపాలను radically మార్చింది. AI ఫోర్కాస్టింగ్ మందుల వ్యర్థం 40% తగ్గించింది.', avatar: '👨‍⚕️' }, { name: 'ప్రియా శర్మ', role: 'జిల్లా ఆరోగ్య అధికారి', quote: 'బహుభాషా ఫిర్యాదు పోర్టల్ పౌర సంతృప్తిని గణనీయంగా పెంచింది. ప్రతిస్పందన సమయాలు గణనీయంగా మెరుగుపడ్డాయి.', avatar: '👩‍💼' }, { name: 'అర్జున్ సింగ్', role: 'ఫార్మసీ మేనేజర్', quote: 'స్టాక్ మేనేజ్మెంట్ ఇప్పుడు आसानంగా ఉంది. రియల్-టైమ్ అలర్ట్లు కొరతలను నిరోధిస్తాయి మరియు AI సిఫార్సులు చాలా accurate.', avatar: '🧑‍💼' }] },
    footer: { brand: 'HealthGov AI', subtitle: 'AI ఆధారిత బహుభాషా ఆరోగ్య పరిపాలన ప్లాట్ఫారమ్', quickLinks: 'త్వరిత లింకులు', contact: 'సంప్రదించండి', followUs: 'మమ్మల్ని అనుసరించండి', rights: 'అన్ని హక్కులు కాపీరైట్讯.' },
    login: { heading: 'మీ పాత్రను ఎంచుకోండి', subheading: 'కొనసాగడానికి మీ ఖాతా రకాన్ని ఎంచుకోండి', options: [{ title: 'పౌరుడు', description: 'ఫిర్యాదులను సమర్పించండి మరియు ట్రాక్ చేయండి', link: '/auth/citizen', color: '#0B5ED7' }, { title: 'ఆసుపత్రి', description: 'ఆసుపత్రి కార్యకలాపాలను నిర్వహించండి', link: '/auth/hospital', color: '#0A9396' }, { title: 'ఫార్మసీ', description: 'మందుల ఇన్వెంటరీని నిర్వహించండి', link: '/auth/pharmacy', color: '#10B981' }, { title: 'జిల్లా అధికారం', description: 'జిల్లా-స్థాయి పర్యవేక్షణ', link: '/auth/district', color: '#F59E0B' }, { title: 'రాష్ట్ర అధికారం', description: 'రాష్ట్ర-స్థాయి విశ్లేషణలు', link: '/auth/state', color: '#EF4444' }, { title: 'అడ్మిన్', description: 'ప్లాట్ఫారమ్ నిర్వహణ', link: '/auth/admin', color: '#38BDF8' }], footerText: 'మీకు ఖాతా ಇಲ್ಲా? ఇక్కడ సైన్ అప్ చేయండి' },
    about: { title: 'మా గురించి', missionTitle: 'మా მისస్తా', missionText: 'ప్రభుత్వ ఆరోగ్య సౌకర్యాల్లో సమర్థవంతమైన మందుల నిర్వహణ, అనుకూల వనరుల పంపిణీ మరియు పౌర-కేంద్రీకృత సేవల అందింపును నిర్ధారించడానికి AI-ఆధారిత బుద్ధిమంతుల వ్యవస్థల ద్వారా ఆరోగ్య పరిపాలనను పరివర్తనం చేయడం.', visionTitle: 'మా దృష్టి', visionText: 'ప్రతి పౌరుడు నాణ్యమైన ఆరోగ్య సేవలను పొందగలిగే భవిష్యత్తు, తెలివైన సాంకేతికత ద్వారా వనరులను ఆప్టిమైజ్ చేయడం, వ్యర్థాలను తగ్గించడం మరియు అన్ని ప్రభుత్వ ఆసుపత్రులు మరియు ఫార్మసీలలో ఫలితాలను మెరుగుపరచడం.', problemTitle: 'సమస్య', problemText: 'ప్రభుత్వ ఆరోగ్య వ్యవస్థలు మందుల స్టాక్‌ఆవుట్లు, చెడ్డ వనరుల పంపిణీ, అపారమైన ఫిర్యాదు నిర్వహణ మరియు రియల్-టైమ్ అంతర్దృష్టుల অভావం వంటి ముఖ్యమైన సవాళ్లను ఎదుర్కొంటాయి. ఈ సమస్యలు రోగి సంరక్షణ మరియు ఆరోగ్య అందుబాటును నేరుగా ప్రభావితం చేస్తాయి.', solutionTitle: 'మా పరిష్కారం', solutionText: 'మా AI-ఆధారిత ప్లాట్ఫారమ్ రియల్-టైమ్ మానిటరింగ్, ఊహాత్మక విశ్లేషణ, బహుభాషా కమ్యూనికేషన్ మరియు బుద్ధిమంతుల వనరుల నిర్వహణను ఏకీకృతం చేస్తుంది. ఆరోగ్య పరిపాలనను మార్చడానికి మేము మరింత తెలివైన నిర్ణయాలు, వేగవంతమైన ప్రతిస్పందనలు మరియు మెరుగైన ఫలితాలను సాధిస్తున్నాము.', stackTitle: 'టెక్నాలజీ స్టాక్', stackItems: ['React.js', 'Node.js', 'AI/ML', 'రీల్-టైమ్ విశ్లేషణ', 'క్లౌడ్ కంప్యూటింగ్', 'బహుభాషా NLP'] },
    contact: { title: 'మమ్మల్ని సంప్రదించండి', cards: [{ title: 'ఇమెయిల్', value: 'contact@healthgovai.com' }, { title: 'ఫోన్', value: '+91 (0) 1234-567890' }, { title: 'స్థానం', value: 'భారతదేశం' }], formTitle: 'మాకు సందేశం పంపండి', nameLabel: 'పేరు', emailLabel: 'ఇమెయిల్', messageLabel: 'సందేశం', namePlaceholder: 'మీ పేరు', emailPlaceholder: 'your@email.com', messagePlaceholder: 'మీ సందేశం...', submit: 'సందేశం పంపండి' },
  },
  ta: {
    nav: { home: 'முகப்பு', features: 'வசதிகள்', about: 'எங்களைப் பற்றி', contact: 'தொடர்பு', login: 'உள்நுழைவு', language: 'மொழி' },
    hero: { titleLine1: 'AI அடிப்படையிலான பலமொழி', titleLine2: 'சுகாதார நிர்வாக தளம்', subtitle: 'அரசு மருத்துவமனைகள் மற்றும் மருந்தகங்களுக்கான ஒருங்கிணைந்த புத்திசாலித்தனமான அமைப்பு', explore: 'தளத்தை ஆராயுங்கள்', demo: 'டோல் ஃப்ரீ: 1800-123-4567' },
    home: { ctaTitle: 'சுகாதார நிர்வாகத்தை மாற்றத் தயாரா?', ctaText: 'ஆயிரக்கணக்கான அரசு மருத்துவமனைகள் மற்றும் மருந்தகங்கள் நம் AI தளத்தைப் பயன்படுத்துகின்றன', primary: 'தொடங்கவும்', secondary: 'தொடர்பு கொள்ளவும்' },
    features: { heading: 'சக்திவாய்ந்த அம்சங்கள்', subheading: 'உங்கள் கைகளில் விரிவான சுகாதார நிர்வாகம்', items: [{ title: 'நிகழ்நேர மருந்து இருப்பு கண்காணிப்பு', icon: '📦' }, { title: 'படுக்கை கிடைக்கும் தன்மை கண்காணிப்பு', icon: '🛏️' }, { title: 'டாக்டர் வருகை', icon: '👨‍⚕️' }, { title: 'நோயாளி நுழைவு பகுப்பாய்வு', icon: '📊' }, { title: 'AI தேவை முன்னறிவிப்பு', icon: '🤖' }, { title: 'சிறப்பு இருப்பு எச்சரிக்கைகள்', icon: '🔔' }, { title: 'வள ஆதார மறுபகிர்வு', icon: '🔄' }, { title: 'பலமொழி புகார் போர்டல்', icon: '🗣️' }, { title: 'அதிகாரங்கள் டாஷ்போர்டு', icon: '👨‍💼' }, { title: 'பகுப்பாய்வுகள் மற்றும் அறிக்கைகள்', icon: '📈' }] },
    modules: { heading: 'தள கூறுகள்', subheading: 'சுகாதார மேலாண்மைக்கான விரிவான தீர்வுகள்', items: [{ title: 'மருத்துவமனை டாஷ்போர்டு', description: 'நிகழ்நேர மருத்துவமனை செயல்பாடுகள் மற்றும் இருப்பு மேலாண்மை', icon: '🏥', color: '#0B5ED7' }, { title: 'மருந்து இருப்பு', description: 'நிறுவனங்களில் மருந்து இருப்பை கண்காணித்து நிர்வகிக்கவும்', icon: '💊', color: '#0A9396' }, { title: 'AI முன்னறிவிப்பு இயந்திரம்', description: 'தேவை திட்டமிடலுக்கான எதிர்கால பகுப்பாய்வு', icon: '🤖', color: '#10B981' }, { title: 'புகார் மேலாண்மை', description: 'செயல்திறமான பலமொழி புகார் கையாளுதல்', icon: '📋', color: '#F59E0B' }, { title: 'அதிகாரங்கள் டாஷ்போர்டு', description: 'மாவட்ட மற்றும் மாநில அளவிலான கண்காணிப்பு மற்றும் பகுப்பாய்வு', icon: '👨‍💼', color: '#EF4444' }, { title: 'பகுப்பாய்வுகள் மற்றும் அறிக்கைகள்', description: 'விரிவான நுண்ணறிவு மற்றும் செயல்திறன் அளவீடுகள்', icon: '📈', color: '#38BDF8' }] },
    aiCapabilities: { heading: 'AI திறன்கள்', subheading: 'மேம்பட்ட முடிவுகளுக்கான மேம்பட்ட AI வசதிகள்', items: [{ title: 'AI முன்னறிவிப்பு', description: 'எந்திர கற்றல் மூலம் இயங்கும் மேம்பட்ட AI முன்னறிவிப்பு', icon: '📊' }, { title: 'Whisper Speech Recognition', description: 'எந்திர கற்றல் மூலம் இயங்கும் மேம்பட்ட Whisper Speech Recognition', icon: '🎤' }, { title: 'OCR படம் செயலாக்கம்', description: 'எந்திர கற்றல் மூலம் இயங்கும் மேம்பட்ட OCR படம் செயலாக்கம்', icon: '📸' }, { title: 'பிராந்திய மொழி NLP', description: 'எந்திர கற்றல் மூலம் இயங்கும் மேம்பட்ட பிராந்திய மொழி NLP', icon: '🗣️' }, { title: 'சிறப்பு எச்சரிக்கைகள்', description: 'எந்திர கற்றல் மூலம் இயங்கும் மேம்பட்ட சிறப்பு எச்சரிக்கைகள்', icon: '🔔' }, { title: 'முன்கணிப்பு பகுப்பாய்வு', description: 'எந்திர கற்றல் மூலம் இயங்கும் மேம்பட்ட முன்கணிப்பு பகுப்பாய்வு', icon: '🤖' }] },
    complaintProcess: { heading: 'குடிமகன் புகார் செயல்முறை', subheading: 'செயல்திறன்மிக்க மற்றும் வெளிப்படையான புகார் கையாளுதல் செயல்முறை', steps: [{ title: 'குரல் புகார்', icon: '🗣️' }, { title: 'பேச்சு-க்கு-உரை', icon: '📝' }, { title: 'புகைப்படத்தை பதிவேற்று', icon: '📸' }, { title: 'அறிவிப்புகள்', icon: '🔔' }, { title: 'அதிகார நடவடிக்கை', icon: '👨‍💼' }, { title: 'புகார் தீர்க்கப்பட்டது', icon: '✅' }] },
    multilingualSupport: { heading: 'பலமொழி ஆதரவு', subheading: '10+ பிராந்திய மொழிகளில் கிடைக்கிறது', languages: [{ name: 'ஆங்கிலம்', flag: '🇬🇧', code: 'EN' }, { name: 'இந்தி', flag: '🇮🇳', code: 'HI' }, { name: 'பஞ்சாபி', flag: '🇮🇳', code: 'PA' }, { name: 'தமிழ்', flag: '🇮🇳', code: 'TA' }, { name: 'தெலுங்கு', flag: '🇮🇳', code: 'TE' }, { name: 'வங்காளம்', flag: '🇮🇳', code: 'BN' }, { name: 'குஜராத்தி', flag: '🇮🇳', code: 'GU' }, { name: 'மராத்தி', flag: '🇮🇳', code: 'MR' }, { name: 'கன்னடம்', flag: '🇮🇳', code: 'KN' }, { name: 'மலையாளம்', flag: '🇮🇳', code: 'ML' }] },
    statistics: { heading: 'எங்கள் தாக்கம்', subheading: 'அளவில் சுகாதார மாற்றம்', stats: [{ number: 500, suffix: '+', label: 'மருத்துவமனைகள்' }, { number: 10000, suffix: '+', label: 'மருந்துகள்' }, { number: 250000, suffix: '+', label: 'குடிமக்கள்' }, { number: 95, suffix: '%', label: 'முன்கணிப்பு துல்லியம்' }] },
    dashboardPreview: { heading: 'உண்மையான டாஷ்போர்டு முன்னோட்டம்', subheading: 'நிகழ்நேர நுண்ணறிவுகள் மற்றும் பகுப்பாய்வுகள்', medicineTitle: 'மருந்து இருப்பு நிலை', bedTitle: 'படுக்கை கிடைக்கும் தன்மை', attendanceTitle: 'டாக்டர் வருகை', complaintTitle: 'புகார் நிலை', open: 'திறந்தது', inProgress: 'செயலில் உள்ளது', resolved: 'தீர்க்கப்பட்டது' },
    testimonials: { heading: 'மக்கள் என்ன சொல்கிறார்கள்', subheading: 'அரசு அதிகாரிகள் மற்றும் சுகாதார வல்லுநர்களால் நம்பிக்கை', items: [{ name: 'டாக்டர் ராஜேஷ் குமார்', role: 'அரசு மருத்துவமனை இயக்குநர்', quote: 'இந்த தளம் எங்கள் மருத்துவமனை செயல்பாடுகளை முற்றிலும் மாற்றிவிட்டது. AI முன்னறிவிப்பு மருந்து வீணானதை 40% குறைத்தது.', avatar: '👨‍⚕️' }, { name: 'பிரியா சர்மா', role: 'மாவட்ட சுகாதார அதிகாரி', quote: 'பலமொழி புகார் போர்டல் குடிமகன் திருப்தியை கணிசமாக அதிகரித்துள்ளது. பதில் நேரங்கள் கணிசமாக மேம்பட்டுள்ளன.', avatar: '👩‍💼' }, { name: 'அர்ஜுன் சிங்', role: 'மருந்தகம் மேலாளர்', quote: 'இருப்புத் திட்டமிடல் இப்போது எளிதாக உள்ளது. நிகழ்நேர எச்சரிக்கைகள் பற்றாக்குறைகளை தடுக்கின்றன மற்றும் AI பரிந்துரைகள் மிகவும் துல்லியமானவை.', avatar: '🧑‍💼' }] },
    footer: { brand: 'HealthGov AI', subtitle: 'AI அடிப்படையிலான பலமொழி சுகாதார நிர்வாக தளம்', quickLinks: 'விரைவு இணைப்புகள்', contact: 'தொடர்பு', followUs: 'எங்களைப் பின்தொடரவும்', rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.' },
    login: { heading: 'உங்கள் பாத்திரத்தை தேர்ந்தெடுக்கவும்', subheading: 'தொடர உங்கள் கணக்கு வகையைத் தேர்ந்தெடுக்கவும்', options: [{ title: 'குடிமகன்', description: 'புகார்களை சமர்ப்பித்து கண்காணிக்கவும்', link: '/auth/citizen', color: '#0B5ED7' }, { title: 'மருத்துவமனை', description: 'மருத்துவமனை செயல்பாடுகளை மேலாண்மை செய்யவும்', link: '/auth/hospital', color: '#0A9396' }, { title: 'மருந்தகம்', description: 'மருந்து இருப்பை மேலாண்மை செய்யவும்', link: '/auth/pharmacy', color: '#10B981' }, { title: 'மாவட்ட அதிகாரம்', description: 'மாவட்ட அளவிலான கண்காணிப்பு', link: '/auth/district', color: '#F59E0B' }, { title: 'மாநில அதிகாரம்', description: 'மாநில அளவிலான பகுப்பாய்வுகள்', link: '/auth/state', color: '#EF4444' }, { title: 'நிர்வாகி', description: 'தள நிர்வாகம்', link: '/auth/admin', color: '#38BDF8' }], footerText: 'உங்களுக்கு கணக்கு இல்லையா? இங்கே பதிவு செய்யவும்' },
    about: { title: 'எங்களைப் பற்றி', missionTitle: 'எங்கள் லட்சியம்', missionText: 'அரசு சுகாதார வசதிகளில் திறமையான மருந்து மேலாண்மை, உகந்த வள ஒதுக்கீடு மற்றும் குடிமகன்-மைய சேவை வழங்கலை உறுதி செய்யும் AI-அடிப்படையிலான புத்திசாலித்தனமான அமைப்புகளின் மூலம் சுகாதார நிர்வாகத்தை புரட்சிகரமாக மாற்றுவது.', visionTitle: 'எங்கள் பார்வை', visionText: 'ஒவ்வொரு குடிமகனும் தரமான சுகாதார சேவையை அணுகக்கூடிய எதிர்காலம், புத்திசாலித்தனமான தொழில்நுட்பத்தால் வளங்களை மேம்படுத்துதல், கழிவுகளை குறைத்தல் மற்றும் அனைத்து அரசு மருத்துவமனைகள் மற்றும் மருந்தகங்களிலும் விளைவுகளை மேம்படுத்துதல்.', problemTitle: 'சிக்கல்', problemText: 'அரசு சுகாதார அமைப்புகள் மருந்து பற்றாக்குறை, மோசமான வள விநியோகம், திறமையற்ற புகார் மேலாண்மை மற்றும் நிகழ்நேர நுண்ணறிவுகளின் பற்றாக்குறை போன்ற முக்கிய சவால்களை எதிர்கொள்கின்றன. இந்த சிக்கல்கள் நோயாளி பராமரிப்பு மற்றும் சுகாதார அணுகலை நேரடியாக பாதிக்கின்றன.', solutionTitle: 'எங்கள் தீர்வு', solutionText: 'எங்கள் AI-அடிப்படையிலான தளம் நிகழ்நேர கண்காணிப்பு, முன்கணிப்பு பகுப்பாய்வு, பலமொழி தகவல்தொடர்பு மற்றும் புத்திசாலித்தனமான வள மேலாண்மையை ஒருங்கிணைக்கிறது. சுகாதார நிர்வாகத்தை மாற்றுவதற்கு நாங்கள் மிகவும் புத்திசாலித்தனமான முடிவுகள், வேகமான பதில்கள் மற்றும் சிறந்த விளைவுகளை செயல்படுத்துகிறோம்.', stackTitle: 'தொழில்நுட்பம்', stackItems: ['React.js', 'Node.js', 'AI/ML', 'நிகழ்நேர பகுப்பாய்வு', 'கிளவுட் கம்ப்யூட்டிங்', 'பலமொழி NLP'] },
    contact: { title: 'எம்மை தொடர்பு கொள்ளுங்கள்', cards: [{ title: 'மின்னஞ்சல்', value: 'contact@healthgovai.com' }, { title: 'தொலைபேசி', value: '+91 (0) 1234-567890' }, { title: 'இடம்', value: 'இந்தியா' }], formTitle: 'எங்களுக்கு செய்தி அனுப்புங்கள்', nameLabel: 'பெயர்', emailLabel: 'மின்னஞ்சல்', messageLabel: 'செய்தி', namePlaceholder: 'உங்கள் பெயர்', emailPlaceholder: 'your@email.com', messagePlaceholder: 'உங்கள் செய்தி...', submit: 'செய்தி அனுப்பவும்' },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
export { translations };
