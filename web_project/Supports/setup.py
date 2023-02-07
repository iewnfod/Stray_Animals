from setuptools import setup

setup (
    name = 'MuyunxiSupports',
    version = '0.1.1',
    description = '''Muyunxi's some Supports''',
    long_description = open('README.md', 'r').read(),
    include_package_data=True,
    author='Iewnfod',
    author_email='227919512@qq.com',
    maintainer='Iewnfod',
    maintainer_email='227919512@qq.com',
    license='MIT License',
    packages=['MuyunxiSupports'],
    package_dir={
        'os': 'os',
        'sys': 'sys',
        'time': 'time'
    },
    python_requires = '>=3.7',
    url=''
)
