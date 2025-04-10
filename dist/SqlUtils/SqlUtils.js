"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SqlUtil {
    /**
     * Retrieves column information.
     * カラム情報を取得します。
     * @param column Column information.
     *               カラム情報
     * @returns Column information object.
     *          カラム情報オブジェクト
     */
    static getColumnInfo(column) {
        if (column.name in column.model.Columns === false) {
            throw new Error(`${column.model.TableName}に${column.name}は存在しません。`);
        }
        return Object.assign(Object.assign({}, column.model.Columns[column.name]), { columnName: column.name, tableName: column.model.TableName, expression: `"${column.model.AsTableName}".${column.name}` });
    }
}
exports.default = SqlUtil;
