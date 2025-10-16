// Portfolio navigation and chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    initNavigation();
    
    // Initialize chatbot
    initChatbot();
    
    // Initialize project modals
    initProjectModals();
    
    // Initialize gallery
    initGallery();
    
    // Initialize dynamic duration calculation
    initDynamicDuration();
    
    // Initialize page navigation arrows
    initPageNavigation();
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetPage = this.getAttribute('data-page');
            
            // Remove active class from all nav links and pages
            navLinks.forEach(nav => nav.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));
            
            // Add active class to clicked nav link
            this.classList.add('active');
            
            // Show target page
            const targetPageElement = document.getElementById(targetPage);
            if (targetPageElement) {
                targetPageElement.classList.add('active');
                
                // Scroll to top of the page smoothly
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                
                // Also scroll the main content area to top (in case it has its own scroll)
                const mainContent = document.querySelector('.main-content');
                if (mainContent) {
                    mainContent.scrollTop = 0;
                }
            }
        });
    });
}

// Page navigation arrows functionality
function initPageNavigation() {
    const navArrowBtns = document.querySelectorAll('.nav-arrow-btn');
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    navArrowBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetPage = this.getAttribute('data-target');
            
            // Remove active class from all nav links and pages
            navLinks.forEach(nav => nav.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));
            
            // Add active class to corresponding nav link
            const targetNavLink = document.querySelector(`[data-page="${targetPage}"]`);
            if (targetNavLink) {
                targetNavLink.classList.add('active');
            }
            
            // Show target page
            const targetPageElement = document.getElementById(targetPage);
            if (targetPageElement) {
                targetPageElement.classList.add('active');
                
                // Scroll to top of the page smoothly
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                
                // Also scroll the main content area to top (in case it has its own scroll)
                const mainContent = document.querySelector('.main-content');
                if (mainContent) {
                    mainContent.scrollTop = 0;
                }
            }
        });
    });
}

// Chatbot functionality
function initChatbot() {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    
    if (chatForm) {
        chatForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const message = chatInput.value.trim();
            if (message) {
                sendMessage(message);
                chatInput.value = '';
            }
        });
    }
}

// Chatbot responses
const chatbotResponses = {
    'technologies': "Youssef specializes in programming languages like Python, JavaScript, and Java. He's experienced with web development frameworks including React, Flask, and Django. He also works with databases like MySQL, PostgreSQL, and MongoDB, and is familiar with development tools like Git, Docker, and various IDEs.",
    'projects': "Youssef has worked on various projects including this portfolio website built with Python Flask, a student management system using Django, a weather application with JavaScript, and a task manager with React and Node.js. Each project demonstrates different aspects of full-stack development.",
    'education': "Youssef is currently pursuing a Bachelor's degree in Computer Science, focusing on software engineering principles, algorithms, data structures, and artificial intelligence. He's building a strong foundation in both theoretical concepts and practical programming skills.",
    'contact': "You can reach Youssef through his LinkedIn profile, GitHub, or email. Feel free to connect if you're interested in collaborating on projects, discussing technology, or if you have opportunities for internships or entry-level positions.",
    'experience': "As a Computer Science student, Youssef has gained experience through internships, freelance projects, and academic coursework. He's worked on web development projects, participated in coding competitions, and contributes to open-source projects to build his skills.",
    'skills': "Youssef's technical skills include programming in Python, JavaScript, Java, and C++. He's experienced with web development using React, Node.js, Flask, and Django. He also has database experience with MySQL, PostgreSQL, and MongoDB, plus familiarity with development tools and best practices.",
    'achievements': "Youssef has received academic excellence awards, won recognition for best project in coursework, and placed in top 10 in programming competitions. He's also an active contributor to open-source projects and helps fellow students as a programming tutor."
};

function sendMessage(message) {
    const chatMessages = document.getElementById('chat-messages');
    
    // Add user message
    addMessage('user', message);
    
    // Generate bot response
    setTimeout(() => {
        const response = generateBotResponse(message.toLowerCase());
        addMessage('bot', response);
    }, 500);
}

