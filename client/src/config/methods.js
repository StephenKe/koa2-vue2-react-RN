/**
 * Created by sinowinner on 17/7/6.
 */
function install (vue) {
  vue.prototype.my$prompt = my$prompt
}

function my$prompt (inputTarget, pattern, cb) {
  this.$prompt(this.$t('base.pleaseInput') + ' ' + inputTarget, this.$t('base.tips'), {
    confirmButtonText: this.$t('base.confirm'),
    cancelButtonText: this.$t('base.cancel'),
    inputPattern: pattern,
    inputErrorMessage: inputTarget + this.$t('base.wrongPattern')
  }).then(cb).catch(() => {
    this.$message({
      type: 'info',
      message: this.$t('base.inputCancel')
    })
  })
}

export default {
  install
}
