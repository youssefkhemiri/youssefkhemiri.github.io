# Youssef Khemiri Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Computer Science student and software developer.

🌐 **Live Site:** [https://youssefkhemiri.github.io](https://youssefkhemiri.github.io)

## 🚀 Features

- **Responsive Design**: Modern CSS with mobile-first approach
- **Single Page Application**: Client-side navigation using JavaScript
- **Interactive Chatbot**: AI assistant with keyword-based responses
- **5 Main Sections**: Home, Career, Projects, Involvements, Chatbot
- **GitHub Pages Ready**: Static website optimized for GitHub Pages hosting
- **Easy Content Management**: Separate data configuration file
- **Session-based Chat**: Persistent chat history during session

## 📁 Project Structure

```
Youssef_portfolio/
├── app.py                    # Main Flask application
├── portfolio_data.py         # Portfolio content configuration
├── requirements.txt          # Python dependencies
├── README.md                # This documentation
├── templates/
│   └── index.html           # Main template (no JavaScript)
└── static/
    └── css/
        └── style.css        # Styling and responsive design
```

## 🛠️ Setup and Installation

1. **Clone or download** the project files
2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
3. **Run the application**:
   ```bash
   python app.py
   ```
4. **Open your browser** and navigate to: `http://localhost:5000`

## ✏️ Customizing Your Portfolio

### **Updating Content**

All portfolio content is managed in `portfolio_data.py`. Simply edit this file to update:

- **Personal Information**: Name, roles, email, social links
- **About Section**: Personal description and background
- **Education**: Degrees, institutions, years, descriptions
- **Skills**: Technical skills (categorized) and soft skills
- **Career History**: Positions, companies, achievements
- **Projects**: Project details, technologies, links
- **Involvements**: Volunteer work, awards, competitions, teaching

### **Chatbot Responses**

Update the `CHATBOT_RESPONSES` dictionary in `portfolio_data.py` to customize chatbot answers for different topics.

### **Adding Images**

1. Create directories: `static/assets/images/`
2. Add your profile photo as: `static/assets/images/profile.jpg`
3. Add project images and update the `image` field in project data
4. For resume download, add: `static/assets/Youssef_Resume.pdf`

## 🎨 Styling

The application uses modern CSS with:
- **CSS Grid & Flexbox** for responsive layouts
- **CSS Variables** for consistent theming
- **Font Awesome** icons for visual elements
- **Placeholder styles** for missing images

## 🤖 Chatbot Features

The chatbot responds to keywords related to:
- Technologies and skills
- Projects and work experience
- Education and background
- Contact information
- Career experience
- Achievements and awards

## 🔧 Technical Details

- **Framework**: Flask 2.3.3
- **Templating**: Jinja2
- **Session Management**: Flask sessions for chat history
- **Styling**: Pure CSS (no CSS frameworks)
- **Icons**: Font Awesome 6.0.0
- **Fonts**: Inter font family

## 📋 Dependencies

See `requirements.txt` for the complete list. Main dependencies:
- Flask 2.3.3
- Jinja2 (included with Flask)

## 🚀 Deployment

For production deployment:
1. Change the secret key in `app.py`
2. Set `debug=False`
3. Use a production WSGI server like Gunicorn
4. Configure environment variables
5. Set up proper file serving for static assets

## 📄 License

This is a personal portfolio template. Feel free to use and modify for your own portfolio needs.