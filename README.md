# Angular Resume Card Generation

The **Angular Resume Card Generation** project is a web application that allows users to create visually appealing and professional-looking resume cards using Angular. This project aims to simplify the process of resume creation by providing a user-friendly interface and customizable templates.

## Table of Contents

- [Angular Resume Card Generation](#angular-resume-card-generation)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Configuration](#configuration)
  - [Customization](#customization)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- Choose from a variety of pre-designed templates for your resume card.
- Easily input your personal details, education history, work experience, and skills.
- Real-time preview of the resume card as you make changes.
- Download the generated resume card in various formats (PDF, PNG, etc.).
- Responsive design, ensuring a seamless experience on both desktop and mobile devices.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- Angular CLI: Install using the following command:

```bash
npm install -g @angular/cli
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/pnguyen215/ngx-card-sdk.git
```

```bash
cd ngx-card-sdk
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
ng serve --open --port 4201
```

or

> Set run app with max_old_space_size, example: 2M (2148 KB)

```bash
set NODE_OPTIONS=--max_old_space_size=2148
```

```bash
ng serve --open --port 4201
```

4. Open your web browser and navigate to `http://localhost:4201` to access the application.

## Usage

1. Launch the Angular Resume Card Generation application using the instructions above.

2. Choose a template that suits your style and industry.

3. Fill in the details for your resume, including personal information, education, work experience, and skills.

4. As you input information, the preview of the resume card will update in real-time.

5. Once you are satisfied with the preview, you can download the resume card in your preferred format.

## Configuration

You can configure certain aspects of the application by modifying the `src/app/config.ts` file. This includes default values, colors, and other settings.

## Customization

If you want to customize the application further, you can explore the components and styles in the `src/app` directory. The application is structured in a modular way, making it easier to make changes.

## Contributing

Contributions to the Angular Resume Card Generation project are welcome! If you find any bugs, have feature requests, or want to contribute in any other way, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).

---
