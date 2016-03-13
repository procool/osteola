FLASKCONFIG = 'flaskconfig'

APPLICATIONS = (
    'main', 
    'contentloader', 
    'cabinet',
    'calend',
)

DEFAULT_HEADERS = {
    'server' : 'my WEB Server',
}

try:
    from local import *
except Exception as err:
    pass
