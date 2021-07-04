<template>
  <div>
    24234234
    <el-form ref="form" :model="model" :rules="config.rules" label-width="68px" size="medium">
      <StepForm :config="config">
        <template slot="form-a">
          <el-form-item label="Name" prop="name">
            <el-input
              v-model="model.name"
              clearable
            />
          </el-form-item>
          <el-form-item label="Age" prop="age">
            <el-input
              v-model="model.age"
              clearable
            />
          </el-form-item>
        </template>
        <template slot="form-b">
          <el-form-item label="Company" prop="company">
            <el-input
              v-model="model.company"
              clearable
            />
          </el-form-item>
          <el-form-item label="Account" prop="account">
            <el-input
              v-model="model.account"
              clearable
            />
          </el-form-item>
        </template>
        <template slot="desc-a">
          <h4>说明</h4>
          <h5>转账到支付宝账户</h5>
          <h5>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</h5>
          <h5>转账到银行卡</h5>
          <h5>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</h5>
        </template>
        <template slot="desc-b">
          <h4>说明B</h4>
          <h5>转账到支付宝账户</h5>
          <h5>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</h5>
          <h5>转账到银行卡</h5>
          <h5>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</h5>
        </template>
        <template slot="desc-c">
          <h4>说明C</h4>
          <h5>转账到支付宝账户</h5>
          <h5>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</h5>
          <h5>转账到银行卡</h5>
          <h5>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</h5>
        </template>
      </StepForm>
    </el-form>
    <el-button :disabled="config.active===0" type="primary" @click="handlePrev">
      PREV
    </el-button>
    <el-button :disalbed="config.active===2" type="primary" @click="handleNext">
      NEXT
    </el-button>
  </div>
</template>

<script>
import StepForm from '@/components/StepForm'
import { wrapromise } from '../../../common/lib'

export default {
  components: { StepForm },
  data() {
    return {
      model: {
        name: undefined,
        age: undefined,
        company: undefined,
        account: undefined
      },
      config: {
        active: 0,
        center: true,
        steps: [
          { slot: 'a', title: '填写转账信息' },
          { slot: 'b', title: '确认转账信息' },
          { slot: 'c', title: '完成' }
        ],
        rules: {
          name: [{ required: true, message: 'name error', trigger: 'blur' }],
          age: [{ required: true, message: 'age error', trigger: 'blur' }],
          account: [{ required: true, message: 'account error', trigger: 'blur' }],
          company: [{ required: true, message: 'company error', trigger: 'blur' }]
        }
      }
    }
  },
  methods: {
    async handleNext() {
      const [valid] = await wrapromise(this.$refs.form.validate())
      if (valid) { this.config.active++ }
    },
    handlePrev() {
      this.config.active--
    }
  }
}
</script>

<style scoped>

</style>
