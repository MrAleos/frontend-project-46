### Hexlet tests and linter status:
[![Actions Status](https://github.com/MrAleos/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/MrAleos/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/d236bc01ce572a9f7733/maintainability)](https://codeclimate.com/github/MrAleos/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d236bc01ce572a9f7733/test_coverage)](https://codeclimate.com/github/MrAleos/frontend-project-46/test_coverage)
[![Node CI](https://github.com/MrAleos/frontend-project-46/actions/workflows/myTest.yml/badge.svg)](https://github.com/MrAleos/frontend-project-46/actions/workflows/myTest.yml)


# Generate Difference
Educational project from the Hexlet course that calculates the difference in the structure of two files. Supported file formats: JSON, YAML, YML. Supported output formats for displaying the differences: stylish, plain, JSON.

### Install:
Clone repository
```
get clone https://github.com/MrAleos/frontend-project-46.git
```

Go to the directory of project
```
cd frontend-project-46
```

Install package
```
make install
```

### System Requirements:
```
Node.js version v18.0.0
```
### How to work:
Version
```
gendiff -V
```

Help
```
gendiff -h
```

Calculating the difference between two files:
```
gendiff <filePath1> <filePath2>
```

Calculating the difference between two files and choose format
```
gendiff --format <format> <filePath1> <filePath2>
```

### genDiff Relavite and Absolute Paths Demo:
[![asciicast](https://asciinema.org/a/MYjiivm45Q09hSqVGakbsC8gz.svg)](https://asciinema.org/a/MYjiivm45Q09hSqVGakbsC8gz)

### genDiff File formats Demo:
[![asciicast](https://asciinema.org/a/x9WhwA6N8M9RMkqelBIfhEOZg.svg)](https://asciinema.org/a/x9WhwA6N8M9RMkqelBIfhEOZg)

### genDiff Stylish Demo:
[![asciicast](https://asciinema.org/a/Ty6sdBIwYriln64dT4yQSaobh.svg)](https://asciinema.org/a/Ty6sdBIwYriln64dT4yQSaobh)

### genDiff Plain Demo:
[![asciicast](https://asciinema.org/a/Ft97ptZZRCw6NfThTWLTV1EJM.svg)](https://asciinema.org/a/Ft97ptZZRCw6NfThTWLTV1EJM)

### genDiff Json Demo:
[![asciicast](https://asciinema.org/a/spB2wAH8a7nqfWxsJf8cY2wX4.svg)](https://asciinema.org/a/spB2wAH8a7nqfWxsJf8cY2wX4)