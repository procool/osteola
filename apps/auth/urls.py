from flaskcbv.url import Url, make_urls
from views import indexView, expressauthView, regView, repairView

namespases = make_urls(
    Url('', indexView(), name="index"),
    Url('expressauth/', expressauthView(), name="expressauth"),
    Url('reg/', regView(), name="reg"),
    Url('repair/', repairView(), name="repair"),
)


