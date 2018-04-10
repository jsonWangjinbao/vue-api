<style lang='less'>
  @import "../../style/summary.less";
</style>
<template>
  <div class="summary">
    <CommonTitle msg="实时概况"></CommonTitle>
    <div v-for="itemList in itemLists" class="summary-title" v-bind:key="itemList.key">
      <h4>{{itemList.title}}</h4>
      <h1>{{itemList.dataNumber}}</h1>
    </div>
    <h2 class="table-top-title">24小时新建文章热点</h2>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="rank"
        label="排名"
        width="80">
      </el-table-column>
       <el-table-column
        prop="idNumber"
        label="ID"
        width="80">
      </el-table-column>
       <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
       <el-table-column
        prop="author"
        label="作者"
        width="80">
      </el-table-column>
       <el-table-column
        prop="picNumber"
        label="图片数"
        width="80">
      </el-table-column>
       <el-table-column
        prop="visits"
        label="访问量"
        width="80">
      </el-table-column>
       <el-table-column
        prop="comment"
        label="点赞/评论"
        width="100">
      </el-table-column>
      <el-table-column
        prop="heat"
        label="热度"
        width="80">
      </el-table-column>
      <el-table-column
        prop="date"
        label="创建时间"
        width="180">
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total= "this.tableDatas.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import CommonTitle from '../CommonTitle'
import { CommonDatas } from '../unit/CommonMessage'

export default {
  name: 'Summary',
  components: {
    CommonTitle
  },
  methods: {
    handleSizeChange (val) {
      this.pageNumber = val
      this.tableData = this.tableDatas.slice((this.nowPage - 1) * val, val * this.nowPage)
    },
    handleCurrentChange (val) {
      this.nowPage = val
      this.tableData = this.tableDatas.slice((val - 1) * this.pageNumber, val * this.pageNumber)
    }
  },
  data () {
    return {
      itemLists: [
        {title: '今日新增用户', dataNumber: 2423, key: 0},
        {title: '今日活跃用户', dataNumber: 12341, key: 1},
        {title: '今日新增文章', dataNumber: 23423, key: 2},
        {title: '今日浏览量', dataNumber: 1234, key: 3},
        {title: '今日点赞数', dataNumber: 1234, key: 4},
        {title: '今日评论数', dataNumber: 445, key: 5},
        {title: '今日打赏金额', dataNumber: 3450, key: 6},
        {title: '今日打印册数', dataNumber: 34560, key: 7},
        {title: '累计注册用户', dataNumber: 2340, key: 8},
        {title: '累计发文用户', dataNumber: 130, key: 9},
        {title: '累计文章', dataNumber: 3240, key: 10},
        {title: '累计图片', dataNumber: 2130, key: 11}
      ],
      nowPage: 1,
      pageNumber: 10,
      tableDatas: CommonDatas,
      tableData: []
    }
  },
  created: function () {
    this.tableData = this.tableDatas.slice(0, 10)
  }
}
</script>
