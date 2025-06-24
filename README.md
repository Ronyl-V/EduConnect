# EduConnect 🌍🎓

**EduConnect** is a modern and user-friendly scholarship platform that connects students around the world with global education opportunities. It allows users to filter scholarships by country, level of study, and field, while offering features like partner universities, user authentication, and a responsive contact form.

1. Features

- 🔍 Smart search and filters (country, study level, field, deadline)
- 🎓 Partner universities showcase
- 🔐 Login & registration system (HTML, CSS, JS-based)
- 📬 Contact form powered by Web3Forms
- 💡 Clean and responsive UI design

2. Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Web3Forms (for contact form handling)

3. Project Structure

/css
└─ style.css
/js
└─ auth.js
/index.html
/login.html
/register.html
/university.html
/contact.html

4. How to Edit Web3Forms Access Key

The contact form uses [Web3Forms](https://web3forms.com) to handle submissions. You need to replace the default public access key with your own for it to work.

### Steps:

1. Go to [https://web3forms.com](https://web3forms.com) and create a free account.
2. Once logged in, navigate to your **Dashboard**.
3. Copy your **Public Access Key**.
4. In your `contact.html` file, locate the form tag:
   ```html
   <form action="https://api.web3forms.com/submit" method="POST">
     <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

