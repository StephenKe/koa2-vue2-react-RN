/**
 * Created by sinowinner on 17/7/6.
 */
function install (vue) {
  vue.prototype.my$prompt = my$prompt
}

function my$prompt (inputTarget) {
  this.$prompt(this.$t('base.pleaseInput') + ' ' + inputTarget, this.$t('base.tips'), {
    confirmButtonText: this.$t('base.confirm'),
    cancelButtonText: this.$t('base.cancel'),
    inputPattern: /^\d+$/,
    inputErrorMessage: inputTarget + this.$t('base.wrongPattern')
  }).then(({ value }) => {
    this.$message({
      type: 'success',
      message: this.$t('base.your') + ' ' + inputTarget + ' ' + this.$t('base.is') + ': ' + value
    })
  }).catch(() => {
    this.$message({
      type: 'info',
      message: this.$t('base.inputCancel')
    })
  })
}

export default {
  install
}
