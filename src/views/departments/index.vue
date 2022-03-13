<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="box-card">
        <!-- 圣杯布局 -->
        <el-row :gutter="10">
          <el-col :span="20">传智教育</el-col>
          <el-col :span="4">
            <el-row type="flex" justify="end">
              <el-col :span="10">负责人</el-col>
              <el-col :span="10">
                <!-- 下拉菜单 -->
                <el-dropdown>
                  <span class="el-dropdown-link">
                    操作<i class="el-icon-arrow-down el-icon--right" />
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>添加子部门</el-dropdown-item>

                  </el-dropdown-menu>
                </el-dropdown>
                <!-- 下拉菜单 -->

              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <!-- 圣杯布局 -->

        <!-- 组织部门 -->
        <el-tree :data="Treedata" :props="defaultProps">
          <template>
            <el-row :gutter="10" style="width:100%">
              <el-col :span="20">传智教育</el-col>
              <el-col :span="4">
                <el-row type="flex" justify="end">
                  <el-col :span="10">负责人</el-col>
                  <el-col :span="10">
                    <!-- 下拉菜单 -->
                    <el-dropdown>
                      <span class="el-dropdown-link">
                        操作<i class="el-icon-arrow-down el-icon--right" />
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>添加子部门</el-dropdown-item>

                      </el-dropdown-menu>
                    </el-dropdown>
                    <!-- 下拉菜单 -->

                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-tree>
        <!-- 组织部门 -->

      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 组织树形结构数据
      Treedata: [
        {
          name: '总裁办',
          children: [{ name: '董事会' }]
        },
        {
          name: '行政部'
        },
        {
          name: '人事部'
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },

  created() {

  },

  methods: {

  }
}
</script>

<style scoped lang='scss'>
.el-dropdown-link{
  font-size: 16px ;
}
</style>
