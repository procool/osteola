FLASKCONFIG = 'flaskconfig'

APPLICATIONS = (
    'auth',
    'cabinet',
    'calend',
    'contentloader', 
    'doctors',
    'main', 
    'map', 
)

DEFAULT_HEADERS = {
    'server' : 'my WEB Server',
}

try:
    from local import *
except Exception as err:
    pass
