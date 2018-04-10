<style lang='less'>
  @import "../../style/essenceList.less";
</style>
<template>
  <div class="essence-list">
    <CommonTitle msg="精华列表"></CommonTitle>
    <div class="essence-inquire">
      <div class="inquire">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="分类">
            <el-select v-model="formInline.region" placeholder="所选分类">
              <el-option label="所有分类" value="all"></el-option>
              <el-option label="热点" value="hot"></el-option>
              <el-option label="摄影" value="photography"></el-option>
              <el-option label="旅行" value="travel"></el-option>
              <el-option label="女神" value="beautify"></el-option>
              <el-option label="生活" value="life"></el-option>
              <el-option label="美文" value="beaArticle"></el-option>
              <el-option label="亲子" value="son"></el-option>
              <el-option label="兴趣" value="like"></el-option>
              <el-option label="美食" value="food"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <span>{{ this.weatherDetail }}</span>
            <el-button type="primary" @click="onSubmits">查询</el-button>
            <span>{{ this.weatherNanJingDetail }}</span>
          </el-form-item>
        </el-form>
      </div>
    </div>
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
import Api from '../../api/api'
import { mapGetters } from 'vuex'

export default {
  name: 'EssenceList',
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
    },
    onSubmit () {
      let params = {
        city: 110000,
        extensions: 'all',
        key: 'ecfbe66140f8ed4cc0bcbcf92b111074'
      }
      this.$store.dispatch('sendMessage', {
        api: Api.test,
        params,
        dataName: 'weather',
        type: 'get'
      })
    },
    onSubmits () {
      let params = {
        city: 320100,
        extensions: 'all',
        key: 'ecfbe66140f8ed4cc0bcbcf92b111074'
      }
      this.$store.dispatch('sendMessage', {
        api: Api.test,
        params,
        dataName: 'nanJing',
        type: 'get'
      })
    }
  },
  data () {
    return {
      datas: '',
      nowPage: 1,
      pageNumber: 10,
      formInline: {
        region: ''
      },
      tableDatas: CommonDatas,
      tableData: []
    }
  },
  created: function () {
    this.tableData = this.tableDatas.slice(0, 10)
  },
  computed: {
    ...mapGetters([
      'weatherDetail',
      'weatherNanJingDetail'
    ])
  }
}
</script>
