# Youssef Khemiri Portfolio# Youssef Khemiri Portfolio



A modern, responsive portfolio website showcasing my skills, projects, and experience as a Computer Science student and software developer.A modern, responsive portfolio website showcasing my skills, projects, and experience as a Computer Science student and software developer.



🌐 **Live Site:** [https://youssefkhemiri.github.io](https://youssefkhemiri.github.io)🌐 **Live Site:** [https://youssefkhemiri.github.io](https://youssefkhemiri.github.io)



## 🚀 Features## 🚀 Features



- **Responsive Design**: Modern CSS with mobile-first approach- **Responsive Design**: Modern CSS with mobile-first approach

- **Single Page Application**: Client-side navigation using JavaScript- **Single Page Application**: Client-side navigation using JavaScript

- **Interactive Chatbot**: AI assistant with keyword-based responses- **Interactive Chatbot**: AI assistant with keyword-based responses

- **5 Main Sections**: Home, Career, Projects, Involvements, Chatbot- **5 Main Sections**: Home, Career, Projects, Involvements, Chatbot

- **GitHub Pages Ready**: Static website optimized for GitHub Pages hosting- **GitHub Pages Ready**: Static website optimized for GitHub Pages hosting

- **Easy Content Management**: Separate data configuration file

## 📁 Project Structure- **Session-based Chat**: Persistent chat history during session



```## 📁 Project Structure

youssefkhemiri.github.io/

├── index.html               # Main HTML file```

├── static/Youssef_portfolio/

│   ├── css/├── app.py                    # Main Flask application

│   │   └── style.css       # Styling and responsive design├── portfolio_data.py         # Portfolio content configuration

│   ├── js/├── requirements.txt          # Python dependencies

│   │   └── main.js         # Navigation and chatbot functionality├── README.md                # This documentation

│   └── assets/├── templates/

│       ├── images/         # Profile and project images│   └── index.html           # Main template (no JavaScript)

│       └── *.pdf           # Resume files└── static/

└── README.md               # This file    └── css/

```        └── style.css        # Styling and responsive design

```

## 🎨 Technologies Used

## 🛠️ Setup and Installation

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)

- **Styling**: Pure CSS with CSS Grid & Flexbox1. **Clone or download** the project files

- **Icons**: Font Awesome 6.0.02. **Install dependencies**:

- **Fonts**: Inter font family   ```bash

- **Hosting**: GitHub Pages   pip install -r requirements.txt

   ```

## 🛠️ Local Development3. **Run the application**:

   ```bash

1. **Clone the repository**:   python app.py

   ```bash   ```

   git clone https://github.com/youssefkhemiri/youssefkhemiri.github.io.git4. **Open your browser** and navigate to: `http://localhost:5000`

   ```

## ✏️ Customizing Your Portfolio

2. **Open locally**:

   Simply open `index.html` in your web browser, or use a local server:### **Updating Content**

   ```bash

   # Using PythonAll portfolio content is managed in `portfolio_data.py`. Simply edit this file to update:

   python -m http.server 8000

   - **Personal Information**: Name, roles, email, social links

   # Using Node.js- **About Section**: Personal description and background

   npx serve .- **Education**: Degrees, institutions, years, descriptions

   ```- **Skills**: Technical skills (categorized) and soft skills

- **Career History**: Positions, companies, achievements

3. **Visit**: `http://localhost:8000`- **Projects**: Project details, technologies, links

- **Involvements**: Volunteer work, awards, competitions, teaching

## ✏️ Customizing Content

### **Chatbot Responses**

### **Updating Personal Information**

Update the `CHATBOT_RESPONSES` dictionary in `portfolio_data.py` to customize chatbot answers for different topics.

Edit the content directly in `index.html` - all personal information, projects, and experience details are embedded in the HTML file for easy maintenance.

### **Adding Images**

### **Adding Images**

1. Create directories: `static/assets/images/`

1. Add images to `static/assets/images/`2. Add your profile photo as: `static/assets/images/profile.jpg`

2. Update the image references in `index.html`3. Add project images and update the `image` field in project data

3. Supported formats: JPG, PNG, WebP4. For resume download, add: `static/assets/Youssef_Resume.pdf`



### **Modifying Chatbot Responses**## 🎨 Styling



Update the `chatbotResponses` object in `static/js/main.js` to customize the AI assistant's responses.The application uses modern CSS with:

- **CSS Grid & Flexbox** for responsive layouts

## 🚀 Deployment to GitHub Pages- **CSS Variables** for consistent theming

- **Font Awesome** icons for visual elements

1. **Push to GitHub**:- **Placeholder styles** for missing images

   ```bash

   git add .## 🤖 Chatbot Features

   git commit -m "Update portfolio content"

   git push origin mainThe chatbot responds to keywords related to:

   ```- Technologies and skills

- Projects and work experience

2. **Enable GitHub Pages**:- Education and background

   - Go to your repository settings- Contact information

   - Scroll to "Pages" section- Career experience

   - Select "Deploy from a branch"- Achievements and awards

   - Choose "main" branch and "/ (root)" folder

   - Save settings## 🔧 Technical Details



3. **Access your site**: `https://youssefkhemiri.github.io`- **Framework**: Flask 2.3.3

- **Templating**: Jinja2

## 🤖 Chatbot Features- **Session Management**: Flask sessions for chat history

- **Styling**: Pure CSS (no CSS frameworks)

The AI assistant responds to keywords related to:- **Icons**: Font Awesome 6.0.0

- Technologies and skills- **Fonts**: Inter font family

- Projects and work experience

- Education and background## 📋 Dependencies

- Contact information

- Career experienceSee `requirements.txt` for the complete list. Main dependencies:

- Achievements and awards- Flask 2.3.3

- Jinja2 (included with Flask)

## 📱 Responsive Design

## 🚀 Deployment

- **Desktop**: Full sidebar navigation with main content area

- **Tablet**: Optimized layout for medium screensFor production deployment:

- **Mobile**: Collapsible navigation with touch-friendly interface1. Change the secret key in `app.py`

2. Set `debug=False`

## 📄 License3. Use a production WSGI server like Gunicorn

4. Configure environment variables

This is a personal portfolio website. Feel free to use as inspiration for your own portfolio, but please don't copy the personal content.5. Set up proper file serving for static assets



---## 📄 License



**Built with ❤️ by Youssef Khemiri**This is a personal portfolio template. Feel free to use and modify for your own portfolio needs.