import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';

export default {
  mysqlDb: {
    dialect: 'mysql',
    port: +process.env.PORT || 3306,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    autoLoadModels: true,
    synchronize: true,
  },
  mongoDb: {
    url: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`,
  },
  mailer: {
    transport: {
      host: process.env.SMTP_HOST,
      port: +process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
    defaults: {
      from: '"nest-modules" <modules@nestjs.com>',
    },
    template: {
      dir: `${process.env.PWD}/src/templates/`,
      adapter: new EjsAdapter(),
      options: {
        strict: true,
      },
    },
  },
};
