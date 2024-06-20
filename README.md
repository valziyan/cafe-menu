
# Cafe Menu Application

This is a modern single-page application (SPA) for a cafe menu built with Laravel 11, Inertia.js, React.js, and Tailwind CSS using Vite as the asset bundler.

## Features

- User Authentication (Register, Login)
- Display Cafe Menu Items
- Responsive Design with Tailwind CSS

## Installation

### Prerequisites

- PHP ^8.1
- Composer
- Node.js & npm
- MySQL (or any other supported database)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/cafe-menu.git
   cd cafe-menu
   ```

2. **Install PHP dependencies:**

   ```bash
   composer install
   ```

3. **Install Node.js dependencies:**

   ```bash
   npm install
   ```

4. **Set up your environment variables:**

   Copy the `.env.example` file to `.env` and update the database credentials and other necessary settings.

   ```bash
   cp .env.example .env
   ```

5. **Generate application key:**

   ```bash
   php artisan key:generate
   ```

6. **Run database migrations:**

   ```bash
   php artisan migrate
   ```

## Development

### Running the Application

1. **Start the Laravel development server:**

   ```bash
   php artisan serve
   ```

2. **Start Vite for asset bundling and hot reloading:**

   ```bash
   npm run dev
   ```

3. **Access the application:**

   Open your browser and navigate to `http://localhost:8000`

### Project Structure

- `resources/js/Pages`: Contains the React components for different pages (Home, Login, Register, Menu)
- `resources/css/app.css`: Contains the Tailwind CSS directives
- `resources/views/app.blade.php`: The main Blade template that loads the React app
- `routes/web.php`: Defines the web routes for the application

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
