<template>
  <div class="article-list">
    <CommonTitle msg="文章列表"></CommonTitle>
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
  name: 'ArticleList',
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
