# Contributing to Kaduna Tech Ecosystem

Thank you for your interest in showcasing your project in the Kaduna Tech Ecosystem! This guide will help you submit your project.

## Who Can Submit?

We welcome submissions from:
- Tech projects and startups based in Kaduna
- Projects founded or led by people from Kaduna
- Projects that significantly impact the Kaduna tech community
- Open source projects by Kaduna developers

## How to Submit Your Project

### Step 1: Fork the Repository

1. Click the "Fork" button at the top right of this repository
2. This creates a copy of the repository in your GitHub account

### Step 2: Add Your Project

1. In your forked repository, open the `projects.json` file
2. Add your project information to the `projects` array following this template:

```json
{
  "name": "Your Project Name",
  "category": "Category",
  "description": "A clear, concise description of your project (2-3 sentences max).",
  "techStack": ["Tech1", "Tech2", "Tech3"],
  "contactName": "Your Name or Team Name",
  "contactEmail": "optional@email.com",
  "website": "https://yourproject.com",
  "github": "https://github.com/username/project",
  "twitter": "https://twitter.com/yourhandle"
}
```

### Step 3: Fill Out the Template

#### Required Fields

- **name**: Your project's name
- **category**: Choose from: Web App, Mobile App, SaaS, E-commerce, EdTech, FinTech, HealthTech, AgriTech, AI/ML, IoT, Developer Tools, Community, Other
- **description**: Brief description (2-3 sentences, ~100 words max)
- **techStack**: Array of main technologies used
- **contactName**: Your name or team name

#### Optional Fields

- **contactEmail**: Email address for contact
- **website**: Project website URL
- **github**: GitHub repository URL
- **twitter**: Twitter/X profile URL

### Step 4: Submit a Pull Request

1. Commit your changes to your fork
2. Click "Pull Request" on your forked repository
3. Fill out the pull request template with your project details
4. Submit the pull request

### Step 5: Wait for Review

- A maintainer will review your submission
- We may ask for clarifications or changes
- Once approved, your project will be live on the site!

## Formatting Guidelines

### Description Best Practices

- Keep it concise (2-3 sentences)
- Highlight what makes your project unique
- Mention the problem you're solving or the impact you're making
- Avoid marketing jargon
- Check for spelling and grammar

### Tech Stack

- List 3-7 main technologies
- Use official/common names (e.g., "React" not "ReactJS")
- Include both frontend and backend if applicable

### URLs

- Ensure all URLs start with `https://` or `http://`
- Test that all links work before submitting
- Use empty string `""` if you don't have a particular link

## Example Submission

Here's a complete example:

```json
{
  "name": "Kaduna DevHub",
  "category": "Community",
  "description": "A platform connecting developers in Kaduna for collaboration, mentorship, and knowledge sharing. We organize monthly meetups and hackathons to foster innovation.",
  "techStack": ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  "contactName": "Ahmed Ibrahim",
  "contactEmail": "ahmed@kaddevhub.com",
  "website": "https://kaddevhub.com",
  "github": "https://github.com/kaddevhub/platform",
  "twitter": "https://twitter.com/kaddevhub"
}
```

## JSON Formatting Tips

- Use double quotes `"` for strings, not single quotes `'`
- Add a comma after each field except the last one
- Ensure proper bracket matching `{}`
- Don't forget the comma between project entries in the array
- You can validate your JSON at [jsonlint.com](https://jsonlint.com/)

## What Happens After Submission?

1. **Review**: Maintainers review within 3-7 days
2. **Feedback**: You may receive requests for changes
3. **Approval**: Once approved, changes are merged
4. **Live**: Your project appears on the site within minutes!

## Questions?

If you have questions or need help:
- Open an issue in this repository
- Tag @RichoKD in your pull request
- Check existing pull requests for examples

## Code of Conduct

By contributing, you agree to:
- Provide accurate information
- Respect other contributors
- Follow submission guidelines
- Not spam or submit duplicate entries
- Not include offensive or inappropriate content

---

Thank you for contributing to the Kaduna Tech Ecosystem! 🚀

Together, we're building a stronger tech community in Kaduna!
