# 🚀 Kaduna Tech Ecosystem

A community-driven showcase of tech projects, startups, and innovations in Kaduna, Nigeria.

[![Live Site](https://img.shields.io/badge/Live-Site-blue)](https://richokd.github.io/KD_ecosystem/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 🌟 About

The Kaduna Tech Ecosystem is a platform where developers, startups, and tech enthusiasts in Kaduna can showcase their projects. Whether you're building a mobile app, a SaaS product, or contributing to open source, we want to feature your work!

## 🎯 Purpose

- **Showcase** local tech talent and innovation
- **Connect** developers and entrepreneurs in Kaduna
- **Inspire** the next generation of tech creators
- **Build** a stronger tech community

## 🚀 Submit Your Project

Got a project to share? We'd love to feature it!

### Quick Start

1. **Fork** this repository
2. **Edit** `projects.json` to add your project
3. **Submit** a pull request using our template
4. **Wait** for review and approval

📖 **[Read the full contribution guide](CONTRIBUTING.md)** for detailed instructions.

### Project Template

Add your project to `projects.json`:

```json
{
  "name": "Your Project Name",
  "category": "Category",
  "description": "Brief description of your project.",
  "techStack": ["Tech1", "Tech2"],
  "contactName": "Your Name",
  "contactEmail": "email@example.com",
  "website": "https://yourproject.com",
  "github": "https://github.com/username/project",
  "twitter": "https://twitter.com/handle"
}
```

## 📋 Categories (Enum)

The `category` field **must be exactly one of these values** (case-sensitive):
- Web App
- Mobile App
- SaaS
- E-commerce
- EdTech
- FinTech
- Gaming
- HealthTech
- AgriTech
- AI/ML
- IoT
- Developer Tools
- Community
- Other

These categories are validated by the website. See [categories.json](categories.json) for the definitive list.

## 🛠️ Local Development

Want to test your submission locally?

```bash
# Clone the repository
git clone https://github.com/RichoKD/KD_ecosystem.git
cd KD_ecosystem

# Open index.html in your browser
# Or use a simple HTTP server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## 📁 Project Structure

```
KD_ecosystem/
├── index.html          # Main HTML page
├── styles.css          # Styling
├── app.js              # JavaScript logic
├── projects.json       # Project data
├── CONTRIBUTING.md     # Contribution guidelines
├── README.md           # This file
└── .github/
    └── PULL_REQUEST_TEMPLATE.md
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

- **Add your project** following the guidelines
- **Improve documentation** to help others
- **Report bugs** if you find any issues
- **Suggest features** to enhance the platform

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Thank you to all the amazing developers and innovators in Kaduna who are building the future of technology in Nigeria!

## 📞 Contact

- **Maintainer**: RichoKD
- **GitHub**: [@RichoKD](https://github.com/RichoKD)

---

**Built with ❤️ by the Kaduna Tech Community**
