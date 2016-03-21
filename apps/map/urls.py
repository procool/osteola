from flaskcbv.url import Url, make_urls
from views import indexView, mapView

namespases = make_urls(
    Url('', indexView(), name="index"),
    Url('map/', mapView(), name="map"),
)


