<template>
    <div class="outer-container">
        <!-- 接收的TCP段字段表格 -->
        <div class="table-wrapper">
            <div class="table-caption">接收的 TCP 段字段</div>
            <table class="tcp-table">
                <thead>
                    <tr class="header-row">
                        <th class="table-header">字段</th>
                        <th class="table-header">内容</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="data-row" v-for="item in tableData.receivedSegments" :key="item.field">
                        <td class="data-cell">{{ item.field }}</td>
                        <td class="data-cell">{{ item.value }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- 数据变化表格 -->
        <div class="table-wrapper">
            <div class="table-caption">各部分数据变化</div>
            <table class="tcp-table">
                <thead>
                    <tr class="header-row">
                        <th class="table-header">数据部分</th>
                        <th class="table-header">变化</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="data-row" v-for="item in tableData.dataChanges" :key="item.part">
                        <td class="data-cell">{{ item.part }}</td>
                        <td class="data-cell">{{ item.change }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- 发送的TCP段字段表格 -->
        <div class="table-wrapper">
            <div class="table-caption">发送的 TCP 段字段</div>
            <table class="tcp-table">
                <thead>
                    <tr class="header-row">
                        <th class="table-header">字段</th>
                        <th class="table-header">内容</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="data-row" v-for="item in tableData.sentSegments" :key="item.field">
                        <td class="data-cell">{{ item.field }}</td>
                        <td class="data-cell">{{ item.value }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TcpTables',
    props: {
        tableData: {
            type: Object,
            default: () => ({
                receivedSegments: [],
                dataChanges: [],
                sentSegments: []
            })
        }
    },
    data() {
        return {
            // 接收的TCP段字段数据
            receivedSegments: [
                { field: 'seq', value: 610 },
                { field: 'ack', value: 205 },
                { field: 'rwnd', value: 5 }
            ],
            // 数据变化数据
            dataChanges: [
                { part: '接收窗口', change: '6 -> 0 -> 8' },
                { part: '发送窗口', change: '8 -> 5' }
            ],
            // 发送的TCP段字段数据
            sentSegments: [
                { field: 'seq', value: 205 },
                { field: 'ack', value: 612 },
                { field: 'rwnd', value: 8 }
            ]
        };
    }
};
</script>

<style scoped>
.outer-container {
    display: flex;
    justify-content: center;
    /* 容器内表格整体居中 */
    align-items: center;
    gap: 20px;
    padding: 20px;
    flex-wrap: wrap;
    flex: 1;
}

.table-wrapper {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    max-width: 30%;
    flex: 1;
}

.tcp-table {
    display: block;
    max-width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    /* 表格自身居中 */
}

.table-caption {
    display: flex;
    font-weight: bold;
    margin-bottom: 8px;
    font-size: 1.1em;
    text-align: center;
    /* 标题居中 */
}

.table-header {
    padding: 10px;
    text-align: center;
    /* 表头内容居中 */
}

.data-cell {
    padding: 10px;
    text-align: center;
    /* 单元格内容居中 */
}
</style>
