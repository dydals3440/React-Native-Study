import * as SQLite from 'expo-sqlite';

const database = SQLite.openDatabase('places.db');

// 초기 데이터 기본 설정 (한번 실행되어야함)
export function init() {
  const promise = new Promise((resolve, reject) => {});
  // transaction이 쿼리를 수행
  database.transaction((tx) => {
    //  열 추가 (id autoIncrement), REAL은 소수 자리가 있는 숫자
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        imageUri TEXT NOT NULL,
        address TEXT NOT NULL,
        lat REAL NOT NULL,
        lng REAL NOT NULL
    )`,
      //
      [],
      // 모두 성공했을떄 동작하는 콜맥 설정가능
      () => {
        resolve();
      },
      // 에러발생시 콜백 (첫번쨰는, 실패한 transaction)
      (_, error) => {
        reject(error);
      }
    );
  });

  return promise;
}
