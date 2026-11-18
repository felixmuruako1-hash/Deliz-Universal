 # Deliz Initiative

Deliz Initiative is a Laravel-based non-governmental organization (NGO) website focused on making a positive impact through education, healthcare, youth empowerment, poverty alleviation, and community development.

The platform aims to connect people who want to make a difference with opportunities to support communities through donations and volunteering.

 ## About the Project

Deliz Initiative provides an online platform where visitors can learn about the organization's mission, support its activities, and register as volunteers.

  ## Key Features

- **Donation System:** Provides a platform for supporting the organization's activities. Paystack payment integration is currently under development.
- **Volunteer Registration:** Allows interested individuals to register and express their interest in volunteering.
- **Community Development:** Supports initiatives aimed at improving people's lives and strengthening communities.
- **Responsive Design:** Designed to provide a user-friendly experience across desktop and mobile devices.

## Areas of Focus

1. Education
2. Healthcare
3. Youth Empowerment
4. Poverty Alleviation
5. Community Development

## Technology Stack

- **Backend:** PHP and Laravel
- **Frontend:** React, Vite and Tailwind CSS
- **Database:** MySQL
- **Payment Gateway:** Paystack (integration in progress)
- **Development Environment:** Visual Studio Code and WAMP

 ## Requirements

Before installing the project, ensure you have:

- PHP 8.3 or later
- Composer
- MySQL
- Node.js and npm
- Git

## Installation and Setup

 ### 1. Clone the Repository

```bash
git clone https://github.com/felixmuruako1-hash/Deliz-Universal.git
```

 ### 2. Navigate into the Project

```bash
cd Deliz-Universal
```
 ### 3. Install PHP Dependencies

```bash
composer install
```

  ### 4. Install Frontend Dependencies

```bash
npm install
```


### 5. Configure Environment Variables

Create your environment file:

```bash
copy .env.example .env
```


Generate the Laravel application key:

```bash
php artisan key:generate
```

 ### 6. Configure the Database

Create a MySQL database for the project using phpMyAdmin or MySQL.

Update the database settings in your `.env` file:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=root
DB_PASSWORD=
```


Replace the database name and credentials with your actual settings.

### 7. Run Database Migrations

```bash
php artisan migrate
```

 ### 8. Start the Development Servers

Open a terminal and run:

```bash
php artisan serve
```

Open another terminal and run:

```bash
npm run dev
```

Visit the local address displayed by Laravel in your browser.

 ### 9. Build Frontend Assets

To create a production build of the frontend assets, run:

```bash
npm run build
```

## Payment Integration

Paystack integration is currently under development and is not yet fully functional.
 ## Project Status

Deliz Initiative is under active development. Features and improvements are being added as the project progresses.

 ## License

This project is currently developed for the Deliz Initiative organization.
