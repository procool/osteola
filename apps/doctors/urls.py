from flaskcbv.url import Url, make_urls
from views import indexView, doctorsView

namespases = make_urls(
    Url('', indexView(), name="index"),
    Url('doctors/', doctorsView(), name="doctors"),
)