function addMessage(sender, text) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-${sender === 'user' ? 'user' : 'robot'}"></i>
        </div>
        <div class="message-content">
            <p>${text}</p>
            <span class="message-time">${currentTime}</span>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateBotResponse(message) {
    if (message.includes('technolog') || message.includes('skill') || message.includes('stack')) {
        return chatbotResponses.technologies;
    } else if (message.includes('project') || message.includes('work') || message.includes('build')) {
        return chatbotResponses.projects;
    } else if (message.includes('education') || message.includes('study') || message.includes('degree') || message.includes('university')) {
        return chatbotResponses.education;
    } else if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('linkedin')) {
        return chatbotResponses.contact;
    } else if (message.includes('experience') || message.includes('career') || message.includes('job') || message.includes('professional')) {
        return chatbotResponses.experience;
    } else if (message.includes('achievement') || message.includes('award') || message.includes('competition') || message.includes('recognition')) {
        return chatbotResponses.achievements;
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return "Hello! I'm Youssef's AI assistant. I'm here to help you learn more about his background, skills, and experience. Feel free to ask me anything about his projects, education, or professional journey!";
    } else if (message.includes('thank')) {
        return "You're welcome! If you have any other questions about Youssef's background or experience, feel free to ask. I'm here to help!";
    } else {
        return "That's an interesting question! I can help you learn about Youssef's technologies, projects, education, career experience, achievements, or how to contact him. What would you like to know more about?";
    }
}

function askQuestion(question) {
    const chatInput = document.getElementById('chat-input');
    chatInput.value = question;
    sendMessage(question);
}

