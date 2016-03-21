from flaskcbv.url import Url, make_urls
from views import cabinetView, personView

namespases = make_urls(
    Url('', cabinetView(), name="index"),
    Url('person/', personView(), name="person"),
)


