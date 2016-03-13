from flaskcbv.url import Url, make_urls
from views import indexView, mainView

namespases = make_urls(
    Url('', indexView(), name="index"),
    Url('main/', mainView(), name="main"),
)


