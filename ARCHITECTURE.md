# VTEX Developer Portal Architecture

## Overview

The VTEX Developer Portal is a modern documentation website built using Next.js, React, and TypeScript. It serves as a centralized platform for VTEX's developer resources, including API references, guides, and documentation for VTEX's various services and tools. The portal is designed to be extensible, maintainable, and provide excellent user experience for developers working with VTEX technologies.

## Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) (React-based framework)
- **UI Components**: [@vtex/brand-ui](https://brand.vtex.com/) and custom components
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Documentation Rendering**: MDX with various plugins for code highlighting and special features
- **API Documentation**: RapiDoc (custom integration)
- **Styling**: Combination of CSS modules and theme-ui based styling
- **Authentication**: NextAuth.js with GitHub provider
- **Deployment**: Primarily hosted on Netlify with CDN capabilities

## Core Architecture Concepts

### Static Site Generation (SSG)

The portal leverages Next.js's static site generation capabilities extensively. Most pages are pre-rendered at build time using `getStaticProps` and `getStaticPaths`. This approach provides:

- Fast page loads with pre-rendered HTML
- SEO benefits from server-rendered content
- Reduced server load since pages are served as static files
- CDN caching for improved performance

Dynamic content is handled through incremental static regeneration when necessary.

### Content Sourcing

Content is primarily sourced from:

1. **GitHub Repositories**: The portal fetches documentation content from GitHub repositories (primarily `vtexdocs/dev-portal-content`).
2. **OpenAPI Specifications**: API documentation is rendered from OpenAPI specs, typically stored in the `vtex/openapi-schemas` repository.
3. **Local Content**: Some content is stored directly in the codebase.

The system includes caching mechanisms to optimize performance and reduce unnecessary GitHub API calls.

### Smart Throttling and Caching

As mentioned in the project README, the portal implements smart throttling to prevent excessive API calls:

- OpenAPI documentation uses a multi-tiered caching strategy
- GitHub API requests are rate-limited and cached
- CDN-level caching is configured via Netlify headers
- Browser-level caching is implemented for certain resources

### File Structure

The project follows a structured organization:

```
devportal/
├── public/              # Static assets and images
├── src/
│   ├── components/      # Reusable React components
│   ├── messages/        # Internationalization files
│   ├── pages/           # Next.js pages structure that maps to routes
│   │   ├── api/         # API routes for dynamic functionality
│   │   ├── docs/        # Documentation sections (guides, API reference, etc.)
│   │   └── ...
│   ├── styles/          # Global and component-specific styles
│   └── utils/           # Utility functions, types, and constants
├── RapiDoc/             # Custom implementation of RapiDoc for API documentation
└── ...
```

## Key Subsystems

### Documentation System

The documentation system is one of the core features of the portal. It handles:

1. **Content Retrieval**: Fetching markdown/MDX content from GitHub repositories
2. **Processing**: Transforming markdown content, including:
   - Heading extraction for table of contents
   - Code block highlighting
   - Special block transformations (e.g., "magic blocks")
   - Image processing
3. **Rendering**: Converting the processed content to React components

The system uses several remark and rehype plugins to enhance markdown processing:

- `remarkCodeHike`: For advanced code highlighting and navigation
- `remarkGFM`: For GitHub Flavored Markdown support
- `remarkMermaid`: For diagram rendering
- `remarkBlockquote`: For enhanced blockquote styling
- `rehypeHighlight`: For syntax highlighting

### API Reference System

The API reference system is built on a custom integration of RapiDoc, which provides:

1. **OpenAPI Spec Handling**: Loading and displaying OpenAPI specifications
2. **Interactive Documentation**: Rendering interactive API documentation
3. **Request Testing**: Allowing users to test API endpoints directly in the browser

The system includes:

- Client-side spec resolution for references
- Server-side API endpoints to proxy and cache OpenAPI specs
- Response transformation and enhancement for better display

### Navigation System

The navigation system consists of:

1. **Sidebar**: Dynamic sidebar showing the documentation structure
2. **Breadcrumbs**: Context-aware breadcrumb navigation
3. **Table of Contents**: In-page navigation based on document headings
4. **Cross-linking**: "See also" sections and related content links

Navigation is driven by a combination of:
- Static structure definitions
- Dynamic content analysis
- Frontmatter metadata in documentation files

### Preview and Editing System

The portal includes features for content preview and editing:

1. **Branch Preview**: Ability to preview content from different GitHub branches
2. **Markdown Preview**: Real-time preview of markdown content
3. **OpenAPI Preview**: Preview for OpenAPI specifications
4. **Editor Tools**: Various tools for content authors and maintainers

## Page Types and Templates

The portal uses several page templates:

1. **Documentation Pages**: For general documentation content
2. **API Reference Pages**: For OpenAPI-based API documentation
3. **Landing Pages**: For section introductions and overviews
4. **App Documentation Pages**: For VTEX IO app documentation
5. **Troubleshooting Pages**: For problem-solving documentation
6. **Editor Pages**: For content authoring and preview

## Data Flow

### Static Content Flow

1. During build time, Next.js invokes `getStaticProps` and `getStaticPaths`
2. Documentation content is fetched from GitHub repositories
3. Content is processed through various transformations
4. The processed content is passed to page components
5. Pages are statically generated and deployed

### Dynamic Content Flow

1. Client makes a request to a specific page
2. If the page exists in the static build, it's served directly
3. For dynamic content like API previews, client-side JavaScript requests data
4. Data is fetched from the appropriate source (GitHub, API endpoints, etc.)
5. Content is rendered client-side and displayed

## Performance Optimizations

Several performance optimizations are implemented:

1. **Static Generation**: Most pages are pre-rendered at build time
2. **Image Optimization**: Next.js image optimization for responsive images
3. **Code Splitting**: Automatic code splitting for reduced bundle sizes
4. **Incremental Static Regeneration**: For updates without full rebuilds
5. **Smart Caching**: Multi-level caching strategy
6. **CDN Integration**: Content delivery network for faster global access
7. **API Rate Limiting**: Smart throttling to prevent excessive API calls

## Development Practices

The codebase follows several best practices:

1. **Functional Components**: Preference for functional components with hooks
2. **TypeScript**: Strong typing throughout the codebase
3. **Modular Architecture**: Components and utilities are modularized
4. **Component Composition**: Complex UI built from smaller components
5. **Code Style**: ESLint and Prettier for consistent code formatting
6. **Testing**: Cypress for integration and component testing

## Deployment and CI/CD

The portal uses GitHub Actions for CI/CD:

1. **Testing**: Automated tests on pull requests
2. **Build Validation**: Build verification before deployment
3. **Versioning**: Semantic versioning through GitHub releases
4. **Deployment**: Automated deployment to Netlify

## External Integrations

The portal integrates with several external services:

1. **GitHub API**: For content retrieval and authentication
2. **Algolia**: For site search functionality
3. **Google Analytics/Tag Manager**: For analytics
4. **Netlify**: For hosting and CDN

## Best Practices and Design Decisions

1. **Component Architecture**: Reusable, well-encapsulated components
2. **Content/Presentation Separation**: Clear separation between content and UI
3. **Progressive Enhancement**: Core functionality works without JavaScript
4. **Responsive Design**: Mobile-first approach to responsive layouts
5. **Accessibility**: Focus on accessible UI components
6. **Performance Budget**: Attention to page load performance

## Conclusion

The VTEX Developer Portal is a sophisticated Next.js application designed around content-driven architecture. It leverages static site generation for performance while providing interactive features for documentation and API references. The modular architecture and clear separation of concerns make it maintainable and extensible.