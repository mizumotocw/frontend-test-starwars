# Star Wars Character Explorer

A React TypeScript application that allows users to explore Star Wars characters and their details using the Star Wars API (SWAPI).

## Features

- Browse Star Wars characters
- View detailed information about each character
- Search functionality
- Responsive design
- TypeScript for enhanced type safety

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mizumotocw/tyep-react-starwars.git
cd type_react_starwars
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Technology Stack

- React 18
- TypeScript
- Vite
- [Other libraries/frameworks you're using]

## Project Structure

```
src/
├── components/     # React components
├── services/      # API services
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
└── App.tsx        # Root component
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### ESLint Configuration

This project uses ESLint for code quality. To enable type-aware lint rules, update the configuration:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

## Contributing

[Add your contribution guidelines here]

## License

[Add your license information here]

## Acknowledgments

- Star Wars API (SWAPI) for providing the data
- Vite team for the development environment
- React team for the framework
# frontend-test-starwars
