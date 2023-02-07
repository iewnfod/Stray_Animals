import sqlite3
from setting import *

def get_article_data():
    con = sqlite3.connect(DATABASE_PATH)
    c = con.cursor()
    c.execute('SELECT * FROM articles')
    data = c.fetchall()
    con.commit()
    con.close()
    log.add_log(f'Get All Articles from Database. ')
    return data
