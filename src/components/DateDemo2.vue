<template>
  <div id="datee">
    <div span="12">
      <div class="dateleft">
        日期从：<DatePicker type="date" placeholder="2019/1/1" style="width: 200px"></DatePicker>
      </div>
      <div class="dateleft">
        到：<DatePicker type="date" placeholder="2019/3/14" style="width: 200px"></DatePicker>
      </div>

      <div class="dateleft">
        <Button shape="circle" icon="ios-search"></Button>
      </div>

      <div class="dateright">
        <Button type="primary">导出</Button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DateDemo2",
  data() {
    return {
      cityList: [
        {
          value: "New York",
          label: "New York"
        },
        {
          value: "London",
          label: "London"
        },
        {
          value: "Sydney",
          label: "Sydney"
        },
        {
          value: "Ottawa",
          label: "Ottawa"
        },
        {
          value: "Paris",
          label: "Paris"
        },
        {
          value: "Canberra",
          label: "Canberra"
        }
      ],
      date:null,
      model1:null,
      dateee:null
    };
  }
};
</script>
<style>
#datee {
  height: 40px;
  padding-top: 5px
}
.dateright {
  float: right;
}
.dateleft {
  float: left;
  padding-left: 15px;
}
select.dateleft {
  padding-left: 10px;
}
</style>