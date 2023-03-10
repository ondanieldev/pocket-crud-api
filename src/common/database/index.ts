import { getLogger } from 'log4js';
import { createConnection } from 'typeorm';

const logger = getLogger('typeorm');

class Database {
  public async register(): Promise<void> {
    try {
      await createConnection();
      logger.info('Database connected successfully');
    } catch (err) {
      logger.error('Database NOT connected successfully', err);
    }
  }
}

export default Database;
