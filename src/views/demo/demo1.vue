<template>
  <div class="app-container">
    <div>
      <el-table v-loading="listLoading" :data="tableData" border style="width: 100%">
        <el-table-column
          prop="id"
          label="id"
          min-width="180"
        />
        <el-table-column
          prop="name"
          label="名称"
          min-width="180"
        />
        <el-table-column
          prop="creationtime"
          label="日期"
          min-width="180"
        >
          <template slot-scope="{row}">
            <img :src="row.creationtime" alt="">
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { demoList, demoList2 } from '@/api/demo'

export default {
  name: 'Demo1',
  data() {
    return {
      listLoading: false,
      tableData: [
        {
          id: 1,
          name: 'line1',
          creationtime: '20200927'
        },
        {
          id: 2,
          name: 'line2',
          creationtime: '20200927'
        },
        {
          id: 3,
          name: 'line3',
          creationtime: '20200927'
        }
      ]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      demoList2().then((res) => {
        this.listLoading = false
        this.tableData = res.thedata
      })
    }
  }
}
</script>

<style>

</style>
