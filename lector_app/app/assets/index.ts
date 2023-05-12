export type LessonsType = Record<number, {title: string, paragraphs: Record<number, {title: string, images: string[]}>}>

export const lessons: LessonsType = {
    1: {
        title: 'Элементы линейной алгебры и аналитической геометрии',
        paragraphs: {
            1: {
                title: 'Линейная алгебра',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            },
            2: {
                title: 'Векторная алгебра',
                images: [
                    require('./lessons/1/2/2.1.png'),
                    require('./lessons/1/2/2.2.png'),
                    require('./lessons/1/2/2.3.png'),
                    require('./lessons/1/2/2.4.png'),
                    require('./lessons/1/2/2.5.png'),
                    require('./lessons/1/2/2.6.png'),
                    require('./lessons/1/2/2.7.png'),
                    require('./lessons/1/2/2.8.png'),
                    require('./lessons/1/2/2.9.png')
                ]
            },
            3: {
                title: 'Аналитическая геометрия на плоскости и в пространстве: прямая и плоскость',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            },
            4: {
                title: 'Аналитическая геометрия на плоскости кривые II порядка',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            },
            5: {
                title: 'Аналитическая геометрия в пространстве поверхности II порядка',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            }
        }
    },
    2: {
        title: ' Элементы линейной алгебры и аналитической геометрии',
        paragraphs: {
            6: {
                title: 'Функции одной переменной. Элементарные функции',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            },
            7: {
                title: 'Пределы функции одной переменной',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            },
            8: {
                title: 'Непрерывные функции одной переменной (НФОП)',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            }
        }
    },
    3: {
        title: 'Дифференциальное исчисление функции одной переменной',
        paragraphs: {
            9: {
                title: 'Дифференцируемые функции одной переменной',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            },
            10: {
                title: 'Исследование функций и построение графиков',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            }
        }
    },
    4: {
        title: 'Дифференциальное исчисление функций нескольких переменных',
        paragraphs: {
            11: {
                title: 'Дифференцируемые функции нескольких переменных',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            },
            12: {
                title: 'Приложения дифференциального исчисления функций нескольких переменных',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            }
        }
    },
    5: {
        title: 'Комплексные числа. Функции комплексного переменного',
        paragraphs: {
            13: {
                title: 'Комплексные числа',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            },
            14: {
                title: 'функции комплексного переменного (ФКП)',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            }
        }
    },
    6: {
        title: ' Интегральное исчисление функции одной переменной',
        paragraphs: {
            15: {
                title: 'Неопределенный интеграл (н.и.)',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            },
            16: {
                title: 'Классы интегрируемых функций',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            },
            17: {
                title: 'Определенный интеграл (О.И.)',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            },
            18: {
                title: 'Геометрические приложения определенного интеграла',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            },
            19: {
                title: 'Элементы теории функций и функционального анализа',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            }
        }
    },
    7: {
        title: 'Обыкновенные дифференциальные уравнения',
        paragraphs: {
            20: {
                title: 'Обыкновенные дифференциальные уравнения',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            },
            21: {
                title: 'Обыкновенные дифференциальные уравнения II порядка',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            },
            22: {
                title: 'Понятие о решении ОДУ высших порядков и систем дифференциальных уравнений',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            }
        }
    },
    8: {
        title: 'Интегрирование функций нескольких переменных',
        paragraphs: {
            23: {
                title: 'Двойной интеграл',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            },
            24: {
                title: 'Тройные n-кратные интегралы',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            }
        }
    },
    9: {
        title: 'Векторный анализ',
        paragraphs: {
            25: {
                title: 'Криволинейный интеграл по длине дуги (I рода)',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            },
            26: {
                title: 'Криволинейный интеграл по координатам (КИ II рода)',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            },
            27: {
                title: 'Поверхностные интегралы ',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            },
            28: {
                title: 'Скалярное и векторное поля',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            }
        }
    },
    10: {
        title: 'Числовые и функциональные ряды',
        paragraphs: {
            29: {
                title: 'Числовые ряды',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            },
            30: {
                title: 'Степенные ряды',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            },
            31: {
                title: 'Ряды Фурье',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            }
        }
    },
    11: {
        title: 'Уравнения математической физики',
        paragraphs: {
            32: {
                title: 'Основные типы уравнений математической физики',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            },
            33: {
                title: 'Методы решения уравнений математической физики',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            }
        }
    },
    12: {
        title: 'Элементы теории вероятностей и математической статистики',
        paragraphs: {
            34: {
                title: 'Основные понятия теории вероятностей',
                images: [
                    require('./lessons/1/1/1.1.png'),
                    require('./lessons/1/1/1.2.png'),
                    require('./lessons/1/1/1.3.png')
                ]
            }
        }
    }
}

