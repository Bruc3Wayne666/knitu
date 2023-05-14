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
                    require('./lessons/1/3/3.1.png'),
                    require('./lessons/1/3/3.2.png'),
                    require('./lessons/1/3/3.3.png')
                ]
            },
            4: {
                title: 'Аналитическая геометрия на плоскости кривые II порядка',
                images: [
                    require('./lessons/1/4/4.1.png'),
                    require('./lessons/1/4/4.2.png'),
                    require('./lessons/1/4/4.3.png'),
                    require('./lessons/1/4/4.4.png'),
                    require('./lessons/1/4/4.5.png')
                ]
            },
            5: {
                title: 'Аналитическая геометрия в пространстве поверхности II порядка',
                images: [
                    require('./lessons/1/5/5.1.png'),
                    require('./lessons/1/5/5.2.png'),
                    require('./lessons/1/5/5.3.png'),
                    require('./lessons/1/5/5.4.png'),
                    require('./lessons/1/5/5.5.png')
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
                    require('./lessons/2/6/6.1.png'),
                    require('./lessons/2/6/6.2.png'),
                    require('./lessons/2/6/6.3.png'),
                    require('./lessons/2/6/6.4.png')
                ]
            },
            7: {
                title: 'Пределы функции одной переменной',
                images: [
                    require('./lessons/2/7/7.1.png'),
                    require('./lessons/2/7/7.2.png'),
                    require('./lessons/2/7/7.3.png'),
                    require('./lessons/2/7/7.4.png'),
                    require('./lessons/2/7/7.5.png'),
                    require('./lessons/2/7/7.6.png'),
                    require('./lessons/2/7/7.7.png')
                ]
            },
            8: {
                title: 'Непрерывные функции одной переменной (НФОП)',
                images: [
                    require('./lessons/2/8/8.1.png'),
                    require('./lessons/2/8/8.2.png'),
                    require('./lessons/2/8/8.3.png'),
                    require('./lessons/2/8/8.4.png')
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
                    require('./lessons/3/9/9.1.png'),
                    require('./lessons/3/9/9.2.png'),
                    require('./lessons/3/9/9.3.png'),
                    require('./lessons/3/9/9.4.png'),
                    require('./lessons/3/9/9.5.png'),
                    require('./lessons/3/9/9.6.png'),
                    require('./lessons/3/9/9.7.png'),
                    require('./lessons/3/9/9.8.png'),
                    require('./lessons/3/9/9.9.png')
                ]
            },
            10: {
                title: 'Исследование функций и построение графиков',
                images: [
                    require('./lessons/3/10/10.1.png'),
                    require('./lessons/3/10/10.2.png'),
                    require('./lessons/3/10/10.3.png'),
                    require('./lessons/3/10/10.4.png'),
                    require('./lessons/3/10/10.5.png'),
                    require('./lessons/3/10/10.6.png'),
                    require('./lessons/3/10/10.7.png'),
                    require('./lessons/3/10/10.8.png')
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
                    require('./lessons/4/11/11.1.png'),
                    require('./lessons/4/11/11.2.png'),
                    require('./lessons/4/11/11.3.png'),
                    require('./lessons/4/11/11.4.png'),
                    require('./lessons/4/11/11.5.png'),
                    require('./lessons/4/11/11.6.png'),
                    require('./lessons/4/11/11.7.png')
                ]
            },
            12: {
                title: 'Приложения дифференциального исчисления функций нескольких переменных',
                images: [
                    require('./lessons/4/12/12.1.png'),
                    require('./lessons/4/12/12.2.png'),
                    require('./lessons/4/12/12.3.png')
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
                    require('./lessons/5/13/13.1.png'),
                    require('./lessons/5/13/13.2.png'),
                    require('./lessons/5/13/13.3.png'),
                    require('./lessons/5/13/13.4.png'),
                    require('./lessons/5/13/13.5.png')
                ]
            },
            14: {
                title: 'функции комплексного переменного (ФКП)',
                images: [
                    require('./lessons/5/14/14.1.png'),
                    require('./lessons/5/14/14.2.png'),
                    require('./lessons/5/14/14.3.png'),
                    require('./lessons/5/14/14.4.png')
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
                    require('./lessons/6/15/15.1.png'),
                    require('./lessons/6/15/15.2.png'),
                    require('./lessons/6/15/15.3.png'),
                    require('./lessons/6/15/15.4.png')
                ]
            },
            16: {
                title: 'Классы интегрируемых функций',
                images: [
                    require('./lessons/6/16/16.1.png'),
                    require('./lessons/6/16/16.2.png'),
                    require('./lessons/6/16/16.3.png')
                ]
            },
            17: {
                title: 'Определенный интеграл (О.И.)',
                images: [
                    require('./lessons/6/17/17.1.png'),
                    require('./lessons/6/17/17.2.png'),
                    require('./lessons/6/17/17.3.png'),
                    require('./lessons/6/17/17.4.png'),
                    require('./lessons/6/17/17.5.png')
                ]
            },
            18: {
                title: 'Геометрические приложения определенного интеграла',
                images: [
                    require('./lessons/6/18/18.1.png'),
                    require('./lessons/6/18/18.2.png'),
                    require('./lessons/6/18/18.3.png')
                ]
            },
            19: {
                title: 'Элементы теории функций и функционального анализа',
                images: [
                    require('./lessons/6/19/19.1.png'),
                    require('./lessons/6/19/19.2.png'),
                    require('./lessons/6/19/19.3.png')
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
                    require('./lessons/7/20/20.1.png'),
                    require('./lessons/7/20/20.2.png'),
                    require('./lessons/7/20/20.3.png'),
                    require('./lessons/7/20/20.4.png'),
                    require('./lessons/7/20/20.5.png')
                ]
            },
            21: {
                title: 'Обыкновенные дифференциальные уравнения II порядка',
                images: [
                    require('./lessons/7/21/21.1.png'),
                    require('./lessons/7/21/21.2.png'),
                    require('./lessons/7/21/21.3.png')
                ]
            },
            22: {
                title: 'Понятие о решении ОДУ высших порядков и систем дифференциальных уравнений',
                images: [
                    require('./lessons/7/22/22.1.png'),
                    require('./lessons/7/22/22.2.png'),
                    require('./lessons/7/22/22.3.png')
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
                    require('./lessons/8/23/23.1.png'),
                    require('./lessons/8/23/23.2.png'),
                    require('./lessons/8/23/23.3.png'),
                    require('./lessons/8/23/23.4.png'),
                    require('./lessons/8/23/23.5.png')
                ]
            },
            24: {
                title: 'Тройные n-кратные интегралы',
                images: [
                    require('./lessons/8/24/24.1.png'),
                    require('./lessons/8/24/24.2.png'),
                    require('./lessons/8/24/24.3.png'),
                    require('./lessons/8/24/24.4.png')
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
                    require('./lessons/9/25/25.1.png'),
                    require('./lessons/9/25/25.2.png'),
                    require('./lessons/9/25/25.3.png')
                ]
            },
            26: {
                title: 'Криволинейный интеграл по координатам (КИ II рода)',
                images: [
                    require('./lessons/9/26/26.1.png'),
                    require('./lessons/9/26/26.2.png'),
                    require('./lessons/9/26/26.3.png'),
                    require('./lessons/9/26/26.4.png'),
                    require('./lessons/9/26/26.5.png'),
                    require('./lessons/9/26/26.6.png'),
                    require('./lessons/9/26/26.7.png'),
                    require('./lessons/9/26/26.8.png')
                ]
            },
            27: {
                title: 'Поверхностные интегралы ',
                images: [
                    require('./lessons/9/27/27.1.png'),
                    require('./lessons/9/27/27.2.png'),
                    require('./lessons/9/27/27.3.png'),
                    require('./lessons/9/27/27.4.png'),
                    require('./lessons/9/27/27.5.png')
                ]
            },
            28: {
                title: 'Скалярное и векторное поля',
                images: [
                    require('./lessons/9/28/28.1.png'),
                    require('./lessons/9/28/28.2.png')
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
                    require('./lessons/10/29/29.1.png'),
                    require('./lessons/10/29/29.2.png'),
                    require('./lessons/10/29/29.3.png'),
                    require('./lessons/10/29/29.4.png'),
                    require('./lessons/10/29/29.5.png'),
                    require('./lessons/10/29/29.6.png')
                ]
            },
            30: {
                title: 'Степенные ряды',
                images: [
                    require('./lessons/10/30/30.1.png'),
                    require('./lessons/10/30/30.2.png'),
                    require('./lessons/10/30/30.3.png'),
                    require('./lessons/10/30/30.4.png'),
                    require('./lessons/10/30/30.5.png'),
                    require('./lessons/10/30/30.6.png'),
                    require('./lessons/10/30/30.7.png')
                ]
            },
            31: {
                title: 'Ряды Фурье',
                images: [
                    require('./lessons/10/31/31.1.png'),
                    require('./lessons/10/31/31.2.png'),
                    require('./lessons/10/31/31.3.png'),
                    require('./lessons/10/31/31.4.png'),
                    require('./lessons/10/31/31.5.png')
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
                    require('./lessons/11/32/32.1.png'),
                    require('./lessons/11/32/32.2.png'),
                ]
            },
            33: {
                title: 'Методы решения уравнений математической физики',
                images: [
                    require('./lessons/11/33/33.1.png'),
                    require('./lessons/11/33/33.2.png'),
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
                    require('./lessons/12/34/34.1.png'),
                    require('./lessons/12/34/34.2.png'),
                    require('./lessons/12/34/34.3.png'),
                    require('./lessons/12/34/34.4.png'),
                    require('./lessons/12/34/34.5.png')
                ]
            }
        }
    }
}

