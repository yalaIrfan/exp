const oracledb = require('oracledb');

async function getDbConnection() {
    let connection;
    let pool;
    try {
        connection = await oracledb.getConnection({
            user: "system",
            password: "manager",
            connectionString: "10.73.84.148:1521/MULTIFIN",
            poolIncrement: 0,
            poolMax: 4,
            poolMin: 4
        }); 
        pool = await oracledb.createPool({
            enableStatistics : true,   // default is false
            user: "system",
            password: "manager",
            connectionString: "10.73.84.148:1521/MULTIFIN",
            poolIncrement: 0,
            queueTimeout: 30000,
            poolMax: 4,
            poolMin: 4
        });
        connection = await pool.getConnection();
        await connection.execute(`begin execute immediate 'drop table post'; exception when others then if sqlcode <> -942 then raise; end if; end;`);
        await connection.execute(`create table post (id number, title varchar2(20), content varchar2(200))`);
        console.log('Table created');
        // await createPost({ id: 1, title: 'Post 1', content: 'Content 1' }, connection);
        return connection;
    } catch (err) {
        console.error(err);
        throw err;

    } finally {
        if (pool) {
            // await pool?.getConnection()?.close();
        } else {
            console.log('Pool created');
        }
    }
}

async function createPost(post, connection) {
    // let connection = await getDbConnection();
    const sql = `INSERT INTO post (id, title, content) VALUES (:1, :2, :3)`;
    const bindValues = [post.id, post.title, post.content];
    connection.execute(sql, bindValues, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Row inserted:', result.rowsAffected);
        return result;
    });
};

async function getPost() {
    // let connection = await getDbConnection();
    const result = await connection.execute(`SELECT * FROM post`);
    console.dir(result.rows, { depth: null });
    const posts = result.rows.map(row => {
        return { id: row[0], title: row[1], content: row[2] };
    });
    return posts;
};

module.exports = {
    // getPost,
    // createPost,
    getDbConnection
};