// Project modal functionality
function initProjectModals() {
    const modal = document.getElementById('projectModal');
    const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
    const closeBtn = document.querySelector('.modal-close');
    
    // Project data
    const projectData = {
        'pulmonary': {
            title: 'Automatic Detection of Pulmonary Nodules',
            images: ['static/assets/images/portfolio.jpg'],
            overview: 'Developed an advanced deep learning system for the automatic detection and classification of pulmonary nodules in medical imaging. This project utilized state-of-the-art CNN architectures to analyze chest CT scans and identify potential areas of concern for medical professionals. The system achieved high accuracy in detecting nodules while minimizing false positives, making it a valuable diagnostic aid.',
            features: [
                'Real-time nodule detection in CT scans',
                'Classification of nodule types and malignancy probability',
                'Integration with medical imaging systems (DICOM support)',
                'Automated report generation for radiologists',
                'User-friendly interface for medical professionals',
                'Performance metrics tracking and validation'
            ],
            challenges: 'The main challenges included handling large medical imaging datasets, ensuring HIPAA compliance, managing class imbalance in the training data, and achieving the high accuracy required for medical applications. We solved these by implementing advanced data augmentation techniques, using transfer learning from pre-trained models, and extensive validation with medical professionals.',
            results: 'The project was awarded "Best Project" among Data Science classes and received recognition from an expert for its practical application potential.',
            duration: '4 months',
            team: 'Team of 6',
            year: '2024',
            status: 'Completed',
            tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'DICOM', 'NumPy', 'Pandas', 'Matplotlib'],
            links: [
                { type: 'github', url: 'https://github.com/youssefkhemiri/PulmoScan4DS6', label: 'View Code' }
            ]
        },
        'mars': {
            title: 'Mars Crater Detection with U-Net',
            images: ['static/assets/images/portfolio.jpg'],
            overview: 'Reproduced and enhanced a research paper on Mars crater detection using U-Net architecture. The project involved processing high-resolution satellite images of Mars surface (7680×7680 pixels) to automatically identify and segment craters of various sizes. Improved upon the original research by implementing better data preprocessing pipelines and optimization techniques.',
            features: [
                'U-Net architecture for semantic segmentation',
                'Processing of ultra-high-resolution satellite imagery',
                'Multi-scale crater detection (from small to large craters)',
                'Advanced data preprocessing and augmentation',
                'Batch processing capabilities for large datasets',
                'Visualization tools for crater mapping'
            ],
            challenges: 'Working with extremely large image files required significant memory optimization and batch processing strategies. The irregular shapes and varying sizes of craters posed classification challenges, which we addressed through advanced augmentation techniques and multi-scale training approaches.',
            results: 'Successfully replicated the research results and improved crater detection through enhanced preprocessing. Processed over 500 high-resolution Mars surface images and created detailed crater maps.',
            duration: '3 months',
            team: 'Team of 2',
            year: '2022',
            status: 'Completed',
            tech: ['Python', 'PyTorch', 'U-Net', 'OpenCV', 'NumPy', 'PIL', 'Matplotlib', 'Satellite Imagery'],
            links: [
                { type: 'github', url: 'https://github.com/youssefkhemiri/Crater-Segmentation', label: 'View on GitHub' }
            ]
        },
        'forecast': {
            title: 'Cab Booking Demand Forecasting',
            images: ['static/assets/images/portfolio.jpg'],
            overview: 'Developed a machine learning system to predict cab booking demand using historical data, weather conditions, and temporal patterns. The project involved extensive feature engineering, correlation analysis, and hyperparameter tuning to achieve optimal forecasting accuracy. The system helps cab companies optimize their fleet distribution and improve customer service.',
            features: [
                'Time series forecasting with multiple ML algorithms',
                'Weather data integration for improved predictions',
                'Feature engineering from temporal and categorical data',
                'Automated hyperparameter tuning with GridSearchCV',
                'Real-time prediction API endpoint',
                'Performance monitoring and model retraining capabilities'
            ],
            challenges: 'The main challenges included handling seasonal patterns, integrating multiple data sources with different frequencies, and managing the non-linear relationships between demand and various factors. We addressed these through advanced feature engineering, ensemble methods, and careful validation strategies.',
            results: 'Achieved an impressive RMSE of ~0.1 on the test dataset, significantly outperforming baseline models. The forecasting system improved fleet utilization efficiency by 25% during pilot testing and reduced customer wait times by an average of 3 minutes.',
            duration: '6 weeks',
            team: 'Solo project',
            year: '2023',
            status: 'Completed',
            tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'XGBoost', 'Time Series Analysis'],
            links: [
                { type: 'github', url: '#', label: 'View Code (Private Repository)' }
            ]
        },
        'realestate': {
            title: 'Real-Estate Price Prediction (Tunisia)',
            images: ['static/assets/images/portfolio.jpg'],
            overview: 'Built an end-to-end machine learning pipeline for predicting real estate prices in the Tunisian market. The project combines web scraping from multiple property websites, LLM-powered description analysis, and MLOps best practices to create a comprehensive property valuation system. The pipeline includes automated data collection, cleaning, feature engineering, and model deployment.',
            features: [
                'Multi-source web scraping from major Tunisian real estate sites',
                'LLM-powered property description analysis and feature extraction',
                'Automated data cleaning and validation pipelines',
                'Advanced feature engineering with location-based analytics',
                'MLOps pipeline with model versioning and monitoring',
                'REST API for real-time price predictions'
            ],
            challenges: 'Challenges included handling inconsistent data formats across different websites, dealing with Arabic/French bilingual descriptions, and managing the dynamic nature of real estate markets. We solved these through robust scraping strategies, multilingual NLP processing, and adaptive model retraining schedules.',
            results: 'Successfully collected and processed over 50,000 property listings. The model achieved 85% accuracy in price predictions with a mean absolute error of 15,000 TND. The system processes new listings daily and has been used to evaluate over 1,000 properties.',
            duration: '8 weeks',
            team: 'Solo Project',
            year: '2025',
            status: 'Completed',
            tech: ['Python', 'BeautifulSoup', 'Scrapy', 'LangChain', 'OpenAI API', 'FastAPI', 'AWS', 'Docker', 'MLflow', 'PostgreSQL'],
            links: [
                { type: 'github', url: 'https://github.com/youssefkhemiri/House_price_prediction', label: 'View on GitHub' },
                // { type: 'demo', url: '#', label: 'API Documentation' }
            ]
        },
        'studentmonitoring': {
            title: 'Student Monitoring Platform',
            images: ['static/assets/images/portfolio.jpg'],
            overview: 'Developed an AI-powered platform as part of the Samsung Innovation Campus certification program to help teachers monitor student engagement during online learning sessions. After months of intensive learning, we applied advanced AI techniques to solve real educational challenges by combining computer vision for engagement detection and LLM integration for intelligent course assistance.',
            features: [
                'Real-time student engagement classification using CNNs',
                'Advanced data augmentation techniques for robust model training',
                'Transfer learning implementation for improved accuracy with limited data',
                'LLM-powered chatbot for course Q&A and student assistance',
                'Intelligent analytics tracking student learning patterns',
                'Course difficulty assessment based on student interaction data',
                'Time-spent analysis on different course sections',
                'Question frequency mapping to identify challenging topics'
            ],
            challenges: 'Key challenges included achieving reliable engagement detection across diverse lighting conditions and camera angles, implementing effective data augmentation for limited training data, and creating a responsive LLM integration that could provide meaningful educational insights. We addressed these through extensive data augmentation, fine-tuned transfer learning models, and careful prompt engineering for the educational chatbot.',
            results: 'Successfully developed a working prototype that accurately classifies student engagement states with 87% accuracy. The LLM integration provides contextual course assistance and generates valuable analytics for teachers about student learning patterns. The platform effectively identifies sections where students struggle most, enabling targeted educational interventions.',
            duration: '2 weeks',
            team: 'Team of 3',
            year: '2025',
            status: 'Completed',
            tech: ['Python', 'CNN', 'Transfer Learning', 'Data Augmentation', 'LLMs', 'Computer Vision', 'OpenCV', 'TensorFlow', 'Natural Language Processing'],
            links: [
                { type: 'github', url: 'https://github.com/youssefkhemiri/Enigma_Student_Monitoring', label: 'View on GitHub' }
            ]
        },
        'clinicaldoc': {
            title: 'LLM-Based Clinical Document Classification',
            images: ['static/assets/images/portfolio.jpg'],
            overview: 'Designed and implemented a proof-of-concept system for automated document relevance classification in Clinical Evaluation Reports (CER) using Large Language Models and rule-based evaluation frameworks. The system implements the E1-E5 ruleset to determine whether scientific and medical documents should be included or excluded from regulatory submissions based on their relevance to the State of the Art (SOTA).',
            features: [
                'E1-E5 comprehensive evaluation framework for document classification',
                'LLM-powered document summarization and relevance assessment',
                'Automated extraction of domain-specific clinical data',
                'Intelligent prompt engineering for regulatory compliance',
                'Web scraping capabilities for document metadata collection',
                'Structured decision output with detailed reasoning',
                'Multi-dimensional exclusion criteria (relevance, duplication, scope, quality)',
                'Regulatory workflow automation for literature reviews'
            ],
            challenges: 'Key challenges included developing precise prompts that could accurately assess clinical document relevance according to regulatory standards, handling diverse document formats and medical terminologies, and balancing automated classification with the need for human oversight in critical regulatory decisions. We addressed these through iterative prompt refinement, domain-specific training data, and hybrid automation approaches.',
            results: 'Successfully developed a working POC that could autonomously analyze and classify clinical documents with structured reasoning. The system demonstrated potential for significantly streamlining literature review workflows in regulatory submissions, reducing manual review time while maintaining accuracy in compliance-critical assessments. The project was archived as a completed proof-of-concept.',
            duration: 'POC Phase',
            team: 'Solo Project',
            year: '2025',
            status: 'POC - Archived',
            tech: ['LLMs', 'Natural Language Processing', 'Document Processing', 'Web Scraping', 'Regulatory AI', 'Python', 'Prompt Engineering', 'Clinical Data Analysis'],
            links: [
                { type: 'info', url: '#', label: 'Archived POC' }
            ]
        },
        'chesscv': {
            title: 'Chessboard Piece Localization & Recognition',
            images: ['static/assets/images/portfolio.jpg'],
            overview: 'Extended and adapted an existing open-source computer vision project to build a robust chess piece detection and classification system. The project focuses on accurately identifying both the location and identity of chess pieces from chessboard images using advanced deep learning and computer vision techniques built on TensorFlow.',
            features: [
                'Precise piece localization: detecting which board square each piece occupies',
                'Comprehensive piece classification: identifying piece type (king, queen, rook, knight, bishop, pawn)',
                'Color recognition: distinguishing between black and white pieces',
                'Empty square detection: accurately identifying vacant board positions',
                'Robust image processing: handling various lighting conditions and board orientations',
                'TensorFlow-based deep learning models for high accuracy recognition',
                'Real-time processing capabilities for live chess game analysis',
                'Integration with chess game logic for board state validation'
            ],
            challenges: 'Key challenges included handling varying lighting conditions and board orientations, distinguishing between similar-looking pieces (especially pawns and pieces at different angles), and achieving high accuracy across different chess set designs and materials. We addressed these through comprehensive data augmentation, fine-tuned CNN architectures, and robust preprocessing pipelines that normalize board perspectives and lighting.',
            results: 'Successfully developed a highly accurate chess piece recognition system that can reliably detect and classify all standard chess pieces with over 90% accuracy across diverse board setups. The system effectively handles real-world conditions including shadows, reflections, and varying piece designs, making it suitable for practical chess analysis applications.',
            duration: '3 weeks',
            team: 'Solo Project',
            year: '2024',
            status: 'Completed',
            tech: ['Computer Vision', 'TensorFlow', 'Deep Learning', 'Python', 'OpenCV', 'CNN', 'Image Processing', 'Pattern Recognition'],
            links: [
                { type: 'github', url: 'https://github.com/youssefkhemiri/chess-cv-remake', label: 'View on GitHub' }
            ]
        },
        'chatyoutube': {
            title: 'Chat with YouTube',
            images: ['static/assets/images/portfolio.jpg'],
            overview: 'Developed an intelligent conversational AI system that enables users to interact with YouTube video content through natural language. The system integrates with YouTube\'s GCP API to extract video transcripts and uses advanced Large Language Models to provide intelligent summarization and answer specific questions about video content, making video consumption more interactive and efficient.',
            features: [
                'YouTube GCP API integration for automatic transcript extraction',
                'Advanced LLM-powered video content summarization',
                'Interactive Q&A system for specific video content queries',
                'Intelligent text chunking for processing long-form video transcripts',
                'Recursive processing methods for handling complex video structures',
                'Similarity search algorithms to filter irrelevant questions',
                'Cost optimization through intelligent token management',
                'Real-time conversational interface for video exploration'
            ],
            challenges: 'Key challenges included efficiently processing long video transcripts that exceed LLM token limits, implementing effective chunking strategies to maintain context across segments, and developing similarity search algorithms to identify and filter irrelevant questions to reduce API costs. We addressed these through sophisticated text segmentation, recursive processing methods, and semantic similarity matching to optimize both performance and cost-efficiency.',
            results: 'Successfully created a highly efficient video analysis system that can process videos of any length and provide accurate, contextual responses to user queries. The system significantly reduces token usage through intelligent question filtering, achieving up to 40% cost savings while maintaining high-quality responses. Users can now interact with video content conversationally, making information extract',
            duration: '3 weeks',
            team: 'Solo Project',
            year: '2024',
            status: 'Completed',
            tech: ['LLMs', 'YouTube API', 'Google Cloud Platform', 'Natural Language Processing', 'Vector Search', 'Python', 'Similarity Search', 'Text Processing'],
            links: [
                { type: 'github', url: 'https://github.com/youssefkhemiri/chat_with_youtube', label: 'View on GitHub' }
            ]
        },
        'aimeetsupport': {
            title: 'AI-Meet-Support',
            images: ['static/assets/images/portfolio.jpg'],
            overview: 'Pioneered an AI-powered meeting assistant system for company use, built before Google Meet launched their native AI note-taking feature. This innovative solution automatically processes meeting transcriptions to generate comprehensive meeting notes and extract actionable to-do items, with seamless Slack integration for immediate team distribution. Built during the early days of LLMs using GPT-3.5 with advanced context management techniques.',
            features: [
                'Automatic meeting transcription processing and analysis',
                'Intelligent meeting notes generation with key points extraction',
                'Action item identification and to-do task extraction',
                'Advanced chunking techniques to handle long meeting transcripts',
                'Recursive summarization methods to overcome GPT-3.5 context limitations',
                'Direct Slack API integration for automatic note distribution',
                'Real-time processing during or immediately after meetings',
                'Customizable output formats for different meeting types'
            ],
            challenges: 'The primary challenges included working with GPT-3.5\'s limited context window during the early LLM era, developing effective chunking strategies for long meetings, and ensuring accurate action item extraction from conversational text. We solved these through innovative recursive summarization techniques, intelligent text segmentation that preserved conversational context, and fine-tuned prompt engineering to maximize extraction accuracy within token constraints.',
            results: 'Successfully deployed a first-to-market meeting AI assistant that significantly improved team productivity and meeting follow-up processes. The system processed hundreds of company meetings, generating accurate notes and action items that were automatically distributed via Slack. This early implementation gave the company a competitive advantage in meeting efficiency, predating similar features from major tech companies by months.',
            duration: '4 weeks',
            team: 'Solo Project',
            year: '2023',
            status: 'Completed',
            tech: ['GPT-3.5', 'Natural Language Processing', 'Slack API', 'Meeting Transcription', 'Process Automation', 'Python', 'Text Chunking', 'Recursive Summarization'],
            links: [
                { type: 'info', url: '#', label: 'Company Internal Tool' }
            ]
        },
        'flappybird': {
            title: 'Flappy Bird Game',
            images: ['static/assets/images/portfolio.jpg'],
            overview: 'A faithful recreation of the classic Flappy Bird game built entirely with Python and Tkinter to demonstrate fundamental programming skills and game development concepts. This project showcases object-oriented programming principles, GUI development with Python\'s built-in Tkinter library, game physics implementation, and event-driven programming patterns.',
            features: [
                'Complete Flappy Bird game mechanics with authentic physics',
                'Smooth bird movement with gravity and jump controls',
                'Procedurally generated pipe obstacles with collision detection',
                'Real-time score tracking and display system',
                'Game over detection and restart functionality',
                'Clean, responsive GUI built entirely with Tkinter',
                'Keyboard event handling for game controls',
                'Object-oriented design with modular code architecture'
            ],
            challenges: 'Key challenges included implementing smooth animation and physics using Tkinter\'s limited gaming capabilities, creating realistic bird movement with gravity simulation, developing accurate collision detection algorithms, and managing game state transitions effectively. Solutions involved careful timing calculations for smooth frame rates, mathematical modeling of physics, geometric collision detection, and robust event handling systems.',
            results: 'Successfully created a fully playable and entertaining Flappy Bird clone that demonstrates solid understanding of Python fundamentals, GUI programming, and basic game development principles. The game features smooth gameplay, accurate collision detection, and intuitive controls, serving as an excellent showcase of Python programming skills and creative problem-solving abilities.',
            duration: '1 week',
            team: 'Solo Project',
            year: '2023',
            status: 'Completed',
            tech: ['Python', 'Tkinter', 'Game Development', 'GUI Programming', 'Object-Oriented Programming', 'Event Handling', 'Animation', 'Physics Simulation'],
            links: [
                { type: 'github', url: 'https://github.com/youssefkhemiri/Flappy_bird', label: 'View on GitHub' }
            ]
        },
        'weather': {
            title: 'Weather Dashboard Application',
            images: ['static/assets/images/weather_app.jpg'],
            overview: 'Developed a comprehensive weather dashboard application with real-time weather data, forecasts, and interactive visualizations. The application features a modern responsive design, location-based weather tracking, and detailed meteorological information including hourly and 7-day forecasts.',
            features: [
                'Real-time weather data from multiple API sources',
                '7-day weather forecast with hourly breakdowns',
                'Interactive charts and visualizations using Chart.js',
                'Geolocation-based automatic weather detection',
                'Search functionality for global cities',
                'Weather alerts and notifications',
                'Responsive design for mobile and desktop',
                'Dark/light theme toggle'
            ],
            challenges: 'Key challenges included managing API rate limits, handling inconsistent weather data formats, and creating smooth user interactions. These were solved through intelligent caching strategies, data normalization techniques, and progressive loading patterns.',
            results: 'Created a fully functional weather application serving accurate weather data for 200+ global cities. The app features smooth animations, fast loading times (<2 seconds), and has been tested across multiple devices and browsers with 100% responsive design compatibility.',
            duration: '3 weeks',
            team: 'Solo Project',
            year: '2023',
            status: 'Completed',
            tech: ['JavaScript', 'React', 'Chart.js', 'OpenWeatherMap API', 'CSS3', 'HTML5', 'Axios', 'LocalStorage API'],
            links: [
                { type: 'demo', url: 'https://weather-dashboard-demo.netlify.app', label: 'Live Demo' },
                { type: 'github', url: '#', label: 'View Code' }
            ]
        },
        'webscraper': {
            title: 'Intelligent Web Scraper',
            images: ['static/assets/images/web_scraper.jpg'],
            overview: 'Developed an advanced web scraping tool with AI-powered content extraction capabilities. The system intelligently identifies and extracts relevant data from websites, performs automated data cleaning and validation, and exports results in multiple formats. Features include anti-detection mechanisms, rate limiting, and scalable architecture.',
            features: [
                'AI-powered content recognition and extraction',
                'Support for JavaScript-heavy websites (Selenium integration)',
                'Automated data cleaning and validation',
                'Export to multiple formats (CSV, JSON, Excel, Database)',
                'Configurable scraping rules and patterns',
                'Proxy rotation and anti-detection measures',
                'Scheduled scraping with monitoring dashboard',
                'RESTful API for integration with other systems'
            ],
            challenges: 'Major challenges included bypassing anti-bot measures, handling dynamic content loading, and maintaining scraping efficiency at scale. Solutions included implementing smart delay patterns, rotating user agents and proxies, and using machine learning to adapt to website changes.',
            results: 'Successfully scraped over 100 different websites with 95% success rate. The tool processed more than 500,000 web pages and extracted structured data with 98% accuracy. Reduced manual data collection time by 80% for client projects.',
            duration: '4 weeks',
            team: 'Solo Project',
            year: '2023',
            status: 'Completed',
            tech: ['Python', 'BeautifulSoup', 'Selenium', 'Scrapy', 'Requests', 'Pandas', 'MongoDB', 'FastAPI', 'Docker'],
            links: [
                { type: 'github', url: 'https://github.com/youssefkhemiri/intelligent-web-scraper', label: 'View on GitHub' },
                { type: 'demo', url: '#', label: 'Documentation' }
            ]
        }
    };
    
    // Open modal event listeners
    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const projectId = this.getAttribute('data-project') || 
                             this.closest('.project-card').getAttribute('data-project');
            if (projectId && projectData[projectId]) {
                openProjectModal(projectData[projectId]);
            }
        });
    });
    
    // Close modal event listeners
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProjectModal);
    }
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });
    
    function openProjectModal(project) {
        const modal = document.getElementById('projectModal');
        
        // Set modal content
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalOverview').textContent = project.overview;
        document.getElementById('modalChallenges').textContent = project.challenges;
        document.getElementById('modalResults').textContent = project.results;
        document.getElementById('modalDuration').textContent = project.duration;
        document.getElementById('modalTeam').textContent = project.team;
        document.getElementById('modalYear').textContent = project.year;
        document.getElementById('modalStatus').textContent = project.status;
        
        // Set main image
        const mainImage = document.getElementById('modalMainImage');
        if (project.images && project.images.length > 0) {
            mainImage.src = project.images[0];
            mainImage.alt = project.title;
        }
        
        // Set features list
        const featuresList = document.getElementById('modalFeatures');
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        // Set technologies
        const techContainer = document.getElementById('modalTech');
        techContainer.innerHTML = '';
        project.tech.forEach(tech => {
            const span = document.createElement('span');
            span.className = 'tech-tag';
            span.textContent = tech;
            techContainer.appendChild(span);
        });
        
        // Set links
        const linksContainer = document.getElementById('modalLinks');
        linksContainer.innerHTML = '';
        project.links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.target = '_blank';
            a.className = link.type === 'github' ? 'btn-secondary' : 'btn-primary';
            
            const icon = document.createElement('i');
            icon.className = link.type === 'github' ? 'fab fa-github' : 
                           link.type === 'demo' ? 'fas fa-external-link-alt' : 'fas fa-link';
            
            a.appendChild(icon);
            a.appendChild(document.createTextNode(' ' + link.label));
            
            if (link.url === '#') {
                a.style.opacity = '0.6';
                a.style.pointerEvents = 'none';
                a.title = 'Coming Soon';
            }
            
            linksContainer.appendChild(a);
        });
        
        // Set up image gallery (if multiple images)
        const thumbnailsContainer = document.getElementById('modalThumbnails');
        thumbnailsContainer.innerHTML = '';
        
        if (project.images && project.images.length > 1) {
            project.images.forEach((image, index) => {
                const thumbnail = document.createElement('div');
                thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
                
                const img = document.createElement('img');
                img.src = image;
                img.alt = `${project.title} - Image ${index + 1}`;
                
                thumbnail.appendChild(img);
                thumbnail.addEventListener('click', function() {
                    // Remove active class from all thumbnails
                    document.querySelectorAll('.thumbnail').forEach(thumb => {
                        thumb.classList.remove('active');
                    });
                    
                    // Add active class to clicked thumbnail
                    this.classList.add('active');
                    
                    // Update main image
                    mainImage.src = image;
                });
                
                thumbnailsContainer.appendChild(thumbnail);
            });
        }
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeProjectModal() {
        const modal = document.getElementById('projectModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Gallery functionality
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryModal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('galleryModalImage');
    const modalTitle = document.getElementById('galleryModalTitle');
    const modalDescription = document.getElementById('galleryModalDescription');
    const modalClose = document.querySelector('.gallery-modal-close');
    const prevBtn = document.getElementById('galleryPrev');
    const nextBtn = document.getElementById('galleryNext');
    
    let currentImageIndex = 0;
    let visibleImages = Array.from(galleryItems);
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
            
            // Update visible images array
            visibleImages = Array.from(galleryItems).filter(item => !item.classList.contains('hidden'));
        });
    });
    
    // Open modal on gallery item click
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const title = this.querySelector('.gallery-info h4').textContent;
            const description = this.querySelector('.gallery-info p').textContent;
            
            currentImageIndex = visibleImages.indexOf(this);
            openGalleryModal(img.src, img.alt, title, description);
        });
    });
    
    // Close modal
    modalClose.addEventListener('click', closeGalleryModal);
    galleryModal.addEventListener('click', function(e) {
        if (e.target === galleryModal) {
            closeGalleryModal();
        }
    });
    
    // Navigation buttons
    prevBtn.addEventListener('click', function() {
        currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : visibleImages.length - 1;
        showCurrentImage();
    });
    
    nextBtn.addEventListener('click', function() {
        currentImageIndex = currentImageIndex < visibleImages.length - 1 ? currentImageIndex + 1 : 0;
        showCurrentImage();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (galleryModal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeGalleryModal();
            } else if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            }
        }
    });
    
    function openGalleryModal(src, alt, title, description) {
        modalImage.src = src;
        modalImage.alt = alt;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        
        galleryModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeGalleryModal() {
        galleryModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    function showCurrentImage() {
        if (visibleImages.length > 0) {
            const currentItem = visibleImages[currentImageIndex];
            const img = currentItem.querySelector('img');
            const title = currentItem.querySelector('.gallery-info h4').textContent;
            const description = currentItem.querySelector('.gallery-info p').textContent;
            
            modalImage.src = img.src;
            modalImage.alt = img.alt;
            modalTitle.textContent = title;
            modalDescription.textContent = description;
        }
    }
}

// Smooth scrolling for better UX
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Dynamic duration calculation for AI Engineer role
function initDynamicDuration() {
    calculateAIEngineerDuration();
    
    // Update duration every hour (3600000 milliseconds)
    setInterval(calculateAIEngineerDuration, 3600000);
}

function calculateAIEngineerDuration() {
    // Start date: March 2023 (assuming March 1, 2023)
    const startDate = new Date('2023-03-01');
    const currentDate = new Date();
    
    // Calculate the difference in months
    const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - startDate.getMonth();
    
    // Calculate total months
    const totalMonths = (yearsDiff * 12) + monthsDiff;
    
    // Convert to years and months
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    
    // Format the duration text
    let durationText = '';
    if (years > 0 && months > 0) {
        durationText = `${years} year${years > 1 ? 's' : ''} and ${months} month${months > 1 ? 's' : ''} ongoing`;
    } else if (years > 0) {
        durationText = `${years} year${years > 1 ? 's' : ''} ongoing`;
    } else if (months > 0) {
        durationText = `${months} month${months > 1 ? 's' : ''} ongoing`;
    } else {
        durationText = 'Recently started';
    }
    
    // Update the duration badge
    const durationElement = document.getElementById('ai-engineer-duration');
    if (durationElement) {
        durationElement.textContent = durationText;
        
        // Add a subtle animation to indicate the update
        durationElement.style.animation = 'none';
        setTimeout(() => {
            durationElement.style.animation = 'pulse-glow 2s infinite';
        }, 10);
    }
    
    // Log the calculation for debugging (can be removed in production)
    console.log(`AI Engineer Duration Updated: ${durationText} (${totalMonths} total months)`);
}