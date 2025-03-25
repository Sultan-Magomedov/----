const repairedDevicesButton = document.querySelector(
    '.repaired-devices__button-more'
  )
  const repairedDevicesText = document.querySelector('.repaired-devices__text')
  
  repairedDevicesButton.addEventListener('click', function () {
    repairedDevicesText.classList.toggle('repaired-devices__text--read--more')
    repairedDevicesButton.textContent = 'Скрыть'
    repairedDevicesButton.classList.toggle(
      'repaired-devices__button-more--transform--rotate'
    )
  
    if (
      !repairedDevicesText.classList.contains(
        'repaired-devices__text--read--more'
      )
    ) {
      repairedDevicesButton.textContent = 'Читать далее'
    }
  })