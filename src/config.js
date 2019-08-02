export const {
    APP_PORT = 4000,
    NODE_ENV = 'development',
    DB_USERNAME = 'admin',
    DB_PASSWORD = 'Ramtoo@123',
    DB_HOST = 'ds359077.mlab.com',
    DB_PORT = '59077',
    DB_NAME = 'chat'
} = process.env

export const IN_PROD = NODE_ENV === 'production';