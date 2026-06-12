# 🚀 Local Development Setup Guide

Get your development environment up and running in minutes!

---

## Prerequisites

Before you start, make sure you have the following installed:

### Essential Tools
- [Git](https://git-scm.com/) - Version control
- [Node.js](https://nodejs.org/) (v16 or higher) - JavaScript runtime
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) - Package manager
- [Visual Studio Code](https://code.visualstudio.com/) - Code editor (optional but recommended)

### Optional but Recommended
- [Python](https://www.python.org/) - For backend projects
- [Docker](https://www.docker.com/) - For containerization
- [Postman](https://www.postman.com/) - For API testing
- [MongoDB Compass](https://www.mongodb.com/products/compass) - MongoDB GUI

---

## Step 1: Clone the Repository

```bash
git clone https://github.com/marcusnp619/marcusnp619-full-stack-learning.git
cd marcusnp619-full-stack-learning
```

---

## Step 2: Global Setup

### Install Node Modules (if frontend project)

```bash
npm install
# or
yarn install
```

### Create Environment File

```bash
cp .env.example .env
```

Then update `.env` with your configuration:

```env
REACT_APP_API_URL=http://localhost:3000
NODE_ENV=development
```

---

## Step 3: Running Frontend Projects

### React Project

```bash
cd frontend/react-projects/[project-name]
npm install
npm start
```

The app will open at `http://localhost:3000`

### Vue Project

```bash
cd frontend/vue-projects/[project-name]
npm install
npm run serve
```

### Angular Project

```bash
cd frontend/angular-projects/[project-name]
npm install
ng serve
```

---

## Step 4: Running Backend Projects

### Node.js/Express Project

```bash
cd backend/nodejs-express/[project-name]
npm install
npm run dev
# or
npm start
```

Server typically runs on `http://localhost:5000`

### Python Project

```bash
cd backend/python-projects/[project-name]

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the server
python manage.py runserver  # Django
# or
python app.py  # Flask
```

---

## Step 5: Database Setup

### PostgreSQL

```bash
# Install PostgreSQL
# Visit https://www.postgresql.org/download/

# Create database
createdb full_stack_learning

# Run migrations (if applicable)
npm run migrate
```

### MongoDB

```bash
# Install MongoDB
# Visit https://www.mongodb.com/try/download/community

# Start MongoDB service
# Windows: net start MongoDB
# macOS: brew services start mongodb-community
# Linux: sudo systemctl start mongod

# Verify connection
mongosh
```

---

## Step 6: VS Code Extensions

Recommended extensions for optimal development:

### Essential
- **ES7+ React/Redux/React-Native snippets** - dsznajder.es7-react-js-snippets
- **Prettier** - esbenp.prettier-vscode
- **ESLint** - dbaeumer.vscode-eslint
- **Thunder Client** - rangav.vscode-thunder-client

### Frontend
- **HTML CSS Support** - ecmel.vscode-html-css
- **Tailwind CSS IntelliSense** - bradlc.vscode-tailwindcss
- **Vue Language Features (Volar)** - Vue.volar
- **Angular Language Service** - Angular.ng-template

### Backend
- **Thunder Client** - For API testing
- **Python** - ms-python.python
- **Pylance** - ms-python.vscode-pylance
- **Thunder Client** - rangav.vscode-thunder-client

### Productivity
- **GitLens** - eamodio.gitlens
- **Bracket Pair Colorizer** - CoenraadS.bracket-pair-colorizer
- **Better Comments** - aaron-bond.better-comments
- **Live Server** - ritwickdey.LiveServer

### Install Extensions Command

```bash
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension Vue.volar
code --install-extension ms-python.python
```

---

## Step 7: Package Manager Commands

### npm Commands

```bash
# Initialize new project
npm init

# Install all dependencies
npm install

# Install specific package
npm install package-name

# Install as dev dependency
npm install --save-dev package-name

# Update packages
npm update

# Remove package
npm uninstall package-name

# Run scripts
npm run [script-name]

# Clear cache
npm cache clean --force
```

### yarn Commands

```bash
# Install all dependencies
yarn install

# Add package
yarn add package-name

# Add dev dependency
yarn add --dev package-name

# Remove package
yarn remove package-name

# Run scripts
yarn [script-name]
```

---

## Step 8: Common Commands

### Git Commands

```bash
# Clone repository
git clone <repo-url>

# Create new branch
git checkout -b feature/feature-name

# Check status
git status

# Stage changes
git add .

# Commit changes
git commit -m "Commit message"

# Push to remote
git push origin branch-name

# Pull latest changes
git pull origin main

# View logs
git log --oneline
```

### Docker Commands

```bash
# Build image
docker build -t image-name .

# Run container
docker run -p 3000:3000 image-name

# View running containers
docker ps

# Stop container
docker stop container-id

# Docker compose up
docker-compose up

# Docker compose down
docker-compose down
```

---

## Step 9: Troubleshooting

### "npm: command not found"
- Install Node.js from https://nodejs.org/

### "Port already in use"
```bash
# Find process using port 3000 (macOS/Linux)
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Module not found errors
```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Git merge conflicts
```bash
# View conflict
git status

# Resolve conflicts manually, then:
git add .
git commit -m "Resolve merge conflicts"
git push
```

### Database connection refused
- Verify database service is running
- Check connection string in .env
- Verify credentials are correct

---

## Step 10: Development Workflow

### Daily Workflow

```bash
# 1. Start your day
git pull origin main

# 2. Create feature branch
git checkout -b feature/your-feature

# 3. Make changes and test locally
npm run dev

# 4. Run tests
npm test

# 5. Format code
npm run format

# 6. Lint code
npm run lint

# 7. Commit changes
git add .
git commit -m "Add your feature"

# 8. Push to remote
git push origin feature/your-feature

# 9. Create Pull Request on GitHub
```

---

## Step 11: Useful Aliases

Add these to your shell configuration (`.bashrc`, `.zshrc`, or similar):

```bash
# Git aliases
alias gs='git status'
alias gc='git commit -m'
alias gp='git push'
alias gl='git pull'
alias ga='git add .'
alias gco='git checkout'
alias gb='git branch'

# npm aliases
alias ni='npm install'
alias nid='npm install --save-dev'
alias nr='npm run'
alias nrs='npm run start'
alias nrd='npm run dev'
alias nrt='npm run test'

# Directory aliases
alias ll='ls -lah'
alias cd..='cd ..'
```

---

## Additional Resources

- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Git Flight Rules](https://github.com/k88hudson/git-flight-rules)
- [NPM Scripts Guide](https://docs.npmjs.com/cli/v7/using-npm/scripts)

---

**Last Updated:** June 2026  
**Platform:** macOS, Linux, Windows  
**Node Version:** v16+

Got stuck? Check the troubleshooting section or create an issue!