export const StepForm = {
  props: ['config'],
  render() {
    const { config } = this
    const stepNode = config.steps.map(s => (<el-step title={s.title}/>))
    const active = config.active || 0
    const slotName = config.steps[active].slot
    const currentFormItems = this.$slots[`form-${slotName}`]
    const stepAttrs = {
      props: {
        space: config.space || undefined,
        active,
        'align-center': config.center || false,
        'finished-status': config['finished-status'] || 'success'
      }
    }
    return (
      <el-card shadow='never'>
        <el-steps {...stepAttrs}>
          {stepNode}
        </el-steps>
        {currentFormItems}
        <el-divider/>
        {this.$slots[`desc-${slotName}`]}
      </el-card>
    )
  }
}
