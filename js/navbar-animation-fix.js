$('#collapse-navbar').on('show.bs.collapse', () => {
  $('.header-card').css('transform', 'translate(-50%, 10%)')
})

$('#collapse-navbar').on('hide.bs.collapse', () => {
  $('.header-card').css('transform', 'translate(-50%, -50%)')
})