<!-- Untuk menampilkan previewnya, tekan CTRL + SHIFT + V -->

# Pendahuluan DOM

Apa sih **DOM** itu? Pada lingkungan browser, **DOM** memberikan izin bagi kode JavaScript untuk mengakses dan memanipulasi kontent pada dokumen melalui sebuah _Application Programming Interface (API)_, yakni sesuatu yang memungkinkan JavaScript dan dokumen HTML untuk "berkomunikasi". **DOM** diwakilkan oleh global objek bernama **document**, yang mana dapat dimanfaatkan oleh JavaScript.

| **Method**               | **Contoh**                                | **Fungsi**                                                                                        |
| ------------------------ | ----------------------------------------- | ------------------------------------------------------------------------------------------------- |
| getElementById()         | document.getElementById('display');       | Mengembalikan satu elemen yang memiliki nilai id "display"                                        |
| getElementsByName()      | document.getElementsByName('button')      | Mengembalikan banyak elemen (HTMLCollection) yang memiliki attribute name dengan nilai "button".  |
| getElementsByClassName() | document.getElementsByClassName('button') | Mengembalikan banyak elemen (HTMLCollection) yang memiliki attribute class dengan nilai "button". |
| getElementsByTagName()   | document.getElementsByTagName('div')      | Mengembalikan banyak elemen (HTMLCollection) yang merupakan <div> element.                        |
| querySelector()          | document.querySelector('.button')         | Mengembalikan elemen pertama (node) yang menerapkan class "button".                               |
| querySelectorAll()       | document.querySelectorAll('.button')      | Mengembalikan banyak Node dalam bentuk NodeList yang menerapkan class "button".                   |

Karena methods di atas dimiliki oleh objek **document**, jangan lupa mengawali semua pemanggilannya dengan sintaks **document.<nama_method>**

Misalnya, kita bisa mendapatkan elemen paling pertama yang menerapkan nilai "button" pada atribut _class_ dengan method **querySelector('.button')**