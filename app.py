from flask import Flask, render_template, request, jsonify, send_file, redirect, url_for, session
import os
import json
from datetime import datetime
import random
from portfolio_data import PORTFOLIO_DATA, CHATBOT_RESPONSES

app = Flask(__name__)
app.secret_key = 'your-secret-key-change-this-in-production'

@app.route('/')
def home():
    return render_template('index.html', data=PORTFOLIO_DATA, current_page='home')

@app.route('/career')
def career():
    return render_template('index.html', data=PORTFOLIO_DATA, current_page='career')

@app.route('/projects')
def projects():
    return render_template('index.html', data=PORTFOLIO_DATA, current_page='projects')

@app.route('/involvements')
def involvements():
    return render_template('index.html', data=PORTFOLIO_DATA, current_page='involvements')

@app.route('/chatbot', methods=['GET', 'POST'])
def chatbot():
    chat_history = session.get('chat_history', [])
    
    if request.method == 'POST':
        user_message = request.form.get('message', '').strip()
        if user_message:
            # Add user message to history
            chat_history.append({
                'sender': 'user',
                'text': user_message,
                'timestamp': datetime.now().strftime('%H:%M:%S')
            })
            
            # Generate bot response
            bot_response = generate_bot_response(user_message.lower())
            chat_history.append({
                'sender': 'bot',
                'text': bot_response,
                'timestamp': datetime.now().strftime('%H:%M:%S')
            })
            
            # Store in session (limit to last 20 messages)
            session['chat_history'] = chat_history[-20:]
    
    return render_template('index.html', data=PORTFOLIO_DATA, current_page='chatbot', chat_history=chat_history)

@app.route('/api/chat', methods=['POST'])
def chat():
    """Handle chatbot messages"""
    try:
        data = request.get_json()
        user_message = data.get('message', '').lower()
        
        # Simple keyword matching for responses
        response = generate_bot_response(user_message)
        
        return jsonify({
            'response': response,
            'timestamp': datetime.now().strftime('%H:%M:%S')
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def generate_bot_response(message):
    """Generate appropriate bot response based on user message"""
    if any(keyword in message for keyword in ['technolog', 'skill', 'stack']):
        return CHATBOT_RESPONSES['technologies']
    elif any(keyword in message for keyword in ['project', 'work', 'build']):
        return CHATBOT_RESPONSES['projects']
    elif any(keyword in message for keyword in ['education', 'study', 'degree', 'university']):
        return CHATBOT_RESPONSES['education']
    elif any(keyword in message for keyword in ['contact', 'reach', 'email', 'linkedin']):
        return CHATBOT_RESPONSES['contact']
    elif any(keyword in message for keyword in ['experience', 'career', 'job', 'professional']):
        return CHATBOT_RESPONSES['experience']
    elif any(keyword in message for keyword in ['achievement', 'award', 'competition', 'recognition']):
        return CHATBOT_RESPONSES['achievements']
    elif any(keyword in message for keyword in ['hello', 'hi', 'hey']):
        return "Hello! I'm Youssef's AI assistant. I'm here to help you learn more about his background, skills, and experience. Feel free to ask me anything about his projects, education, or professional journey!"
    elif any(keyword in message for keyword in ['thank']):
        return "You're welcome! If you have any other questions about Youssef's background or experience, feel free to ask. I'm here to help!"
    else:
        return "That's an interesting question! I can help you learn about Youssef's technologies, projects, education, career experience, achievements, or how to contact him. What would you like to know more about?"

@app.route('/download/resume')
def download_resume():
    """Handle resume download"""
    try:
        # Path to the actual resume file
        resume_path = os.path.join(app.static_folder, 'assets', 'Youssef_Resume.pdf')
        
        # Check if file exists and serve it
        if os.path.exists(resume_path):
            return send_file(resume_path, as_attachment=True, download_name='Youssef_Khemiri_Resume.pdf')
        else:
            # If file doesn't exist, redirect back to home
            return redirect(url_for('home'))
    except Exception as e:
        return redirect(url_for('home'))

@app.route('/api/navigation')
def navigation():
    """Return navigation structure"""
    nav_items = [
        {'id': 'home', 'label': 'Home', 'icon': 'fas fa-home'},
        {'id': 'career', 'label': 'Career', 'icon': 'fas fa-briefcase'},
        {'id': 'projects', 'label': 'Projects', 'icon': 'fas fa-code'},
        {'id': 'involvements', 'label': 'Involvements', 'icon': 'fas fa-users'},
        {'id': 'chatbot', 'label': 'Chatbot', 'icon': 'fas fa-robot'}
    ]
    return jsonify(nav_items)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)