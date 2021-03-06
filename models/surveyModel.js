const db = require('./conn');

class ClassInfo {
  constructor(id, name, rank) {
    this.id = id;
    this.name = name;
    this.rank = rank;
  }
  static async getAllTopicData() {
    try {
      const response = await db.any(
        `SELECT * FROM topic INNER JOIN class_status on topic.status_id = class_status.id ORDER BY topic.id;`
      );
      return response;
    } catch (error) {
      console.error('ERROR: ', error);
      return error;
    }
  }
  static async getAllStatuses() {
    try {
      const response = await db.any(`SELECT * FROM class_status;`);
      return response;
    } catch (error) {
      console.error('ERROR: ', error);
      return error;
    }
  }
}

module.exports = ClassInfo;
