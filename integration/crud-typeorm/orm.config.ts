import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { isNil } from '@sama/nestjsx-crud-util';

const type = (process.env.TYPEORM_CONNECTION as any) || 'postgres';
const postgres =
  process.env.CI === 'true'
    ? { host: 'postgres', port: 5432 }
    : { host: 'localhost', port: 5455 };
const mysql =
  process.env.CI === 'true'
    ? { host: 'mysql', port: 3306 }
    : { host: 'localhost', port: 3316 };
const redis =
  process.env.CI === 'true'
    ? { host: 'redis', port: 6379 }
    : { host: 'localhost', port: 6399 };

export const withCache: TypeOrmModuleOptions = {
  type,
  host: type === 'postgres' ? postgres.host : mysql.host,
  port: type === 'postgres' ? postgres.port : mysql.port,
  username: type === 'mysql' ? 'nestjsx_crud' : 'root',
  password: type === 'mysql' ? 'nestjsx_crud' : 'root',
  database: 'nestjsx_crud',
  synchronize: false,
  logging: !isNil(process.env.TYPEORM_LOGGING)
    ? !!parseInt(process.env.TYPEORM_LOGGING, 10)
    : true,
  cache: {
    type: 'redis',
    options: {
      host: redis.host,
      port: redis.port,
    },
  },
  entities: [join(__dirname, './**/*.entity{.ts,.js}')],
};
