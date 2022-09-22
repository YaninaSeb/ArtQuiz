export interface IQuiz {
 [key: string]:  IQuizItem[],
}
export interface IQuizItem {
  author: string,
  name: string,
  year: string,
  imageNum: string,
  isPassed: boolean,
  artistsQuizAnswer: boolean,
  picturesQuizAnswer: boolean
}

export const artQuizData: IQuiz =  {
  '1': [
    {
      "author": "Эдгар Дега",
      "name": "Голубые танцовщицы",
      "year": "1897",
      "imageNum": "1",
      "isPassed": false,
      "artistsQuizAnswer": true,
      "picturesQuizAnswer": false
    },
    {
      "author": "Веронезе",
      "name": "Пир в доме Левия",
      "year": "1563",
      "imageNum": "2",
      "isPassed": false,
      "artistsQuizAnswer": true,
      "picturesQuizAnswer": false
    },
    {
      "author": "Илья Репин",
      "name": "Иван Грозный и сын его Иван",
      "year": "1885",
      "imageNum": "3",
      "isPassed": false,
      "artistsQuizAnswer": true,
      "picturesQuizAnswer": false
    },
    {
      "author": "Константин Маковский",
      "name": "Портрет графини Софьи",
      "year": "1890",
      "imageNum": "4",
      "isPassed": false,
      "artistsQuizAnswer": true,
      "picturesQuizAnswer": false
    },
    {
      "author": "Василий Перов",
      "name": "Приезд гувернантки в купеческий дом",
      "year": "1866",
      "imageNum": "5",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
    {
      "author": "Микеланджело",
      "name": "Сотворение Адама",
      "year": "1511",
      "imageNum": "6",
      "isPassed": false,
      "artistsQuizAnswer": true,
      "picturesQuizAnswer": false
    },
    {
      "author": "Пьер Огюст Ренуар",
      "name": "Прогулка в Булонском лесу",
      "year": "1873",
      "imageNum": "7",
      "isPassed": false,
      "artistsQuizAnswer": true,
      "picturesQuizAnswer": false
    },
    {
      "author": "Ян Вермеер",
      "name": "Хозяйка и служанка",
      "year": "1667",
      "imageNum": "8",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
    {
      "author": "Василий Поленов",
      "name": "Московский дворик",
      "year": "1877",
      "imageNum": "9",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
    {
      "author": "Фёдор Васильев",
      "name": "Мокрый луг",
      "year": "1872",
      "imageNum": "10",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
  ],
  '2': [
    {
      "author": "Илья Репин",
      "name": "Проводы новобранца",
      "year": "1879",
      "imageNum": "11",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
    {
      "author": "Веронезе",
      "name": "Марс и Венера",
      "year": "1560",
      "imageNum": "12",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
    {
      "author": "Виктор Васнецов",
      "name": "Аленушка",
      "year": "1881",
      "imageNum": "13",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
    {
      "author": "Клод Лоррен",
      "name": "Отплытие святой Урсулы",
      "year": "1614",
      "imageNum": "14",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
    {
      "author": "Илья Репин",
      "name": "Вечорници",
      "year": "1881",
      "imageNum": "15",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
    {
      "author": "Жан Фрагонар",
      "name": "Качели",
      "year": "1767",
      "imageNum": "16",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
    {
      "author": "Архип Куинджи",
      "name": "Берёзовая роща",
      "year": "1879",
      "imageNum": "17",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
    {
      "author": "Пабло Пикассо",
      "name": "Герника",
      "year": "1937",
      "imageNum": "18",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
    {
      "author": "Поль Гоген",
      "name": "Откуда мы пришли? Кто мы? Куда мы идём?",
      "year": "1898",
      "imageNum": "19",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
    {
      "author": "Бартоломео Мурильо",
      "name": "Мадонна с четками",
      "year": "1655",
      "imageNum": "20",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    }
  ],
  '3': [
    {
      "author": "Питер Брейгель",
      "name": "Фламандские пословицы",
      "year": "1559",
      "imageNum": "21",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
    {
      "author": "Ян ван Эйк",
      "name": "Портрет четы Арнольфини",
      "year": "1434",
      "imageNum": "22",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
    {
      "author": "Питер Брейгель",
      "name": "Избиение младенцев",
      "year": "1567",
      "imageNum": "23",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
    {
      "author": "Константин Маковский",
      "name": "Дети, бегущие от грозы",
      "year": "1872",
      "imageNum": "24",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
    {
      "author": "Рембрандт",
      "name": "Даная",
      "year": "1647",
      "imageNum": "25",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
    {
      "author": "Рафаэль",
      "name": "Мадонна в кресле",
      "year": "1514",
      "imageNum": "26",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
    {
      "author": "Василий Суриков",
      "name": "Взятие снежного городка",
      "year": "1891",
      "imageNum": "27",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
    {
      "author": "Иван Шишкин",
      "name": "Ручей в берёзовом лесу",
      "year": "1883",
      "imageNum": "28",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
    {
      "author": "Василий Суриков",
      "name": "Покорение Сибири Ермаком Тимофеевичем",
      "year": "1895",
      "imageNum": "29",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    },
    {
      "author": "Владимир Боровиковский",
      "name": "Портрет Лопухиной",
      "year": "1797",
      "imageNum": "30",
      "isPassed": false,
      "artistsQuizAnswer": false,
      "picturesQuizAnswer": false
    }
  ],
}