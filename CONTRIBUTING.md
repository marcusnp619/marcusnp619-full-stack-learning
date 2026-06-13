# Contributing to Full-Stack Learning 🚀

First off, thank you for considering contributing to this project! It's people like you that make Full-Stack Learning such a great learning resource.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

---

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, include as many details as possible:

**How to Submit a (Good) Bug Report:**
1. Use a clear and descriptive title
2. Describe the exact steps which reproduce the problem
3. Provide specific examples to demonstrate the steps
4. Describe the behavior you observed after following the steps
5. Explain which behavior you expected to see instead and why
6. Include screenshots and animated GIFs if possible
7. Include your environment details (OS, Node version, browser, etc.)

**Example Bug Report:**
```
Title: React component fails to render with missing props

Steps to reproduce:
1. Navigate to the dashboard
2. Click on user profile without loading user data
3. See error in console

Expected: Show loading state
Actual: Component crashes with "Cannot read property of undefined"

Environment: Chrome 90, Node 14.17.0, macOS Big Sur
```

### ✨ Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

1. **Use a clear and descriptive title**
2. **Provide a step-by-step description of the suggested enhancement**
3. **Provide specific examples to demonstrate the steps**
4. **Describe the current behavior and explain the expected behavior**
5. **Explain why this enhancement would be useful**

**Example Enhancement Request:**
```
Title: Add dark mode support to React frontend

Currently: Application only has light theme
Suggestion: Add toggle for dark mode preference

Benefits:
- Better user experience in low-light environments
- Reduced eye strain
- Modern UX expectation
```

### 📝 Documentation Improvements

Documentation is important for helping others learn. You can contribute by:
- Improving existing documentation clarity
- Adding examples and use cases
- Writing tutorials
- Fixing typos and grammar
- Adding code comments
- Creating diagrams and flowcharts

---

## Development Environment Setup

### Prerequisites
- Git
- Node.js v14+
- Python 3.8+
- Go 1.16+ (optional, for Go examples)
- Java JDK 11+ (optional, for Java examples)

### Setting Up Your Development Environment

1. **Fork the repository**
   ```bash
   Click "Fork" on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/marcusnp619-full-stack-learning.git
   cd marcusnp619-full-stack-learning
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/marcusnp619/marcusnp619-full-stack-learning.git
   ```

4. **Create a branch for your changes**
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Install dependencies**
   ```bash
   # Frontend
   cd frontend && npm install
   
   # Backend (choose one or more)
   cd ../backend/nodejs && npm install
   cd ../python && pip install -r requirements.txt
   cd ../go && go mod download
   ```

6. **Set up pre-commit hooks** (optional but recommended)
   ```bash
   npm install husky --save-dev
   npx husky install
   ```

---

## Coding Standards

### General Principles
- **Clarity** - Write code that is easy to understand
- **Consistency** - Follow existing code style in the project
- **DRY** - Don't Repeat Yourself
- **KISS** - Keep It Simple, Stupid
- **SOLID** - Follow SOLID principles

### JavaScript/React Standards
```javascript
// ✅ Good
const getUserById = (id) => {
  if (!id) {
    throw new Error('User ID is required');
  }
  return db.users.find(id);
};

// ❌ Avoid
function getuser(id){
  return db.users.find(id)
}
```

- Use ES6+ syntax (arrow functions, const/let, destructuring)
- Use meaningful variable and function names
- Add JSDoc comments for functions
- Keep functions small and focused
- Use async/await over callbacks

### Python Standards
```python
# ✅ Good
def get_user_by_id(user_id: str) -> User:
    """Retrieve a user by their ID.
    
    Args:
        user_id: The unique user identifier
        
    Returns:
        User object if found, None otherwise
    """
    if not user_id:
        raise ValueError("User ID is required")
    return db.users.get(user_id)

# ❌ Avoid
def getuser(id):
  return db.users.get(id)
```

- Follow PEP 8 style guide
- Use type hints
- Add docstrings to functions
- Use meaningful variable names
- Keep functions focused

### Go Standards
```go
// ✅ Good
func GetUserByID(ctx context.Context, id string) (*User, error) {
    if id == "" {
        return nil, errors.New("user ID is required")
    }
    return db.GetUser(ctx, id)
}

// ❌ Avoid
func getuser(id string) *User {
  return db.GetUser(id)
}
```

- Follow Go conventions and style guide
- Error handling is explicit
- Use CamelCase for exported functions
- Write clear comments for public functions

### CSS Standards
```css
/* ✅ Good */
.button-primary {
  background-color: #007bff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
}

.button-primary:hover {
  background-color: #0056b3;
}

/* ❌ Avoid */
.btn{background:#007bff;padding:10px}
```

- Use BEM (Block Element Modifier) naming
- Organize properties logically
- Add comments for complex styles
- Avoid inline styles

### Common Standards All Languages
- Write self-documenting code
- Add comments for "why", not "what"
- Use consistent indentation (2 spaces for JS, 4 for Python)
- Remove unused imports and variables
- Follow the existing code style

