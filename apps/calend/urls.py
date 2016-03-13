from flaskcbv.url import Url, make_urls
from views import indexView, calendView, calendDataView

namespases = make_urls(
    Url('', indexView(), name="index"),
    Url('/', calendView(), name="calend"),
    Url('/data/', calendDataView(), name="calenddata"),
)


