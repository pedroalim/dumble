import { Request, Response } from 'express';
import { Database } from '../database';

export default async function testCreateUser(req: Request, res: Response) {
const db = Database.getInstance();

  try {
    // Exemplo de uma query para criar uma tabela
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE
      );
    `);

    // Exemplo de uma query para inserir dados
    const name = 'Fulano de Tal';
    const email = 'fulano@email.com';
    await db.query('INSERT INTO users(name, email) VALUES($1, $2)', [name, email]);
    console.log('Usuário inserido com sucesso!');

    // Exemplo de uma query para buscar dados
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    console.log('Dados do usuário:', result.rows);

  } catch (error) {
    console.error('Erro ao interagir com o banco de dados:', error);
  } finally {
    // Opcional: fechar o pool quando a aplicação for encerrada
    res.status(200).send('Usuário inserido e dados consultados com sucesso!');
  }
}