const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'unimak',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
});

// Initialize database tables if they don't exist
const initializeDatabase = async () => {
  try {
    // Check if admin table exists, if not create it
    const adminTableCheck = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'admin'
      );
    `);

    if (!adminTableCheck.rows[0].exists) {
      await pool.query(`
        CREATE TABLE admin (
          id SERIAL PRIMARY KEY,
          password_hash VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);
      console.log('Admin table created');
    }

    // Check if admin user exists, if not create default one
    const adminCheck = await pool.query('SELECT COUNT(*) FROM admin');
    if (parseInt(adminCheck.rows[0].count) === 0) {
      const bcrypt = require('bcryptjs');
      const defaultPassword = process.env.DEFAULT_ADMIN_PASSWORD || 'admin123';
      const hashedPassword = await bcrypt.hash(defaultPassword, 10);
      
      await pool.query(
        'INSERT INTO admin (password_hash) VALUES ($1)',
        [hashedPassword]
      );
      console.log('Default admin user created with password: admin123');
    }
  } catch (error) {
    console.error('Database initialization error:', error);
  }
};

// Call initialization
initializeDatabase();

module.exports = pool;

