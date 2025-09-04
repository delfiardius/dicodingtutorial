document.addEventListener('DOMContentLoaded', function () {
  const inputMaxLengthOnLoad = document.getElementById('inputNama').maxLength;
  document.getElementById('sisaKarakter').innerText = inputMaxLengthOnLoad;

  document.getElementById('inputNama').addEventListener('input', function () {
    const jumlahKarakterDiketik = document.getElementById('inputNama').value.length;
    const jumlahKarakterMaksimal = document.getElementById('inputNama').maxLength;

    console.log('Jumlah karakter diketik:', jumlahKarakterDiketik);
    console.log('Jumlah karakter maksimal:', jumlahKarakterMaksimal);

    const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
    document.getElementById('sisaKarakter').innerText = sisaKarakterUpdate.toString();

    if (sisaKarakterUpdate === 0) {
      document.getElementById('sisaKarakter').innerText = 'Batas maksimal tercapai';
    } else if (sisaKarakterUpdate <= 5) {
      document.getElementById('notifikasiSisaKarakter').style.color = 'red';
    } else {
      document.getElementById('notifikasiSisaKarakter').style.color = 'black';
    }
  });

  document.getElementById('inputNama').addEventListener('focus', function () {
    console.log('Input Nama: focus');
    document.getElementById('notifikasiSisaKarakter').style.visibility = 'visible';
  });

  document.getElementById('inputNama').addEventListener('blur', function () {
    console.log('Input Nama: blur');
    document.getElementById('notifikasiSisaKarakter').style.visibility = 'hidden';
  });

  document.getElementById('inputCaptcha').addEventListener('change', function () {
    console.log('Input Captcha: change');

    const inputCaptchaValue = document.getElementById('inputCaptcha').value;
    const submitButtonStatus = document.getElementById('submitButton');

    if (inputCaptchaValue === 'PRNU') {
      submitButtonStatus.removeAttribute('disabled');
    } else {
      submitButtonStatus.setAttribute('disabled', '');
    }
  })

});
