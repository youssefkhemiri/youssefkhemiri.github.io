// Portfolio navigation and chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    initNavigation();
    
    // Initialize chatbot
    initChatbot();
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

// Smooth scrolling for better UX
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}