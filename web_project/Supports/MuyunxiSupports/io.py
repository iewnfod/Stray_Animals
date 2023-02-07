# 带选项的输入
def choice_inp(message: str, choices: list):
    print()
    print(message)
    for i in range(len(choices)):
        print(f'\t{i}]: {choices[i]}')
    value = input(f'({0}-{len(choices) - 1}): ')
    try:
        value = int(value)
        if 0 <= value < len(choices):
            return value
        else:
            print(f'Please input an integer between {0} and {len(choices) - 1}')
            return choice_inp(message, choices)
    except:
        print(f'Please input an integer between {0} and {len(choices) - 1}')
        return choice_inp(message, choices)


# 多个输出目录
def multi_print(value, file_path: list = None, std_print: bool = True):
    if file_path is None:
        file_path = []

    if std_print:
        print(value)

    for i in file_path:
        with open(i, 'a') as f:
            f.write(str(value))


# 输出基础信息
def print_info(info: list, space_around=4):
    if type(info) != list:
        raise ValueError('The argument \'info\' should be a list instead of ' + str(type(info)) + ' .')
    max_length = len(str(max(info, key=lambda x: len(str(x))))) + space_around * 2
    print('=' * max_length)
    print()
    for i in info:
        print(' ' * space_around + str(i))
        print()

    print('=' * max_length)
