import os
import time

class log():
    def __init__(self, log_path, log_name):
        self.name = log_name
        self.log_path = os.path.join(log_path, f'{log_name}.log')
        self.type = {0: 'INFO', 1: 'WARNING', 2: 'ERROR', 3: 'FATAL'}
        self.color_type = {0: '', 1: '\033[0;30;43m', 2: '\033[0;37;41m', 3: '\033[0;37;41m'}
        self.color_end = '\033[0m'
        self.time_color = '\x1B[3m'
        self.time_color_end = '\x1B[0m'
        self.max_type_length = 16

        if os.path.exists(self.log_path):
            pass
        else:
            with open(self.log_path, 'w') as f:
                pass
        self.add_log(f'Start to Log "{log_name}" !!!')

    def get_time(self, _format='%Y-%m-%d %H:%M:%S'):
        return time.strftime(_format, time.localtime())

    def add_log(self, info:str, level:int = 0): # level: 0 普通；1 警告；2 错误；3 致命错误
        if level in self.type.keys():
            current_time = self.get_time()
            log_content = current_time + '    ' + '[' + self.type[level] + '] ' + ' ' * (self.max_type_length - len(self.type[level])) + info + '\n'
            with open(self.log_path, 'a') as f:
                f.writelines(log_content)
            self.output_log(current_time, info, level)
        else:
            self.add_log('Log Error : Not Correct Log Level.', 2)
            self.add_log(f'Log with default level: 0. Content: {info}')

    def add_log_level(self, new_level_index:int, new_level_name:str, color_type:str='\033[0;37;41m'):
        if new_level_index not in self.type.keys()and new_level_name not in self.type.values():
            if len(new_level_name) >= self.max_type_length - 4:
                self.add_log('Log Error : The new Log Name is Too Long. ', 1)

            self.type[new_level_index] = new_level_name
            self.color_type[new_level_index] = color_type
            self.add_log(f'Add New Log Level: "{new_level_name}" with Index: "{new_level_index}"')

        else:
            self.add_log('Log Warning : The new Log Level has already exists!', 2)

    def output_log(self, current_time:str, info:str, level:int):
        # 输出日期
        print(self.time_color + current_time + self.time_color_end, end='')
        print('    ', end='')
        # 输出等级
        print(self.color_type[level] + self.type[level] + self.color_end, end='')
        print(' '*(self.max_type_length-len(self.type[level])) + ' ', end='')
        # 输出内容
        print(info)
