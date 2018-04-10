<style lang='less'>
  @import "../style/common.less";
</style>

<script>
export default {
  name: 'CommonTitle',
  props: ['msg'],
  render () {
    return (
      <div class="common">
        <h1 class="common-title">{this.msg}</h1>
      </div>
    )
  }
}
</script>