---

## Pull Request Process

### Before Submitting

1. **Create a branch** from the latest main:
   ```bash
   git checkout main
   git pull upstream main
   git checkout -b feature/your-feature
   ```

2. **Make your changes** with clear, descriptive commits:
   ```bash
   git commit -m "Add user authentication feature"
   ```

3. **Write or update tests** for your changes
   ```bash
   npm run test
   python -m pytest
   ```

4. **Test locally** to ensure everything works
   ```bash
   npm run build
   npm run lint
   ```

5. **Keep your branch updated**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

### Submitting a Pull Request

1. **Push your branch to your fork**
   ```bash
   git push origin feature/your-feature
   ```

2. **Go to GitHub and create a Pull Request**
   - Compare: `marcusnp619/marcusnp619-full-stack-learning main` ← `YOUR_USERNAME/marcusnp619-full-stack-learning feature/your-feature`

3. **Fill out the PR template with:**
   - Clear title describing the changes
   - Detailed description of what and why
   - Link to related issues
   - Screenshots/demos if applicable
   - Testing instructions

**PR Template Example:**
```markdown
## Description
Briefly describe what this PR does.

## Related Issues
Fixes #123

## Changes Made
- Change 1
- Change 2
- Change 3

## How to Test
1. Step 1
2. Step 2
3. Verify result

## Screenshots (if applicable)
[Add screenshots here]

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] Tests added/updated
- [ ] All tests pass locally
```

### During Review

- Be open to feedback and discussion
- Respond to comments promptly
- Make requested changes in new commits (don't force push during review)
- Ask questions if feedback is unclear
- Be respectful and professional

### After Approval

- Ensure all CI checks pass
- Squash commits if requested
- Merge when approved and all checks pass

---

## Code Review Guidelines

### As a Reviewer

1. **Be constructive** - Provide helpful feedback, not criticism
2. **Be clear** - Explain why changes are needed
3. **Be thorough** - Check for bugs, performance issues, security concerns
4. **Review promptly** - Timely feedback helps progress
5. **Approve when ready** - Use "Approve" when satisfied

### Review Checklist

- [ ] Code follows project style guidelines
- [ ] Changes are well-documented
- [ ] No hardcoded values or secrets
- [ ] Error handling is appropriate
- [ ] Tests are included and passing
- [ ] Performance impact is acceptable
- [ ] Security concerns are addressed
- [ ] Comments are clear and helpful

---

## Commit Message Guidelines

Write clear, descriptive commit messages following this format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Build, dependencies, configuration

### Scope (optional)
- `frontend`, `backend`, `api`, `docs`, etc.

### Subject
- Use imperative mood ("add" not "adds" or "added")
- Keep it under 50 characters
- Capitalize first letter
- Don't end with a period

### Body (optional)
- Explain what and why, not how
- Wrap at 72 characters
- Separate from subject with blank line

### Examples
```
feat(auth): add JWT token validation

Implement JWT token verification for API endpoints.
This ensures only authenticated users can access
protected resources.

Fixes #456
```

```
fix(frontend): correct button hover state

The hover state was not applying correct color.
Updated CSS to use proper class selector.
```

---

## Testing

### Writing Tests

1. **Unit Tests** - Test individual functions
   ```javascript
   test('getUserById should throw error for missing ID', () => {
     expect(() => getUserById(null)).toThrow();
   });
   ```

2. **Integration Tests** - Test component interactions
3. **E2E Tests** - Test complete user flows

### Running Tests

```bash
# Frontend
cd frontend && npm run test

# Python
python -m pytest

# Go
go test ./...

# Coverage
npm run test:coverage
```

---

## Linting and Formatting

### JavaScript
```bash
npm run lint
npm run format
```

### Python
```bash
flake8 .
black .
```

### Go
```bash
go fmt ./...
go vet ./...
```

---

## Project Boards & Issues

We organize work using GitHub Projects. Check the [Projects tab](https://github.com/marcusnp619/marcusnp619-full-stack-learning/projects) to see:

- Current sprint
- Planned features
- In-progress work
- Completed tasks

Look for issues labeled `good-first-issue` if you're new to the project!

---

## Additional Resources

### Learning Materials
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [How to Write Good Commit Messages](https://chris.beams.io/posts/git-commit/)
- [Code Review Best Practices](https://smartbear.com/learn/code-review/best-practices/)

### Tools & Extensions
- [ESLint](https://eslint.org/) - JavaScript linter
- [Prettier](https://prettier.io/) - Code formatter
- [Black](https://github.com/psf/black) - Python formatter
- [Pre-commit Framework](https://pre-commit.com/) - Git hooks

---

## Recognition

Contributors are recognized in:
- GitHub contributors page
- Project README file
- Release notes

---

## Questions?

Don't hesitate to ask! You can:
- Open an issue with the `question` label
- Start a GitHub Discussion
- Reach out to the maintainers

Thank you for contributing! 🎉

---

**Last Updated:** June 2026
