
<template>
  <div>
    <DateDemo></DateDemo>
    <div class="head1">
      <div class="headbtn">
        <Button type="primary">编辑</Button>
        <Button type="primary">新增</Button>
        <Button type="primary">撤回</Button>
      </div>
    </div>
    <TableDemo></TableDemo>
  </div>
</template>



<script>
import DateDemo from "@/components/DateDemo";
import TableDemo from "@/components/TableDemo";

export default {
  components: {
    DateDemo,
    TableDemo
  }
};
</script>

<style>
.content {
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: #d8d8d8;
  border-radius: 5px;
  height: auto;
}
.head1 {
  width: 100%;
  height: 70px;

  border-top: solid 2px #d8d8d8;
}
.headbtn {
  padding-top: 20px;
  padding-right: 20px;
  float: right;
}
.headbtn > button {
  width: 90px;
  margin: 0px 10px;
}
</style>
