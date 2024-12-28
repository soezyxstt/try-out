import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const questions = [
  {
    q: 'Manakah berikut ini yang tidak termasuk karakteristrik proses water jet cutting?',
    answers: [
      {
        text: 'Tidak menimbulkan kerusakan pada benda kerja karena pengaruh panas',
        isCorrect: false,
      },
      { text: 'Dapat memotong semua material non-metal', isCorrect: false },
      { text: 'Dapat memotong semua material metal', isCorrect: true },
      { text: 'Berisik', isCorrect: false },
      {
        text: 'Cocok digunakan untuk memotong material yang tidak tahan panas',
        isCorrect: false,
      },
    ],
    explanation:
      'Water jet cutting tidak dapat memotong semua material metal. Proses ini lebih efektif untuk memotong material non-metal dan beberapa jenis logam lunak, tetapi memiliki keterbatasan dalam memotong logam keras atau tebal.',
  },
  {
    q: 'Manakah proses penyambungan berikut ini yang dapat digunakan untuk mencegah kebocoran gas dan cairan?',
    answers: [
      { text: 'Bolting', isCorrect: false },
      { text: 'Adhesive bonding', isCorrect: true },
      { text: 'Riveting', isCorrect: false },
      { text: 'Stitching', isCorrect: false },
      { text: 'Crimping', isCorrect: false },
    ],
    explanation:
      'Adhesive bonding dapat menciptakan sambungan yang rapat dan tahan terhadap kebocoran gas dan cairan, berbeda dengan metode mekanis lainnya yang mungkin memiliki celah atau lubang.',
  },
  {
    q: 'Berikut ini adalah penyebab pahat cepat aus pada proses pemesinan, kecuali ...',
    answers: [
      { text: 'kenaikan temperatur pahat yang berlebihan', isCorrect: false },
      {
        text: 'sudut pahat tidak sesuai dengan kondisi pemotongan',
        isCorrect: false,
      },
      { text: 'kekeliruan dalam pemilihan pahat', isCorrect: false },
      {
        text: 'cairan pendingin tidak digunakan secara benar',
        isCorrect: false,
      },
      {
        text: 'parameter proses pemesinan diatur terlalu rendah',
        isCorrect: true,
      },
    ],
    explanation:
      'Parameter proses pemesinan yang diatur terlalu rendah umumnya tidak menyebabkan pahat cepat aus. Sebaliknya, parameter yang terlalu tinggi lebih cenderung menyebabkan keausan pahat yang cepat.',
  },
  {
    q: 'Cacat lasan apakah yang akan terjadi bila filler metal mempunyai tingkat penyusutan yang berbeda dengan logam induk?',
    answers: [
      { text: 'Porosity', isCorrect: false },
      { text: 'Undercut', isCorrect: false },
      { text: 'Spatter', isCorrect: false },
      { text: 'Retak pada logam las', isCorrect: true },
      { text: 'Inclusion', isCorrect: false },
    ],
    explanation:
      'Perbedaan tingkat penyusutan antara filler metal dan logam induk dapat menyebabkan tegangan internal yang mengakibatkan retak pada logam las.',
  },
  {
    q: 'Pemilihan cutting fluid perlu memperhatikan faktor berikut ini, kecuali ..',
    answers: [
      { text: 'material pahat', isCorrect: false },
      { text: 'efek pendinginan yang diinginkan', isCorrect: false },
      { text: 'benda kerja yang akan dikerjakan', isCorrect: false },
      { text: 'keselamatan dan kesehatan', isCorrect: false },
      { text: 'geram yang terbentuk', isCorrect: true },
    ],
    explanation:
      'Geram yang terbentuk bukan merupakan faktor utama dalam pemilihan cutting fluid. Faktor-faktor lain seperti material pahat, efek pendinginan, benda kerja, dan keselamatan lebih penting dalam pemilihan cutting fluid.',
  },
  {
    q: 'Manakah berikut ini yang bukan merupakan bagian dari mesin milling?',
    answers: [
      { text: 'Spindle', isCorrect: false },
      { text: 'Apron', isCorrect: true },
      { text: 'Table', isCorrect: false },
      { text: 'Column', isCorrect: false },
      { text: 'Arbor', isCorrect: false },
    ],
    explanation:
      'Apron adalah bagian dari mesin bubut, bukan mesin milling. Komponen-komponen lain yang disebutkan (spindle, table, column, arbor) adalah bagian umum dari mesin milling.',
  },
  {
    q: 'Manakah berikut ini yang bukan merupakan aplikasi electro plating?',
    answers: [
      { text: 'Pelapisan tembaga', isCorrect: false },
      { text: 'Pelapisan nikel', isCorrect: false },
      { text: 'Pelapisan chromium', isCorrect: false },
      { text: 'Pelapisan emas', isCorrect: false },
      { text: 'Pelapisan plastik', isCorrect: true },
    ],
    explanation:
      'Pelapisan plastik bukan merupakan aplikasi dari electro plating. Electro plating umumnya digunakan untuk melapisi logam dengan logam lain, seperti tembaga, nikel, chromium, atau emas.',
  },
  {
    q: 'Manakah proses berikut ini yang bukan merupakan bagian dari proses gerinda?',
    answers: [
      { text: 'Honing', isCorrect: false },
      { text: 'Polishing', isCorrect: false },
      { text: 'Lapping', isCorrect: false },
      { text: 'Sanding', isCorrect: false },
      { text: 'Boring', isCorrect: true },
    ],
    explanation:
      'Boring (pengeboran) bukan merupakan bagian dari proses gerinda. Boring adalah proses pemesinan untuk memperbesar lubang yang sudah ada, sementara proses gerinda melibatkan penggunaan abrasif untuk menghaluskan permukaan.',
  },
  {
    q: 'Manakah pernyataan berikut ini yang benar?',
    answers: [
      {
        text: 'Daerah yang terpengaruh panas (HAZ) akan mempunyai kekuatan yang paling tinggi',
        isCorrect: false,
      },
      {
        text: 'Logam induk akan mempunyai kekuatan paling tinggi',
        isCorrect: false,
      },
      {
        text: 'Kekuatan sambungan lasan akan selalu lebih rendah dibandingkan dengan logam induk',
        isCorrect: false,
      },
      {
        text: 'Kekuatan sambungan lasan akan selalu lebih rendah dibandingkan dengan daerah yang terpengaruh panas',
        isCorrect: false,
      },
      {
        text: 'Kekuatan sambungan lasan akan sama atau lebih besar dibandingkan logam induk',
        isCorrect: true,
      },
    ],
    explanation:
      'Dalam pengelasan yang baik, kekuatan sambungan lasan seharusnya sama atau lebih besar dibandingkan logam induk. Ini adalah tujuan dari proses pengelasan yang tepat.',
  },
  {
    q: 'Berikut ini merupakan kelebihan penyambungan pengelasan, kecuali ...',
    answers: [
      { text: 'mendapatkan sambungan permanent', isCorrect: false },
      {
        text: 'tidak ada kemungkinan sambungan menjadi longgar',
        isCorrect: false,
      },
      {
        text: 'tidak ada batas ketebalan logam yang akan disambung',
        isCorrect: false,
      },
      {
        text: 'hasil sambungan dapat digunakan pada temperatur tinggi',
        isCorrect: false,
      },
      {
        text: 'terjadi distorsi dan perubahan bentuk karena pemanasan dan pendinginan cepat',
        isCorrect: true,
      },
    ],
    explanation:
      'Distorsi dan perubahan bentuk karena pemanasan dan pendinginan cepat sebenarnya adalah kelemahan dari proses pengelasan, bukan kelebihannya.',
  },
  {
    q: 'Proses non konvensional manakah berikut ini yang memerlukan pahat?',
    answers: [
      { text: 'Chemical machining', isCorrect: false },
      { text: 'Laser beam machining', isCorrect: false },
      { text: 'Water jet machining', isCorrect: false },
      { text: 'Electro-chemical machining', isCorrect: false },
      { text: 'electron beam machining', isCorrect: false },
    ],
    explanation:
      'Semua proses yang disebutkan adalah proses non-konvensional yang tidak memerlukan pahat dalam pengertian tradisional. Proses-proses ini menggunakan metode lain seperti reaksi kimia, sinar laser, air bertekanan tinggi, atau elektrolisis untuk memotong atau membentuk material.',
  },
  {
    q: 'Projection welding adalah ...',
    answers: [
      { text: 'multi spot welding', isCorrect: true },
      { text: 'menggunakan busur listrik', isCorrect: false },
      { text: 'pengelasan kontinyu', isCorrect: false },
      { text: 'digunakan untuk menyambungkan round bar', isCorrect: false },
      { text: 'proses kapasitas rendah', isCorrect: false },
    ],
    explanation:
      'Projection welding adalah jenis pengelasan resistansi yang merupakan bentuk multi spot welding. Ini menggunakan proyeksi atau tonjolan pada salah satu atau kedua permukaan yang akan disambung untuk memfokuskan arus dan tekanan.',
  },
  {
    q: 'Berikut ini berkaitan dengan mesin bubut vertikal yang salah?',
    answers: [
      {
        text: 'Sumbu spindel tegak lurus terhadap permukaan tanah',
        isCorrect: false,
      },
      { text: 'Benda kerja dipasang secara horisontal', isCorrect: true },
      {
        text: 'Cocok digunakan untuk benda kerja yang berdiameter besar',
        isCorrect: false,
      },
      {
        text: 'Pahat dapat bergerak secara horisontal dan vertikal',
        isCorrect: false,
      },
      { text: 'Dapat mempunyai lebih dari satu tool head', isCorrect: false },
    ],
    explanation:
      'Pada mesin bubut vertikal, benda kerja dipasang secara vertikal, bukan horizontal. Ini adalah ciri khas mesin bubut vertikal yang membedakannya dari mesin bubut horizontal konvensional.',
  },
  {
    q: 'Porositas adalah cacat las berupa lubang kecil yang tampak pada permukaan penampang las. Hal tersebut terjadi karena ...',
    answers: [
      { text: 'ayunan elektroda terlalu cepat', isCorrect: false },
      { text: 'ayunan elektroda terlalu besar', isCorrect: false },
      { text: 'karena elektroda basah', isCorrect: true },
      { text: 'ampere terlalu besar', isCorrect: false },
      { text: 'percikan logam pengisi mendahului busur las', isCorrect: false },
    ],
    explanation:
      'Porositas dalam pengelasan sering disebabkan oleh elektroda yang basah. Kelembaban pada elektroda dapat menghasilkan gas hidrogen yang terperangkap dalam logam las saat mendingin, membentuk lubang-lubang kecil atau pori-pori.',
  },
  {
    q: 'Manakah pernyataan berikut ini berkaitan dengan shoot peening yang salah?',
    answers: [
      {
        text: 'Digunakan untuk meningkatkan fatigue life komponen',
        isCorrect: false,
      },
      {
        text: 'Dilakukan dengan cara menembaki permukaan benda kerja dengan butiran-butiran gelas, keramik atau baja cor',
        isCorrect: false,
      },
      {
        text: 'Menimbulkan deformasi plastis pada permukaan benda kerja',
        isCorrect: false,
      },
      {
        text: 'Dapat meningkatkan kekerasan permukaan benda kerja',
        isCorrect: false,
      },
      {
        text: 'Terdapat sebagian permukaan benda kerja yang akan terkelupas',
        isCorrect: true,
      },
    ],
    explanation:
      'Pernyataan yang salah adalah bahwa sebagian permukaan benda kerja akan terkelupas. Shot peening sebenarnya tidak menyebabkan pengelupasan permukaan, tetapi menciptakan tegangan sisa tekan pada permukaan yang meningkatkan kekuatan lelah dan ketahanan korosi.',
  },
  {
    q: 'Manakah proses berikut ini yang menggunakan partikel abrasif?',
    answers: [
      { text: 'Water jet machining', isCorrect: true },
      { text: 'Electro-chemical grinding', isCorrect: false },
      { text: 'Electrical discharge machining', isCorrect: false },
      { text: 'Electro-chemical machining', isCorrect: false },
      { text: 'Laser beam machining', isCorrect: false },
    ],
    explanation:
      'Water jet machining, terutama abrasive water jet machining, menggunakan partikel abrasif yang dicampur dengan air bertekanan tinggi untuk memotong material. Proses lain yang disebutkan tidak menggunakan partikel abrasif sebagai mekanisme utama pemotongan mereka.',
  },
  {
    q: 'Manakah faktor berikut ini yang tidak mempengaruhi kualitas hasil pengelasan (cacat pengelasan)?',
    answers: [
      { text: 'Dimensi benda kerja', isCorrect: true },
      { text: 'Pergerakan torch', isCorrect: false },
      { text: 'Persiapan logam induk', isCorrect: false },
      { text: 'Pemilihan jenis dan diameter logam pengisi', isCorrect: false },
      { text: 'Kondisi lingkungan sekitar', isCorrect: false },
    ],
    explanation:
      'Dimensi benda kerja umumnya tidak secara langsung mempengaruhi kualitas hasil pengelasan atau menyebabkan cacat pengelasan. Faktor-faktor lain seperti pergerakan torch, persiapan logam induk, pemilihan logam pengisi, dan kondisi lingkungan memiliki pengaruh yang lebih signifikan terhadap kualitas las.',
  },
  {
    q: 'Manakah proses pengelasan berikut ini yang tidak menggunakan pelindung untuk hasil lasan?',
    answers: [
      { text: 'Shielded metal arc welding', isCorrect: false },
      { text: 'Submerged arc welding', isCorrect: false },
      { text: 'Oxyacytelene welding', isCorrect: true },
      { text: 'Gas tungsten arc welding', isCorrect: false },
      { text: 'Plasma arc welding', isCorrect: false },
    ],
    explanation:
      'Oxyacetylene welding tidak menggunakan pelindung eksternal untuk hasil lasan. Proses ini mengandalkan gas yang dihasilkan selama pembakaran untuk melindungi lasan dari atmosfer, tetapi tidak memiliki sistem pelindung khusus seperti gas inert atau fluks yang digunakan dalam proses pengelasan lainnya.',
  },
  {
    q: 'Manakah komponen machining center berikut ini yang tidak terdapat pada mesin perkakas konvensional?',
    answers: [
      { text: 'Bed', isCorrect: false },
      { text: 'Spindle', isCorrect: false },
      { text: 'Cutter', isCorrect: false },
      { text: 'Drive motor', isCorrect: false },
      { text: 'Automatic tool changer', isCorrect: true },
    ],
    explanation:
      'Automatic tool changer (ATC) adalah komponen yang umumnya hanya ditemukan pada machining center dan tidak ada pada mesin perkakas konvensional. ATC memungkinkan pergantian alat secara otomatis, meningkatkan efisiensi dan fleksibilitas dalam operasi pemesinan.',
  },
  {
    q: 'Mengapa air tidak disarankan sebagai cutting fluid?',
    answers: [
      { text: 'Bersifat korosif', isCorrect: false },
      { text: 'Mempunyai lubrikasi yang rendah', isCorrect: true },
      {
        text: 'Tidak mampu menurunkan temperatur pemotongan',
        isCorrect: false,
      },
      { text: 'Tidak dapat menurunkan gaya pemotongan', isCorrect: false },
      { text: 'Mempunyai viskositas yang rendah', isCorrect: false },
    ],
    explanation:
      'Air tidak disarankan sebagai cutting fluid terutama karena memiliki sifat lubrikasi yang rendah. Meskipun air memiliki kapasitas pendinginan yang baik, kurangnya sifat pelumasan dapat menyebabkan gesekan berlebih dan keausan alat yang cepat dalam proses pemesinan.',
  },
  {
    q: 'Sejalan dengan peningkatan temperatur, kekuatan adhesive bonding akan ...',
    answers: [
      { text: 'menurun', isCorrect: true },
      { text: 'menaik', isCorrect: false },
      { text: 'tetap sama', isCorrect: false },
      { text: 'menaik lalu menurun', isCorrect: false },
      { text: 'menurun lalu menaik', isCorrect: false },
    ],
    explanation:
      'Kekuatan adhesive bonding umumnya menurun seiring dengan peningkatan temperatur. Hal ini disebabkan oleh degradasi sifat mekanik dan kimia dari bahan perekat pada suhu tinggi.',
  },
  {
    q: 'Manakah pernyataan berikut ini berkaitan dengan mesin CNC yang salah?',
    answers: [
      { text: 'Mesin dapat beroperasi secara otomatis', isCorrect: false },
      {
        text: 'Diperlukan pemrograman terlebih dahulu sebelum dijalankan',
        isCorrect: false,
      },
      {
        text: 'Sesuai untuk operasi pemotongan yang sederhana dan berdurasi singkat',
        isCorrect: true,
      },
      {
        text: 'Produk yang dihasilkan mempunyai keakuratan dimensi yang tinggi',
        isCorrect: false,
      },
      { text: 'Dapat mengerjaan produk yang kompleks', isCorrect: false },
    ],
    explanation:
      'Pernyataan yang salah adalah bahwa mesin CNC sesuai untuk operasi pemotongan yang sederhana dan berdurasi singkat. Sebaliknya, mesin CNC lebih cocok untuk operasi kompleks dan produksi dalam jumlah besar karena memerlukan waktu persiapan yang lebih lama tetapi dapat menghasilkan produk yang konsisten dan akurat.',
  },
  {
    q: 'Manakah pernyataan berikut ini berkaitan dengan gun drill yang salah?',
    answers: [
      {
        text: 'Tidak perlu menggunakan cairan pendingin selama beroperasi',
        isCorrect: true,
      },
      {
        text: 'Pengeluaran geram dilakukan oleh aliran cairan pendingin',
        isCorrect: false,
      },
      {
        text: 'Digunakan untuk membuat lubang dengan perbandingan panjang dan diameter yang tinggi',
        isCorrect: false,
      },
      {
        text: 'Cairan pendingin juga dimanfaatkan sebagai pelumas',
        isCorrect: false,
      },
      { text: 'Dapat dilakukan pada mesin bubut', isCorrect: false },
    ],
    explanation:
      'Pernyataan yang salah adalah bahwa gun drill tidak perlu menggunakan cairan pendingin selama beroperasi. Sebenarnya, cairan pendingin sangat penting dalam operasi gun drill untuk membantu pengeluaran geram, pelumasan, dan pendinginan.',
  },
  {
    q: 'Manakah pernyataan berikut ini yang tidak termasuk efek dari proses pemotongan yang menghasilkan geram kontinyu?',
    answers: [
      { text: 'Menghasilkan permukaan yang baik', isCorrect: false },
      { text: 'Mudah dalam penanganan geram', isCorrect: false },
      { text: 'Gaya pemotongan cenderung stabil', isCorrect: false },
      {
        text: 'Tidak diinginkan pada proses pemotongan otomatis',
        isCorrect: true,
      },
      {
        text: 'Vibrasi atau chatter cenderung tidak terjadi',
        isCorrect: false,
      },
    ],
    explanation:
      "Pernyataan yang tidak termasuk efek dari proses pemotongan yang menghasilkan geram kontinyu adalah 'Tidak diinginkan pada proses pemotongan otomatis'. Sebaliknya, geram kontinyu umumnya diinginkan dalam proses pemotongan otomatis karena memberikan stabilitas proses dan kualitas permukaan yang baik.",
  },
  {
    q: 'Berikut ini adalah faktor-faktor yang mempengaruhi operasi pemesinan, kecuali ...',
    answers: [
      { text: 'jumlah produk yang dibuat', isCorrect: true },
      { text: 'jenis material benda kerja', isCorrect: false },
      { text: 'kedalaman potong (depth of cut)', isCorrect: false },
      { text: 'kecepatan makan (feed)', isCorrect: false },
      { text: 'sudut pahat yang digunakan', isCorrect: false },
    ],
    explanation:
      'Jumlah produk yang dibuat tidak secara langsung mempengaruhi operasi pemesinan itu sendiri. Faktor-faktor lain seperti jenis material, kedalaman potong, kecepatan makan, dan sudut pahat memiliki pengaruh langsung pada proses pemesinan.',
  },
  {
    q: 'Operasi pemotongan berikut ini dapat dilakukan pada mesin bubut, kecuali ...',
    answers: [
      { text: 'facing', isCorrect: false },
      { text: 'joining', isCorrect: true },
      { text: 'drilling', isCorrect: false },
      { text: 'threading', isCorrect: false },
      { text: 'cutting-off', isCorrect: false },
    ],
    explanation:
      'Joining (penyambungan) bukan merupakan operasi yang biasanya dilakukan pada mesin bubut. Mesin bubut umumnya digunakan untuk operasi pemotongan seperti facing, drilling, threading, dan cutting-off.',
  },
  {
    q: 'Proses penyambungan berikut ini melibatkan deformasi plastik, kecuali ...',
    answers: [
      { text: 'riveting', isCorrect: false },
      { text: 'bolting', isCorrect: true },
      { text: 'crimping', isCorrect: false },
      { text: 'seaming', isCorrect: false },
      { text: 'metal sticthing', isCorrect: false },
    ],
    explanation:
      'Bolting (penyambungan dengan baut) tidak melibatkan deformasi plastik. Proses ini mengandalkan gaya mekanik untuk menyambung komponen tanpa mengubah bentuk material secara permanen.',
  },
  {
    q: 'Berikut ini termasuk komponen mesin bubut, kecuali ...',
    answers: [
      { text: 'chuck', isCorrect: false },
      { text: 'toolpost', isCorrect: false },
      { text: 'arbor', isCorrect: true },
      { text: 'tailstock', isCorrect: false },
      { text: 'headstock', isCorrect: false },
    ],
    explanation:
      'Arbor bukan merupakan komponen standar mesin bubut. Arbor lebih umum digunakan pada mesin frais (milling machine) untuk memegang alat potong. Komponen lain yang disebutkan (chuck, toolpost, tailstock, headstock) adalah bagian standar dari mesin bubut.',
  },
  {
    q: 'Manakah pernyataan berkaitan proses pemesinan berikut ini yang salah?',
    answers: [
      {
        text: 'Produk-produk berbentuk silindrik dibuat dengan menggunakan mesin milling',
        isCorrect: true,
      },
      {
        text: 'Proses pemesinan akan menghasilkan produk dengan akurasi dimensi dan kekasaran permukaan yang baik',
        isCorrect: false,
      },
      {
        text: 'Proses bubut menggunakan pahat bermata potong tunggal',
        isCorrect: false,
      },
      {
        text: 'Gaya pemotongan pada proses milling akan berfluktuasi',
        isCorrect: false,
      },
      {
        text: 'Proses milling dengan menggunaan pahat end-mill dilakukan selalu dalam kondisi sumbu pahat tegak lurus terhadap permukaan benda kerja',
        isCorrect: false,
      },
    ],
    explanation:
      "Pernyataan yang salah adalah 'Produk-produk berbentuk silindrik dibuat dengan menggunakan mesin milling'. Sebenarnya, produk berbentuk silindrik umumnya dibuat menggunakan mesin bubut (lathe), bukan mesin milling.",
  },
  {
    q: 'Manakah pernyataan berikut ini yang salah?',
    answers: [
      {
        text: 'Built-up edge adalah sebagian geram yang terpatri pada permukaaan pahat dan mengeras.',
        isCorrect: false,
      },
      {
        text: 'Built-up edge mempengaruhi kondisi pemotongan karena mengubah sudut pahat',
        isCorrect: false,
      },
      {
        text: 'Built-up edge dapat melindungi pahat dari keausan',
        isCorrect: false,
      },
      {
        text: 'Built-up edge dapat menyebabkan permukaan benda kerja terpotong menjadi halus',
        isCorrect: true,
      },
      {
        text: 'Built-up edge terjadi pada kecepatan pemotongan yang rendah',
        isCorrect: false,
      },
    ],
    explanation:
      "Pernyataan yang salah adalah 'Built-up edge dapat menyebabkan permukaan benda kerja terpotong menjadi halus'. Sebaliknya, built-up edge umumnya menyebabkan permukaan benda kerja menjadi kasar karena mengganggu proses pemotongan yang halus.",
  },
  {
    q: 'Distorsi pada pengelasan terjadi karena ...',
    answers: [
      { text: 'penggunaan panas yang berlebih', isCorrect: true },
      { text: 'pencekaman yang tidak sesuai', isCorrect: false },
      { text: 'penggunaan elektroda yang keliru', isCorrect: false },
      { text: 'oksidasi pada lasan', isCorrect: false },
      { text: 'komposisi material induk yang tidak sesuai', isCorrect: false },
    ],
    explanation:
      'Distorsi pada pengelasan terutama disebabkan oleh penggunaan panas yang berlebih. Panas yang berlebihan menyebabkan pemuaian dan penyusutan yang tidak merata pada logam, yang mengakibatkan perubahan bentuk atau distorsi pada struktur yang dilas.',
  },
  {
    q: 'Berikut ini yang merupakan bagian alat pada proses chemical-vapor deposition, kecuali ...',
    answers: [
      { text: 'carrier gases dan bed', isCorrect: false },
      { text: 'stainless steel retort', isCorrect: false },
      { text: 'graphite shelves', isCorrect: false },
      { text: 'carrier gases dan electric furnance', isCorrect: false },
      { text: 'exhaust dan exhaust scrabber', isCorrect: true },
    ],
    explanation:
      'Exhaust dan exhaust scrubber bukan merupakan bagian utama dari alat chemical vapor deposition (CVD). Komponen-komponen lain yang disebutkan seperti carrier gases, bed, stainless steel retort, graphite shelves, dan electric furnace adalah bagian integral dari sistem CVD.',
  },
  {
    q: 'Berikut ini merupakan jenis-jenis sambungan las, kecuali ...',
    answers: [
      { text: 'T joint', isCorrect: false },
      { text: 'corner joint', isCorrect: false },
      { text: 'single v-groove weld', isCorrect: false },
      { text: 'double lock seam', isCorrect: true },
      { text: 'lap joint', isCorrect: false },
    ],
    explanation:
      'Double lock seam bukan merupakan jenis sambungan las. Ini adalah jenis sambungan mekanis yang biasanya digunakan dalam pembuatan kaleng atau penutupan lembaran logam. T joint, corner joint, single v-groove weld, dan lap joint adalah jenis-jenis sambungan las yang umum.',
  },
  {
    q: 'Proses penyambungan manakah berikut ini yang dapat mencegah terjadinya korosi pada permukaan yang disambungkan?',
    answers: [
      { text: 'Riveting', isCorrect: false },
      { text: 'Bolting', isCorrect: false },
      { text: 'Welding', isCorrect: false },
      { text: 'Adhesive bonding', isCorrect: true },
      { text: 'Seaming', isCorrect: false },
    ],
    explanation:
      'Adhesive bonding dapat mencegah terjadinya korosi pada permukaan yang disambungkan karena menciptakan penghalang antara permukaan yang disambung dan lingkungan, mencegah masuknya air atau zat korosif lainnya.',
  },
  {
    q: 'Pengelasan berikut ini dapat digunakan untuk mengelas dalam berbagai macam posisi, kecuali ...',
    answers: [
      { text: 'Oxyacytelene welding', isCorrect: false },
      { text: 'Shielded metal arc welding', isCorrect: false },
      { text: 'Submerged arc welding', isCorrect: true },
      { text: 'Gas metal arc welding', isCorrect: false },
      { text: 'Gas tungsten arc welding', isCorrect: false },
    ],
    explanation:
      'Submerged arc welding umumnya terbatas pada posisi datar atau horizontal karena menggunakan flux granular yang harus tetap di atas sambungan las. Proses pengelasan lainnya yang disebutkan lebih fleksibel dan dapat digunakan dalam berbagai posisi.',
  },
  {
    q: 'Berikut ini adalah penyebab chatter pada proses bubut, kecuali ...',
    answers: [
      { text: 'benda kerja tidak dicekam secara baik', isCorrect: false },
      { text: 'struktur mesin bubut tidak kaku', isCorrect: false },
      { text: 'pahat tidak dipasang dengan baik', isCorrect: false },
      { text: 'putaran spindel terlalu rendah', isCorrect: true },
      { text: 'parameter proses tidak diatur secara baik', isCorrect: false },
    ],
    explanation:
      'Putaran spindel yang terlalu rendah umumnya tidak menyebabkan chatter. Chatter lebih sering terjadi pada kecepatan tinggi. Faktor-faktor lain seperti pencekaman yang tidak baik, struktur mesin yang tidak kaku, pemasangan pahat yang tidak tepat, dan pengaturan parameter yang tidak sesuai dapat menyebabkan chatter.',
  },
  {
    q: 'Manakah proses berikut ini yang cocok digunakan untuk mengerjakan material logam dan non-logam?',
    answers: [
      { text: 'Electro-chemical machining', isCorrect: false },
      { text: 'Wire EDM', isCorrect: false },
      { text: 'Abrasive water jet machining', isCorrect: true },
      { text: 'Water jet machining', isCorrect: false },
      { text: 'Chemical machining', isCorrect: false },
    ],
    explanation:
      'Abrasive water jet machining dapat digunakan untuk memotong berbagai jenis material, termasuk logam dan non-logam, karena menggunakan campuran air bertekanan tinggi dan partikel abrasif.',
  },
  {
    q: 'Dalam cylindrical grinder, berapa banyak center yang diperlukan untuk menahan benda kerja?',
    answers: [
      { text: 'Tidak ada', isCorrect: false },
      { text: 'Satu', isCorrect: false },
      { text: 'Dua', isCorrect: true },
      { text: 'Tiga', isCorrect: false },
      { text: 'Empat', isCorrect: false },
    ],
    explanation:
      'Cylindrical grinder umumnya menggunakan dua center untuk menahan benda kerja, satu di headstock dan satu di tailstock, memungkinkan rotasi dan penggerindaan yang presisi.',
  },
  {
    q: 'Berikut ini merupakan operasi thermal spray, kecuali ...',
    answers: [
      { text: 'semprotan air bertekanan dan bersuhu tinggi', isCorrect: true },
      { text: 'semprotan kawat termal', isCorrect: false },
      { text: 'semprotan plasma', isCorrect: false },
      { text: 'semprotan bubuk logam termal', isCorrect: false },
      { text: 'semprotan plasma vakum', isCorrect: false },
    ],
    explanation:
      'Semprotan air bertekanan dan bersuhu tinggi bukan merupakan operasi thermal spray. Thermal spray melibatkan penyemprotan material yang dipanaskan, bukan air.',
  },
  {
    q: 'Manakah parameter berikut ini yang mempengaruhi kekasaran permukaan pada proses permesinan?',
    answers: [
      { text: 'Radius ujung pahat', isCorrect: true },
      { text: 'Panjang mata potong', isCorrect: false },
      { text: 'Diameter benda kerja', isCorrect: false },
      { text: 'Kedalaman potong', isCorrect: false },
      { text: 'Panjang pemotongan', isCorrect: false },
    ],
    explanation:
      'Radius ujung pahat memiliki pengaruh langsung pada kekasaran permukaan hasil pemesinan. Semakin kecil radius ujung pahat, semakin halus permukaan yang dihasilkan.',
  },
  {
    q: 'Manakah pernyataan berikut ini berkaitan dengan centerless grinding yang tidak benar?',
    answers: [
      { text: 'Mempunyai laju produksi tinggi', isCorrect: false },
      {
        text: 'Mempunyai kesulitan saat digunakan untuk benda kerja yang berdiameter berbeda-beda',
        isCorrect: false,
      },
      { text: 'Mudah dalam pengoperasian', isCorrect: false },
      {
        text: 'Memerlukan operator dengan keterampilan tinggi',
        isCorrect: true,
      },
      {
        text: 'Tidak memerlukan penyetelan benda kerja pada sumbunya',
        isCorrect: false,
      },
    ],
    explanation:
      'Pernyataan yang tidak benar adalah bahwa centerless grinding memerlukan operator dengan keterampilan tinggi. Sebenarnya, centerless grinding relatif mudah dioperasikan dan tidak memerlukan keterampilan tinggi dari operator.',
  },
  {
    q: 'Berikut ini bukan kelebihan dari friction welding ...',
    answers: [
      { text: 'tidak menghasilkan asap', isCorrect: false },
      { text: 'sedikit percikan api yang terbentuk', isCorrect: false },
      { text: 'dapat diterapkan untuk semua jenis logam', isCorrect: true },
      { text: 'dapat dilakukan secara otomatis', isCorrect: false },
      { text: 'waktu proses yang lebih efisien', isCorrect: false },
    ],
    explanation:
      'Friction welding tidak dapat diterapkan untuk semua jenis logam. Beberapa logam yang sangat keras atau getas mungkin tidak cocok untuk proses ini.',
  },
  {
    q: 'Berikut ini merupakan karakteristik dari cutting fluid yang baik, kecuali ...',
    answers: [
      { text: 'stabil pada semua kondisi', isCorrect: false },
      { text: 'mudah menguap', isCorrect: true },
      {
        text: 'mempunyai titik nyala (flash point) yang tinggi',
        isCorrect: false,
      },
      { text: 'tidak mudah bereaksi dengan lingkungan', isCorrect: false },
      { text: 'mempunyai viskositas yang rendah', isCorrect: false },
    ],
    explanation:
      'Cutting fluid yang baik seharusnya tidak mudah menguap. Penguapan yang cepat akan mengurangi efektivitas pendinginan dan pelumasan, serta meningkatkan konsumsi cutting fluid.',
  },
  {
    q: 'Berikut ini adalah tujuan penggunaan cutting fluid, kecuali ...',
    answers: [
      { text: 'menurunkan gaya pemotongan', isCorrect: false },
      { text: 'menurunkan gesekan yang terjadi', isCorrect: false },
      { text: 'membersihkan geram', isCorrect: false },
      { text: 'menurunkan laju keausan pahat', isCorrect: false },
      {
        text: 'menghindari distorsi benda kerja karena termal',
        isCorrect: true,
      },
    ],
    explanation:
      'Menghindari distorsi benda kerja karena termal bukan tujuan utama penggunaan cutting fluid. Cutting fluid terutama digunakan untuk pendinginan, pelumasan, dan pembersihan geram.',
  },
  {
    q: 'Manakah pernyataan berikut ini berkaitan dengan material pahat yang benar?',
    answers: [
      {
        text: 'High-speed steels mempunyai ketahanan aus yang lebih tinggi dibandingkan dengan carbide',
        isCorrect: false,
      },
      {
        text: 'Material pahat yang mempunyai hot hardness yang tinggi berarti kekerasan material tersebut akan menurun pada temperatur tinggi',
        isCorrect: false,
      },
      { text: 'Ketahanan aus sejalan dengan hot hardness', isCorrect: true },
      {
        text: 'Diamond mempunyai kekuatan impak yang terbaik di antara material pahat yang ada',
        isCorrect: false,
      },
      {
        text: 'Kecepatan potong yang tertinggi bisa didapat dengan penggunaan pahat high-speed steels',
        isCorrect: false,
      },
    ],
    explanation:
      'Ketahanan aus memang sejalan dengan hot hardness. Material pahat dengan hot hardness yang tinggi akan mempertahankan kekerasannya pada suhu tinggi, yang berarti juga memiliki ketahanan aus yang lebih baik.',
  },
  {
    q: 'Manakah parameter berikut ini yang tidak mempengaruhi umur pahat?',
    answers: [
      { text: 'Temperatur lingkungan', isCorrect: true },
      { text: 'Kedalaman potong', isCorrect: false },
      { text: 'Kecepatan makan', isCorrect: false },
      { text: 'Material pahat', isCorrect: false },
      { text: 'Material benda kerja', isCorrect: false },
    ],
    explanation:
      'Temperatur lingkungan umumnya tidak memiliki pengaruh signifikan terhadap umur pahat dibandingkan dengan parameter lain seperti kedalaman potong, kecepatan makan, material pahat, dan material benda kerja.',
  },
  {
    q: 'Beberapa tipe dasar pahat milling ialah sebagai berikut, kecuali ...',
    answers: [
      { text: 'Hobbing cutter', isCorrect: false },
      { text: 'Reamer cutter', isCorrect: true },
      { text: 'Gear cutter', isCorrect: false },
      { text: 'Face cutter', isCorrect: false },
      { text: 'Ball-end cutter', isCorrect: false },
    ],
    explanation:
      'Reamer cutter bukan merupakan tipe dasar pahat milling. Reamer digunakan untuk menghaluskan dan memperbesar lubang yang sudah ada, bukan untuk operasi milling.',
  },
  {
    q: 'Cutting fluid pada proses pemesinan berfungsi sebagai berikut, kecuali ...',
    answers: [
      { text: 'memperpanjang umur pahat', isCorrect: false },
      { text: 'memperbaiki kualitas permukaan benda kerja', isCorrect: false },
      { text: 'mencegah oksidasi', isCorrect: false },
      { text: 'menjaga temperatur pahat', isCorrect: false },
      { text: 'menurunkan gaya pemotongan', isCorrect: true },
    ],
    explanation:
      'Menurunkan gaya pemotongan bukan fungsi utama cutting fluid. Cutting fluid terutama berfungsi untuk pendinginan, pelumasan, dan pembersihan geram, yang secara tidak langsung dapat mempengaruhi gaya pemotongan, tetapi bukan tujuan utamanya.',
  },
  {
    q: 'Manakah pernyataan berikut ini yang benar?',
    answers: [
      {
        text: 'Pada proses pengelasan, material yang disambungkan tidak harus serupa',
        isCorrect: true,
      },
      {
        text: 'Sambungan soldering lebih kuat dibandingkan pengelasan',
        isCorrect: false,
      },
      {
        text: 'Brazing dan soldering harus menggunakan filler metal',
        isCorrect: false,
      },
      {
        text: 'Brazing dilakukan pada temperatur lebih rendah dibandingkan soldering',
        isCorrect: false,
      },
      {
        text: 'Proses brazing cocok digunakan untuk menyambungkan komponen elektronik',
        isCorrect: false,
      },
    ],
    explanation:
      'Pada proses pengelasan, material yang disambungkan memang tidak harus serupa. Pengelasan dapat dilakukan antara material yang berbeda, meskipun ada batasan dan pertimbangan tertentu.',
  },
  {
    q: 'Manakah proses berikut ini yang melibatkan gaya pemotongan?',
    answers: [
      { text: 'Chemical machining', isCorrect: false },
      { text: 'Electro-chemical machining', isCorrect: false },
      { text: 'Electrical discharge machining', isCorrect: false },
      { text: 'Laser beam machining', isCorrect: false },
      { text: 'Precision machining', isCorrect: true },
    ],
    explanation:
      'Precision machining melibatkan gaya pemotongan karena menggunakan alat potong mekanis untuk memotong material. Proses lain yang disebutkan menggunakan metode non-mekanis seperti reaksi kimia, erosi elektrik, atau energi panas.',
  },
  {
    q: 'Alur dovetail dibuat dengan menggunakan pahat?',
    answers: [
      { text: 'Plain milling cutter', isCorrect: false },
      { text: 'Half side milling cutter', isCorrect: false },
      { text: 'Face milling cutter', isCorrect: false },
      { text: 'Dove tail milling cutter', isCorrect: true },
      { text: 'T-slot milling cutter', isCorrect: false },
    ],
    explanation:
      'Alur dovetail dibuat menggunakan dove tail milling cutter, yang dirancang khusus untuk membuat alur berbentuk ekor burung merpati (dovetail).',
  },
  {
    q: 'Proses penyambungan manakah yang dapat digunakan untuk melapisi suatu logam dengan lembarang logam yang lain?',
    answers: [
      { text: 'Flash welding', isCorrect: false },
      { text: 'Termit welding', isCorrect: false },
      { text: 'Friction welding', isCorrect: false },
      { text: 'Explosion welding', isCorrect: true },
      { text: 'Tungsten insert gas welding', isCorrect: false },
    ],
    explanation:
      'Explosion welding dapat digunakan untuk melapisi satu logam dengan lembaran logam lain. Proses ini menggunakan energi ledakan untuk menggabungkan dua logam yang berbeda.',
  },
  {
    q: 'Manakah yang termasuk proses pemesinan?',
    answers: [
      { text: 'Thermoforming', isCorrect: false },
      { text: 'Slitting', isCorrect: false },
      { text: 'Facing', isCorrect: true },
      { text: 'Brazing', isCorrect: false },
      { text: 'Rolling', isCorrect: false },
    ],
    explanation:
      'Facing adalah proses pemesinan yang dilakukan pada mesin bubut untuk membuat permukaan rata pada ujung benda kerja.',
  },
  {
    q: 'Manakah material berikut ini yang tidak cocok digerinda?',
    answers: [
      { text: 'Aluminium', isCorrect: true },
      { text: 'Baja karbon tinggi', isCorrect: false },
      { text: 'Baja perkakas', isCorrect: false },
      { text: 'Tungsten', isCorrect: false },
      { text: 'Titanium', isCorrect: false },
    ],
    explanation:
      'Aluminium umumnya tidak cocok untuk digerinda karena sifatnya yang lunak dan mudah menempel pada roda gerinda, yang dapat menyebabkan penyumbatan pada roda gerinda.',
  },
  {
    q: 'Dalam proses pengelasan fusi, dua komponen induk disambungkan dengan cara ...',
    answers: [
      {
        text: 'memanaskan komponen di atas temperatur leleh',
        isCorrect: false,
      },
      {
        text: 'memanaskan komponen di bawah temperatur leleh',
        isCorrect: false,
      },
      {
        text: 'memanaskan komponen hingga mencapai temperatur leleh',
        isCorrect: true,
      },
      {
        text: 'memanaskan komponen hingga mencapai temperatur Curie',
        isCorrect: false,
      },
      {
        text: 'memanasikan komponen hingga mencapai temperatur rekristalisasi',
        isCorrect: false,
      },
    ],
    explanation:
      'Dalam pengelasan fusi, komponen induk dipanaskan hingga mencapai temperatur leleh, memungkinkan material untuk menyatu saat didinginkan.',
  },
  {
    q: 'Berikut ini termasuk proses penyambungan, kecuali ...',
    answers: [
      { text: 'fastening', isCorrect: false },
      { text: 'bending', isCorrect: true },
      { text: 'stitching', isCorrect: false },
      { text: 'welding', isCorrect: false },
      { text: 'riveting', isCorrect: false },
    ],
    explanation:
      'Bending (pembengkokan) bukan merupakan proses penyambungan, melainkan proses pembentukan logam.',
  },
  {
    q: 'Manakah pernyataan berikut ini berkaitan dengan Microelectromechanical Devices and Systems (MEMS) yang keliru?',
    answers: [
      {
        text: 'Produk airbag sensor diproduksi dengan metode ini',
        isCorrect: false,
      },
      { text: 'Produksi dilakukan secara batch', isCorrect: false },
      {
        text: 'Menggunakan mechanical microstructure, microsensor, microactuator dan microelectronic',
        isCorrect: false,
      },
      {
        text: 'Cocok digunakan untuk produk-produk khusus yang dibuat secara terbatas',
        isCorrect: true,
      },
      {
        text: 'Menggunakan proses pemesinan mikro pada bahan silikon',
        isCorrect: false,
      },
    ],
    explanation:
      'MEMS sebenarnya cocok untuk produksi massal, bukan untuk produk-produk khusus yang dibuat secara terbatas.',
  },
  {
    q: 'Manakah pernyataan terkait machining center berikut ini yang benar?',
    answers: [
      { text: 'Hanya memiliki satu buah spindle', isCorrect: false },
      {
        text: 'Membutuhkan lantai yang lebih luas dibandingkan mesin perkakas biasa',
        isCorrect: false,
      },
      {
        text: 'Tidak memerlukan penulisan program terlebih dahulu agar dioperasikan',
        isCorrect: false,
      },
      {
        text: 'Dalam satu saat terdapat lebih dari satu pahat memotong benda kerja',
        isCorrect: false,
      },
      {
        text: 'Pallet berfungsi untuk mengubah permukaan benda kerja yang akan dikerjakan',
        isCorrect: true,
      },
    ],
    explanation:
      'Pallet pada machining center memang berfungsi untuk mengubah permukaan benda kerja yang akan dikerjakan, memungkinkan pengerjaan multi-sisi tanpa perlu melepas benda kerja.',
  },
  {
    q: 'Manakah proses penyambungan berikut ini yang tidak memerlukan filler metal?',
    answers: [
      { text: 'Arc welding', isCorrect: false },
      { text: 'Brazing', isCorrect: false },
      { text: 'Gas welding', isCorrect: false },
      { text: 'Resistance welding', isCorrect: true },
      { text: 'Electro-slag welding', isCorrect: false },
    ],
    explanation:
      'Resistance welding tidak memerlukan filler metal karena proses ini mengandalkan panas yang dihasilkan dari resistansi listrik untuk menyambung logam.',
  },
  {
    q: 'Berikut ini termasuk cylindrical grinding, kecuali ...',
    answers: [
      { text: 'centerless grinding', isCorrect: false },
      { text: 'outside diameter grinding', isCorrect: false },
      { text: 'plunge grinding', isCorrect: false },
      { text: 'inside diameter grinding', isCorrect: false },
      { text: 'surface grinding', isCorrect: true },
    ],
    explanation:
      'Surface grinding bukan termasuk cylindrical grinding karena digunakan untuk menggerinda permukaan datar, bukan permukaan silindris.',
  },
  {
    q: 'Manakah pernyataan berikut ini berkaitan dengan ring-compression test yang salah?',
    answers: [
      {
        text: 'Menggunakan chart yang dapat digunakan untuk semua jenis material',
        isCorrect: true,
      },
      {
        text: 'Memerlukan penghitungan persentase pengurangan ketebalan ring',
        isCorrect: false,
      },
      {
        text: 'Persentase reduksi diameter dalam ring dapat bernilai negatif',
        isCorrect: false,
      },
      {
        text: 'Diameter dalam ring dapat tidak berubah selama pengujian',
        isCorrect: false,
      },
      {
        text: 'Ketebalan ring pasti mengalami perubahan menjadi lebih tipis',
        isCorrect: false,
      },
    ],
    explanation:
      'Ring-compression test tidak menggunakan chart yang dapat digunakan untuk semua jenis material. Setiap material memiliki karakteristik deformasi yang berbeda.',
  },
  {
    q: 'Berdasarkan hubungan energi panas yang diserap dengan kecepatan potong pada proses pemesinan, pernyataan manakah berikut ini yang salah?',
    answers: [
      {
        text: 'Sebagian besar panas yang timbul pada proses pemesinan akan diteruskan kepada geram (chip)',
        isCorrect: false,
      },
      {
        text: 'Semakin tinggi kecepatan potong, panas yang diserap oleh geram semakin besar',
        isCorrect: false,
      },
      {
        text: 'Semakin tinggi kecepatan potong, panas yang diserap oleh benda kerja akan cenderung menurun',
        isCorrect: false,
      },
      {
        text: 'Semakin tinggi kecepatan potong, panas yang diserap oleh pahat (tool) akan cenderung menaik',
        isCorrect: true,
      },
      {
        text: 'Benda kerja akan menyerap panas paling tinggi pada saat kecepatan potong rendah',
        isCorrect: false,
      },
    ],
    explanation:
      'Pernyataan yang salah adalah bahwa panas yang diserap oleh pahat akan cenderung menaik dengan kecepatan potong yang lebih tinggi. Sebenarnya, pada kecepatan potong tinggi, sebagian besar panas akan terbawa oleh geram, mengurangi panas yang diserap oleh pahat.',
  },
  {
    q: 'Berikut ini pernyataan yang benar berkaitan dengan proses honing adalah ...',
    answers: [
      { text: 'untuk memperkecil diameter poros', isCorrect: false },
      { text: 'untuk membuat lubang', isCorrect: false },
      {
        text: 'untuk menghasilkan permukaan yang presisi pada permukaan luar silinder',
        isCorrect: false,
      },
      { text: 'untuk menghaluskan permukaan dalam lubang', isCorrect: true },
      {
        text: 'untuk menghilangkan tegangan sisa pada permukaan lubang',
        isCorrect: false,
      },
    ],
    explanation:
      'Honing digunakan untuk menghaluskan permukaan dalam lubang, meningkatkan kehalusan dan presisi geometri lubang.',
  },
  {
    q: 'Manakah pernyataan berikut ini yang benar berkaitan dengan ring-compression test?',
    answers: [
      {
        text: 'Digunakan untuk mengukur kekasaran permukaan benda kerja',
        isCorrect: false,
      },
      {
        text: 'Digunakan untuk menguji kekuatan material terhadap penekanan',
        isCorrect: false,
      },
      {
        text: 'Digunakan untuk menentukan koefisien gesek akibat pelumasan',
        isCorrect: true,
      },
      {
        text: 'Diameter internal yang mengecil menunjukkan penurunan gesekan',
        isCorrect: false,
      },
      {
        text: 'Ukuran sebenarnya dari diameter luar ring merupakan hal penting',
        isCorrect: false,
      },
    ],
    explanation:
      'Ring-compression test digunakan untuk menentukan koefisien gesek akibat pelumasan dalam proses pembentukan logam.',
  },
  {
    q: 'Manakah proses pengelasan berikut ini yang cocok digunakan untuk menyambungkan pelat logam dengan hasil lasan terletak di bagian dalam (tidak terlihat)?',
    answers: [
      { text: 'SMAW', isCorrect: false },
      { text: 'Spot welding', isCorrect: true },
      { text: 'Friction stir welding', isCorrect: false },
      { text: 'Flash welding', isCorrect: false },
      { text: 'Explosion welding', isCorrect: false },
    ],
    explanation:
      'Spot welding cocok untuk menyambungkan pelat logam dengan hasil lasan yang terletak di bagian dalam dan tidak terlihat dari luar.',
  },
  {
    q: 'Pengelasan resistansi menggunakan elektroda yang berbahan ...',
    answers: [
      { text: 'baja karbon tinggi', isCorrect: false },
      { text: 'baja tahan karat', isCorrect: false },
      { text: 'tembaga', isCorrect: true },
      { text: 'magnesium', isCorrect: false },
      { text: 'tungsten', isCorrect: false },
    ],
    explanation:
      'Pengelasan resistansi umumnya menggunakan elektroda berbahan tembaga karena konduktivitas listriknya yang tinggi dan ketahanannya terhadap deformasi pada suhu tinggi.',
  },
  {
    q: 'Ciri khas proses pemesinan adalah menghasilkan geram (chips). Manakah pernyataan berkaitan dengan geram berikut ini yang salah?',
    answers: [
      {
        text: 'Material bersifat ulet akan menghasilkan geram yang kontinyu',
        isCorrect: false,
      },
      {
        text: 'Geram kontinyu cenderung tidak akan menyebabkan gaya pemotongan menjadi berfluktuasi',
        isCorrect: false,
      },
      {
        text: 'Geram kontinyu akan menyulitkan dalam proses pemesinan',
        isCorrect: true,
      },
      {
        text: 'Geram yang diskontinyu bisa menyebabkan getaran dan chatter',
        isCorrect: false,
      },
      {
        text: 'Geram kontinyu lebih disukai daripada geram diskontinyu',
        isCorrect: false,
      },
    ],
    explanation:
      'Pernyataan yang salah adalah bahwa geram kontinyu akan menyulitkan proses pemesinan. Sebenarnya, geram kontinyu umumnya lebih disukai karena menghasilkan permukaan yang lebih halus dan gaya pemotongan yang lebih stabil.',
  },
  {
    q: 'Manakah proses penyambungan berikut ini yang melibatkan pencairan logam?',
    answers: [
      { text: 'Friction welding', isCorrect: false },
      { text: 'Explosion welding', isCorrect: false },
      { text: 'Resistance welding', isCorrect: false },
      { text: 'Metal inert gas welding', isCorrect: true },
      { text: 'Roll bonding', isCorrect: false },
    ],
    explanation:
      'Metal inert gas welding (MIG) melibatkan pencairan logam pengisi dan sebagian logam dasar untuk membentuk sambungan las.',
  },
  {
    q: 'Proses-proses berikut ini cenderung digunakan untuk mengerjakan produk secara dua dimensi, kecuali ...',
    answers: [
      { text: 'EDM', isCorrect: true },
      { text: 'Wire EDM', isCorrect: false },
      { text: 'Water jet machining', isCorrect: false },
      { text: 'Abrasive water jet machining', isCorrect: false },
      { text: 'laser cutting', isCorrect: false },
    ],
    explanation:
      'EDM (Electrical Discharge Machining) dapat digunakan untuk mengerjakan produk secara tiga dimensi, tidak terbatas pada pengerjaan dua dimensi seperti proses lainnya yang disebutkan.',
  },
  {
    q: 'Manakah material berikut ini yang cocok digerinda?',
    answers: [
      { text: 'Tembaga', isCorrect: false },
      { text: 'Kuningan', isCorrect: false },
      { text: 'Besi cor', isCorrect: true },
      { text: 'Plastik', isCorrect: false },
      { text: 'Perunggu', isCorrect: false },
    ],
    explanation:
      'Besi cor adalah material yang cocok untuk digerinda karena sifatnya yang keras dan getas, memungkinkan penggerindaan yang efektif tanpa menyebabkan penyumbatan pada roda gerinda.',
  },
  {
    q: 'Manakah pernyataan berikut berkaitan dengan pengelasan oksiasitelin yang tidak benar?',
    answers: [
      {
        text: 'Neutral flame terjadi bila proporsi gas oksigen sama dengan gas asitelin',
        isCorrect: false,
      },
      {
        text: 'Oxidizing flame terjadi bila terjadi kelebihan gas asitelin',
        isCorrect: true,
      },
      {
        text: 'Carburizing flame terjadi bila terjadi kelebihan gas oksigen',
        isCorrect: false,
      },
      {
        text: 'Oxidizing flame digunakan untuk mengelas baja',
        isCorrect: false,
      },
      {
        text: 'Soldering, brazing dan flame hardening menggunakan carburizing flame',
        isCorrect: false,
      },
    ],
    explanation:
      'Pernyataan yang tidak benar adalah bahwa oxidizing flame terjadi bila terjadi kelebihan gas asitelin. Sebenarnya, oxidizing flame terjadi ketika ada kelebihan oksigen, bukan kelebihan asitelin.',
  },
  {
    q: 'Berikut ini merupakan fungsi dari proses dressing pada pengerindaan, kecuali ...',
    answers: [
      {
        text: 'mengembalikan cutting action dari batu gerinda',
        isCorrect: false,
      },
      {
        text: 'membuang geram-geram yang menyumbat batu gerinda',
        isCorrect: false,
      },
      { text: 'membuang partikel abrasif yang sudah aus', isCorrect: false },
      {
        text: 'memunculkan partikel abrasif baru yang tajam',
        isCorrect: false,
      },
      {
        text: 'membentuk kembali batu gerinda agar konsentrik dengan sumbunya',
        isCorrect: true,
      },
    ],
    explanation:
      'Membentuk kembali batu gerinda agar konsentrik dengan sumbunya bukan merupakan fungsi utama dari proses dressing. Dressing terutama bertujuan untuk memperbarui permukaan batu gerinda dan mempertahankan efektivitas pemotongannya.',
  },
  {
    q: 'Resistansi terbesar pada resistance welding terjadi pada ...',
    answers: [
      {
        text: 'pertemuan antara elektroda dengan benda kerja',
        isCorrect: false,
      },
      { text: 'pertemuan antara permukaan benda kerja', isCorrect: true },
      { text: 'kedua elektroda', isCorrect: false },
      { text: 'benda kerja', isCorrect: false },
      {
        text: 'semua bagian diatur agar mempunyai resistansi yang sama besar',
        isCorrect: false,
      },
    ],
    explanation:
      'Resistansi terbesar pada resistance welding terjadi pada pertemuan antara permukaan benda kerja, karena di sini terjadi kontak yang tidak sempurna dan menghasilkan panas yang diperlukan untuk pengelasan.',
  },
  {
    q: 'Tujuan dari proses burnishing adalah ...',
    answers: [
      { text: 'untuk meningkatkan kekerasan benda kerja', isCorrect: false },
      {
        text: 'pada komponen poros untuk menghilangkan tegangan sisa',
        isCorrect: false,
      },
      { text: 'untuk meningkatkan umur fatigue', isCorrect: true },
      { text: 'untuk mengubah sifat material menjadi getas', isCorrect: false },
      { text: 'untuk menaikkan keuletan benda kerja', isCorrect: false },
    ],
    explanation:
      'Proses burnishing bertujuan untuk meningkatkan umur fatigue komponen dengan cara menghaluskan permukaan dan menciptakan tegangan sisa tekan pada permukaan.',
  },
  {
    q: 'Kekuatan sambungan brazing tergantung pada ...',
    answers: [
      { text: 'jarak antar komponen yang disambungkan', isCorrect: false },
      { text: 'temperatur lingkungan operasi', isCorrect: false },
      { text: 'desain sambungan', isCorrect: false },
      { text: 'kualitas sambungan', isCorrect: false },
      { text: 'semua yang disebutkan', isCorrect: true },
    ],
    explanation:
      'Kekuatan sambungan brazing tergantung pada semua faktor yang disebutkan, termasuk jarak antar komponen, temperatur operasi, desain sambungan, dan kualitas sambungan.',
  },
  {
    q: 'Manakah proses berikut ini yang cocok digunakan untuk mengerjakan lembaran plastik tipis?',
    answers: [
      { text: 'Water jet machining', isCorrect: false },
      { text: 'Wire EDM', isCorrect: false },
      { text: 'Chemical machining', isCorrect: false },
      { text: 'Laser beam machining', isCorrect: true },
      { text: 'Electro-chemical grinding', isCorrect: false },
    ],
    explanation:
      'Laser beam machining cocok untuk mengerjakan lembaran plastik tipis karena dapat memberikan pemotongan yang presisi tanpa kontak fisik dan dengan panas yang terkontrol.',
  },
  {
    q: 'Manakah sifat material untuk pahat yang tidak diperlukan?',
    answers: [
      { text: 'Hot hardness', isCorrect: false },
      { text: 'Low friction', isCorrect: false },
      { text: 'Chemical stability', isCorrect: false },
      { text: 'Wear resistance', isCorrect: false },
      { text: 'Density', isCorrect: true },
    ],
    explanation:
      'Density (kepadatan) bukan merupakan sifat utama yang diperlukan untuk material pahat. Sifat-sifat lain seperti hot hardness, low friction, chemical stability, dan wear resistance lebih penting untuk performa pahat.',
  },
  {
    q: 'Proses penyambungan manakah berikut ini yang mengubah sifat-sifat material benda kerja?',
    answers: [
      { text: 'Adhesive bonding', isCorrect: false },
      { text: 'Bolting', isCorrect: false },
      { text: 'Riveting', isCorrect: false },
      { text: 'Soldering', isCorrect: false },
      { text: 'Welding', isCorrect: true },
    ],
    explanation:
      'Welding (pengelasan) dapat mengubah sifat-sifat material benda kerja karena melibatkan pemanasan dan pendinginan yang dapat mempengaruhi struktur mikro dan sifat mekanik material.',
  },
  {
    q: 'Proses manakah berikut ini yang cocok digunakan untuk melakukan proses finishing pada rongga cetakan dies atau mold?',
    answers: [
      { text: 'Abrasive water jet machining', isCorrect: false },
      { text: 'Chemical machining', isCorrect: false },
      { text: 'Wire EDM', isCorrect: false },
      { text: 'Laser beam machining', isCorrect: false },
      { text: 'EDM', isCorrect: true },
    ],
    explanation:
      'EDM (Electrical Discharge Machining) cocok untuk proses finishing pada rongga cetakan dies atau mold karena dapat menghasilkan bentuk yang kompleks dengan ketelitian tinggi pada material keras.',
  },
  {
    q: 'Berikut ini yang bukan merupakan proses pemesinan non-konvensional adalah ...',
    answers: [
      { text: 'electrical discharge machining', isCorrect: false },
      { text: 'electron beam machining', isCorrect: false },
      { text: 'laser-beam machining', isCorrect: false },
      { text: 'waterjet machining', isCorrect: false },
      { text: 'honing', isCorrect: true },
    ],
    explanation:
      'Honing adalah proses pemesinan konvensional yang digunakan untuk menghaluskan permukaan dalam lubang, sementara proses lainnya termasuk dalam kategori pemesinan non-konvensional.',
  },
  {
    q: 'Operasi berikut ini dapat dilakukan pada machining center, kecuali ...',
    answers: [
      { text: 'sintering', isCorrect: true },
      { text: 'turning', isCorrect: false },
      { text: 'boring', isCorrect: false },
      { text: 'threading', isCorrect: false },
      { text: 'drilling', isCorrect: false },
    ],
    explanation:
      'Sintering bukan merupakan operasi yang dapat dilakukan pada machining center. Sintering adalah proses pemadatan dan pembentukan material bubuk dengan panas, yang biasanya dilakukan dalam furnace khusus.',
  },
  {
    q: 'Manakah berikut ini yang akan memberikan sambungan terkuat bagi sambungan brazing?',
    answers: [
      { text: 'Butt', isCorrect: false },
      { text: 'Scraft (inclined)', isCorrect: true },
      {
        text: 'Semua jenis sambungan akan memberikan kekuatan yang setara',
        isCorrect: false,
      },
      { text: 'Lap', isCorrect: false },
      {
        text: 'Kekuatan sambungan tergantung pada faktor lain',
        isCorrect: false,
      },
    ],
    explanation:
      'Sambungan scraft (inclined) umumnya memberikan kekuatan terbesar dalam brazing karena menyediakan area permukaan yang lebih besar untuk ikatan dan distribusi tegangan yang lebih baik.',
  },
  {
    q: 'Bentuk manakah berikut ini yang tidak dapat dikerjakan dengan menggunakan mesin milling?',
    answers: [
      { text: 'Roda gigi', isCorrect: false },
      { text: 'Benda persegi', isCorrect: false },
      { text: 'T-slot', isCorrect: false },
      { text: 'Ulir', isCorrect: false },
      { text: 'Permukaan rata dan datar', isCorrect: false },
    ],
    explanation:
      'Semua bentuk yang disebutkan dapat dikerjakan dengan menggunakan mesin milling. Mesin milling sangat serbaguna dan dapat menghasilkan berbagai bentuk termasuk roda gigi, benda persegi, T-slot, ulir, dan permukaan rata.',
  },
  {
    q: 'Berikut ini merupakan karakterisitik proses electrical-discharge machining, kecuali ...',
    answers: [
      {
        text: 'dapat membentuk dan memotong bagian yang kompleks dari material yang keras',
        isCorrect: false,
      },
      {
        text: 'dapat digunakan untuk melakukan proses penggerindaan',
        isCorrect: false,
      },
      { text: 'peralatan mesin mahal', isCorrect: false },
      { text: 'mempunyai laju penghasilan geram yang tinggi', isCorrect: true },
      { text: 'memerlukan cairan dielekrik', isCorrect: false },
    ],
    explanation:
      'EDM tidak memiliki laju penghasilan geram yang tinggi. Sebaliknya, EDM umumnya memiliki laju pembuangan material yang relatif lambat dibandingkan dengan proses pemesinan konvensional.',
  },
  {
    q: 'Berikut ini termasuk penyambungan tetap kecuali ...',
    answers: [
      { text: 'Bolting', isCorrect: true },
      { text: 'Soldering', isCorrect: false },
      { text: 'Brazing', isCorrect: false },
      { text: 'Welding', isCorrect: false },
      { text: 'Riveting', isCorrect: false },
    ],
    explanation:
      'Bolting adalah penyambungan tidak tetap atau dapat dibongkar, sementara soldering, brazing, welding, dan riveting termasuk dalam kategori penyambungan tetap.',
  },
  {
    q: 'Urutan yang benar ketahanan aus material pahat dari tinggi ke rendah adalah ...',
    answers: [
      {
        text: 'high-speed steel - carbides - coated carbides',
        isCorrect: false,
      },
      {
        text: 'carbides - coated carbides - high-speed steel',
        isCorrect: false,
      },
      {
        text: 'diamond - high-speed steel - coated carbides',
        isCorrect: false,
      },
      {
        text: 'diamond - coated carbides - high-speed steel',
        isCorrect: false,
      },
      { text: 'diamond - carbides - coated carbides', isCorrect: true },
    ],
    explanation:
      'Urutan ketahanan aus material pahat dari tinggi ke rendah yang benar adalah diamond (intan), carbides (karbida), coated carbides (karbida berlapis), dan high-speed steel (baja kecepatan tinggi).',
  },
  {
    q: 'Chatter dalam mesin perkakas terjadi karena ...',
    answers: [
      { text: 'free vibrations', isCorrect: false },
      { text: 'random vibrations', isCorrect: false },
      { text: 'forced vibrations', isCorrect: false },
      { text: 'self-excited vibrations', isCorrect: true },
      { text: 'cutting vibrations', isCorrect: false },
    ],
    explanation:
      'Chatter dalam mesin perkakas umumnya disebabkan oleh self-excited vibrations, yang terjadi karena interaksi antara proses pemotongan dan dinamika struktur mesin.',
  },
  {
    q: 'Manakah proses berikut ini yang tidak termasuk proses penyambungan?',
    answers: [
      { text: 'Seaming', isCorrect: false },
      { text: 'Soldering', isCorrect: false },
      { text: 'Brazing', isCorrect: false },
      { text: 'Stitching', isCorrect: false },
      { text: 'Bukan salah satu dari yang disebutkan', isCorrect: true },
    ],
    explanation:
      'Semua proses yang disebutkan (seaming, soldering, brazing, dan stitching) adalah metode penyambungan. Tidak ada pilihan yang bukan merupakan proses penyambungan.',
  },
  {
    q: 'Bagaimanakah cara meningkatkan laju penghasilan geram pada abrasive jet machining?',
    answers: [
      { text: 'Menurunkan laju aliran partikel abrasif', isCorrect: false },
      { text: 'Menaikkan ukuran partikel abrasif', isCorrect: false },
      { text: 'Menurunkan ukuran partikel abrasif', isCorrect: false },
      {
        text: 'Menaikkan laju aliran partikel abrasif sampai batas tertentu',
        isCorrect: true,
      },
      { text: 'Memperbesar diameter nozzle', isCorrect: false },
    ],
    explanation:
      'Menaikkan laju aliran partikel abrasif sampai batas tertentu akan meningkatkan laju penghasilan geram pada abrasive jet machining, karena lebih banyak partikel yang berinteraksi dengan benda kerja per satuan waktu.',
  },
  {
    q: 'Keausan pahat akan menyebabkan hal-hal berikut ini, kecuali ...',
    answers: [
      { text: 'kenaikan gaya pemotongan', isCorrect: false },
      { text: 'kenaikan temperatur pemotongan', isCorrect: false },
      { text: 'permukaan yang kasar', isCorrect: false },
      { text: 'menaikkan akurasi dimensi produk akhir', isCorrect: true },
      {
        text: 'dapat diperlambat dengan penggunaan pelumas dan cairan pendingin',
        isCorrect: false,
      },
    ],
    explanation:
      'Keausan pahat tidak akan menaikkan akurasi dimensi produk akhir. Sebaliknya, keausan pahat biasanya menurunkan akurasi dimensi.',
  },
  {
    q: 'Manakah pernyataan berikut ini yang salah berkaitan dengan machining center?',
    answers: [
      { text: 'Dioperasikan secara otomatis', isCorrect: false },
      { text: 'Dapat menurunkan waktu non produktif', isCorrect: false },
      { text: 'Menggunakan perkakas potong lebih dari satu', isCorrect: false },
      {
        text: 'Menggunakan pallet untuk memegang benda kerja',
        isCorrect: false,
      },
      {
        text: 'Memerlukan operator dengan keterampilan tinggi',
        isCorrect: true,
      },
    ],
    explanation:
      'Pernyataan yang salah adalah bahwa machining center memerlukan operator dengan keterampilan tinggi. Sebenarnya, machining center dirancang untuk mengurangi ketergantungan pada keterampilan operator tinggi melalui otomatisasi dan kontrol komputer.',
  },
  {
    q: 'Berikut ini merupakan penyambungan secara mekanik (mechanical fastening), kecuali ...',
    answers: [
      { text: 'seaming', isCorrect: false },
      { text: 'soldering', isCorrect: true },
      { text: 'crimping', isCorrect: false },
      { text: 'stitching', isCorrect: false },
      { text: 'riveting', isCorrect: false },
    ],
    explanation:
      'Soldering bukan merupakan penyambungan secara mekanik, melainkan proses penyambungan dengan menggunakan logam pengisi yang dilelehkan.',
  },
  {
    q: 'Manakah proses berikut ini yang menjadi awal dan akhir pembuatan lubang?',
    answers: [
      { text: 'Reaming - drilling', isCorrect: false },
      { text: 'Drilling - center drilling', isCorrect: false },
      { text: 'Step drilling - drilling', isCorrect: false },
      { text: 'Center drilling - reaming', isCorrect: true },
      { text: 'Reaming - core drilling', isCorrect: false },
    ],
    explanation:
      'Proses pembuatan lubang biasanya dimulai dengan center drilling untuk membuat titik awal yang akurat, dan diakhiri dengan reaming untuk menghaluskan dan mempresisikan lubang.',
  },
  {
    q: 'Manakah pernyataan berikut ini berkaitan dengan ultrasonic machining yang tidak benar?',
    answers: [
      {
        text: 'Cocok digunakan untuk mengerjakan material yang keras dan getas',
        isCorrect: false,
      },
      {
        text: 'Menggunakan tools yang digetarkan untuk menggetarkan partikel abrasif yang dicampurkan dalam slury',
        isCorrect: false,
      },
      {
        text: 'Produk terbentuk karena microchipping dan erosi',
        isCorrect: false,
      },
      {
        text: 'Menggunakan form tool yang dibuat dari material keras',
        isCorrect: false,
      },
      {
        text: 'Slurry berfungsi juga sebagai pembawa geram yang terbentuk',
        isCorrect: true,
      },
    ],
    explanation:
      'Semua pernyataan benar kecuali yang terakhir. Slurry dalam ultrasonic machining memang berfungsi sebagai pembawa partikel abrasif dan juga membawa geram yang terbentuk.',
  },
  {
    q: 'Manakah pernyataan berikut ini yang benar?',
    answers: [
      {
        text: 'Ongkos pemesinan akan meningkat seiring dengan peningkatan kecepatan potong',
        isCorrect: false,
      },
      {
        text: 'Ongkos pahat akan meningkat seiring dengan peningkatan kecepatan potong',
        isCorrect: true,
      },
      {
        text: 'Peningkatan kecepatan potong akan menurunkan ongkos penggantian pahat',
        isCorrect: false,
      },
      {
        text: 'Ongkos total terendah akan terjadi pada kecepatan potong tertinggi',
        isCorrect: false,
      },
      {
        text: 'Ongkos total terendah akan terjadi pada kondisi ongkos penggantian pahat paling sedikit',
        isCorrect: false,
      },
    ],
    explanation:
      'Ongkos pahat akan meningkat seiring dengan peningkatan kecepatan potong karena pahat akan lebih cepat aus pada kecepatan potong yang lebih tinggi, memerlukan penggantian yang lebih sering.',
  },
  {
    q: 'Manakah sifat yang tidak diperlukan untuk material pahat?',
    answers: [
      { text: 'Thermal shock resistance', isCorrect: false },
      { text: 'Hot hardness', isCorrect: false },
      { text: 'Kekuatan impak', isCorrect: false },
      { text: 'Ketahanan aus', isCorrect: false },
      { text: 'Modulus elastisitas', isCorrect: true },
    ],
    explanation:
      'Modulus elastisitas tidak secara langsung diperlukan untuk material pahat. Sifat-sifat lain seperti thermal shock resistance, hot hardness, kekuatan impak, dan ketahanan aus lebih kritis untuk performa pahat.',
  },
  {
    q: 'Manakah yang termasuk proses abrasive cutting?',
    answers: [
      { text: 'Sintering', isCorrect: false },
      { text: 'Milling', isCorrect: false },
      { text: 'Drilling', isCorrect: false },
      { text: 'Facing', isCorrect: false },
      { text: 'Grinding', isCorrect: true },
    ],
    explanation:
      'Grinding adalah proses abrasive cutting yang menggunakan partikel abrasif untuk memotong atau mengikis material.',
  },
  {
    q: 'Manakah pernyataan berkaitan dengan proses penyambungan yang tidak benar?',
    answers: [
      {
        text: 'Penyambungan sementara diperlukan untuk keperluan perawatan',
        isCorrect: false,
      },
      { text: 'Meningkatkan integritas dan kekuatan produk', isCorrect: false },
      {
        text: 'Lebih ekonomis bila produk dibuat dengan menggunakan proses penyambungan',
        isCorrect: false,
      },
      {
        text: 'Penyambungan diperlukan karena menggunakan material yang berbeda jenis atau dimensi',
        isCorrect: false,
      },
      { text: 'Kemudahan dalam transportasi', isCorrect: true },
    ],
    explanation:
      'Kemudahan dalam transportasi bukan alasan utama untuk melakukan penyambungan. Penyambungan lebih sering dilakukan untuk alasan-alasan lain seperti perawatan, kekuatan produk, ekonomi, atau penggunaan material yang berbeda.',
  },
  {
    q: 'Berikut ini merupakan cutting fluid yang direkomendasikan pada proses gerinda, kecuali ...',
    answers: [
      { text: 'emulsion', isCorrect: false },
      { text: 'fatty oil', isCorrect: false },
      { text: 'acid fluids', isCorrect: true },
      { text: 'chemicals synthetics', isCorrect: false },
      { text: 'mineral oil', isCorrect: false },
    ],
    explanation:
      'Acid fluids tidak direkomendasikan sebagai cutting fluid pada proses gerinda karena dapat menyebabkan korosi pada mesin dan benda kerja.',
  },
  {
    q: 'Manakah yang menjadi pembeda antara fusion welding dengan solid state welding?',
    answers: [
      { text: 'Penggunaan panas', isCorrect: false },
      { text: 'Penggunaan filler metal', isCorrect: false },
      {
        text: 'Memerlukan pembersihan permukaan benda kerja yang akan disambung',
        isCorrect: false,
      },
      { text: 'Digunakan untuk menyambungkan logam', isCorrect: false },
      { text: 'Dapat dioperasikan secara otomatis', isCorrect: false },
    ],
    explanation:
      'Pembeda utama antara fusion welding dan solid state welding adalah bahwa fusion welding melibatkan pelelehan logam yang disambung, sementara solid state welding tidak melibatkan pelelehan. Namun, pilihan jawaban yang tepat untuk ini tidak tersedia dalam opsi yang diberikan.',
  },
];

async function main() {
  const t = await prisma.test.create({
    data: {
      title: 'UAS Prosman 2021',
      description: 'Ujian Akhir Semester Proses Manufaktur 2021',
      startTime: new Date(),
      endTime: new Date('2025-01-31T23:59:59'),
    },
  });

  questions.map(async (question) => {
    const q = await prisma.question.create({
      data: {
        text: question.q,
        explanation: question.explanation,
        type: 'SC',
        points: 1,
        testId: t.id,
      },
    });

    question.answers.map(async (answer) => {
      await prisma.answer.create({
        data: {
          text: answer.text,
          isCorrect: answer.isCorrect,
          questionId: q.id,
        },
      });

      console.log(`Answer ${answer.text} created`);
    });

    console.log(`Question ${q.id} created`);
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
